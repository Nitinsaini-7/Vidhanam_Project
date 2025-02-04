import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="p-6 my-5 bg-indigo-600 text-gray-50 ">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">
              🔥 Exclusive Offer on Legal Documents! 🔥
            </h2>
            <p className="text-xl mt-1">
              💰 Prices Starting at Just{" "}
              <span className="font-semibold">₹199</span>!
            </p>
            <div className="mt-4">
              <p className="">✅ Quick & Easy Downloads</p>
              <p className="">✅ Professionally Drafted Documents</p>
              <p className="">✅ 100% Legally Compliant</p>
            </div>
            <Link to={"/pricing"} onClick={() => window.scrollTo(0, 0)}>
              <button className="mt-4 bg-yellow-400 text-black font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300">
                Grab Your Discount Now!
              </button>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <h2 className="text-center text-yellow-400 text-5xl md:text-7xl py-2 tracking-tighter font-bold">
              Up to {""}
              <br className="sm:hidden" />
              50% Off
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
