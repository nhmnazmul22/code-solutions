import React from "react";
import Card from "./common/Card";

const Blogs = () => {
  return (
    <div className="py-20 px-[10%]">
      <h2 className="text-center text-[50px] font-bold">Our Blogs</h2>
      <div className="divider w-[300px] m-auto"></div>
      <div className="grid grid-cols-3 mt-10">
        <Card />
      </div>
    </div>
  );
};

export default Blogs;
