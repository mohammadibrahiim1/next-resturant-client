import { configureStore } from "@reduxjs/toolkit";
import { allFoodApi } from "../features/api/apiSlice";
import modalReducer from "../features/modalSlice/modalSlice";
import productReducer from "../features/productSlice/productSlice";
import addonReducer from "../features/addonSlice/addonSlice";

const store = configureStore({
  reducer: {
    [allFoodApi.reducerPath]: allFoodApi.reducer,
    modal: modalReducer,
    product: productReducer,
    addon: addonReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(allFoodApi.middleware),
});

export default store;
