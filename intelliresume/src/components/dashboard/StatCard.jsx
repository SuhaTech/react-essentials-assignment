import React from "react";

function StatCard({
  label,
  value,
  sub,
  icon: Icon,
  tone = "blue",
}) {
  return (
    <div className={`dashboard-stat-card ${tone}`}>

      <div className="dashboard-stat-header">
        <div className="dashboard-stat-label">
          {label}
        </div>

        <div className={`dashboard-stat-icon ${tone}`}>
          <Icon size={18} strokeWidth={2} />
        </div>
      </div>

      <div className="dashboard-stat-value">
        {value}
      </div>

      <div className="dashboard-stat-sub">
        {sub}
      </div>

    </div>
  );
}

export default StatCard;