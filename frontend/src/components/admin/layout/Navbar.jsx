import React from "react";
import { Link } from "react-router-dom";
import AdminLogo from "../../../assets/images/codeSolution-Admin.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-200 shadow-sm py-3 px-10">
      <div className="flex-1">
        <Link to={"/admin/dashboard"}>
          <img src={AdminLogo} alt="Code Solution" className="w-32" />
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt=""
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 py-4 px-2 shadow"
          >
            <li>
              <Link to="/admin/profile" className="justify-between text-[16px]">
                Profile
              </Link>
            </li>
            <li>
              <a className="text-[16px]">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
