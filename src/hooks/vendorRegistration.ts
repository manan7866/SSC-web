import apiClient, { uploadClient } from "@/lib/apiClient";
import Cookies from "js-cookie";

export const saveUserId = (id: string) => {
  Cookies.set("vendorUserId", id, { expires: 7 }); // 7 days
};

export const getUserId = () => {
  return Cookies.get("vendorUserId");
};

export interface VendorData {
  // Step 1: Personal Info
  fullName: string;
  email: string;
  password: string;

  // Step 2: Business Info
  businessName: string;
  businessType: string;
  einNumber: string;
  tinNumber: string;

  // Step 3: Contact & Banking
  contactPerson: string;
  phone: string;
  bankName: string;
  accountNumber: string;
  routingNumber: string;
  bankAddress: string;

  // Step 4: Agreement
  signatoryName: string;
  signatureDate: string; // or Date if you want stricter typing
  vendoraccepted: boolean;
  isCompleted?: boolean;
}

export const emptyVendorData: VendorData = {
  fullName: "",
  email: "",
  password: "",

  businessName: "",
  businessType: "",
  einNumber: "",
  tinNumber: "",

  contactPerson: "",
  phone: "",
  bankName: "",
  accountNumber: "",
  routingNumber: "",
  bankAddress: "",

  signatoryName: "",
  signatureDate: "",
  vendoraccepted: false,
};

interface AuthResponse {
  id: string;
  message: string;
  data: {
    id?: string;
  };
  // add other fields your API returns
}

interface VendorResponse {
  success: boolean;
  message: string;
  status: number;
  data: VendorData;
}

export const registerVendor = async (data: FormData): Promise<AuthResponse> => {
  try {
    // get id from cookies (if exists)
    const id = getUserId();

    // Remove undefined fields to prevent backend issues
    // const cleanedData = Object.fromEntries(
    //   Object.entries(data).filter(([_, v]) => v !== undefined)
    // );

    const url = id ? `/vendor-register/${id}` : "/vendor-register";
    console.log("<><><ccc", data.getAll("fullName"));

    const res = await uploadClient.post<AuthResponse>(url, data);

    console.log("dadadada", res.data);

    // ✅ store id after first creation
    if (!id && res.data.data.id) {
      saveUserId(res.data.data.id);
    }

    return res.data;
  } catch (error: any) {
    console.log(error.message, error);

    throw new Error(error.response?.data?.message || "Registration failed");
  }
};

export const getVendorLoginStepsData = async (): Promise<VendorData> => {
  try {
    const id = getUserId();

    if (!id) return emptyVendorData;

    const res = await apiClient.post<Partial<VendorResponse>>(`/vendor/${id}`);
    const data = res.data.data;

    // ✅ Merge API data with empty defaults
    return { ...emptyVendorData, ...data };
  } catch (error) {
    console.error("Error fetching vendor data:", error);
    return emptyVendorData;
  }
};
