import React from "react";
// import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import {  faUsers, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

// import { Link } from "react-router-dom";

const Sidebar = ({setToken}) => {

    const navigation = [
      {
        
        name: "Users",
        route:"/usersData",
        icon: (
          <FontAwesomeIcon icon={faUsers}/>
        ),
      },
      {
        
        name: "Contact",
        route:"/data",
        icon: (
          <FontAwesomeIcon icon={faAddressCard}/>
        ),
      },
        
      ];
    
      const navsFooter = [
      
      
        {
          
          name: "Logout",
          icon: (
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          ),
        },
      ];

  return (
    <nav className="w-20 bg-slate-100 min-h-screen space-y-8">
        <div className="flex fixed flex-col justify-center w-20 bg-slate-200 h-full">
          <div className="h-20 flex items-center justify-center">
            <a className="flex-none">
              <img
                src="https://floatui.com/logo-letter.png"
                width={35}
                className="mx-auto"
              />
            </a>
          </div>
          <div className="flex-1 flex flex-col h-full">
            <ul className="px-4 text-sm font-medium flex-1">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <NavLink
                    to={item.route}
                    className="relative my-2 flex items-center justify-center text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150 group"
                  >
                    <div className="text-gray-500">{item.icon}</div>
                    <span className="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block  duration-150">
                      {item.name}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
            <div>
              <ul className="px-4 pb-4 text-sm font-medium">
                {navsFooter.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      className="relative cursor-pointer flex items-center justify-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150 group"
                    >
                      <div onClick={()=>setToken('')} className="text-gray-500">{item.icon}</div>
                      <span className="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">
                        {item.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Sidebar;
