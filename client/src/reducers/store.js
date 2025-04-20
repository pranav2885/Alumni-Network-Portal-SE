import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import threadReducer from "../reducers/threadSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    threads: threadReducer,
  },
});
