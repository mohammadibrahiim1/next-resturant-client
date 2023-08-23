import { configureStore } from "@reduxjs/toolkit";
import { allFoodApi } from "../features/api/apiSlice";
import modalReducer from "../features/modalSlice/modalSlice";
// import filterReducer from "../features/filterSlice/filterSlice";

const store = configureStore({
  reducer: {
    [allFoodApi.reducerPath]: allFoodApi.reducer,
    modal: modalReducer,
    // filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(allFoodApi.middleware),
});

export default store;
