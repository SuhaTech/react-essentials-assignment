import React from "react";
import { Bell, Search } from "lucide-react";

function Topbar({ title }) {
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

  return (
    <header className="app-topbar">

      <div className="crumb-title">
        {title}
      </div>

      <div className="topbar-actions">

        <div className="tb-search">
          <Search size={15} />

          <span>
            Search resume, jobs, versions…
          </span>
        </div>

        <button
          type="button"
          className="icon-btn"
          title="Notifications"
        >
          <Bell size={17} />

          <span className="notif-dot" />
        </button>

        <div
          className="avatar sm"
          title={`${userName} • ${userEmail}`}
        >
          {userInitials}
        </div>

      </div>

    </header>
  );
}

export default Topbar;