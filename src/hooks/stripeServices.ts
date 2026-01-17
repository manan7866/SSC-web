import apiClient from "../lib/apiClient";

interface SetupIntentRes {
  data: {
    client_secret: string;
  };
}

export interface StripePaymentMethod {
  id: string;
  object: "payment_method";
  allow_redisplay: string;
  billing_details: {
    address: {
      city: string | null;
      country: string | null;
      line1: string | null;
      line2: string | null;
      postal_code: string | null;
      state: string | null;
    };
    email: string | null;
    name: string | null;
    phone: string | null;
    tax_id: string | null;
  };
  card: {
    brand: string;
    checks: {
      address_line1_check: string | null;
      address_postal_code_check: string | null;
      cvc_check: string | null;
    };
    country: string;
    display_brand: string;
    exp_month: number;
    exp_year: number;
    fingerprint: string;
    funding: string;
    generated_from: unknown | null;
    last4: string;
    networks: {
      available: string[];
      preferred: string | null;
    };
    regulated_status: string;
    three_d_secure_usage: {
      supported: boolean;
    };
    wallet: unknown | null;
  };
  created: number;
  customer: string;
  livemode: boolean;
  metadata: Record<string, unknown>;
  type: "card";
}

export interface GetPaymentMethodsResponse {
  success: boolean;
  status: number;
  message: string;
  data: {
    defaultMethodId: string | null;
    paymentMethods: StripePaymentMethod[];
  };
}

// 👀 create setup intent
export const createSetupIntent = async (): Promise<SetupIntentRes> => {
  const response = await apiClient.get("/stripe/setup-intent");
  console.log(response.data);
  return response.data;
};

// 👀 set default payment method
export const setDefaultPaymentMethod = async (
  paymentMethodId: string
): Promise<void> => {
  const response = await apiClient.post("/stripe/set-default-payment-method", {
    paymentMethodId,
  });
  console.log(response.data);
  return response.data;
};

// 👀 Get payment methods
export const getPAymentMethods =
  async (): Promise<GetPaymentMethodsResponse> => {
    const response = await apiClient.get("/stripe/payment-methods");
    console.log(response.data);
    return response.data;
  };
