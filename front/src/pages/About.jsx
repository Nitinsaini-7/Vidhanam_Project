import React from "react";
import linkedin from "../assets/images/linkedin.png";
import instagram from "../assets/images/instagram.png"
import x from "../assets/images/x.png"
import facebook from "../assets/images/facebook.png"
import about from "../assets/images/about.jpg";
import { Link } from "react-router-dom";
import Title from "../components/Title";
const About = () => {
  return (
    <div className="mt-20">
      <div className="text-center">

      <Title text1={"about/हमारे बारे में"}/>
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center pt-10">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={about}
            alt="Team of Experts"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 md:pl-8 text-center md:text-left">
        <div>

          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We are a team of experts specializing in providing services with
            over 12 years of experience in documentation across different
            fields. Our approach involves analyzing problems and delivering
            instant solutions tailored to your needs.
          </p>
        </div>

          <ul className="mt-5 flex justify-center gap-6 sm:justify-start md:gap-6">
            <Link to={""} className=" bg-white rounded-full shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] w-12 h-12 cursor-pointer group flex items-center justify-center">
              <img
                className="w-8 p-1 group-hover:w-9 duration-200"
                src={linkedin}
                alt=""
              />
            </Link>

            <Link to={"https://x.com/vidhanamdocs"} className="bg-white rounded-full shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] w-12 h-12 cursor-pointer group flex items-center justify-center">
              <img
                className="w-8 p-1 group-hover:w-9 duration-200"
                src={x}
                alt=""
              />
            </Link>

            <Link to={"https://www.instagram.com/vidhanamdocs"} className="bg-white rounded-full shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] w-12 h-12 cursor-pointer group flex items-center justify-center">
              <img
                className="w-8 p-1 group-hover:w-9 duration-200"
                src={instagram}
                alt=""
              />
            </Link>

            <Link to={"https://www.facebook.com/profile.php?id=61572418605596&sk=about"} className="bg-white rounded-full shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] w-12 h-12 cursor-pointer group flex items-center justify-center">
              <img
                className="w-8 p-1 group-hover:w-9 duration-200"
                src={facebook}
                alt=""
              />
            </Link>
          </ul>

          <div className="mt-8">
            <Link
              to={"/contact"}
              onClick={() => 
                window.scroll(0, 0)
              }
              className="px-10 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
