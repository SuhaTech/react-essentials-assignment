import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Menu,
  X,
  Sparkles,
  LogIn,
  UserPlus,
} from "lucide-react";

import Container from "./Container";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/upload", label: "Resume Upload" },
    { to: "/chatbot", label: "AI Assistant" },
    { to: "/about", label: "About" },
    { to: "/pricing", label: "Pricing" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <Container>
        <div className="flex items-center justify-between h-16">

          {/* ================= LOGO ================= */}
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-xl text-slate-900 tracking-tight"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <Sparkles size={16} />
            </div>

            <span>
              Intelli<span className="text-blue-600">Resume</span>
            </span>
          </Link>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-150 hover:text-blue-600 ${
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "text-slate-600"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* ================= DESKTOP AUTH BUTTONS ================= */}
          <div className="hidden md:flex items-center gap-4">

            {/* Login */}
            <Link
              to="/login"
              className="hover:opacity-95"
              style={{
                backgroundColor: "#2563eb",
                color: "#ffffff",
                padding: "14px 28px",
                borderRadius: "12px",
                fontWeight: "600",
                fontSize: "15px",
                boxShadow:
                  "0 10px 15px -3px rgba(37, 99, 235, 0.25)",
                transition: "all 0.2s",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
              }}
            >
              <LogIn size={15} />
              Log In
            </Link>

            {/* Sign Up */}
            <Link
              to="/signup"
              className="hover:bg-slate-50"
              style={{
                backgroundColor: "#ffffff",
                color: "#334155",
                padding: "14px 28px",
                borderRadius: "12px",
                fontWeight: "600",
                fontSize: "15px",
                border: "1px solid #e2e8f0",
                boxShadow:
                  "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                transition: "all 0.2s",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
              }}
            >
              <UserPlus size={14} />
              Sign Up
            </Link>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            type="button"
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-100 py-4 bg-white space-y-4 animate-fadeIn">

            {/* Navigation Links */}
            <div className="space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block text-sm font-medium py-2 px-3 rounded-lg ${
                      isActive
                        ? "bg-blue-50 text-blue-600 font-semibold"
                        : "text-slate-600 hover:bg-slate-50"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <hr className="border-slate-100 mx-3" />

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col gap-2 px-3">

              {/* Mobile Login */}
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 transition rounded-xl flex items-center justify-center gap-2 border border-slate-200"
              >
                <LogIn size={15} />
                Log In
              </Link>

              {/* Mobile Sign Up */}
              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="w-full"
              >
                <Button
                  variant="primary"
                  className="w-full py-2.5 text-sm flex items-center justify-center gap-2"
                >
                  <UserPlus size={15} />
                  Create Free Account
                </Button>
              </Link>

            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;