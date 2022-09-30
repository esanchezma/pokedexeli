import { createSlice } from "@reduxjs/toolkit";

export const isDarkSlice = createSlice({
  name: "isDark",
  initialState:false,
  reducers: {
    changeDark: (state, action) => {
      const isDark = action.payload;
      return isDark;
    }
  }
});

export const { changeDark } = isDarkSlice.actions;

export default isDarkSlice.reducer;