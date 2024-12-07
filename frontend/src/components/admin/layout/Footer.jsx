import React from "react";

const Footer = () => {
  return (
    <div className="footer footer-center bg-slate-800 text-white p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Nhm Development Solution
        </p>
      </aside>
    </div>
  );
};

export default Footer;
