import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  layout: {},
  local: navigator.language,
};


export const counterSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLocal: (state, { payload }) => {
      state.local = payload;
    },
  },
  extraReducers(builder) {
  },
});

export const { setLocal } = counterSlice.actions;
export default counterSlice.reducer;
