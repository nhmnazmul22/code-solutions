import React from "react";

const CardSkeleton = ({ length }) => {
  return (
    <>
      {Array.from({ length: length }).map((value) => (
        <div
          key={Math.random() * 10}
          className="card bg-base-100 w-full shadow-xl cursor-pointer hover:translate-y-3 duration-200"
        >
          <div className="flex w-full flex-col gap-4 p-5">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardSkeleton;
