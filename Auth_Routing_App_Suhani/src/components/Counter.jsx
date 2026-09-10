import React, { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginTop: '2rem', borderTop: '1px solid #ddd', paddingTop: '1rem' }}>
      <h3>Interactive Counter</h3>
      <p data-testid="count-value">Count: {count}</p>
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
        <button className="btn" onClick={() => setCount(prev => prev + 1)}>Increment</button>
        <button className="btn btn-danger" onClick={() => setCount(prev => (prev > 0 ? prev - 1 : 0))}>Decrement</button>
      </div>
    </div>
  );
};