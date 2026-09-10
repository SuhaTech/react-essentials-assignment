import React from 'react';
import { useParams } from 'react-router-dom';

export const OrderDetails = () => {
  const { orderId } = useParams();
  return (
    <div className="container card">
      <h2>Order Details</h2>
      <p>Showing info for Order ID: <strong>{orderId}</strong></p>
    </div>
  );
};