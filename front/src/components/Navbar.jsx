import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { logo, menuBar, closeBar } from "../data";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [state, setState] = useState(false);

  const { navigate, token, setToken } = useContext(AuthContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
  };

  const navigation = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className="bg-indigo-200 backdrop-blur-md bg-opacity-70 shadow-lg w-full py-0 z-50 fixed top-0 left-0 md:text-sm"
    >
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-2 md:block">
          {/* User Icon on Mobile View */}
          

          {/* Logo */}
          <Link
            onClick={() => {
              window.scroll(0, 0);
            }}
            to="/"
          >
            <div className="w-16 rounded-full flex items-center justify-center">
              <img
                src={logo}
                className="md:w-14 w-12 rounded-full"
                alt="Float UI logo"
              />
            </div>
          </Link>

          {/* Menu Toggle Button for Mobile */}
          <div className="md:hidden flex">
          {token && (
            <div className=" group relative cursor-pointer mr-4">
            <div className="flex items-center justify-center rounded-full w-10 h-10 bg-gray-50">
              <FontAwesomeIcon icon={faUser} className="text-lg" />
            </div>

            <div className="invisible absolute z-50 flex w-full items-center justify-center flex-col bg-gray-100 rounded-md px-10 text-gray-800 shadow-xl group-hover:visible">
              <button
                onClick={logout}
                className="py-2 font-semibold text-gray-500 hover:text-red-500 md:mx-2"
              >
                Logout
              </button>
            </div>
          </div>
          )}
            <button
              className="text-gray-500 flex items-center justify-center hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <img src={closeBar} alt="Close Menu" className="w-6" />
              ) : (
                <img src={menuBar} alt="Open Menu" className="w-8" />
              )}
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center text-center md:h-auto h-screen space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  window.scroll(0, 0);
                }}
                className="hover:text-indigo-600 text-lg duration-200"
              >
                <NavLink
                  to={item.path}
                  onClick={() => setState(false)}
                  className="block"
                >
                  <p>

                  {item.title}
                  </p>
                <hr className="w-4/4 border-none h-1 bg-indigo-600 hidden" />
                </NavLink>
              </li>
            ))}

            <li className="hover:text-indigo-600 text-lg duration-200">
              <NavLink
                to="/pricing"
                onClick={() => {setState(false);
                  window.scroll(0, 0);
                }}
                className="block"
              >
                <p>

                Download Docs
                </p>
              <hr className="w-4/4 border-none h-1 bg-indigo-600 hidden" />
              </NavLink>
            </li>

            <div className="md:pt-0 pt-72">
              {token ? (
                <div className="hidden md:block group relative cursor-pointer">
                  <div className="flex items-center justify-center rounded-full w-10 h-10 bg-gray-50">
                    <FontAwesomeIcon icon={faUser} className="text-lg" />
                  </div>

                  <div className="invisible absolute z-50 flex w-full items-center justify-center flex-col bg-gray-100 rounded-md px-10 text-gray-800 shadow-xl group-hover:visible">
                    <button
                      onClick={logout}
                      className="py-2 font-semibold text-gray-500 hover:text-red-500 md:mx-2"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 items-center gap-4 md:flex md:space-y-0">
                  <li>
                    <Link
                      to="/login"
                      onClick={() => {
                        window.scroll(0, 0);
                      }}
                      className="block p-2 px-5 font-medium text-center bg-white text-gray-700 duration-200 hover:text-indigo-600 border rounded-lg md:border-none"
                    >
                      Log in
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signup"
                      onClick={() => {
                        window.scroll(0, 0);
                      }}
                      className="block p-2 px-5 font-medium text-center text-white bg-indigo-600 duration-200 hover:bg-indigo-500 rounded-lg"
                    >
                      Sign up
                    </Link>
                  </li>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
