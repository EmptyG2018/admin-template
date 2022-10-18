import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetToken } from "../../services/user";

const initialState = {
  token: localStorage.getItem("token") || "",
};

export const getToken = createAsyncThunk(
  "user/getToken",
  async (formData: ARG.GetToken) => {
    const getTokenOk = await GetToken(formData);
    return getTokenOk;
  }
);

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getToken.fulfilled, (state, { payload }) => {
      console.log('getToken fulfilled', payload);
      console.log("🚀 ~ 已完成！");
    });
    builder.addCase(getToken.rejected, () => {
      console.log('ssss');
    })
  },
});

export const { setToken } = counterSlice.actions;
export default counterSlice.reducer;
