import { createSlice } from '@reduxjs/toolkit';

const loadCartFromStorage = () => {
  const saved = localStorage.getItem('redux_pizza_cart');
  return saved ? JSON.parse(saved) : [];
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: loadCartFromStorage(),
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      state.items.push({ ...newItem, id: Date.now(), quantity: 1 });
      localStorage.setItem('redux_pizza_cart', JSON.stringify(state.items));
    },
    updateQuantity(state, action) {
      const { id, amount } = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) {
        item.quantity += amount;
        if (item.quantity <= 0) {
          state.items = state.items.filter(i => i.id !== id);
        }
      }
      localStorage.setItem('redux_pizza_cart', JSON.stringify(state.items));
    },
    removeItem(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload);
      localStorage.setItem('redux_pizza_cart', JSON.stringify(state.items));
    },
    clearCart(state) {
      state.items = [];
      localStorage.removeItem('redux_pizza_cart');
    },
  },
});

export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export const { addToCart, updateQuantity, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;