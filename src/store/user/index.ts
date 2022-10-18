import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetToken } from "../../services/user";

const initialState = {
  token: localStorage.getItem("token") || "",
};

export const getToken = createAsyncThunk(
  "user/GetToken",
  async ({ username, password }: ARG.GetToken) => {
    const getTokenOk = await GetToken({ username, password });
    return getTokenOk.data;
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
    builder.addCase(getToken.pending, (state) => {
      console.log('getToken pending', state);
      console.log("🚀 ~ 进行中！");
    });
  },
});

export const { setToken } = counterSlice.actions;
export default counterSlice.reducer;
