import { createSlice } from "@reduxjs/toolkit";

export const handleAddToModal = createSlice({
  name: "modal",
  initialState: { modalData: null },

  reducers: {
    addToModal: (state, action) => {
      state.modalData = action.payload;
    },
  },
});

export const { addToModal } = handleAddToModal.actions;
export default handleAddToModal.reducer;
