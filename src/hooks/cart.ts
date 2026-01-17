import { CheckoutPayload } from "@/app/checkout/page";
import apiClient from "../lib/apiClient";
import { BillingFormValues, CheckoutFormValues } from "@/app/checkout/Schema";

// Cart item interface
export interface CartItem {
  id: number;
  userId: string;
  qty: number;
  createdAt: string;
  music?: any;
  digitalBook?: any;
  meditation?: any;
  fashion?: any;
  living?: any;
  decoration?: any;
  accessories?: any;
}

// Category keys aligned with backend
export type CartCategory =
  | "music"
  | "book"
  | "fashion"
  | "meditation"
  | "decoration"
  | "living"
  | "accessories";

// Backend expects: category, productId, qty (optional, defaults to 1)
export interface AddToCartPayload {
  category: CartCategory;
  productId: number;
  qty?: number;
}

// Update cart item payload
export interface UpdateCartItemPayload {
  category: CartCategory;
  productId: number;
  qty: number;
}

// Delete cart item payload
export interface DeleteCartItemPayload {
  category: CartCategory;
  productId: number;
}

// 🛒 Add item to cart
export const addToCart = async (data: AddToCartPayload) => {
  const response = await apiClient.post("/user/cart", data);

  return response.data.data;
};

// 👀 Get cart items
export const getCart = async (): Promise<CartItem[]> => {
  const response = await apiClient.get("/user/cart");
  return response.data.data;
};

// 🔁 Update cart item quantity
export const updateCartItem = async (data: UpdateCartItemPayload) => {
  const response = await apiClient.patch("/user/cart", data);
  return response.data;
};

// ❌ Delete cart item - backend controller reads category + productId from body
// Router includes an :id param, but controller ignores it; we'll still pass productId in URL for compatibility
export const deleteCartItem = async (data: DeleteCartItemPayload) => {
  const response = await apiClient.delete(`/user/cart/${data.productId}`, {
    data,
  });
  return response.data;
};

// 🧹 Clear entire cart
export const clearCart = async () => {
  const response = await apiClient.delete("/user/cart");
  return response.data;
};

// 🛒 Add item to cart
export const checkoutSubmit = async (data: CheckoutFormValues) => {
  const response = await apiClient.post("/user/order", data);
  console.log(response);

  return response.data;
};

export const updateBilling = async (data: BillingFormValues) => {
  const response = await apiClient.post("/user/billing-details", data);
  console.log(response);

  return response.data;
};
