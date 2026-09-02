import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, removeItem, clearCart, selectCartTotal } from '../features/cart/cartSlice';
import { setNotification } from '../features/ui/uiSlice';

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector(selectCartTotal);

  const handleCheckout = () => {
    dispatch(clearCart());
    dispatch(setNotification({ status: 'success', message: 'Order Placed Successfully! Thank you!' }));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>Your Cart 🛒</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', padding: '10px 0' }}>
              <div>
                <h4 style={{ margin: 0 }}>{item.name}</h4>
                <small>Toppings: {item.toppings.join(', ') || 'None'}</small>
                <div>₹{item.price} x {item.quantity} = <strong>₹{item.price * item.quantity}</strong></div>
              </div>
              <div>
                <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: -1 }))}>-</button>
                <span style={{ margin: '0 8px' }}>{item.quantity}</span>
                <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: 1 }))}>+</button>
                <button onClick={() => dispatch(removeItem(item.id))} style={{ marginLeft: '10px', background: 'red', color: '#fff', border: 'none' }}>Remove</button>
              </div>
            </div>
          ))}

          <div style={{ marginTop: '20px' }}>
            <h3>Total Amount: ₹{totalAmount}</h3>
            <button
              disabled={cartItems.length === 0}
              onClick={handleCheckout}
              style={{ padding: '10px 20px', background: cartItems.length === 0 ? '#ccc' : '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Checkout Now
            </button>
            <button
              onClick={() => dispatch(clearCart())}
              style={{ marginLeft: '10px', padding: '10px 20px', background: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px' }}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}