import React, { useEffect } from "react";
import Dashboard from "../../components/admin/Dashboard";
import Layout from "../../components/admin/layout/Layout";
import useAdminStore from "../../store/AdminStore";

const DashboardPage = () => {
  const { getAdminInfo } = useAdminStore();

  useEffect(() => {
    (async () => {
      await getAdminInfo();
    })();
  }, []);

  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
};

export default DashboardPage;
