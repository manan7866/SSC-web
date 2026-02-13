import { uploadClient } from "@/lib/apiClient";

interface AvatarUploadResponse {
  success: boolean;
  statusCode: number;
  message: string;
  avatar: string; // Backend returns avatar directly, not in a data object
}

/**
 * Upload user avatar image
 * @param file Image file to upload (JPEG, PNG, WebP, GIF)
 * @returns Promise containing the avatar URL
 */
export const uploadAvatar = async (file: File): Promise<string> => {
  // Validate file type
  const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
  if (!validTypes.includes(file.type)) {
    throw new Error('Invalid file type. Only JPEG, PNG, WebP, and GIF images are supported.');
  }

  // Validate file size (max 5MB)
  const maxSize = 5 * 1024 * 1024; // 5MB in bytes
  if (file.size > maxSize) {
    throw new Error('File size exceeds 5MB limit.');
  }

  try {
    const formData = new FormData();
    formData.append('avatar', file);

    // Call the backend avatar upload endpoint
    // Note: API_BASE_URL already includes /v1/, so we only need the route part
    const response = await uploadClient.post<AvatarUploadResponse>('/user/profile/avatar', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data.avatar;
  } catch (error: any) {
    console.error('Avatar upload error:', error);
    
    if (error.response?.status === 404) {
      // Specific handling for 404 errors
      throw new Error('Avatar upload endpoint not found. Please check if the backend has the /user/profile/avatar endpoint enabled.');
    } else if (error.response) {
      // Server responded with error status
      const errorMessage = error.response.data?.message || 'Failed to upload avatar';
      throw new Error(errorMessage);
    } else if (error.request) {
      // Request was made but no response received
      throw new Error('Network error: Unable to reach server');
    } else {
      // Something else happened
      throw new Error(error.message || 'An error occurred during upload');
    }
  }
};

/**
 * Update user profile with avatar URL
 * @param avatarUrl URL of the uploaded avatar image
 * @returns Promise indicating success or failure
 */
export const updateAvatarInProfile = async (avatarUrl: string): Promise<void> => {
  try {
    await uploadClient.patch('/user/profile', {
      avatar: avatarUrl,
    });
  } catch (error: any) {
    console.error('Update avatar in profile error:', error);
    throw new Error(error.response?.data?.message || 'Failed to update profile with avatar');
  }
};

/**
 * Remove user avatar
 * @returns Promise indicating success or failure
 */
export const removeAvatar = async (): Promise<void> => {
  try {
    await uploadClient.patch('/user/profile', {
      avatar: null,
    });
  } catch (error: any) {
    console.error('Remove avatar error:', error);
    throw new Error(error.response?.data?.message || 'Failed to remove avatar');
  }
};