import React from "react";
import { logo } from "../data";
import { linkedin, x, facebook, instagram } from "../data";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 mt-20">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="md:block flex items-center justify-center">
              <div className="flex justify-center w-14 h-14 bg-white rounded-full items-center ">
                <img src={logo} className="w-16 p-0.5 rounded-full" alt="" />
              </div>
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed text-white sm:max-w-xs sm:text-left">
            Providing assistance and guidance in making Quality Documents
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-6">
              <li className=" bg-white rounded-full shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] w-12 h-12 cursor-pointer group flex items-center justify-center">
                <img
                  className="w-8 p-1 group-hover:w-9 duration-200"
                  src={linkedin}
                  alt=""
                />
              </li>

              <li className="bg-white rounded-full shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] w-12 h-12 cursor-pointer group flex items-center justify-center">
                <img
                  className="w-8 p-1 group-hover:w-9 duration-200"
                  src={x}
                  alt=""
                />
              </li>

              <li className="bg-white rounded-full shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] w-12 h-12 cursor-pointer group flex items-center justify-center">
                <img
                  className="w-8 p-1 group-hover:w-9 duration-200"
                  src={instagram}
                  alt=""
                />
              </li>

              <li className="bg-white rounded-full shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] w-12 h-12 cursor-pointer group flex items-center justify-center">
                <img
                  className="w-8 p-1 group-hover:w-9 duration-200"
                  src={facebook}
                  alt=""
                />
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Quick Links/त्वरित लिंक</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    to="/testimonials"
                    onClick={() => {
                      window.scroll(0, 0);
                    }}
                  >
                    Testimonials/प्रशंसापत्र
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    to="blog"
                    onClick={() => {
                      window.scroll(0, 0);
                    }}
                  >
                    Blogs/ब्लॉग्स
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    to="/faqs"
                    onClick={() => {
                      window.scroll(0, 0);
                    }}
                  >
                    Faqs/अक्सर पूछे जाने वाले प्रश्न
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    to="/about"
                    onClick={() => {
                      window.scroll(0, 0);
                    }}
                  >
                    About Us/हमारे बारे में
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    to="/contact"
                    onClick={() => {
                      window.scroll(0, 0);
                    }}
                  >
                    Contact Us/हमसे संपर्क करें
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Our Services/हमारी सेवाएँ</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    to="/will"
                    onClick={() => {
                      window.scroll(0, 0);
                    }}
                  >
                    Will/वसीयत
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    to="/gst"
                    onClick={() => {
                      window.scroll(0, 0);
                    }}
                  >
                    GST/वस्तु और सेवा कर
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    to="/rti"
                    onClick={() => {
                      window.scroll(0, 0);
                    }}
                  >
                    RTI/सूचना का अधिकार
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    to="/contracts"
                    onClick={() => {
                      window.scroll(0, 0);
                    }}
                  >
                    Contract/अनुबंध
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Helpful Links/सहायक लिंक</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    to="terms-conditions"
                    onClick={() => {
                      window.scroll(0, 0);
                    }}
                  >
                    Terms & Conditions/नियम और शर्तें
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    to="/privacy-policy"
                    onClick={() => {
                      window.scroll(0, 0);
                    }}
                  >
                    Privacy Policy/गोपनीयता नीति
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    to="/disclaimer"
                    onClick={() => {
                      window.scroll(0, 0);
                    }}
                  >
                    Disclaimer/अस्वीकरण
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Contact Us/हमसे संपर्क करें</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link className=" md:flex items-center" to="mailto:vidhanamdocs@gmail.com">
                    <FontAwesomeIcon className="text-white" icon={faEnvelope} />

                    <span className="flex-1 text-white ml-2">vidhanamdocs@gmail.com</span>
                  </Link>
                </li>

                <li>
                  <Link className="" to="tel:9220306753">
                    <FontAwesomeIcon className="text-white" icon={faPhone} />
                    <span className="flex-1 text-white ml-2">9220306753</span>
                  </Link>
                </li>

                <li>
                  <Link to="" className="">
                    <FontAwesomeIcon
                      className="text-white"
                      icon={faLocationDot}
                    />
                    <span className="flex-1 text-white ml-2">
                    Sector 119, Noida
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-white">
              <span className="block sm:inline">
                © 2024 - All Rights Reserved{" "}
              </span>

            </p>

            <p className="mt-4 text-sm text-white sm:mt-0 hover:text-gray-300 duration-200">
              <Link to={"https://shreeradhatechnology.com/"}>
                Developed by SR Techlology
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
