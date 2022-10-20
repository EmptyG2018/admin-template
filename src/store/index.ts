import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./app";
import userSlice from "./user";

const store = configureStore({
  reducer: {
    app: appSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
