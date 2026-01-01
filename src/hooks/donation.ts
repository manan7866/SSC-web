import apiClient from "../lib/apiClient";

// Backend expects: amount, type, pool
export interface DonationPayload {
  amount: string;
  type: string; // Backend expects 'type' not 'donorType'
  pool: string[];
}

export interface Donation {
  id: number;
  userId: string;
  amount: string;
  type: string;
  pool: string[];
  createdAt: string;
}

// Valid donation types according to backend schema
export const DONATION_TYPES = [
  "onetime",
  "monthly",
  "sponsor",
  "tools",
  "remainAnonymous",
  "receiveUpdates",
] as const;

// Valid pool types according to backend schema
export const POOL_TYPES = [
  "SUFI_SCIENCE_CENTER",
  "SPONSOR_SCHOLAR",
  "PRESERVE_ART_AND_CRAFT",
  "SPONSOR_EVENTS",
] as const;

export const createDonation = async (data: DonationPayload) => {
  const response = await apiClient.post("/stripe/donation-intent", data);
  return response.data;
};

export const getDonations = async (): Promise<Donation[]> => {
  const response = await apiClient.get("/user/donation");
  return response.data;
};

export const updateDonation = async (
  id: number,
  data: Partial<DonationPayload>
) => {
  const response = await apiClient.patch(`/user/donation/${id}`, data);
  return response.data;
};

export const deleteDonation = async (id: number) => {
  const response = await apiClient.delete(`/user/donation/${id}`);
  return response.data;
};
