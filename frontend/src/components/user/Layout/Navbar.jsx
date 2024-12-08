import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/CodeSolution.png";
const Navbar = () => {
  return (
    <div class="navbar bg-white shadow-md sticky top-0 px-10 z-50">
      <div class="navbar-start order-3 md:order-[-1] justify-end md:justify-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow mobile-dropdown"
          >
            <li className="mb-2">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="/services">Services</NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <div className="md:hidden block">
              <li className="bg-blue-500 text-white hover:bg-blue-600 rounded-lg mb-2">
                <NavLink to="/login">Login</NavLink>
              </li>
              <li className="bg-blue-500 text-white hover:bg-blue-600 rounded-lg mb-2">
                <NavLink to="/signup">Signup</NavLink>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div class="navbar-center block order-1 md:order-[-1]">
        <Link to="/">
          <img className="w-28 " src={logo} alt="" />
        </Link>
      </div>
      <div class="navbar-end  order-1 md:order-[-1]">
        <div className="hidden md:flex gap-5">
          <button class="btn bg-blue-500 text-white font-semibold hover:bg-blue-600">
            Login
          </button>
          <button class="btn bg-blue-500 text-white font-semibold hover:bg-blue-600">
            Signup
          </button>
        </div>
        <div className="avatar hidden">
          <div className="w-12 h-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
