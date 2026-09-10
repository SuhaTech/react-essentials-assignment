import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSize, setCrust, toggleTopping, resetCustomizer } from '../features/pizza/pizzaSlice';
import { addToCart } from '../features/cart/cartSlice';
import { setNotification } from '../features/ui/uiSlice';

export default function PizzaCustomizer() {
  const dispatch = useDispatch();
  const { selectedSize, selectedCrust, selectedToppings, availableToppings, currentPrice } = useSelector((state) => state.pizza);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      dispatch(setNotification({ status: 'error', message: 'Please Sign Up first to place an order!' }));
      return;
    }

    const customPizza = {
      name: `${selectedSize} ${selectedCrust} Pizza`,
      size: selectedSize,
      crust: selectedCrust,
      toppings: selectedToppings,
      price: currentPrice,
    };

    dispatch(addToCart(customPizza));
    dispatch(resetCustomizer());
    dispatch(setNotification({ status: 'success', message: 'Pizza added to Cart!' }));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>Customize Your Pizza 🍕</h2>
      
      {/* Size Selection */}
      <div>
        <h4>1. Select Size:</h4>
        {['Small', 'Medium', 'Large'].map((size) => (
          <button
            key={size}
            onClick={() => dispatch(setSize(size))}
            style={{ margin: '5px', padding: '8px 15px', background: selectedSize === size ? '#28a745' : '#eee', color: selectedSize === size ? '#fff' : '#000' }}
          >
            {size}
          </button>
        ))}
        {selectedSize === 'Large' && <p style={{ color: 'orange', fontSize: '12px' }}>⭐ Premium "Extra Cheese" Unlocked!</p>}
      </div>

      {/* Crust Selection */}
      <div style={{ marginTop: '15px' }}>
        <h4>2. Choose Crust:</h4>
        {['Thin', 'Pan', 'CheeseBurst'].map((crust) => (
          <button
            key={crust}
            onClick={() => dispatch(setCrust(crust))}
            style={{ margin: '5px', padding: '8px 15px', background: selectedCrust === crust ? '#28a745' : '#eee', color: selectedCrust === crust ? '#fff' : '#000' }}
          >
            {crust}
          </button>
        ))}
      </div>

      {/* Toppings Selection */}
      <div style={{ marginTop: '15px' }}>
        <h4>3. Add Toppings:</h4>
        {availableToppings.map((topping) => (
          <label key={topping} style={{ marginRight: '15px', display: 'inline-block' }}>
            <input
              type="checkbox"
              checked={selectedToppings.includes(topping)}
              onChange={() => dispatch(toggleTopping(topping))}
            />
            {topping}
          </label>
        ))}
      </div>

      {/* Live Order Summary */}
      <div style={{ marginTop: '20px', background: '#f9f9f9', padding: '15px', borderRadius: '5px' }}>
        <h3>Live Total: ₹{currentPrice}</h3>
        <p><strong>Config:</strong> {selectedSize} Size | {selectedCrust} Crust</p>
        <p><strong>Toppings:</strong> {selectedToppings.join(', ') || 'None'}</p>
      </div>

      <button
        onClick={handleAddToCart}
        style={{ marginTop: '15px', width: '100%', padding: '12px', background: '#ff9900', color: '#fff', fontSize: '16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Add to Cart
      </button>
    </div>
  );
}