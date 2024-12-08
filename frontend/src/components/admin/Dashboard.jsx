import React, { useEffect } from "react";
import useBlogStore from "../../store/BlogStore";
import useServiceStore from "../../store/ServiceStore";
import useTeamStore from "../../store/TeamStore";
import Blog from "./Blog";
import Service from "./Service";
import Team from "./Team";
const Dashboard = () => {
  const { getBlogsInfo } = useBlogStore();
  const { getServicesInfo } = useServiceStore();
  const { getTeamsInfo } = useTeamStore();

  useEffect(() => {
    (async () => {
      await getBlogsInfo();
      await getServicesInfo();
      await getTeamsInfo();
    })();
  }, []);

  return (
    <>
      <Blog />
      <Service />
      <Team />
    </>
  );
};

export default Dashboard;
