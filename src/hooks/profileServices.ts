import apiClient from "../lib/apiClient";

interface UserProfileResponse {
  success: boolean;
  status: number;
  message: string;
  data: {
    profile: {
      id: string;
      fullName: string;
      lastName: string;
      email: string;
      address: string;
      city: string;
      state: string;
      zipCode: string;
      country: string;
      phone: string;
      avatar: string;
      createdAt: string; // ISO date string - account creation date
      accountCreatedDate: string; // ISO date string - duplicate for convenience
      forms: {
        // Membership form data
        membership: {
          phone: string;
          country: string;
          role: string[]; // e.g., ["volunteer", "donor"]
          volunteerSupport: string[]; // e.g., ["spiritualProgram", "communityOutreach"]
          previousVolunteerExp: string | null;
          monthlyTime: string | null; // e.g., "5-10 hours"
          volunteerMode: string; // e.g., "IN_PERSON", "REMOTE", "HYBRID"
          donorType: string[]; // e.g., ["onetime", "monthly"]
          collaboratorIntent: string[]; // e.g., ["institutional", "cultural"]
          organization: string | null;
          intentCreation: string | null;
          additionalInfo: string | null;
          agreedToPrinciples: boolean;
          consentedToUpdates: boolean;
          createdAt: string; // ISO date string
        } | null; // null if user hasn't filled membership form

        // Donation form data
        donations: Array<{
          amount: string; // donation amount as string
          pool: string[]; // e.g., ["SUFI_SCIENCE_CENTER", "SPONSOR_SCHOLAR"]
          donorType: string; // e.g., "ONE_TIME", "MONTHLY"
          createdAt: string; // ISO date string
        }>;

        // Reviews form data
        reviews: Array<{
          id: number;
          rating: number; // 1-5 star rating
          content: string; // review text
          createdAt: string; // ISO date string
        }>;

        // Booked services form data
        bookedServices: Array<{
          id: number;
          subject: string;
          date: string; // date string
          service: string; // e.g., "ASSIST_WITH_SPRITUAL_PROGRAM", "SUPPORT_CRAFT_CULTURE"
          comment: string;
          status: number; // 0=pending, 1=completed, 2=cancelled
          createdAt: string; // ISO date string
        }>;

        // Interview form data
        interviews: Array<{
          id: number;
          profession: string;
          institution: string;
          website: string | null;
          areasOfImpact: string[]; // e.g., ["SPRITUAL_LEADERSHIP", "INTEGRATIVE_HEALTH"]
          spiritualOrientation: string | null; // e.g., "SUFI", "FREETHINKER", "NOT_AFFLIATED"
          publicVoice: boolean;
          interviewIntent: string[]; // e.g., ["INSPIRING_OTHERS", "SHARE_KNOWLEDGE"]
          status: number; // 0=pending, 1=completed, 2=cancelled
          scheduledAt: string; // ISO date string
          additionalNotes: string | null;
          createdAt: string; // ISO date string
        }>;

        // Conference registration form data
        conferences: Array<{
          id: number;
          institution: string;
          abstract: string;
          presentationType: string; // e.g., "ORAL", "POSTER", "WORKSHOP"
          topic: string; // e.g., "SUFI_PHILOSOPHY", "QUANTUM_CONSCIOUSNESS"
          status: number; // 0=pending, 1=completed, 2=cancelled
          createdAt: string; // ISO date string
        }>;

        // Sufi checklist form data
        sufiChecklist: {
          id: number;
          progress: number; // percentage (0-100)
          createdAt: string; // ISO date string
          items: Array<{
            id: number;
            section: string; // e.g., "INITIAL_ORIENTATION", "FINDING_GUIDATION"
            title: string;
            status: string; // e.g., "PENDING", "COMPLETED", "SKIPPED"
            createdAt: string; // ISO date string
          }>;
        } | null; // null if user hasn't created a checklist
      };
    };
  };
  requestInfo: {
    ip?: string;
    url: string | null;
    method: string | null;
  };
}

