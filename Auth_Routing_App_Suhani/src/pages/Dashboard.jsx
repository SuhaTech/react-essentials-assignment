import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Counter } from '../components/Counter';

export const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div className="container card">
      <h1>Protected Dashboard</h1>
      <p>Welcome back, <strong>{user?.name}</strong>!</p>
      
      <div style={{ marginTop: '1rem' }}>
        <h3>Quick Links</h3>
        <ul>
          <li><Link to="/order/ORD-9982">View Recent Order #ORD-9982</Link></li>
          <li><Link to="/order/ORD-5541">View Order #ORD-5541</Link></li>
        </ul>
      </div>

      <Counter />
    </div>
  );
};