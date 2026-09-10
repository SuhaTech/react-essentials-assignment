import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  // Agar auth state check ho raha hai, toh loading screen dikhao
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Agar user logged in nahi hai, toh login page par redirect kar do
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Agar user logged in hai, toh page render hone do
  return children;
};