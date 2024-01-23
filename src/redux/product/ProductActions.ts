import { createAsyncThunk } from "@reduxjs/toolkit";
import { productsApi } from "../../api";
import { AddProductPayload, GetProductsFilter } from "../../api/types";

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
    return { response };
  }
);