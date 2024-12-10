import React from "react";

const NewsLatter = () => {
  return (
    <div className="bg-slate-100 py-10 px-[3%] sm:px-[5%]">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-full flex flex-col justify-center items-center rounded-xl p-20">
        <h3 className="text-3xl font-semibold text-white uppercase tracking-wider">
          Stay in the Loop
        </h3>
        <p className="text-white italic mt-2">
          Your monthly dose of updates, tips, and exclusive content!
        </p>
        <fieldset className="form-control w-full">
          <div className="join w-full md:w-[70%] lg:w-[40%] m-auto mt-5">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item w-full"
            />
            <button className="btn bg-slate-900 text-white hover:bg-slate-800 join-item">
              Subscribe
            </button>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default NewsLatter;
