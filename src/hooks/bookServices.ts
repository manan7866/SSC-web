import apiClient from "../lib/apiClient";

// Valid enum values according to backend schema
export const SERVICE_TYPES = [
  "ASSIST_WITH_SPRITUAL_PROGRAM",
  "SUPPORT_CRAFT_CULTURE",
  "FUND_RAISING_EVENT_ORGANIZATION",
  "OUTREACH_COMMUNITY",
  "HELP_DIGITAL_MEDIA",
  "CREATE_SACRED_ART_HANDICRAFTS"
] as const;

export interface BookServicePayload {
  subject: string;
  date: string;
  comment?: string;
  service: typeof SERVICE_TYPES[number];
}

export const createBooking = async (data: BookServicePayload) => {
  const token = localStorage.getItem("accessToken");
  const res = await apiClient.post("/user/book-service", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const getBookings = async () => {
  const token = localStorage.getItem("accessToken");
  const res = await apiClient.get("/user/book-service", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data?.data;
};
