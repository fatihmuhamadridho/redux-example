import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../api/product.api";

export const useGetProducts = createAsyncThunk('product/getProducts', async () => {
    const response = await getProducts();
    return response;
})

const productSlice = createSlice({
    name: "products",
    initialState: {
        status: null,
        message: null,
        data: null
    },
    reducers: {},
    extraReducers: {
        [useGetProducts.pending]: (state, action) => {
            state.status = 'loading'
        },
        [useGetProducts.fulfilled]: (state, action) => {
            state.status = 'success',
            state.data = action.payload.data
        },
        [useGetProducts.rejected]: (state, action) => {
            state.status = 'failed',
            state.message = action.error.message
        },
    }
})

export default productSlice.reducer