import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/CodeSolution.png";
import useUserStore from "../../../store/UserStore";

const Navbar = () => {
  const {
    isUserLogin,
    verifyUser,
    userProfileInfo,
    getUsersProfileInfo,
    userLogout,
  } = useUserStore();

  const navigate = useNavigate();

  const logoutUser = async () => {
    await userLogout();
    navigate("/");
  };

  useEffect(() => {
    verifyUser();
  }, [verifyUser, isUserLogin]);

  useEffect(() => {
    (async () => {
      await getUsersProfileInfo();
    })();
  }, []);

  return (
    <div className="navbar bg-white shadow-md sticky top-0 px-10 z-50">
      <div className="navbar-start order-3 md:order-[-1] justify-end md:justify-start">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow mobile-dropdown"
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
            {isUserLogin === true ? (
              <div className="md:hidden block">
                <li className="bg-blue-500 text-white hover:bg-blue-600 rounded-lg mb-2">
                  <NavLink to="/profile">Profile</NavLink>
                </li>
                <li
                  onClick={logoutUser}
                  className="bg-red-500 text-white hover:bg-red-600 rounded-lg mb-2"
                >
                  <a>Logout</a>
                </li>
              </div>
            ) : (
              <div className="md:hidden block">
                <li className="bg-blue-500 text-white hover:bg-blue-600 rounded-lg mb-2">
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li className="bg-blue-500 text-white hover:bg-blue-600 rounded-lg mb-2">
                  <NavLink to="/signup">Signup</NavLink>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
      <div className="navbar-center block order-1 md:order-[-1]">
        <Link to="/">
          <img className="w-28 " src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-end  order-1 md:order-[-1]">
        {isUserLogin === true ? (
          <div className=" hidden md:block flex-none gap-2">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="" src={userProfileInfo?.imgUrl} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 py-4 px-2 shadow"
              >
                <li>
                  <a className="text-[16px]">Profile</a>
                </li>
                <li onClick={logoutUser}>
                  <a className="text-[16px]">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="hidden md:flex gap-5">
            <Link to="/login">
              <button className="btn bg-blue-500 text-white font-semibold hover:bg-blue-600">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="btn bg-blue-500 text-white font-semibold hover:bg-blue-600">
                Signup
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
