import apiClient from "@/lib/apiClient";

// ✅ Match backend types exactly
export const ROLE_TYPES = [
  "volunteer",
  "donor", 
  "collaborator"
] as const;

export const COLLABORATOR_INTENT_TYPES = [
  "institutional",
  "cultural",
  "interfaithDialogue",
  "programCorrelation"
] as const;

export const DONOR_TYPES = [
  "onetime",
  "monthly",
  "sponsor",
  "tools",
  "remainAnonymous",
  "receiveUpdates"
] as const;

export const VOLUNTEER_SUPPORT_TYPES = [
  "spiritualProgram",
  "communityOutreach",
  "culturalPreservation",
  "digitalMedia",
  "craftsmanship"
] as const;

// ✅ Check your backend for the exact VolunteeringMode values
export const VOLUNTEER_MODE_TYPES = [
  "IN_PERSON",
  "HYBRID", 
  "REMOTE"
] as const;

// ✅ Use the exact same interface as backend
export interface MembershipPayload {
  phone: string;
  country: string;
  agreedToPrinciples: boolean;
  consentedToUpdates?: boolean;
  additionalInfo?: string;
  collaboratorIntent?: typeof COLLABORATOR_INTENT_TYPES[number][];
  donorType?: typeof DONOR_TYPES[number][];
  intentCreation?: string;
  monthlyTime?: string;
  organization?: string;
  previousVolunteerExp?: string;
  role: typeof ROLE_TYPES[number][];
  volunteerMode?: typeof VOLUNTEER_MODE_TYPES[number]; // Single value, not array
  volunteerSupport?: typeof VOLUNTEER_SUPPORT_TYPES[number][];
}

export const getMembership = async () => {
  const token = localStorage.getItem("accessToken");
  const res = await apiClient.get("/user/membership", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data?.data; // membership object
};

export const createMembership = async (data: MembershipPayload) => {
  const token = localStorage.getItem("accessToken");

  console.log("📤 Sending Membership Payload:", data);
  console.log("🔑 Token:", token);

  try {
    const res = await apiClient.post("/user/membership", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("✅ Response:", res.data);
    return res.data;
  } catch (err: any) {
    if (err.response) {
      console.error("❌ Backend responded with error:", err.response.data);
    } else {
      console.error("❌ Request error:", err.message);
    }
    throw err;
  }
};

export const updateMembership = async (data: Partial<MembershipPayload>) => {
  const token = localStorage.getItem("accessToken");
  const res = await apiClient.patch("/user/membership", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const deleteMembership = async () => {
  const token = localStorage.getItem("accessToken");
  const res = await apiClient.delete("/user/membership", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
