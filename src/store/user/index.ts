import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetToken, GetProfile } from "../../services/user";
import storage from "store";

const initialState: {
  token: string;
  userInfo: API.UserInfoItem | null;
} = {
  token: localStorage.getItem("token") || "",
  userInfo: null,
};

export const getToken = createAsyncThunk(
  "user/getToken",
  async (formData: ARG.GetToken) => {
    const getTokenOk = await GetToken(formData);
    return getTokenOk.data;
  }
);

export const getProfile = createAsyncThunk("user/getProfile", async () => {
  const getProfileOk = await GetProfile();
  return getProfileOk.data;
});

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
      const { access_token } = payload;
      state.token = access_token;
      storage.set("token", access_token);
    });
    builder.addCase(getToken.rejected, () => {
      console.log("ssss");
    });

    builder.addCase(getProfile.fulfilled, (state, { payload }) => {
      state.userInfo = payload;
    });
  },
});

export const { setToken } = counterSlice.actions;
export default counterSlice.reducer;
