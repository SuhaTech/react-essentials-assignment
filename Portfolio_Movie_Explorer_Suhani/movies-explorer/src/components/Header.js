import React from "react";

function Header({ darkMode, toggleTheme }) {
  return (
    <div className="header">

      <div>

        <h1>🎬 Movie Explorer</h1>

        <p>
          Search, filter and manage your favourite movies.
        </p>

      </div>

      <button
        className="theme-btn"
        onClick={toggleTheme}
      >
        {darkMode ? "☀ Light" : "🌙 Dark"}
      </button>

    </div>
  );
}

export default Header;