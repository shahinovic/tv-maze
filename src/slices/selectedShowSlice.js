import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const selectedShowSlice = createSlice({
  name: "selectedShow",
  initialState,
  reducers: {
    setSelectedShow: (state, action) => action.payload,
  },
});

export const { setSelectedShow } = selectedShowSlice.actions;

export default selectedShowSlice.reducer;
