import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { asyncRegisterUser } from "../store/actions/userAction";
import { motion } from "framer-motion";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const registerHandler = (data) => {
    data.id = nanoid();
    localStorage.setItem("users", JSON.stringify(data));
    dispatch(asyncRegisterUser(data));
    navigate("/");
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-4 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="w-full max-w-6xl grid grid-cols-1 mt-12 md:grid-cols-2 bg-white shadow-xl rounded-xl overflow-hidden"
        initial={{ y: 30 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Left Image Panel */}
        <motion.div
          className="hidden md:flex items-center justify-center"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative bg-[url(/Images/SignUp-Page/bg.jpg)] bg-cover bg-center bg-opacity-50 text-white text-left p-10 w-full h-full flex flex-col justify-center">
            <div className="w-full h-full absolute top-0 left-0 bg-black opacity-60"></div>
            <h2 className="text-3xl font-bold leading-snug z-10">Pedal into your journey</h2>
            <p className="mt-3 text-lg font-light z-10">
              All the gear, all the tools. Everything for your next ride.
            </p>
          </div>
        </motion.div>

        {/* Right Registration Form */}
        <motion.div
          className="p-10"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-1">Create Account</h2>
          <p className="text-gray-500 mb-8">Join the bicycle hub today</p>

          <form onSubmit={handleSubmit(registerHandler)} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                {...register("fullname")}
                placeholder="John Doe"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                {...register("email")}
                placeholder="you@example.com"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("password")}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-sm text-green-600 cursor-pointer"
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" className="h-4 w-4 text-green-600" />
              <label className="text-sm text-gray-600">
                I agree to the{" "}
                <a href="#" className="text-green-600 hover:underline">
                  Terms & Conditions
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition"
            >
              Sign Up
            </button>

            <div className="text-center text-gray-400 text-sm">OR</div>

            <button
              type="button"
              className="w-full cursor-pointer flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-green-600 hover:underline">
              Log in
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SignUp;
