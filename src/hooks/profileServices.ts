import apiClient from "../lib/apiClient";

interface ProfileResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    profile: UserProfile; // Backend returns { profile: user } in data
  };
}

export interface UserProfile {
  fullName: string;
  lastName?: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

// ✅ Get Profile - FIXED: Added /v1 prefix and better error handling
export const getUserProfile = async (): Promise<UserProfile> => {
  try {
    console.log("Making profile request...");
    const token = localStorage.getItem("accessToken");
    console.log("Token exists:", !!token);
    
    if (!token) {
      throw new Error("No access token found");
    }
    
    const res = await apiClient.get<ProfileResponse>("/user/profile");
    console.log("Profile API response:", res.data);
    
    // Backend returns { data: { profile: user } }
    return res.data.data.profile;
  } catch (error: any) {
    console.error("Profile fetch error:", error);
    console.error("Error response:", error.response?.data);
    throw new Error(error.response?.data?.message || "Failed to fetch profile");
  }
};

// ✅ Update Profile - FIXED: Using PATCH method as per backend
export const updateUserProfile = async (data: Partial<UserProfile>): Promise<void> => {
  try {
    const token = localStorage.getItem("accessToken");
    
    if (!token) {
      throw new Error("No access token found");
    }
    
    // Use PATCH method as defined in your backend route
    await apiClient.patch("/user/profile", data);
    
    console.log("Profile updated successfully");
  } catch (error: any) {
    console.error("Profile update error:", error);
    console.error("Error details:", {
      status: error.response?.status,
      data: error.response?.data,
      url: error.config?.url,
      method: error.config?.method
    });
    throw new Error(error.response?.data?.message || "Failed to update profile");
  }
};