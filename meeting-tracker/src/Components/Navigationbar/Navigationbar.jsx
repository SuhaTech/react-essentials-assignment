import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut, ChevronDown, User, Globe } from 'lucide-react';
import { useAuth } from '../../Context/AuthContext'; // Adjust path if needed

const publicNavLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navigationbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-100">
      <div className="flex h-16 items-center justify-between px-8">
        
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white shadow-sm">
              AI
            </div>
            <span className="text-base font-bold text-gray-900">
              Meeting Tracker
            </span>
          </Link>
        </div>

        {!isAuthenticated && (
          <nav className="hidden lg:flex items-center gap-8">
            {publicNavLinks.map((item) => (
              <NavLink key={item.path} to={item.path}className={({ isActive }) =>
                  isActive
                    ? 'font-semibold text-blue-600'
                    : 'text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors'
                }>
                {item.name}
              </NavLink>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-gray-600 border border-gray-200 hover:bg-gray-50 transition-colors">
                <Globe size={14} />
                <span>English</span>
              </button>

              <div className="relative">
                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-2 rounded-full bg-blue-600 px-3.5 py-1.5 text-white shadow-xs hover:bg-blue-700 transition-colors">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-xs font-bold text-white">
                    <User size={14} />
                  </div>
                  <span className="text-xs font-semibold">{user?.name || 'User'}</span>
                  <ChevronDown size={14} className="text-white/80" />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white p-1.5 shadow-lg border border-gray-100 z-50">
                    <button onClick={handleLogout}className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors">
                      <LogOut size={16} /> Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="hidden lg:flex items-center gap-3">
              <Link to="/login" className="rounded-lg border border-blue-600 px-4 py-1.5 text-xs font-semibold text-blue-600 hover:bg-blue-50 transition-all">
                Login
              </Link>
              <Link to="/register" className="rounded-lg bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-blue-700 transition-all shadow-xs">
                Register
              </Link>
            </div>
          )}

          {!isAuthenticated && (
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-gray-600 p-2 rounded-lg hover:bg-gray-100">
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          )}
        </div>
      </div>

      {!isAuthenticated && mobileOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {publicNavLinks.map((item) => (
            <NavLink key={item.path} to={item.path} onClick={() => setMobileOpen(false)} className={({ isActive }) =>
                isActive
                  ? 'font-semibold text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }>
              {item.name}
            </NavLink>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
            <Link to="/login" onClick={() => setMobileOpen(false)} className="text-center rounded-lg border border-blue-600 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50">
              Login
            </Link>
            <Link to="/register" onClick={() => setMobileOpen(false)} className="text-center rounded-lg bg-blue-600 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              Register
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navigationbar;