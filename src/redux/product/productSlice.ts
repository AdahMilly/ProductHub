import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../api/types";
import {
  addProductAction,
  deleteProductAction,
  fetchProductsAction,
} from "./ProductActions";

type InitialState = {
  products: Product[];
  isLoading: boolean;
  error: string;
};

const initialState: InitialState = {
  products: [],
  isLoading: false,
  error: "",
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAction.pending, (state) => {
        state.isLoading = true;
        state.error = "";
        state.products = [];
      })
      .addCase(fetchProductsAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload.products;
      })
      .addCase(fetchProductsAction.rejected, (state) => {
        state.isLoading = false;
        state.error = "An error occured while fetching product";
      });
    builder
      .addCase(addProductAction.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(addProductAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products.push(action.payload.newProduct);
      })
      .addCase(addProductAction.rejected, (state) => {
        state.isLoading = false;
        state.error = "An error occured while fetching product";
      });
    builder
      .addCase(deleteProductAction.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(deleteProductAction.fulfilled, (state, action) => {
        state.isLoading = false;
        const productIdToDelete = action.payload;
        state.products = state.products.filter(
          (product) => product.id !== (productIdToDelete as unknown as number)
        );
      })
      .addCase(deleteProductAction.rejected, (state) => {
        state.isLoading = false;
        state.error = "An error occured while fetching product";
      });
  },
});

export const {} = productSlice.actions;
