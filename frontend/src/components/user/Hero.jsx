import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/images/hero-img.png";

const Hero = () => {
  return (
    <div className="hero bg-gradient-to-r from-neutral-200	min-h-[700px] py-20 md:px-[5%]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={heroImg} className="lg:w-[40%] rounded-lg" />
        <div className="lg:w-[60%] text-center lg:text-start">
          <h1 className="text-3xl md:text-5xl font-bold">
            Welcome to Our Code Solution
          </h1>
          <p className="py-6 text-base">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to="/contact">
            <button className="btn bg-blue-500 text-white hover:bg-blue-600">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
