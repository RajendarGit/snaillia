import { configureStore } from "@reduxjs/toolkit";
import addToFavouriteReducer from "./add-to-favourite-slice";
import userReducer from "./user-slice";

export const store = configureStore({
  reducer: {
    favourite: addToFavouriteReducer,
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;