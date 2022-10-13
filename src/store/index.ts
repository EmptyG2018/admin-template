import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./"
import parentSlice from "./counter/parentSlice";
import childSlice from "./counter/childSlice";

const store: any = configureStore({
  reducer: {
    // user: userSlice,
    parent: parentSlice,
    child: childSlice,
  },
});

export default store;
