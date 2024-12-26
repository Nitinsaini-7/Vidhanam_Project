import React from "react";
import hero from "../assets/images/h1.jpg";
import { TypeAnimation } from "react-type-animation";
import Stats from "./Stats";

const Hero = () => {
  return (
    <section className="relative ">
      <img src={hero} alt="" className="w-full object-cover md:mt-0 mt-14" />
      <div className="absolute   rounded-md"></div>

      <div
        className=" absolute inset-0 flex justify-center items-center "
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 16%, rgba(0,0,0,1) 100%)",
        }}
      >
        <div>

        <div className="flex items-center justify-center text-center">
          <div className="">
            <div className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-500 to-red-500">
              <p className="text-3xl md:text-6xl text-white">Welcome to</p>
              <h2 className=" text-5xl md:text-8xl py-2 uppercase ">Vidhanam</h2>
            </div>

          <TypeAnimation
            className="text-xl md:text-3xl text-white"
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Secure your family with a legal Will.",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Secure your family with a binding document",
              1000,
            ]}
            wrapper="span"
            speed={40}
            // style={{ fontSize: "1.5em", display: "inline-block" }}
            repeat={Infinity}
            />
            </div>
        </div>
      {/* <Stats/> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
