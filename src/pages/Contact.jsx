import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen overflow-x-hidden grid grid-cols-1 md:grid-cols-2">
      {/* Left Side */}
      <motion.div
        className="bg-[#111] text-white flex flex-col justify-center items-center px-6 py-10"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
  className="text-3xl mt-[40px] md:mt-20 md:text-6xl font-light text-center leading-snug"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, delay: 0.3 }}
>
  We’d love to
  <br /> hear from you
</motion.h2>


        <motion.div
          className="mt-12 flex md:flex-nowrap justify-center gap-4 md:space-x-4"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <motion.div className="w-52 h-52 sm:w-72 sm:h-72 md:w-[400px] md:h-[400px] border-[1px] border-gray-500 rounded-full" />
          <motion.div className="w-52 h-52 sm:w-72 sm:h-72 md:w-[400px] md:h-[400px] border-[1px] border-dashed border-gray-500 rounded-full" />
          <motion.div className="w-52 h-52 sm:w-72 sm:h-72 md:w-[400px] md:h-[400px] border-[1px] border-gray-500 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="bg-[#f5f5f5] z-10 text-black px-6 md:px-10 py-16 flex flex-col justify-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h3
          className="text-2xl md:text-6xl font-light mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Contact us
        </motion.h3>

        <motion.form
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Enter your first name"
              className="border-b border-gray-400 bg-transparent focus:outline-none pb-2"
            />
            <input
              type="text"
              placeholder="Enter your last name"
              className="border-b border-gray-400 bg-transparent focus:outline-none pb-2"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="border-b border-gray-400 bg-transparent focus:outline-none pb-2"
            />
            <input
              type="text"
              placeholder="Enter your phone number"
              className="border-b border-gray-400 bg-transparent focus:outline-none pb-2"
            />
          </div>
          <textarea
            rows="4"
            placeholder="Enter your message"
            className="w-full border-b border-gray-400 bg-transparent focus:outline-none pb-2"
          />
          <button
            type="submit"
            className="text-black border-b border-black pb-1 w-fit hover:opacity-70"
          >
            Submit →
          </button>
        </motion.form>

        <motion.div
          className="mt-12 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p className="mb-2 text-gray-600">EMAIL US</p>
          <Link to="mailto:pranitworkspace@gmail.com" className="text-black font-medium break-all">
            PrinceKumar@gmail.com
          </Link>
        </motion.div>

        <motion.div
          className="mt-10 text-xs text-gray-500 flex flex-wrap gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span className="break-all">PrinceKumar@gmail.com</span>
          <span>
            <Link to="#" target="blank">Instagram</Link>
          </span>
          <span>
            <Link to="https://www.linkedin.com/in/princekrcoder/" target="blank">LinkedIn</Link>
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
