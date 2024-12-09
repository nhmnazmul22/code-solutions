import React from "react";
import NewsLatter from "../NewsLatter";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <NewsLatter />
      <Footer />
    </>
  );
};

export default Layout;
