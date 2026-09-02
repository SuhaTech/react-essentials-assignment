import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Video, CheckSquare, BarChart3, User, LogOut, IndianRupee, UserCheck } from 'lucide-react';
import { useAuth } from '../../Context/AuthContext'; 

const sidebarLinks = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Meetings', path: '/meetings', icon: Video },
  { name: 'Action Items', path: '/action-items', icon: CheckSquare },
  { name: 'Reports', path: '/reports', icon: BarChart3 },
  { name: 'Profile', path: '/profile', icon: User },
  { name: 'PricingPlan', path: '/pricing-plan', icon: IndianRupee },
  { name: 'Role Management', path: '/role-management', icon: UserCheck }
];

const Sidebar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <aside className="w-60 h-screen bg-white border-r border-gray-100 flex flex-col justify-between p-4 shrink-0 fixed top-0 left-0 z-40">
      <div className="flex flex-col gap-4">
        <Link to="/dashboard" className="flex items-center gap-2.5 px-2 py-1">
          <span className="text-lg font-extrabold text-blue-600 tracking-tight">
            AI Meeting Tracker
          </span>
        </Link>

        <div className="flex items-center gap-3 rounded-2xl bg-gray-50 p-3 border border-gray-100">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-600 text-xs">
            {user?.name?.charAt(0) || 'U'}
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-[10px] font-medium text-gray-400 leading-tight">
              Logged in as
            </span>
            <span className="truncate text-xs font-bold text-blue-600">
              {user?.name || 'User'}
            </span>
          </div>
        </div>

        <nav className="flex flex-col gap-1 pt-1">
          {sidebarLinks.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink key={item.path} to={item.path} className={({ isActive }) =>
                  `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
                  }`
                }>
                <Icon size={16} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="pt-3 border-t border-gray-100">
        <button onClick={handleLogout} className="flex w-full items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-gray-500 hover:bg-red-50 hover:text-red-600 transition-all duration-150">
          <LogOut size={16} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;