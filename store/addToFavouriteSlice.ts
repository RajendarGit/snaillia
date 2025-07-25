import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavouriteState {
  favourites: string[]; // Array of product IDs
  isLoggedIn: boolean;
}

const initialState: FavouriteState = {
  favourites: [],
  isLoggedIn: false, // This should be set based on actual user auth state
};

const addToFavouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    setLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
    addFavourite(state, action: PayloadAction<string>) {
      if (state.isLoggedIn && !state.favourites.includes(action.payload)) {
        state.favourites.push(action.payload);
      }
    },
    removeFavourite(state, action: PayloadAction<string>) {
      if (state.isLoggedIn) {
        state.favourites = state.favourites.filter(
          (id) => id !== action.payload
        );
      }
    },
  },
});

export const { setLoggedIn, addFavourite, removeFavourite } = addToFavouriteSlice.actions;
export default addToFavouriteSlice.reducer;