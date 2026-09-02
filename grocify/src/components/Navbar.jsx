import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaHeart,
  FaShoppingBag,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/" },
    { label: "Process", to: "/" },
    { label: "Contact Us", to: "/" },
  ];

  const linkClass = ({ isActive }) =>
    `transition ${isActive ? "text-orange-500" : "text-slate-700 hover:text-orange-500"}`;

  return (
    <nav className="sticky top-0 z-50 border-b border-white/70 bg-white/80 shadow-[0_12px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 text-xl font-black text-white shadow-lg shadow-orange-200/70">
            G
          </span>
          <span className="text-2xl font-black tracking-tight sm:text-3xl">
            Gr<span className="text-orange-500">o</span>cify
          </span>
        </Link>

        <ul className="hidden items-center gap-8 font-medium md:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass} end={link.to === "/"}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex overflow-hidden rounded-full border border-orange-200 bg-white shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
            <input
              type="text"
              placeholder="Search..."
              className="w-60 px-4 py-2.5 text-sm outline-none"
            />
            <button className="bg-orange-500 px-4 text-white transition hover:bg-orange-600">
              <FaSearch />
            </button>
          </div>

          <button className="icon-button bg-slate-100 text-slate-700 hover:bg-orange-100 hover:text-orange-500">
            <FaHeart />
          </button>

          <Link
            to="/cart"
            className="icon-button bg-orange-500 text-white shadow-lg shadow-orange-200 hover:bg-orange-600"
          >
            <FaShoppingBag />
          </Link>
        </div>

        <button
          className="icon-button bg-slate-100 text-slate-800 md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="mx-auto border-t border-slate-200 bg-white px-4 py-5 shadow-lg md:hidden sm:px-6">
          <div className="space-y-3 rounded-3xl bg-slate-50 p-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition ${isActive ? "bg-orange-500 text-white shadow-md shadow-orange-200" : "bg-white text-slate-700"}`
                }
              >
                <span>{link.label}</span>
                <span>→</span>
              </NavLink>
            ))}
            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between rounded-2xl bg-orange-500 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-orange-200"
            >
              <span>Cart</span>
              <FaShoppingBag />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;