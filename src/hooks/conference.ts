import apiClient from "../lib/apiClient";

// Presentation types supported by backend (excluding problematic panel option)
export const PRESENTATION_TYPES = [
  "ORAL",
  "POSTER",
  "WORKSHOP"
] as const;

export const TOPIC_TYPES = [
  "SUFI_PHILOSOPHY",
  "QUANTUM_CONSCIOUSNESS",
  "MYSTICAL_PRACTICES",
  "HEALING_TRANSITIONS",
  "INTER_APPROACHES",
  "OTHER"
] as const;

// --------------------
// Types
// --------------------
export interface ConferencePayload {
  institution: string; // Required by backend (even though schema is confusing)
  abstract: string; // Required - must be 3+ chars
  presentationType: typeof PRESENTATION_TYPES[number]; // Required
  topic: typeof TOPIC_TYPES[number]; // Required
}

// --------------------
// Create Conference
// --------------------
export const createConference = async (payload: ConferencePayload) => {
  try {
    // Send both camelCase and snake_case to be compatible with any backend variant
    const backendPayload = {
      institution: payload.institution,
      institution_name: payload.institution,
      abstract: payload.abstract,
      abstract_text: payload.abstract,
      presentationType: payload.presentationType,
      presentation_type: payload.presentationType,
      topic: payload.topic,
      topic_area: payload.topic
    };

    console.log("📤 Sending conference data:", backendPayload);
    const response = await apiClient.post("/user/conference", backendPayload);
    return response.data;
  } catch (error: any) {
    const details = error.response?.data?.details;
    if (Array.isArray(details)) {
      console.error("❌ Conference creation error details:", details);
    } else {
      console.error("❌ Conference creation error:", error.response?.data);
    }
    const messageFromServer = details?.map((d: any) => d?.message).filter(Boolean).join("; ") || error.response?.data?.error;
    throw new Error(messageFromServer || "Failed to create conference");
  }
};
// --------------------
// Get All Conferences for Logged-in User
// --------------------
export const getConferences = async () => {
  try {
    const response = await apiClient.get("/user/conference");
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch conferences");
  }
};

// --------------------
// Update Conference Status
// --------------------
export const updateConferenceStatus = async (id: number, status: number) => {
  try {
    const response = await apiClient.post(`/user/conference/${id}`, { status });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to update status");
  }
};