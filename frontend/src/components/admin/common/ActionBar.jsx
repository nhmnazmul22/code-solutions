import React from "react";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";

const ActionBar = ({ title, isDisable, url }) => {
  const disableBtn = isDisable ? "hidden" : "block";
  return (
    <div className="bg-blue-500 w-full px-5 py-3">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-xl">{title}</h1>
        <div className={`flex gap-3 ${disableBtn}`}>
          <Link to={url}>
            <button className="btn bg-black text-white hover:bg-slate-800">
              <span className="tooltip tooltip-left" data-tip="Add New">
                <MdAdd size={15} />
              </span>
              <span className="hidden md:block">Add New</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActionBar;
