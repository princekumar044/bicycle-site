import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="bg-black text-gray-300 py-10">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl font-bold text-white">
              Bicycle<span className="text-red-500">Hub</span>
            </h1>
            <p className="mt-3 text-gray-400 text-sm">
              HERO is the largest online bike store, bringing you high-quality &
              powerful bikes.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-lg font-semibold text-white mb-2">
              Quick Links
            </h2>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/products" className="transition-colors">
                  Bicycle
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/login" className="transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-lg font-semibold text-white mb-2">Contact</h2>
            <p className="text-gray-400 text-sm">PrinceKumar001301@gmail.com</p>
            <p className="text-gray-400 text-sm mb-4">+91 8409760237</p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-500">
            © 2025 Hero. All rights reserved. - Design and Developed by Pranit
            Daphale
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 text-sm">
              Terms & Conditions
            </a>
          </div>
        </motion.div>
      </footer>
    </>
  );
};

export default Footer;
