import React from "react";
import aboutImg from "../../assets/images/about-img.png";
const About = () => {
  return (
    <div className="py-20 px-[3%] md:px-[5%]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="">
          <img src={aboutImg} alt="" className="m-auto" />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-4xl font-bold bg-blue-500 text-white p-3 rounded ">
            About Us
          </h3>
          <p>
            At <strong>Code Solutions</strong>, we specialize in delivering
            cutting-edge web development and IT solutions tailored to meet the
            unique needs of our clients. With a passion for innovation and a
            commitment to excellence, we empower businesses to thrive in the
            digital landscape.
          </p>
          <p>
            Our team of skilled developers, designers, and IT professionals
            works collaboratively to create dynamic websites, robust
            applications, and seamless IT systems that drive results. From
            startups to established enterprises, we craft solutions that enhance
            efficiency, elevate user experiences, and accelerate growth.
          </p>
          <div>
            <h3 className="font-bold text-2xl mb-3">What Sets Us Apart:</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <strong>Customized Solutions:</strong> We understand that every
                business is unique. That’s why we take a personalized approach,
                designing and building systems that align with your goals.
              </li>
              <li>
                <strong>Innovative Technologies:</strong> Staying ahead of the
                curve, we leverage the latest tools and technologies to deliver
                state-of-the-art services.
              </li>
              <li>
                <strong>Client-Centric Approach:</strong> Your success is our
                priority. We build lasting partnerships through transparency,
                reliability, and exceptional support.
              </li>
            </ul>
          </div>
          <p>
            Whether you’re looking to build a stunning website, optimize your IT
            infrastructure, or innovate with custom software, we are here to
            help you succeed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
