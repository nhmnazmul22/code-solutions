import React from "react";
import { MdAdd } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";

const ActionBar = ({ title, isDisable }) => {
  const disableBtn = isDisable ? "hidden" : "block";
  return (
    <div className="bg-blue-500 w-full px-5 py-3">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-xl">{title}</h1>
        <div className={`hidden md:flex  gap-3 ${disableBtn}`}>
          <button className="btn bg-white">Update</button>
          <button className="btn bg-black text-white hover:bg-slate-800">
            Add New
          </button>
        </div>
        {/* Small device button */}
        <div className={`flex md:hidden gap-3  ${disableBtn}`}>
          <button className="btn bg-white">
            <span className="tooltip tooltip-left" data-tip="Update">
              <RxUpdate />
            </span>
          </button>
          <button className="btn bg-black text-white hover:bg-slate-800">
            <span className="tooltip tooltip-left" data-tip="Add New">
              <MdAdd />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionBar;
