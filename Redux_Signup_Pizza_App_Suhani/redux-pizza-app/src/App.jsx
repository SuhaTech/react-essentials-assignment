import React from 'react';
import './App.css'; // Add this line at the top
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import SignupForm from './components/SignupForm';
import PizzaCustomizer from './components/PizzaCustomizer';
import Cart from './components/Cart';
import { clearNotification } from './features/ui/uiSlice';


export default function App() {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.ui.activeTab);
  const notification = useSelector((state) => state.ui.notification);

  return (
    <div>
      <Navbar />

      {/* Notification Banner */}
      {notification && (
        <div style={{
          padding: '10px',
          margin: '10px auto',
          maxWidth: '600px',
          textAlign: 'center',
          backgroundColor: notification.status === 'success' ? '#d4edda' : '#f8d7da',
          color: notification.status === 'success' ? '#155724' : '#721c24',
          borderRadius: '4px'
        }}>
          {notification.message}
          <button onClick={() => dispatch(clearNotification())} style={{ marginLeft: '15px', border: 'none', background: 'none', cursor: 'pointer' }}>✖</button>
        </div>
      )}

      {/* Tab Switching */}
      {activeTab === 'signup' && <SignupForm />}
      {activeTab === 'menu' && <PizzaCustomizer />}
      {activeTab === 'cart' && <Cart />}
    </div>
  );
}