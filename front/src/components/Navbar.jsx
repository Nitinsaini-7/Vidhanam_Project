import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../data";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [state, setState] = useState(false);

  const { navigate, token, setToken } = useContext(AuthContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
  };

  // Replace  paths with your paths
  const navigation = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav
      style={{ background: "" }}
      className=" bg-indigo-100 backdrop-blur-md bg-opacity-70 shadow-lg w-full py-0 z-50 fixed top-0 left-0 md:text-sm"
    >
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-2 md:py-3 md:block">
          <Link
            onClick={() => {
              window.scroll(0, 0);
            }}
            to="/"
          >
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <img src={logo} className="w-6" alt="Float UI logo" />
            </div>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  window.scroll(0, 0);
                }}
                className=" hover:text-indigo-600 text-lg duration-200"
              >
                <NavLink
                  to={item.path}
                  onClick={() => setState(false)}
                  className="block"
                >
                  <p>{item.title}</p>
                  <hr className="w-4/4 border-none h-1 bg-indigo-600 hidden" />
                </NavLink>
              </li>
            ))}
            <li className="hover:text-indigo-600 text-lg duration-200">
              {
                <NavLink to={"/pricing"} onClick={() => setState(false)}>
                  <p>Pricing</p>
                  <hr className="w-4/4 border-none h-1 bg-indigo-600 hidden" />
                </NavLink>
              }
            </li>
            <p></p>
            <span className="hidden w-px h-6 bg-gray-300 md:block"></span>
            <div className="">
              {token ? (
                <button
                  onClick={logout}
                  className="bg-red-500 flex gap-2 items-center justify-center p-2 text-white rounded-md"
                >
                  Logout{" "}
                  <FontAwesomeIcon
                    className="text-white rounded-full"
                    icon={faArrowRightFromBracket}
                  />
                </button>
              ) : (
                <div className="space-y-3 items-center gap-4 md:flex md:space-y-0">
                  <li>
                    <Link
                      to={"/login"}
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
                      to={"/signup"}
                      onClick={() => {
                        window.scroll(0, 0);
                      }}
                      className="block p-2 px-5 font-medium text-center text-white bg-indigo-600 duration-200 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline"
                    >
                      Sign in
                    </Link>
                  </li>
                </div>
              )}
              <div></div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
