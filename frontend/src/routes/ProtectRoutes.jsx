import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import useAdminStore from "../store/AdminStore";

const ProtectedRoute = ({ children }) => {
  const { isAdminLogin, verifyAdmin } = useAdminStore();

  useEffect(() => {
    verifyAdmin();
  }, [verifyAdmin]);

  return <>{isAdminLogin ? children : <Navigate to="/admin" />}</>;
};

export default ProtectedRoute;
