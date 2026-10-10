import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncCurrentUser, asyncSigninUser } from "../store/actions/userAction";
import { motion } from "framer-motion";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, reset, handleSubmit } = useForm();

  const loginHandler = async (data) => {
    dispatch(asyncSigninUser(data));
    const success = await dispatch(asyncCurrentUser());

    if (success) {
      navigate("/");
    }
    reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen flex items-center justify-center bg-white font-sans"
    >
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 shadow-xl rounded-xl overflow-hidden">
        {/* Left Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="hidden md:flex items-center justify-center bg-cover bg-center"
        >
          <div className="text-white relative text-left p-10 bg-[url(/Images/Login-Page/bg.jpg)] bg-cover bg-center bg-opacity-40 w-full h-full flex flex-col justify-center">
            <div className="w-full h-full absolute top-0 left-0 bg-black opacity-60"></div>
            <h2 className="text-3xl font-bold leading-snug z-10">Pedal into your journey</h2>
            <p className="mt-3 text-lg font-light z-10">All the gear, all the tools. Everything for your next ride.</p>
          </div>
        </motion.div>

        {/* Right Form Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          className="bg-white p-10"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-1">Welcome Back</h2>
          <p className="text-gray-500 mb-8">Login to your bicycle hub</p>

          <motion.form
            onSubmit={handleSubmit(loginHandler)}
            className="space-y-5"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                {...register("email")}
                type="email"
                placeholder="you@example.com"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative mt-1">
                <input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 cursor-pointer text-sm text-green-600"
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center justify-between"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4 text-green-600" />
                <label className="text-sm text-gray-600">Remember me</label>
              </div>
              <a href="#" className="text-sm text-green-600 hover:underline">
                Forgot password?
              </a>
            </motion.div>

            <motion.button
              type="submit"
              className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              Log in
            </motion.button>

            <motion.div
              className="text-center text-gray-400 text-sm"
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            >
              OR
            </motion.div>

            <motion.button
              type="button"
              className="w-full flex items-center cursor-pointer justify-center gap-2 border border-gray-300 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
              Continue with Google
            </motion.button>
          </motion.form>

          <motion.p
            className="mt-6 text-sm text-center text-gray-500"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Don’t have an account?{" "}
            <Link to="/Signup" className="text-green-600 hover:underline">
              Sign up
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Login;
