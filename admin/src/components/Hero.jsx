import React from "react";

const Hero = () => {
  return (
    <>
      <section className=" mx-auto max-w-screen-xl pb-4 px-4 items-center  md:px-8">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left py-10">
          <h1 className="text-gray-800 font-bold text-3xl xl:text-4xl">
          Welcome to the Admin Panel of<br />
            <span className="text-indigo-600 text-4xl lg:text-5xl">VIDHANAM</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
          Manage your application efficiently and effectively with the tools provided in this panel.
          </p>
         
        </div>
        <div className="flex-1 text-center w-full mt-4 lg:mt-0 lg:ml-3">
          <img
            src="https://i.postimg.cc/kgd4WhyS/container.png"
            className="w-full mx-auto sm:w-10/12  lg:w-full"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
