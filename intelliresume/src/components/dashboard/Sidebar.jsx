import React from "react";
import {
  LayoutDashboard,
  FileText,
  Clock3,
  Target,
  ShieldCheck,
  Settings,
  LogOut,
} from "lucide-react";

import Brand from "./Brand";

const navItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    id: "resume",
    label: "My Resume",
    icon: FileText,
  },
  {
    id: "versions",
    label: "Resume Versions",
    icon: Clock3,
  },
  {
    id: "curation",
    label: "Job Curation",
    icon: Target,
  },
  {
    id: "analysis",
    label: "ATS Analysis",
    icon: ShieldCheck,
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
  },
];

function Sidebar({ active, onNavigate }) {
  const userData = JSON.parse(
    localStorage.getItem("userData") || "{}"
  );

  const userName = userData.name || "User";
  const userEmail = userData.email || "";

  const userInitials = userName
    .split(" ")
    .filter(Boolean)
    .map((name) => name.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userData");

    window.location.href = "/login";
  };

  return (
    <aside className="app-sidebar">

      {/* Logo */}
      <Brand />

      {/* Navigation */}
      <nav className="side-nav">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            className={`nav-item ${
              active === id ? "active" : ""
            }`}
            onClick={() => onNavigate(id)}
          >
            <Icon size={18} strokeWidth={2} />

            <span>{label}</span>
          </button>
        ))}
      </nav>

      {/* User */}
      <div className="side-user">

        <div className="avatar">
          {userInitials}
        </div>

        <div className="side-user-meta">
          <div className="su-name">
            {userName}
          </div>

          <div className="su-email">
            {userEmail}
          </div>
        </div>

        <button
          type="button"
          className="side-logout"
          onClick={handleLogout}
          title="Logout"
        >
          <LogOut size={17} />
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;