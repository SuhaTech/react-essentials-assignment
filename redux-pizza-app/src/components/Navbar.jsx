import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../features/ui/uiSlice';
import { logout } from '../features/user/userSlice';
import { Pizza, UserPlus, ShoppingCart, LogOut, UserCheck } from 'lucide-react';

export default function Navbar() {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.ui.activeTab);
  const cartItems = useSelector((state) => state.cart.items);
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar">
      {/* Brand Logo */}
      <div className="navbar-brand" onClick={() => dispatch(setActiveTab('menu'))} style={{ cursor: 'pointer' }}>
        <Pizza size={28} className="brand-icon" />
        <span>Slice &amp; Spice</span>
      </div>

      {/* Navigation Tabs */}
      <div className="nav-links">
        <button
          onClick={() => dispatch(setActiveTab('signup'))}
          className={`nav-btn ${activeTab === 'signup' ? 'active' : ''}`}
        >
          <UserPlus size={18} />
          <span>Signup</span>
        </button>

        <button
          onClick={() => dispatch(setActiveTab('menu'))}
          className={`nav-btn ${activeTab === 'menu' ? 'active' : ''}`}
        >
          <Pizza size={18} />
          <span>Menu</span>
        </button>

        <button
          onClick={() => dispatch(setActiveTab('cart'))}
          className={`nav-btn ${activeTab === 'cart' ? 'active' : ''}`}
        >
          <div className="cart-badge-wrapper">
            <ShoppingCart size={18} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </div>
          <span>Cart</span>
        </button>
      </div>

      {/* User Auth Status */}
      <div className="user-status-container">
        {isAuthenticated ? (
          <div className="user-profile">
            <span className="user-name">
              <UserCheck size={16} /> Hi, {user?.fullName?.split(' ')[0]}
            </span>
            <button className="logout-btn" onClick={() => dispatch(logout())} title="Logout">
              <LogOut size={16} />
            </button>
          </div>
        ) : (
          <span className="guest-badge">Guest</span>
        )}
      </div>
    </nav>
  );
}