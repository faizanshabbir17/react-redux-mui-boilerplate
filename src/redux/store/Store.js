import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../features/counter/counterSlice";
import AuthReducer from "../reducers/AuthReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    Auth: AuthReducer,
  },
});
