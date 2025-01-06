import React from "react";
import hero from "../assets/images/h1.jpg";
import { TypeAnimation } from "react-type-animation";

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
        <div className="flex items-center justify-center text-center">
          <div className="">
            <div className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-500 to-red-500">
              <p className="text-3xl md:text-6xl text-white">Welcome to</p>
              <h2 className=" text-5xl md:text-8xl py-2 uppercase ">
                Vidhanam
              </h2>
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
      </div>
      {/* <div
          className="absolute bg-gradient-to-t from-slate-900 to-slate-50 inset-0 m-auto max-w-xs  sm:max-w-md md:max-w-lg"
          // style={{
          //   background:
          //     "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          // }}
        ></div> */}
    </section>
  );
};

export default Hero;
