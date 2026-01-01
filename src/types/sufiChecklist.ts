export enum ChecklistItemStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  IN_PROGRESS = "IN_PROGRESS"
}

export interface ChecklistItem {
  id?: string;
  title: string;
  description?: string;
  status: ChecklistItemStatus;
  section: ChecklistSection;
  order?: number;
  createdAt?: string;
  updatedAt?: string;
}

export enum ChecklistSection {
  INITIAL_ORIENTATION = "INITIAL_ORIENTATION",
  FINDING_GUIDANCE = "FINDING_GUIDANCE",
  ESTABLISHING_DAILY_PRACTICE = "ESTABLISHING_DAILY_PRACTICE",
  DEVELOPING_SELF_AWARENESS = "DEVELOPING_SELF_AWARENESS",
  COMMUNITY_ENGAGEMENT = "COMMUNITY_ENGAGEMENT",
  KNOWLEDGE_INTEGRATION = "KNOWLEDGE_INTEGRATION",
  CHARACTER_DEVELOPMENT = "CHARACTER_DEVELOPMENT",
  EARLY_ASSESSMENT = "EARLY_ASSESSMENT"
} 