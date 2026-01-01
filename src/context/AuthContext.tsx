"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { login as loginApi, googleAuth } from "@/hooks/authServices";
import { getUserProfile, UserProfile } from "@/hooks/profileServices";
import apiClient from "@/lib/apiClient";
import { useRouter } from "next/navigation";
import { getMembership, MembershipPayload } from "@/hooks/membershipServices";

interface AuthContextType {
  user: UserProfile | null;
  membership: MembershipPayload | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  googleLogin: (email: string, fullName: string) => Promise<void>;
  logout: () => void;
  fetchUserProfile: () => Promise<void>;
  setMembership: (membership: MembershipPayload | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [membership, setMembership] = useState<MembershipPayload | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  // ✅ Restore session & fetch profile + membership on mount
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      fetchUserProfile();
      fetchMembership();
    }
  }, []);

  // ✅ Fetch User Profile
  const fetchUserProfile = async () => {
    try {
      console.log("Fetching user profile...");
      const profile = await getUserProfile();
      console.log("Profile fetched:", profile);
      if (profile) {
        setUser(profile);
        console.log("User state updated successfully");
      } else {
        console.warn("Profile is null or undefined");
        setUser(null);
      }
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
      // Only set user to null if we're sure there's no valid token
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setUser(null);
      }
      throw error; // Re-throw to let the caller handle it
    }
  };

  // ✅ Fetch Membership
  const fetchMembership = async () => {
    try {
      const membershipData = await getMembership();
      setMembership(membershipData);
    } catch (err) {
      console.error("No membership found or error fetching", err);
    }
  };

  // ✅ Refresh Access Token
  const refreshAccessToken = async (): Promise<string | null> => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) return null;

    try {
      const res = await apiClient.get("/user/refresh-access-token", {
        headers: { Authorization: `Bearer ${refreshToken}` },
      });

      // Handle the response structure properly
      const newAccessToken =
        res.data?.data?.accessToken || res.data?.accessToken;
      if (newAccessToken) {
        localStorage.setItem("accessToken", newAccessToken);
        return newAccessToken;
      }
      return null;
    } catch (error) {
      console.error("Token refresh failed:", error);
      return null;
    }
  };

  // ✅ Login
  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const data = await loginApi(email, password);
      console.log("Login response:", data);

      // Check if this is a verification response (user not verified)
      if (
        data.message &&
        data.message
          .trim()
          .includes("Verification Code is sent to your email") &&
        !data.data
      ) {
        router.push(`/otp?email=${email}`);
        throw new Error(
          "Please verify your email address first. A verification link has been sent to your email."
        );
      }
      //test deployment
      // Check if the response has the expected structure with tokens
      const accessToken = data.data?.accessToken;
      const refreshToken = data.data?.refreshToken;

      console.log("Extracted tokens:", {
        accessToken: !!accessToken,
        refreshToken: !!refreshToken,
      });

      if (accessToken && refreshToken) {
        // Set tokens first
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        console.log("Tokens saved, fetching profile...");

        // Add a small delay to ensure tokens are saved
        await new Promise((resolve) => setTimeout(resolve, 100));

        // Fetch profile and membership
        try {
          await fetchUserProfile();
          console.log("Profile fetched successfully");
        } catch (profileError) {
          console.error("Profile fetch failed:", profileError);
        }

        try {
          await fetchMembership();
          console.log("Membership fetched successfully");
        } catch (membershipError) {
          console.error("Membership fetch failed:", membershipError);
        }

        console.log("Login process completed");
      } else {
        console.error("No access token or refresh token found in response");
        console.log("Response structure:", JSON.stringify(data, null, 2));
        if (
          data.message &&
          data.message === "Verification Code is sent to you email "
        ) {
          router.push(`/otp?email=${email}`);
          throw new Error(
            data.message || "Login failed. Please try again or contact support."
          );
        }
        throw new Error(
          data.message || "Login failed. Please try again or contact support."
        );
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error; // Re-throw to let the login component handle it
    } finally {
      setLoading(false);
    }
  };

  // ✅ Google Login
  const googleLogin = async (email: string, fullName: string) => {
    setLoading(true);
    try {
      const data = await googleAuth(email, fullName);
      if (data.data?.accessToken && data.data?.refreshToken) {
        localStorage.setItem("accessToken", data.data.accessToken);
        localStorage.setItem("refreshToken", data.data.refreshToken);
        await fetchUserProfile();
        await fetchMembership();
        router.push("/");
      } else {
        throw new Error("Google login failed - missing tokens");
      }
    } catch (error) {
      console.error("Google login error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // ✅ Logout
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser(null);
    setMembership(null);
    // Redirect to login page
    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        membership,
        isAuthenticated: !!user && !!localStorage.getItem("accessToken"),
        loading,
        login,
        googleLogin,
        logout,
        fetchUserProfile,
        setMembership,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
