import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => (
  <div className="container card" style={{ textAlign: 'center' }}>
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <Link to="/" className="btn" style={{ display: 'inline-block', marginTop: '1rem' }}>Return Home</Link>
  </div>
);