export interface UserProfile {
  id: string;
  fullName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
  avatar: string;
  createdAt: string; // ISO date string - account creation date
  accountCreatedDate: string; // ISO date string - duplicate for convenience
  forms: {
    // Membership form data
    membership: {
      phone: string;
      country: string;
      role: string[]; // e.g., ["volunteer", "donor"]
      volunteerSupport: string[]; // e.g., ["spiritualProgram", "communityOutreach"]
      previousVolunteerExp: string | null;
      monthlyTime: string | null; // e.g., "5-10 hours"
      volunteerMode: string; // e.g., "IN_PERSON", "REMOTE", "HYBRID"
      donorType: string[]; // e.g., ["onetime", "monthly"]
      collaboratorIntent: string[]; // e.g., ["institutional", "cultural"]
      organization: string | null;
      intentCreation: string | null;
      additionalInfo: string | null;
      agreedToPrinciples: boolean;
      consentedToUpdates: boolean;
      createdAt: string; // ISO date string
    } | null; // null if user hasn't filled membership form

    // Donation form data
    donations: Array<{
      amount: string; // donation amount as string
      pool: string[]; // e.g., ["SUFI_SCIENCE_CENTER", "SPONSOR_SCHOLAR"]
      donorType: string; // e.g., "ONE_TIME", "MONTHLY"
      createdAt: string; // ISO date string
    }>;

    // Reviews form data
    reviews: Array<{
      id: number;
      rating: number; // 1-5 star rating
      content: string; // review text
      createdAt: string; // ISO date string
    }>;

    // Booked services form data
    bookedServices: Array<{
      id: number;
      subject: string;
      date: string; // date string
      service: string; // e.g., "ASSIST_WITH_SPRITUAL_PROGRAM", "SUPPORT_CRAFT_CULTURE"
      comment: string;
      status: number; // 0=pending, 1=completed, 2=cancelled
      createdAt: string; // ISO date string
    }>;

    // Interview form data
    interviews: Array<{
      id: number;
      profession: string;
      institution: string;
      website: string | null;
      areasOfImpact: string[]; // e.g., ["SPRITUAL_LEADERSHIP", "INTEGRATIVE_HEALTH"]
      spiritualOrientation: string | null; // e.g., "SUFI", "FREETHINKER", "NOT_AFFLIATED"
      publicVoice: boolean;
      interviewIntent: string[]; // e.g., ["INSPIRING_OTHERS", "SHARE_KNOWLEDGE"]
      status: number; // 0=pending, 1=completed, 2=cancelled
      scheduledAt: string; // ISO date string
      additionalNotes: string | null;
      createdAt: string; // ISO date string
    }>;

    // Conference registration form data
    conferences: Array<{
      id: number;
      institution: string;
      abstract: string;
      presentationType: string; // e.g., "ORAL", "POSTER", "WORKSHOP"
      topic: string; // e.g., "SUFI_PHILOSOPHY", "QUANTUM_CONSCIOUSNESS"
      status: number; // 0=pending, 1=completed, 2=cancelled
      createdAt: string; // ISO date string
    }>;

    // Sufi checklist form data
    sufiChecklist: {
      id: number;
      progress: number; // percentage (0-100)
      createdAt: string; // ISO date string
      items: Array<{
        id: number;
        section: string; // e.g., "INITIAL_ORIENTATION", "FINDING_GUIDATION"
        title: string;
        status: string; // e.g., "PENDING", "COMPLETED", "SKIPPED"
        createdAt: string; // ISO date string
      }>;
    } | null; // null if user hasn't created a checklist
  };
}

// ✅ Get Profile - Updated to handle new response structure
export const getUserProfile = async (): Promise<UserProfile> => {
  try {
    console.log("Making profile request...");
    const token = localStorage.getItem("accessToken");
    console.log("Token exists:", !!token);

    if (!token) {
      throw new Error("No access token found");
    }

    const res = await apiClient.get<UserProfileResponse>("/user/profile");
    console.log("Profile API response:", res.data);

    // Extract the profile from the new response structure
    return res.data.data.profile;
  } catch (error: any) {
    console.error("Profile fetch error:", error);
    console.error("Error response:", error.response?.data);
    throw new Error(error.response?.data?.message || "Failed to fetch profile");
  }
};

// ✅ Update Profile - Updated to handle new structure
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