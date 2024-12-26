import React from "react";
import Title from "../components/Title";

const HowItWorks = () => {
  const data = [
    {
      num: "01",
      desc: "Fill up your personal and family details to identify you in your Will.",
    },
    {
      num: "02",
      desc: "Fill up your personal and family details to identify you in your Will.",
    },
    {
      num: "03",
      desc: "Fill up your personal and family details to identify you in your Will.",
    },
    {
      num: "04",
      desc: "Fill up your personal and family details to identify you in your Will.",
    },
  ];

  return(
    <div className="mt-14">
      <div className="text-center">

      <Title text1={"How its Work"}/>
      </div>

      <div className="mt-10">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2">
            {/* {data.map((item, index) => (
              <li key={index} className="space-y-3 rounded-md shadow-[rgba(17,_17,_26,_0.1)_0px_4px_12px] px-5 py-10">
                <div className="w-12 h-12 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-lg text-gray-800 font-semibold">
                  {item.title}
                </h4>
                <p>{item.desc}</p>
              </li>
            ))} */}
          </ul>
        </div>
    </div>
  )
};

export default HowItWorks;
