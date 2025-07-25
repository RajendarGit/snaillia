import { configureStore } from "@reduxjs/toolkit";
import addToFavouriteReducer from "./addToFavouriteSlice";
export const store = configureStore({
  reducer: {
    favourite: addToFavouriteReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;