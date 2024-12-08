import React from "react";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
const Card = ({ object, isDisable, handleDeleteAction, fieldNames, url }) => {
  const disableBtn = isDisable ? "hidden" : "block";
  return (
    <div className="bg-slate-200 p-5 my-1 flex flex-col gap-3 rounded-md w-full">
      <img
        className="w-14 h-14 rounded-full cursor-pointer me-5"
        src={object?.imgUrl}
        alt=""
      />
      <div className="text-sm sm:text-base mt-3 md:mt-0">
        <h3 className="my-2 font-bold text-xl text-blue-500">Information:</h3>
        <div className="flex flex-col gap-3">
          {fieldNames.map((field) => (
            <p key={field.name}>
              <span className="font-bold me-1">{field.label}:</span>
              {object?.[field.name]}
            </p>
          ))}
        </div>
      </div>
      <div className="mt-5 flex gap-2">
        <Link to={`${url}/${object._id}`}>
          <button
            className={`btn bg-orange-500 text-white hover:bg-orange-400 ${disableBtn}`}
          >
            <span className="tooltip tooltip-left" data-tip="Update">
              <GrUpdate size={20} />
            </span>
          </button>
        </Link>

        <button
          onClick={() => handleDeleteAction(object._id)}
          className="btn bg-red-600 text-white hover:bg-red-500"
        >
          <span className="tooltip tooltip-left" data-tip="Delete">
            <MdDelete size={20} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Card;
