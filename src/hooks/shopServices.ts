import apiClient from "@/lib/apiClient";

export interface ProductQuery {
  page?: number;
  limit?: number;
  sort?: string;
  search?: string;
}

/**
 * Fetch products by category with pagination/sorting
 * Example: getProducts("MUSIC", { page: 1, limit: 12, sort: "newest" })
 */
export async function getProducts(category: string, query?: ProductQuery) {
  try {
    const response = await apiClient.get(`/products/${category}`, {
      params: query,
    });
    console.log(response.data);

    return response.data;
  } catch (error: any) {
    console.error(
      "Error fetching products:",
      error.response?.data || error.message
    );
    throw error;
  }
}

/**
 * Fetch single product details by category + ID
 * Example: getProductDetails("MUSIC", 42)
 */
export async function getProductDetails(category: string, id: number | string) {
  try {
    const response = await apiClient.get(`/products/${category}/${id}`);
    return response.data;
  } catch (error: any) {
    console.error(
      "Error fetching product details:",
      error.response?.data || error.message
    );
    throw error;
  }
}
