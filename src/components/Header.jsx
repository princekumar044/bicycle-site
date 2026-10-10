import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import { motion, useAnimationControls } from "framer-motion";
import { useSelector } from "react-redux";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const logoControls = useAnimationControls();
  const navControls = useAnimationControls();
  const mobileIconControls = useAnimationControls();

  const toggleMenu = () => setIsOpen(!isOpen);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalCartItems = cartItems.reduce((total, item) => total + item.qty, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const animateTimeline = async () => {
      await logoControls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          ease: "easeInOut",
        },
      });

      await navControls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          ease: "easeInOut",
        },
      });

      await mobileIconControls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          ease: "easeInOut",
        },
      });
    };

    animateTimeline();
  }, []);

  return (
    <nav
      className={`w-full ${
        isSticky ? "fixed top-0 left-0 bg-black shadow-md" : "absolute"
      } flex justify-center py-4 z-50 transition-all duration-500 ease-in-out`}
    >
      <div
        className={`transition-all duration-500 ease-in-out ${
          isSticky
            ? "w-full max-w-[1280px] px-6 rounded-none"
            : "w-[95%] md:w-[90%] px-8 rounded-full"
        } bg-black py-4 flex items-center justify-between space-x-8`}
      >
        {/* Animated Logo */}
        <motion.h1
          className="text-white md:text-2xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={logoControls}
        >
          <Link to="/">Bicycle Hub</Link>
        </motion.h1>

        {/* Animated Desktop Nav */}
        <motion.ul
          className="hidden md:flex items-center space-x-6"
          initial={{ opacity: 0, y: -20 }}
          animate={navControls}
        >
          <li>
            <NavLink
              to="/"
              className="text-white font-semibold hover:text-gray-300 transition duration-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="text-white font-semibold hover:text-gray-300 transition duration-300"
            >
              Bicycle
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-white font-semibold hover:text-gray-300 transition duration-300"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-white font-semibold hover:text-gray-300 transition duration-300"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <div className="relative">
              <NavLink
                to="/cart"
                className="text-green-500 font-semibold hover:text-gray-300 transition duration-300"
              >
                <FiShoppingCart className="text-xl" />
              </NavLink>
              {totalCartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalCartItems}
                </span>
              )}
            </div>
          </li>
          <li>
            <NavLink
              to="/signup"
              className="text-white font-semibold hover:text-gray-300 transition duration-300"
            >
              Sign Up
            </NavLink>
          </li>
        </motion.ul>

        {/* Cart Icon (Mobile) */}
        <div className="relative md:hidden">
          <NavLink
            to="/cart"
            className="text-green-500 font-semibold hover:text-gray-300 transition duration-300"
          >
            <FiShoppingCart className="text-xl" />
          </NavLink>
          {totalCartItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {totalCartItems}
            </span>
          )}
        </div>

        {/* Animated Mobile Icon */}
        <motion.div
          className="md:hidden text-white text-2xl cursor-pointer transition duration-300"
          onClick={toggleMenu}
          initial={{ opacity: 0, y: -20 }}
          animate={mobileIconControls}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </motion.div>

        {/* Mobile Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998] md:hidden"
            onClick={toggleMenu}
          />
        )}

        {/* Mobile Menu Slide In */}
        <div
          className={`fixed top-0 right-0 h-full w-[75%] sm:w-[60%] bg-black text-white transform ${
            isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          } transition-all duration-500 ease-in-out p-8 flex flex-col gap-6 z-[999]`}
        >
          <button className="self-end text-3xl" onClick={toggleMenu}>
            <FiX />
          </button>
          <NavLink
            to="/"
            onClick={toggleMenu}
            className="hover:text-gray-300 font-semibold transition duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            onClick={toggleMenu}
            className="hover:text-gray-300 font-semibold transition duration-300"
          >
            Bicycle
          </NavLink>
          <NavLink
            to="/about"
            onClick={toggleMenu}
            className="hover:text-gray-300 font-semibold transition duration-300"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={toggleMenu}
            className="hover:text-gray-300 font-semibold transition duration-300"
          >
            Contact
          </NavLink>
          <NavLink
            to="/signup"
            onClick={toggleMenu}
            className="hover:text-gray-300 font-semibold transition duration-300"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
