import { configureStore } from "@reduxjs/toolkit";
import { tvShowApi } from "../services/tvShowApi";
import selectedShowReducer from "../slices/selectedShowSlice";

export default configureStore({
  reducer: {
    [tvShowApi.reducerPath]: tvShowApi.reducer,
    selectedShow: selectedShowReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tvShowApi.middleware),
});
