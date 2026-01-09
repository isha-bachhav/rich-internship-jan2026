import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-linear-to-r from-blue-600 to-indigo-600 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-xl font-bold tracking-wide">
          📝 Stay-Updated
        </h1>

        {/* Links */}
        <div className="flex gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white font-medium transition ${
                isActive
                  ? "border-b-2 border-white"
                  : "opacity-80 hover:opacity-100"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-white font-medium transition ${
                isActive
                  ? "border-b-2 border-white"
                  : "opacity-80 hover:opacity-100"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/todo"
            className={({ isActive }) =>
              `text-white font-medium transition ${
                isActive
                  ? "border-b-2 border-white"
                  : "opacity-80 hover:opacity-100"
              }`
            }
          >
            Todo
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
