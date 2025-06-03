import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return { items: [], totalCents: 0 };
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Failed to load cart status", e);
    return { items: [], totalCents: 0 };
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (e) {
    console.warn("Failed to load cart state", e);
  }
};

const initialState = loadState();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      state.items.push(item);
      state.totalCents += item.priceCents;
      saveState(state);
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.totalCents -= state.items[index].priceCents;
        state.items.splice(index, 1);
      }
      saveState(state);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalCents = 0;
      saveState(state);
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
