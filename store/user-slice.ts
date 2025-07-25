import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: string | null;
  name: string | null;
  email: string | null;
  // Add other user fields as needed
}

const initialState: UserState = {
  id: null,
  name: null,
  email: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser(state, action: PayloadAction<Partial<UserState>>) {
      return { ...state, ...action.payload };
    },
    clearUser(state) {
      state.id = null;
      state.name = null;
      state.email = null;
    },
  },
});

export const { updateUser, clearUser } = userSlice.actions;
export default userSlice.reducer;