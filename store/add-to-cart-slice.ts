import { Product } from "@/types/products";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AddItemsWithQuantityPayload {
  product: Product;
  quantity: number;
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Product>) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    addItemsWithQuantity(
      state,
      action: PayloadAction<AddItemsWithQuantityPayload>
    ) {
      const { product, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ ...product, quantity });
      }
    },

    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => String(item.id) !== action.payload);
    },

    incrementQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find((item) => String(item.id) === action.payload);
      if (item) {
        item.quantity++;
      }
    },

    decrementQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find((item) => String(item.id) === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.items = state.items.filter(
            (i) => String(i.id) !== action.payload
          );
        }
      }
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  addItem,
  addItemsWithQuantity,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;