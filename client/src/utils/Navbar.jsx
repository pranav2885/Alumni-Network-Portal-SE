import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/logo.png";
import { setUserData } from "../reducers/auth/authSlice";
import { RiMenu4Line } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.userData);
  const googleLoginUrl = () => {
    const params = new URLSearchParams({
      client_id:
        "887297308007-pmo0pi3v46qtpjkvtqps856ocd9lkdsf.apps.googleusercontent.com",
      redirect_uri: "http://localhost:5500/api/auth/callback/google",
      response_type: "code",
      scope: "openid profile email",
      access_type: "offline",
      prompt: "consent",
    });
    return `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
  };

  const handleSignIn = () => {
    window.location.href = googleLoginUrl();
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    dispatch(setUserData(null));
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const urlAccessToken = url.searchParams.get("token");

    if (urlAccessToken) {
      localStorage.setItem("accessToken", urlAccessToken);
    }

    const accessToken = urlAccessToken || localStorage.getItem("accessToken");

    // Clear only the token from the URL, keeping the current pathname
    const urlWithoutToken = window.location.origin + window.location.pathname;
    window.history.replaceState({}, "", urlWithoutToken);

    const fetchUserProfile = async () => {
      if (accessToken) {
        try {
          const userProfile = jwtDecode(accessToken);
          // setUser(userProfile);
          dispatch(setUserData(userProfile));
        } catch (error) {
          console.error("Invalid or expired token:", error);
          localStorage.removeItem("accessToken");
        }
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <nav className="bg-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-14 scale-110" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-md font-medium text-gray-700">
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
          <li>
            <NavLink to="/threads" className="hover:text-gray-900 transition">
              Threads
            </NavLink>
          </li>
        </ul>

        {/* User Profile / Login Button */}
        <div className="relative">
          {user  ? (
            <img
              src={user.photoUrl}
              alt="Profile"
              className="ml-52 w-10 h-10 rounded-full cursor-pointer border-2 border-gray-300 hover:border-gray-600"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
          ) : (
            <button
              onClick={handleSignIn}
              className="hidden md:block text-gray-900 hover:text-black font-medium"
            >
              Log in →
            </button>
          )}

          {/* Dropdown Menu */}
          {dropdownOpen && user && (
            <div className="absolute right-0 mt-1 w-44 bg-white shadow-lg rounded-md py-2 border">
              <Link
                to="/profile"
                className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                <IoIosContact className="mr-2 text-2xl text-blue-500" />
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="flex w-full items-center px-4 py-2 text-red-600 hover:bg-gray-100"
              >
                <IoLogOutOutline className="mr-2 text-2xl" />
                Logout
              </button>
            </div>
          )}
        </div>

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
        className={`md:hidden bg-white w-full absolute top-14 left-0 shadow-lg transition-all ${
          menuOpen ? "opacity-100 max-h-screen py-4" : "opacity-0 max-h-0"
        } overflow-hidden`}
      >
        <ul className="text-center space-y-1 text-gray-700 text-lg">
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
            <NavLink
              to="/threads"
              className="block py-2"
              onClick={() => setMenuOpen(false)}
            >
              Threads
            </NavLink>
          </li>
          <li>
            <button
              onClick={() => {
                setMenuOpen(false);
                handleSignIn();
              }}
              className="block py-2 w-full"
            >
              Log in →
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
