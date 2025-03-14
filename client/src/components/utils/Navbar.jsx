import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

import { RiMenu4Line } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white fixed top-0 left-0 w-full shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-12 scale-x-150 scale-y-150" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-md font-medium text-gray-700">
          <li>
            <NavLink to="/" className="hover:text-gray-900 transition">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/alumni-directory"
              className="hover:text-gray-900 transition"
            >
              Directory
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" className="hover:text-gray-900 transition">
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/jobs" className="hover:text-gray-900 transition">
              Jobs
            </NavLink>
          </li>
        </ul>

        {/* Login Button */}
        <Link
          to="/login"
          className="hidden md:block text-gray-900 hover:text-black font-medium"
        >
          Log in →
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl focus:outline-none cursor-pointer"
        >
          {menuOpen ? <IoCloseOutline /> : <RiMenu4Line />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-white w-full absolute top-16 left-0 shadow-lg transition-all ${
          menuOpen ? "opacity-100 max-h-screen py-4" : "opacity-0 max-h-0"
        } overflow-hidden`}
      >
        <ul className="text-center space-y-4 text-gray-700 text-lg">
          <li>
            <NavLink
              to="/"
              className="block py-2"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/alumni-directory"
              className="block py-2"
              onClick={() => setMenuOpen(false)}
            >
              Directory
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className="block py-2"
              onClick={() => setMenuOpen(false)}
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/jobs"
              className="block py-2"
              onClick={() => setMenuOpen(false)}
            >
              Jobs
            </NavLink>
          </li>
          <li>
            <Link
              to="/login"
              className="block py-2 text-black font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Log in →
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
