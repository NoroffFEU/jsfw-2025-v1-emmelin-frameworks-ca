import type { Product, ProductResponse } from "../types/product";

const API_URL = "https://v2.api.noroff.dev/online-shop";

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }

  const data: ProductResponse = await response.json();

  return data.data;
}

export async function fetchProductById(id: string): Promise<Product> {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch product with id ${id}: ${response.statusText}`,
    );
  }

  const json: { data: Product } = await response.json();

  return json.data;
}
