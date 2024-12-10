import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../../store/UserStore.js";
import ValidationHelper from "../../utility/ValidationHelper.js";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const { signupUser } = useUserStore();
  const navigate = useNavigate();

  // Handle the form submit
  const handelSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // validation Checking
    if (!ValidationHelper.IsEmail(data.email)) {
      return toast.error("Enter Valid Email Address!!");
    }
    if (!ValidationHelper.Ispassword(data.password)) {
      return toast.error(
        "Password Must: 8 chars, 1 upper, 1 lower, 1 number, 1 special"
      );
    }
    if (data.password !== data.confirmPassword) {
      return toast.error("Password and Confirm Password not Match!!");
    }

    // If all validations are passed, then signup the user
    if (data.name && data.email && data.password && data.confirmPassword) {
      setLoading(true);
      await signupUser(data);
      e.target.reset();
      setLoading(false);
      navigate("/login");
    }
  };

  return (
    <div className="py-40 px-[3%] md:px-[5%]">
      <div className="login-form  w-full sm:w-[500px] shadow-md p-5 rounded-lg m-auto">
        <h3 className="text-center font-bold text-3xl">Signup</h3>
        <div className="divider"></div>
        <form className="flex flex-col gap-3" onSubmit={handelSubmit}>
          <div className="input-group">
            <label htmlFor="name" className="font-semibold">
              Full Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Full Name"
              className="input mt-2 input-bordered w-full"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email" className="font-semibold">
              Email Address:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email Address"
              className="input mt-2 input-bordered w-full"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="font-semibold">
              New Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your Password"
              className="input mt-2 input-bordered w-full"
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword" className="font-semibold">
              Confirm your Password:
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              className="input mt-2 input-bordered w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white hover:bg-blue-600 mb-3 py-3 rounded-md text-base duration-200"
          >
            {!loading ? (
              "Signup"
            ) : (
              <span className="loading loading-spinner loading-md"></span>
            )}
          </button>
          <p className="text-center text-base my-3">
            Are you have account?{" "}
            <Link
              to="/login"
              className=" text-blue-400 hover:text-blue-500 hover:underline"
            >
              Login Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
