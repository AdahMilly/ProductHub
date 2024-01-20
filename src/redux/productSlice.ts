import { createSlice } from "@reduxjs/toolkit";

export type Product = {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}

const initialState =  {
    products: Product[] | [];
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    }
})


export const { } = productSlice.actions;

