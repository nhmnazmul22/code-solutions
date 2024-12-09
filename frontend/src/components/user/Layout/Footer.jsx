import React from "react";
import { IconContext } from "react-icons";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer bg-slate-800 text-white p-10">
      <nav>
        <h6 className="footer-title">Services</h6>
        <Link to="/blogs" className="link link-hover">
          Web Development
        </Link>
        <Link to="/blogs" className="link link-hover">
          Design
        </Link>
        <Link to="/blogs" className="link link-hover">
          Marketing
        </Link>
        <Link to="/blogs" className="link link-hover">
          App Development
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link to="/about" className="link link-hover">
          About us
        </Link>
        <Link to="/contact" className="link link-hover">
          Contact
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link className="link link-hover">Terms of use</Link>
        <Link className="link link-hover">Privacy policy</Link>
        <Link className="link link-hover">Cookie policy</Link>
      </nav>
      <form>
        <h6 className="footer-title">Contact</h6>
        <address>
          <p>
            West Box Nagar, Sarulia-1361<br></br> Demra, Dhaka
          </p>
          <p>
            <span className="font-bold">Phone: </span>+880160*********
          </p>
          <p>
            <span className="font-bold">Email: </span>codesolutions@yahoo.com
          </p>
          <div className="flex gap-4 justify-start items-center mt-2">
            <IconContext.Provider
              value={{
                className:
                  "text-dark hover:text-blue-600 duration-300 cursor-pointer",
              }}
            >
              <FaFacebookSquare size={30} />
              <AiFillLinkedin size={30} />
              <FaSquareInstagram size={30} />
            </IconContext.Provider>
          </div>
        </address>
      </form>
    </footer>
  );
};

export default Footer;
