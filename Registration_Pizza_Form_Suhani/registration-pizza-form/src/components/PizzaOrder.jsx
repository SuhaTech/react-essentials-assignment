import React, { useState } from 'react';

const PRICES = {
  size: { Small: 8, Medium: 12, Large: 16 },
  crust: { Thin: 0, HandTossed: 2, Stuffed: 4 },
  toppings: { Pepperoni: 1.5, Mushrooms: 1.0, ExtraCheese: 2.0, Onions: 0.75, Olives: 1.0 },
  sides: { Coke: 2.5, GarlicBread: 4.0, Dip: 1.0 },
};

const initialState = {
  size: 'Medium',
  crust: 'Thin',
  toppings: [],
  sides: [],
  quantity: 1,
};

const PizzaOrder = () => {
  const [order, setOrder] = useState(initialState);
  const [receipt, setReceipt] = useState(null);

  const calculateTotal = () => {
    let sizePrice = PRICES.size[order.size] || 0;
    let crustPrice = PRICES.crust[order.crust] || 0;
    let toppingsPrice = order.toppings.reduce((acc, top) => acc + (PRICES.toppings[top] || 0), 0);
    let sidesPrice = order.sides.reduce((acc, side) => acc + (PRICES.sides[side] || 0), 0);

    return ((sizePrice + crustPrice + toppingsPrice + sidesPrice) * order.quantity).toFixed(2);
  };

  const handleCheckbox = (category, item) => {
    setOrder((prev) => {
      const exists = prev[category].includes(item);
      return {
        ...prev,
        [category]: exists ? prev[category].filter((i) => i !== item) : [...prev[category], item],
      };
    });
  };

  const handleReset = () => {
    setOrder(initialState);
    setReceipt(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalReceipt = {
      ...order,
      total: calculateTotal(),
      orderId: 'MARIO-' + Math.floor(100000 + Math.random() * 900000),
    };
    
    // Receipt generate karna aur storage me save karna
    setReceipt(finalReceipt);
    localStorage.setItem('pizza_order', JSON.stringify(finalReceipt));

    // Order submit hone ke baad form ko reset / blank karna
    setOrder(initialState);
  };

  return (
    <div className="pizza-container">
      <h2>Mario’s Pizza Online Ordering</h2>
      
      <div className="order-layout">
        <form onSubmit={handleSubmit} className="pizza-form">
          <div className="input-group">
            <label>Pizza Size</label>
            <select value={order.size} onChange={(e) => setOrder({ ...order, size: e.target.value })}>
              {Object.keys(PRICES.size).map((s) => (
                <option key={s} value={s}>{s} (${PRICES.size[s]})</option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <label>Crust Type</label>
            <select value={order.crust} onChange={(e) => setOrder({ ...order, crust: e.target.value })}>
              {Object.keys(PRICES.crust).map((c) => (
                <option key={c} value={c}>{c} (+${PRICES.crust[c]})</option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <label>Select Toppings</label>
            <div className="checkbox-options">
              {Object.keys(PRICES.toppings).map((top) => (
                <label key={top} className="inline-label">
                  <input
                    type="checkbox"
                    checked={order.toppings.includes(top)}
                    onChange={() => handleCheckbox('toppings', top)}
                  />
                  {top} (+${PRICES.toppings[top]})
                </label>
              ))}
            </div>
          </div>

          <div className="input-group">
            <label>Sides & Drinks</label>
            <div className="checkbox-options">
              {Object.keys(PRICES.sides).map((side) => (
                <label key={side} className="inline-label">
                  <input
                    type="checkbox"
                    checked={order.sides.includes(side)}
                    onChange={() => handleCheckbox('sides', side)}
                  />
                  {side} (+${PRICES.sides[side]})
                </label>
              ))}
            </div>
          </div>

          <div className="input-group">
            <label>Quantity</label>
            <input
              type="number"
              min="1"
              max="10"
              value={order.quantity}
              onChange={(e) => setOrder({ ...order, quantity: parseInt(e.target.value) || 1 })}
            />
          </div>

          <div className="btn-group">
            <button type="submit">Place Order</button>
            <button type="button" className="reset-btn" onClick={handleReset}>Clear Form</button>
          </div>
        </form>

        <div className="summary-panel">
          <h3>Live Order Summary</h3>
          <p><strong>Size:</strong> {order.size}</p>
          <p><strong>Crust:</strong> {order.crust}</p>
          <p><strong>Toppings:</strong> {order.toppings.join(', ') || 'None'}</p>
          <p><strong>Sides:</strong> {order.sides.join(', ') || 'None'}</p>
          <p><strong>Quantity:</strong> {order.quantity}</p>
          <h4>Total Price: ${calculateTotal()}</h4>
        </div>
      </div>

      {receipt && (
        <div className="receipt">
          <h3>Order Confirmed! 🍕</h3>
          <p>Order ID: <strong>{receipt.orderId}</strong></p>
          <p>Items: {receipt.size} Pizza ({receipt.crust} crust) x {receipt.quantity}</p>
          <p>Total Paid: <strong>${receipt.total}</strong></p>
        </div>
      )}
    </div>
  );
};

export default PizzaOrder;