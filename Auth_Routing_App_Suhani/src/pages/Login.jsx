import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';

  const isFormValid = email.includes('@') && password.length >= 6;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    const success = login(email, password);
    if (success) {
      navigate(from, { replace: true });
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="container card">
      <h2>Login</h2>
      {error && <p className="error-msg">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="user@example.com"
          />
          {!email.includes('@') && email.length > 0 && <span className="error-msg">Enter a valid email address</span>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Min 6 characters"
          />
          {password.length > 0 && password.length < 6 && <span className="error-msg">Password must be at least 6 characters</span>}
        </div>
        <button type="submit" className="btn" disabled={!isFormValid}>Login</button>
      </form>
    </div>
  );
};