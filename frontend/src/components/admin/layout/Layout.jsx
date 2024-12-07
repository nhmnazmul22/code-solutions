import React from "react";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import SideMenubar from "./SideMenubar.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-[60px_1fr] lg:grid-cols-[230px_1fr] ">
        <div className="">
          <SideMenubar />
        </div>
        <div className="">{children}</div>
      </div>
      <footer className="bg-black text-white">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
