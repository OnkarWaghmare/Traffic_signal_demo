import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "./slice";

const store = configureStore({
  reducer: {
    testSlice: sliceReducer,
  },
});

export default store;
