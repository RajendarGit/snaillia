import { configureStore } from "@reduxjs/toolkit";
import addToFavouriteReducer from "./add-to-favourite-slice";
import userReducer from "./user-slice";
import cartReducer from "./add-to-cart-slice";

export const store = configureStore({
  reducer: {
    favourite: addToFavouriteReducer,
    user: userReducer,
    cart: cartReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;