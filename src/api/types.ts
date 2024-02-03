export type ProductCategory =
  | "jewelery"
  | "electronics"
  | "men's clothing"
  | "women's clothing";
export type Product = {
  id: number;
  title: string;
  price: number;
  category: ProductCategory;
  description: string;
  image: string;
};

export type GetProductsFilter = {
  limit?: number;
  sort?: "desc" | "asc";
};

export type AddProductPayload = Omit<Product, "id">;
export type ViewProductTypes = Omit<Product, "id">;
export type AddProductProps = Omit<Product, "id">;
export type Products = Omit<Product, "id">;
