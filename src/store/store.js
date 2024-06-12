import { uiSlice } from "../slice/uiSlice";

import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
});

export default store;
