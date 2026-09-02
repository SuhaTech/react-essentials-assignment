import React from "react";

function Badge({ children, variant = "neutral", icon: Icon }) {
  return (
    <span className={`badge badge-${variant}`}>
      {Icon && <Icon size={11} />}
      {children}
    </span>
  );
}

export default Badge;