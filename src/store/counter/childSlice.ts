import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "child",
  initialState,
  reducers: {
    childAdd: (state) => {
      state.value += 1;
    },
  },
});

export const { childAdd } = counterSlice.actions;
export default counterSlice.reducer;
