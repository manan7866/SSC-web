import apiClient from "../lib/apiClient";

// Valid enum values according to backend schema
export const CHECKLIST_SECTIONS = [
  "INITIAL_ORIENTATION",
  "FINDING_GUIDANCE",
  "PRACTICE_AND_DISCIPLINE",
  "COMMUNITY_ENGAGEMENT",
  "ADVANCED_STUDY"
] as const;

export const CHECKLIST_ITEM_STATUSES = [
  "PENDING",
  "COMPLETED",
  "SKIPPED"
] as const;

export interface ChecklistItem {
  section: typeof CHECKLIST_SECTIONS[number];
  title: string;
  status: typeof CHECKLIST_ITEM_STATUSES[number];
}

export interface CreateOrUpdateChecklistPayload {
  progress: number; // 0-100, required in backend
  items: ChecklistItem[];
}

// Create or update checklist
export const createOrUpdateChecklist = async (data: CreateOrUpdateChecklistPayload) => {
  const response = await apiClient.post("/user/sufi-checklist", data);
  return response.data;
};

// Get checklist
export const getChecklist = async () => {
  const response = await apiClient.get("/user/sufi-checklist");
  return response.data;
};
