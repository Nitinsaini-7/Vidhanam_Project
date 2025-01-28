import React from "react";
import { TypeAnimation } from "react-type-animation";
import { hero } from "../data";


const Hero = () => {
  return (
    <section className="relative">
      <img src={hero} alt="" className="w-full lg:h-screen h-80 md:h-96 object-cover md:pt-0 pt-16" />
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
              <div className="font-semibold pt-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-teal-200 to-orange-500">
                <p className="text-3xl md:text-6xl text-white">Welcome to</p>
                <h2 className=" text-5xl md:text-8xl py-2 md:py-6 uppercase ">
                <TypeAnimation
                className="text-5xl md:text-8xl py-2 uppercase font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-teal-200 to-orange-500"
                sequence={[
                  
                  "विधानम",
                  2000, 
                  "Vidhanam",
                  2000,
                ]}
                wrapper="span"
                speed={10}
                // style={{ fontSize: "1.5em", display: "inline-block" }}
                repeat={Infinity}
              />
                </h2>
              </div>

              <TypeAnimation
                className="text-xl md:text-3xl text-white"
                sequence={[
                  
                  "Providing assistance and guidance in making Quality Documents",
                  1000,
                ]}
                wrapper="span"
                speed={40}
                
                repeat={Infinity}
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
