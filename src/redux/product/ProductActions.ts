import { createAsyncThunk } from "@reduxjs/toolkit";
import { productsApi } from "../../api";
import { AddProductPayload, GetProductsFilter, Product } from "../../api/types";

export const fetchProductsAction = createAsyncThunk(
  "products/fetchProducts",
  async (filter: GetProductsFilter = {}, thunkApi) => {
    const response = await productsApi.getAllProducts(filter);
    if (response.error) {
      return thunkApi.rejectWithValue(response);
    }
    return { products: response };
  }
);

export const addProductAction = createAsyncThunk(
  "products/addProduct",
  async (product: AddProductPayload, thunkApi) => {
    const newProduct = await productsApi.addProduct(product);
    if (newProduct.error) {
      return thunkApi.rejectWithValue(newProduct);
    }
    return { newProduct };
  }
);
export const deleteProductAction = createAsyncThunk(
  "products/deleteProduct",
  async (productId: number, thunkApi) => {
    const response = await productsApi.deleteProduct(productId);
    if (response.error) {
      return thunkApi.rejectWithValue(response);
    }
    return { productId };
  }
);
export const updateProductAction = createAsyncThunk(
  "products/updateProduct",
  async (
    productInfo: { product: AddProductPayload; productId: number },
    thunkApi
  ) => {
    const updatedProduct = await productsApi.updateProduct(
      productInfo.productId,
      productInfo.product
    );
    if (updatedProduct.error) {
      return thunkApi.rejectWithValue(updatedProduct);
    }
  

    return updatedProduct;
  }
);
export const fetchProductsByCategoryAction = createAsyncThunk(
  "products/fetchProductsByCategory",
  async (
    { category, filter = {} }: { category: string; filter: GetProductsFilter },
    thunkApi
  ) => {
    const response = await productsApi.getAllProductsByCategory(
      category,
      filter
    );
    if (response.error) {
      return thunkApi.rejectWithValue(response);
    }
    return { products: response };
  }
);
export const fetchSortedProductsAction = createAsyncThunk(
  "products/fetchSortedProducts",
  async ({ params = {} }: { params?: GetProductsFilter }, thunkApi) => {
    const response = await productsApi.getSortedProducts(params);
    if (response.error) {
      return thunkApi.rejectWithValue(response);
    }
    return { products: response };
  }
);
