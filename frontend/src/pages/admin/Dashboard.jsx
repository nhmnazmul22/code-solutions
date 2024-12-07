import React, { useEffect } from "react";
import Layout from "../../components/admin/layout/Layout";
import useAdminStore from "../../store/adminStore/AdminStore";

const Dashboard = () => {
  const { getAdminInfo } = useAdminStore();

  useEffect(() => {
    getAdminInfo();
    return;
  }, []);

  return (
    <Layout>
      <div>Dashboard</div>
    </Layout>
  );
};

export default Dashboard;
