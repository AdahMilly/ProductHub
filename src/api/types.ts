export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

export type GetProductsFilter = {
  limit?: number;
  sort?: "desc" | "asc";
};

export type AddProductPayload = Omit<Product, "id">;