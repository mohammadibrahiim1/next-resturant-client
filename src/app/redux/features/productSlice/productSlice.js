import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quantity: 1,
};

export const handleProductQuantity = createSlice({
  name: "product",
  initialState,

  reducers: {
    increaseQuantity: (state) => {
        console.log(state);
      state.quantity += 1;
    },
    decreaseQuantity: (state) => {
      if (state.quantity > 1) {
        state.quantity -= 1;
      }
    },
  },
});

export const { increaseQuantity, decreaseQuantity } = handleProductQuantity.actions;
export default handleProductQuantity.reducer;
