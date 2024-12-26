import React from "react";
import will from "../../assets/images/will.webp";
import gst from "../../assets/images/gst.webp";
import rti from "../../assets/images/rti.webp";
import ec_bc from "../../assets/images/ec&bc.webp";
import { useNavigate } from "react-router-dom";
import Title from "../Title";

const Essential = () => {
  const navigate = useNavigate();
  const items = [
    {
      title: "WILL",
      image: will,
      description: "Importance of creation of will AND What can be the procedure?",
      path: "/will",
    },
    {
      title: "Goods and Services Tax (GST)",
      image: gst,
      description: "Importance of filling GST and how can it be done?",
      path: "/gst",
    },
    {
      title: "Right to Information (RTI)",
      image: rti,
      description: "What is RTI and How can it get done?",
      path: "/rti",
    },
    {
      title: "Employment contract & Business contract",
      image: ec_bc,
      description: "What is the use of ITR and what is the procedure to fill this up?",
      path: "/employmentContracts",
    },
  ];

  return (
    <div className="mt-10">
        
      <div className="text-center">
      <Title text1={"Heading"}/>
      </div>
    <div className="flex flex-wrap justify-center gap-6 mt-10">
      {items.map((item, index) => (
        <div
          key={index}
          className="w-72 h-96 shadow-lg rounded-lg flex flex-col items-center justify-between text-center relative overflow-hidden"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.4)", // Dimmed effect for background
            }}
          ></div>

          {/* Fog effect overlay */}
          <div className="absolute inset-0 bg-gray-50 bg-opacity-70"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center h-full justify-between">
            {/* Title at the Top */}
            <h1 className="text-2xl font-bold mt-4 text-black">{item.title}</h1>

            {/* Description at the Center */}
            <p className=" text-black text-lg font-semibold mx-2">{item.description}</p>

            {/* Button at the Bottom */}
            <button
              className="bg-indigo-600 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition mb-4"
              onClick={() => navigate(item.path)}
            >
              Know More
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Essential;
