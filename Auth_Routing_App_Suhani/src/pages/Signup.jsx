import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const { signup } = useAuth();
  const navigate = useNavigate();

  const isFormValid = name.trim() !== '' && email.includes('@') && password.length >= 6 && password === confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      signup(name, email, password);
      navigate('/dashboard');
    }
  };

  return (
    <div className="container card">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          {confirmPassword && password !== confirmPassword && <span className="error-msg">Passwords do not match</span>}
        </div>
        <button type="submit" className="btn" disabled={!isFormValid}>Register</button>
      </form>
    </div>
  );
};