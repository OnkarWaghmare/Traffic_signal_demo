import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "sampleSlice",
  initialState: {
    data: "Traffic Signal",
  },
  reducers: {
    sampleAction: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default slice.reducer;

export const { sampleAction } = slice.actions;
