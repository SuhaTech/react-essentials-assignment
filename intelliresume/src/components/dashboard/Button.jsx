import React from "react";

function Button({ children, variant = "primary", icon: Icon, small = false, onClick }) {
  return (
    <button
      className={`btn btn-${variant} ${small ? "btn-sm" : ""}`}
      onClick={onClick}
    >
      {Icon && <Icon size={15} />}
      <span>{children}</span>
    </button>
  );
}

export default Button;