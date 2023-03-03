import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/product.slice";

const rootReducer = {
    products: productSlice,
}

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export default store;