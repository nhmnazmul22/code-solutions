import React, { useEffect } from "react";
import Login from "../../components/common/Login.jsx";
import AdminStore from "../../store/AdminStore.js";

import { Navigate } from "react-router-dom";
const LoginPage = () => {
  const { isAdminLogin, verifyAdmin } = AdminStore();

  useEffect(() => {
    verifyAdmin();
  }, [verifyAdmin]);

  if (isAdminLogin) {
    return <Navigate to="/admin/dashboard" />;
  } else {
    return (
      <div className="h-screen w-full flex justify-center items-center bg-slate-200">
        <Login />
      </div>
    );
  }
};

export default LoginPage;
