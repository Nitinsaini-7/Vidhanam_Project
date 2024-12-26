import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useContext } from "react";
import { toast } from 'react-toastify';
import { AuthContext } from "../context/AuthContext";
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')

  const [showPassword, setShowPassword] = useState(false);
  const {token, setToken, navigate, backendUrl} = useContext(AuthContext)

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(backendUrl + "/api/user/signup", {
        name,
        email,
        phone,
        password,
      });

      if (response.data.success) {
        setToken(response.data.token);
        
        
        localStorage.setItem("token", response.data.token);
        toast.success("Registered Successfuly");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);


  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-5">
      <div className="max-w-lg p-5 space-y-4 w-full hover:shadow-xl duration-200 border border-gray-50 text-gray-600 shadow-[rgba(17,_17,_26,_0.1)_0px_4px_12px] rounded-md ">
        <div className="text-center">
          <img src={logo} width={50} className="mx-auto" />
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Create an account
            </h3>
          </div>
        </div>

        <form onSubmit={onSubmitHandler} className="space-y-5">
          <div>
            <label className="font-medium">Name</label>
            <input
            onChange={(e)=>setName(e.target.value)} value={name}
            name="name"
              type="text"
              required
              placeholder="Name"
              className="w-full px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Email</label>
            <input
            onChange={(e)=>setEmail(e.target.value)} value={email}
            name="email"
              type="email"
              required
              placeholder="Email address"
              className="w-full px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Phone</label>
            <input
            onChange={(e)=>setPhone(e.target.value)} value={phone}
            name="phone"
              type="phone"
              required
              placeholder="Phone"
              className="w-full px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Password</label>
            <div className="relative">
              <input
              onChange={(e)=>setPassword(e.target.value)} value={password}
              name="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="Password"
                className="w-full px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-2 text-gray-500 hover:text-indigo-600"
              >
                {showPassword ?   <FontAwesomeIcon icon={faEye}/> : <FontAwesomeIcon icon={faEyeSlash}/>}
              </button>
            </div>
          </div>
          <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
            Create account
          </button>
        </form>

        <div className="text-center py-2">
          <p className="">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Signup;
