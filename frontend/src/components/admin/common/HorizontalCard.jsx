import React from "react";

const HorizontalCard = ({ object, handleDeleteAction, fieldNames }) => {
  return (
    <div className="bg-slate-200 p-5 my-1 flex flex-col md:flex-row gap-3 rounded-md w-full">
      <img
        className="w-12 rounded-full cursor-pointer me-5"
        src={object?.profileImg}
        alt=""
      />
      <div className="md:flex gap-5 justify-start items-center text-sm sm:text-base mt-3 md:mt-0">
        {fieldNames.map((field) => (
          <p key={field}>
            <span className="font-bold me-1">
              {`${field[0].toUpperCase()}${field.slice(1).toLowerCase()}`}:
            </span>
            {object?.[field]}
          </p>
        ))}
      </div>
      <div className="md:ms-auto mt-5 md:mt-0">
        <button
          onClick={() => handleDeleteAction(object._id)}
          className="btn bg-red-600 text-white hover:bg-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default HorizontalCard;
