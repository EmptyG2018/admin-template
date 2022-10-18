import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user";
import parentSlice from "./counter/parentSlice";
import childSlice from "./counter/childSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    parent: parentSlice,
    child: childSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
