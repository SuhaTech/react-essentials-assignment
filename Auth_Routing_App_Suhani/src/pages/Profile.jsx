import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Profile = () => {
  const { userId } = useParams();
  const { user } = useAuth();

  return (
    <div className="container card">
      <h2>User Profile</h2>
      <p><strong>URL User ID Parameter:</strong> {userId}</p>
      <p><strong>Name:</strong> {user?.name}</p>
      <p><strong>Email:</strong> {user?.email}</p>
    </div>
  );
};