import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // each item: { id, name, price, image, quantity }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // 1️⃣ Add item to cart
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(
        (i) => i.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },

    // 2️⃣ Remove item completely from cart
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(
        (item) => item.id !== id
      );
    },

    // 3️⃣ Update quantity (increase or decrease)
    updateQuantity: (state, action) => {
      const { id, amount } = action.payload;
      const item = state.items.find(
        (item) => item.id === id
      );

      if (item) {
        item.quantity += amount;

        // remove item if quantity becomes 0
        if (item.quantity <= 0) {
          state.items = state.items.filter(
            (item) => item.id !== id
          );
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
