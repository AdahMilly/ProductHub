import axios from "axios";
import queryString from "query-string";

import { config } from "../config";
import { AddProductPayload, GetProductsFilter } from "./types";

class ProductsApi {
  private instance;
  constructor() {
    this.instance = axios.create({
      baseURL: config.fakeApiUrl,
      timeout: 2000,
      headers: {
        Accept: "application/json",
        ContentType: "application/json",
      },
    });
  }
  async getSingleProduct(productId: number) {
    try {
      const response = await this.instance.get(`/products/${productId}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return { message: "request failed", error };
    }
  }

  async getAllProducts(filter: GetProductsFilter = {}) {
    try {
      const response = await this.instance.get(
        `/products?${queryString.stringify(filter)}`
      );
      return response.data;
    } catch (error) {
      return { message: "request failed", error };
    }
  }

  async getAllProductsByCategory(
    category: string,
    filter: GetProductsFilter = {}
  ) {
    try {
      const response = await this.instance.get(
        `/products/category/${category}?${queryString.stringify(filter)}`
      );
      return response.data;
    } catch (error) {
      return { message: "request failed", error };
    }
  }

  async addProduct(product: AddProductPayload) {
    try {
      const response = await this.instance.post("/products", product);
      return response.data;
      
    } catch (error) {
      return { message: "request failed", error };
    }
  }

  async updateProduct(productId: number, product: AddProductPayload) {
    try {
      const response = await this.instance.put(
        `/products/${productId}`,
        product
      );
      return response.data;
    } catch (error) {
      return { message: "request failed", error };
    }
  }

  async deleteProduct(productId: number) {
    try {
      await this.instance.delete(`/products/${productId}`);
      return { message: "product deleted successfully" };
    } catch (error) {
      return { message: "request failed", error };
    }
  }
}

export const productsApi = new ProductsApi();
