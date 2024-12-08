import React from "react";
import { FaUsers } from "react-icons/fa";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { MdDashboard, MdHomeRepairService } from "react-icons/md";
import { PiMicrosoftTeamsLogoFill } from "react-icons/pi";
import { TbMessageChatbot } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
  const activeClass = ({ isActive }) =>
    isActive ? "bg-blue-500 text-white" : "";
  return (
    <>
      <ul className="hidden lg:flex flex-col">
        <NavLink to="/admin/dashboard" className={activeClass}>
          <li className="sidebar-menu-item">
            <MdDashboard size={30} /> Dashboard
          </li>
        </NavLink>
        <div className="divider  m-0 h-0"></div>
        <NavLink to="/admin/users" className={activeClass}>
          <li className="sidebar-menu-item">
            <FaUsers size={30} /> Users
          </li>
        </NavLink>
        <div className="divider  m-0 h-0"></div>
        <NavLink to="/admin/teams" className={activeClass}>
          <li className="sidebar-menu-item">
            <PiMicrosoftTeamsLogoFill size={30} /> Teams
          </li>
        </NavLink>
        <div className="divider  m-0 h-0"></div>
        <NavLink to="/admin/services" className={activeClass}>
          <li className="sidebar-menu-item">
            {" "}
            <MdHomeRepairService size={30} />
            Services
          </li>
        </NavLink>
        <div className="divider  m-0 h-0"></div>
        <NavLink to="/admin/blogs" className={activeClass}>
          <li className="sidebar-menu-item">
            {" "}
            <HiOutlineNewspaper size={30} />
            Blogs
          </li>
        </NavLink>
        <div className="divider m-0 h-0"></div>
        <NavLink to="/admin/customerMessages" className={activeClass}>
          <li className="sidebar-menu-item">
            {" "}
            <TbMessageChatbot size={30} />
            Customer
          </li>
        </NavLink>
      </ul>
      {/* Mobile Side bar Menu */}
      <ul className="flex flex-col lg:hidden">
        <NavLink to="/admin/dashboard" className={activeClass}>
          <li className="mobile-sidebar-menu-item">
            <span className="tooltip tooltip-right" data-tip="Dashboard">
              <MdDashboard size={26} />
            </span>
          </li>
        </NavLink>
        <NavLink to="/admin/users" className={activeClass}>
          <li className="mobile-sidebar-menu-item">
            <span className="tooltip tooltip-right" data-tip="Users">
              <FaUsers size={26} />
            </span>
          </li>
        </NavLink>
        <div className="divider  m-0 h-0"></div>
        <NavLink to="/admin/teams" className={activeClass}>
          <li className="mobile-sidebar-menu-item">
            <span className="tooltip tooltip-right" data-tip="Teams">
              <PiMicrosoftTeamsLogoFill size={26} />
            </span>
          </li>
        </NavLink>
        <div className="divider  m-0 h-0"></div>
        <NavLink to="/admin/services" className={activeClass}>
          <li className="mobile-sidebar-menu-item">
            <span className="tooltip tooltip-right" data-tip="Services">
              <MdHomeRepairService size={26} />
            </span>
          </li>
        </NavLink>
        <div className="divider  m-0 h-0"></div>
        <NavLink to="/admin/blogs" className={activeClass}>
          <li className="mobile-sidebar-menu-item">
            <span className="tooltip tooltip-right" data-tip="Blogs">
              <HiOutlineNewspaper size={26} />
            </span>
          </li>
        </NavLink>
        <div className="divider m-0 h-0"></div>
        <NavLink to="/admin/customerMessages" className={activeClass}>
          <li className="mobile-sidebar-menu-item">
            <span
              className="tooltip tooltip-right"
              data-tip="Customer Messages"
            >
              <TbMessageChatbot size={26} />
            </span>
          </li>
        </NavLink>
      </ul>
    </>
  );
};

export default SideMenu;
