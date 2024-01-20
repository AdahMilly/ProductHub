import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../api/types";

type InitialState = {
  products: Product[] | [];
};

const initialState: InitialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const {} = productSlice.actions;