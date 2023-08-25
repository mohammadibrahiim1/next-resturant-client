import { createSlice } from "@reduxjs/toolkit";

export const handleAddToModal = createSlice({
  name: "modal",
  initialState: { modalData: null },

  reducers: {
    addToModal: (state, action) => {
      console.log(action.payload.addons);
      state.modalData = action.payload;
    },

    updatedAddonsQuantity: (state, action) => {
      const { modalItemId, addonId, quantity } = action.payload;

      const modalItem = state.modalData.addons.find((item) => item._id === modalItemId);
    
      if (modalItem) {
        const subItem = modalItem.addons.find((subitem) => subitem.id === addonId);
        if (subItem) {
          subItem.quantity = quantity;
        }
      }
    },

    increaseAddonQuantity: (state, action) => {
      const { modalItemId, addonId } = action.payload;
      const modalItem = state.modalData.find((item) => item._id === modalItemId);
      if (modalItem) {
        const subItem = modalItem.addons.find((subitem) => subitem.id === addonId);
        if (subItem) {
          subItem.quantity += 1;
        }
      }
    },
    decreaseAddonQuantity: (state, action) => {
      const { modalItemId, addonId } = action.payload;
      const modalItem = state.modalData.find((item) => item._id === modalItemId);
      if (modalItem) {
        const subItem = modalItem.addons.find((subitem) => subitem.id === addonId);
        if (subItem && subItem.quantity) {
          subItem.quantity -= 1;
        }
      }
    },
  },
});

export const { addToModal, updatedAddonsQuantity, increaseAddonQuantity, decreaseAddonQuantity } =
  handleAddToModal.actions;
export default handleAddToModal.reducer;
