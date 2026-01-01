import apiClient from "../lib/apiClient";

interface AuthResponse {
  success: boolean;
  status: number;
  message: string;
  data: {
    accessToken?: string;
    refreshToken?: string;
    user?: {
      id: string;
      email: string;
      fullName: string;
    };
  };
}

// Google auth response interface
interface GoogleAuthResponse {
  success: boolean;
  status: number;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

export const register = async (
  fullName: string,
  email: string,
  password: string
): Promise<AuthResponse> => {
  try {
    const res = await apiClient.post<AuthResponse>("/user/register", {
      fullName,
      email,
      password,
    });
    return res.data; // OTP sent
  } catch (err: any) {
    const error = err.response.data;
    if (error.details && error.details.length) {
      throw new Error(error.details[0].message || "Registration failed");
    } else {
      throw new Error(error.message || "Registration failed");
    }
  }
};

export const verifyAccount = async (
  email: string,
  OTP: string
): Promise<AuthResponse> => {
  try {
    const res = await apiClient.post<AuthResponse>("/user/verify-account", {
      email,
      OTP,
    });
    return res.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Verification failed");
  }
};

export const login = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  try {
    const res = await apiClient.post<AuthResponse>("/user/login", {
      email,
      password,
    });
    return res.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

export const resendOTP = async (email: string): Promise<AuthResponse> => {
  try {
    const res = await apiClient.post<AuthResponse>("/user/resend-OTP", {
      email,
    });
    return res.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to resend OTP");
  }
};

export const forgotPassword = async (email: string): Promise<AuthResponse> => {
  try {
    const res = await apiClient.post<AuthResponse>("/user/forgot-password", {
      email,
    });
    return res.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Failed to request password reset"
    );
  }
};

export const newPassword = async (
  email: string,
  newPassword: string
): Promise<AuthResponse> => {
  try {
    // Send both field names to satisfy validation schema (newPassword) and backend controller (password)
    const res = await apiClient.post<AuthResponse>("/user/new-password", {
      email,
      newPassword,
      password: newPassword, // Add this for the backend controller
    });
    return res.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Failed to set new password"
    );
  }
};

export const googleAuth = async (
  email: string,
  fullName: string
): Promise<GoogleAuthResponse> => {
  try {
    const res = await apiClient.post<GoogleAuthResponse>("/user/google-auth", {
      email,
      fullName,
    });
    return res.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Google authentication failed"
    );
  }
};
