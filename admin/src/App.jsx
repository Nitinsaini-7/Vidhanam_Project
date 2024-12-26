import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import FormData from "./pages/formData";
// import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import UsersData from "./pages/UsersData";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);
  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer/>
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>

          <hr />
          <div className="flex w-full">
            <Sidebar setToken={setToken} />

            <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my8 text-gray-600 text-base">
              <Routes>
                <Route path="/data" element={<FormData />} />
                <Route path="/usersData" element={<UsersData />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
