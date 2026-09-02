import { createSlice } from '@reduxjs/toolkit';

const SIZES = { Small: 199, Medium: 299, Large: 399 };
const CRUSTS = { Thin: 0, Pan: 30, CheeseBurst: 70 };
const TOPPINGS_PRICES = {
  Pepperoni: 50, Mushrooms: 30, ExtraCheese: 40, Jalapenos: 35, Paneer: 45
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: {
    selectedSize: 'Medium',
    selectedCrust: 'Pan',
    selectedToppings: [],
    availableToppings: ['Pepperoni', 'Mushrooms', 'Jalapenos', 'Paneer'],
    currentPrice: 329, // Medium (299) + Pan (30)
  },
  reducers: {
    setSize(state, action) {
      state.selectedSize = action.payload;
      // Large pizza unlocks Premium Extra Cheese topping
      if (action.payload === 'Large') {
        if (!state.availableToppings.includes('ExtraCheese')) {
          state.availableToppings.push('ExtraCheese');
        }
      } else {
        state.availableToppings = state.availableToppings.filter(t => t !== 'ExtraCheese');
        state.selectedToppings = state.selectedToppings.filter(t => t !== 'ExtraCheese');
      }
      pizzaSlice.caseReducers.calculatePrice(state);
    },
    setCrust(state, action) {
      state.selectedCrust = action.payload;
      pizzaSlice.caseReducers.calculatePrice(state);
    },
    toggleTopping(state, action) {
      const topping = action.payload;
      if (state.selectedToppings.includes(topping)) {
        state.selectedToppings = state.selectedToppings.filter(t => t !== topping);
      } else {
        state.selectedToppings.push(topping);
      }
      pizzaSlice.caseReducers.calculatePrice(state);
    },
    calculatePrice(state) {
      let price = SIZES[state.selectedSize] + CRUSTS[state.selectedCrust];
      state.selectedToppings.forEach(t => {
        price += TOPPINGS_PRICES[t] || 0;
      });
      state.currentPrice = price;
    },
    resetCustomizer(state) {
      state.selectedSize = 'Medium';
      state.selectedCrust = 'Pan';
      state.selectedToppings = [];
      state.currentPrice = 329;
    }
  },
});

export const { setSize, setCrust, toggleTopping, resetCustomizer } = pizzaSlice.actions;
export default pizzaSlice.reducer;