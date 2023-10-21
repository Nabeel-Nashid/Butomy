import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./Slice/dataSlice"
import counterReducer from "./Slice/counterSlice"

export const store = configureStore({
  reducer: {
    data:dataReducer,
    counter:counterReducer
  },
});
