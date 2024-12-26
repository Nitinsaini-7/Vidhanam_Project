import React from "react";
import Title from "./Title";
import { essentialData } from "../data";

const Essential = () => {
 
  return (
    <div className="mt-14">
      <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
        <div>
          <Title text1={"Why you should make your Will"} />
        </div>
        <div className="mt-10">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-2">
            {essentialData.map((item, index) => (
              <li
                key={index}
                className="space-y-3 rounded-md shadow-[rgba(17,_17,_26,_0.1)_0px_4px_12px] px-5 py-10"
              >
                <div className="w-12 h-12 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-lg text-gray-800 font-semibold">
                  {item.title}
                </h4>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Essential;
