import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../../store/UserStore";
import ValidationHelper from "../../utility/ValidationHelper";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { loginUser } = useUserStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (!ValidationHelper.IsEmail(data.email)) {
      return toast.error("Enter Valid Email Address!!");
    }
    if (!ValidationHelper.Ispassword(data.password)) {
      return toast.error(
        "Password Must: 8 chars, 1 upper, 1 lower, 1 number, 1 special"
      );
    }

    if (data.email && data.password) {
      setLoading(true);
      await loginUser(data);
      setLoading(false);
      navigate("/");
    }
  };

  return (
    <div className="py-40 px-[3%] md:px-[5%]">
      <div className="login-form w-full sm:w-[500px] shadow-md p-5 rounded-lg m-auto">
        <h3 className="text-center font-bold text-3xl">Login</h3>
        <div className="divider"></div>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
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
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your Password"
              className="input mt-2 input-bordered w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white hover:bg-blue-600 mb-3 py-3 rounded-md text-base duration-200"
          >
            {!loading ? (
              "Login"
            ) : (
              <span className="loading loading-spinner loading-md"></span>
            )}
          </button>
          <p className="text-center text-base my-3">
            You don't have account?{" "}
            <Link
              to="/signup"
              className=" text-blue-400 hover:text-blue-500 hover:underline"
            >
              Signup Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
