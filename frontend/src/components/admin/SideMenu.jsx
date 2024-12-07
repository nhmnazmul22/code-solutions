import React from "react";
import { FaUsers } from "react-icons/fa";
import { TbMessageChatbot } from "react-icons/tb";

import { HiOutlineNewspaper } from "react-icons/hi2";
import { MdHomeRepairService } from "react-icons/md";
import { PiMicrosoftTeamsLogoFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <>
      <ul className="hidden lg:flex flex-col">
        <Link to="/admin/users">
          <li className="sidebar-menu-item">
            <FaUsers size={30} /> Users
          </li>
        </Link>
        <div className="divider  m-0 h-0"></div>
        <Link to="/admin/teams">
          <li className="sidebar-menu-item">
            <PiMicrosoftTeamsLogoFill size={30} /> Teams
          </li>
        </Link>
        <div className="divider  m-0 h-0"></div>
        <Link to="/admin/services">
          <li className="sidebar-menu-item">
            {" "}
            <MdHomeRepairService size={30} />
            Services
          </li>
        </Link>
        <div className="divider  m-0 h-0"></div>
        <Link to="/admin/blogs">
          <li className="sidebar-menu-item">
            {" "}
            <HiOutlineNewspaper size={30} />
            Blogs
          </li>
        </Link>
        <div className="divider m-0 h-0"></div>
        <Link to="/admin/customerMessages">
          <li className="sidebar-menu-item">
            {" "}
            <TbMessageChatbot size={30} />
            Customer
          </li>
        </Link>
      </ul>
      {/* Mobile Side bar Menu */}
      <ul className="flex flex-col lg:hidden">
        <Link to="/admin/users">
          <li className="mobile-sidebar-menu-item">
            <span className="tooltip tooltip-right" data-tip="Users">
              <FaUsers size={30} />
            </span>
          </li>
        </Link>
        <div className="divider  m-0 h-0"></div>
        <Link to="/admin/teams">
          <li className="mobile-sidebar-menu-item">
            <span className="tooltip tooltip-right" data-tip="Teams">
              <PiMicrosoftTeamsLogoFill size={30} />
            </span>
          </li>
        </Link>
        <div className="divider  m-0 h-0"></div>
        <Link to="/admin/services">
          <li className="mobile-sidebar-menu-item">
            <span className="tooltip tooltip-right" data-tip="Services">
              <MdHomeRepairService size={30} />
            </span>
          </li>
        </Link>
        <div className="divider  m-0 h-0"></div>
        <Link to="/admin/blogs">
          <li className="mobile-sidebar-menu-item">
            <span className="tooltip tooltip-right" data-tip="Blogs">
              <HiOutlineNewspaper size={30} />
            </span>
          </li>
        </Link>
        <div className="divider m-0 h-0"></div>
        <Link to="/admin/customerMessages">
          <li className="mobile-sidebar-menu-item">
            <span
              className="tooltip tooltip-right"
              data-tip="Customer Messages"
            >
              <TbMessageChatbot size={30} />
            </span>
          </li>
        </Link>
      </ul>
    </>
  );
};

export default SideMenu;
