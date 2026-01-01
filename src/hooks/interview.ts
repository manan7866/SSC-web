// hooks/interview.ts
import apiClient from "../lib/apiClient";

// Valid enum values according to backend schema
export const AREAS_OF_IMPACT = [
  "SPRITUAL_LEADERSHIP",
  "INTEGRATIVE_HEALTH",
  "SCIENTIFIC_CONCIOUSNESS",
  "ECO_STEWARD",
  "POLICY_REFORM",
  "TRANS_EDUCATIVE",
  "ETHICAL_JUSTICE",
  "CULTURAL_EXPRESSION",
  "UNITY_DIALOGUE",
  "YOUTH_EMPOWERMENT"
] as const;

export const SPIRITUAL_ORIENTATIONS = [
  "SUFI",
  "FREE_THINKER", 
  "NOT_AFFLIATED"
] as const;

export const INTERVIEW_INTENTS = [
  "INSPIRING_OTHERS",
  "SHARE_KNOWLEDGE",
  "NETWORK",
  "PROMOTE_WORK",
  "DOCUMENT_EXPERIENCE",
  "SPIRITUAL_DIALOGUE"
] as const;

export const INTERVIEW_TIME_ZONES = [
  "MYSTIC",
  "SCIENTIFIC",
  "ACADEMIC"
] as const;

export interface CreateInterviewPayload {
  profession?: string; // Optional in backend
  institution?: string; // Optional in backend
  website?: string; // Optional in backend
  areasOfImpact?: typeof AREAS_OF_IMPACT[number][]; // Optional in backend
  spiritualOrientation?: typeof SPIRITUAL_ORIENTATIONS[number]; // Optional in backend
  publicVoice?: boolean; // Optional in backend
  interviewIntent?: typeof INTERVIEW_INTENTS[number][]; // Optional in backend
  interviewTimeZone?: typeof INTERVIEW_TIME_ZONES[number]; // Optional in backend
  scheduledAt: string; // Required in backend
  additionalNotes?: string; // Optional in backend
}

export interface Interview {
  id: string;
  profession: string;
  institution: string;
  scheduledAt: string;
  status: number;
  createdAt: string;
  // add more fields if your backend returns them
}

export const createInterview = async (data: CreateInterviewPayload) => {
  const response = await apiClient.post("/user/book-interview", data);
  return response.data;
};

export const getInterviews = async (): Promise<Interview[]> => {
  const response = await apiClient.get("/user/book-interview");
  return response.data.data;
};

export const cancelInterview = async (id: string) => {
  const response = await apiClient.delete(`/user/book-interview/${id}`);
  return response.data;
};
