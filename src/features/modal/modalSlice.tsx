import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : {}
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    change: (state, action) => {
      state.data = action.payload
    },
  },
});

export const { change } = modalSlice.actions;

export default modalSlice.reducer;
