import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
    addonQuantity: 1,
 

};

const addonSlice = createSlice({
  name: "addon",
  initialState,
  reducers: {
    increaseAddonQuantity: (state, action) => {
      console.log(action);
      const { addonId } = action.payload;
      state.modal.modalData.addons.map((add) => {
        if (add.id === addonId) {
          return {
            ...add,
            quantity: add.quantity + 1,
          };
        }
        return add;
      });
    },

    decreaseAddonQuantity: (state, action) => {
      const { addonId } = action.payload;
      state.addons.map((add) => {
        if (add.id === addonId && add.quantity > 1) {
          return {
            ...add,
            quantity: item.quantity - 1,
          };
        }
        return add;
      });
    },
  },
});

export const { increaseAddonQuantity, decreaseAddonQuantity } = addonSlice.actions;
export default addonSlice.reducer;
