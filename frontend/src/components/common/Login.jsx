import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AdminImg from "../../assets/images/codeSolution-Admin.png";
import useAdminStore from "../../store/adminStore/AdminStore";
import ValidationHelper from "../../utility/ValidationHelper";
import { getToken } from "../../utility/utility";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { adminLogin, getAdminInfo } = useAdminStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!ValidationHelper.IsEmail(loginInfo.email)) {
      toast.error("Valid Email Address Required");
    } else if (!ValidationHelper.Ispassword(loginInfo.password)) {
      toast.error(
        "Password Must: 8 chars, 1 upper, 1 lower, 1 number, 1 special"
      );
    } else {
      setLoading(true);
      await adminLogin(loginInfo);
      await getAdminInfo();
      const token = getToken("adminToken");
      if (token) {
        setLoading(false);
        navigate("/admin/dashboard");
        toast.success("Login Successful");
      } else {
        toast.error("Failed to Login");
      }
    }
  };

  return (
    <div className="max-w-[500px] w-full bg-white p-8 rounded-lg shadow-lg border-rose-100 text-center">
      <img src={AdminImg} alt="Code Solution" className="w-72 m-auto" />
      <h2 className="text-[22px] font-semibold mt-5 mb-2">Admin Login</h2>
      <form>
        <label className="input input-bordered flex items-center gap-2 mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="email"
            className="grow"
            placeholder="Email"
            value={loginInfo.email}
            onChange={(e) =>
              setLoginInfo((prevInfo) => ({
                ...prevInfo,
                email: e.target.value,
              }))
            }
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            value={loginInfo.password}
            placeholder="Password"
            onChange={(e) =>
              setLoginInfo((prevInfo) => ({
                ...prevInfo,
                password: e.target.value,
              }))
            }
          />
        </label>
        <button
          type="submit"
          className="btn btn-active bg-blue-500 text-white px-8 hover:bg-blue-600 mt-4 text-[18px]"
          onClick={handleSubmit}
        >
          {!loading ? (
            "Login"
          ) : (
            <span className="loading loading-spinner loading-md"></span>
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;
