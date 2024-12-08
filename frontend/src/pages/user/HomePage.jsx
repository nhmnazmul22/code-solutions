import React from "react";
import Blogs from "../../components/user/Blogs";
import Hero from "../../components/user/Hero";
import Layout from "../../components/user/Layout/Layout";
import Services from "../../components/user/Services";
import Team from "../../components/user/Team";
const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Blogs />
      <Team />
    </Layout>
  );
};

export default HomePage;
