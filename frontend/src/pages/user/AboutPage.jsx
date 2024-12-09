import React from "react";
import About from "../../components/user/About";
import Layout from "../../components/user/Layout/Layout";
import Team from "../../components/user/Team";

const AboutPage = () => {
  return (
    <Layout>
      <About />
      <Team />
    </Layout>
  );
};

export default AboutPage;
