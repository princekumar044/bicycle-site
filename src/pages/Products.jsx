import React from 'react'
import { Card } from '../components/Card'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1,  transition: { duration: 1 } },
};

const Products = () => {
  return (
    <motion.div
      className="w-full font-sans text-black bg-white"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* Hero Banner */}
      <motion.section
        className="w-full h-[500px] bg-cover bg-center relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 bg-[url(Images/About-Page/bg4.jpg)]"
        variants={fadeInUp}
      >
        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-50"></div>
        <div className="text-white z-10 mb-6 md:mb-0 text-center md:text-left">
          <h1 className="text-3xl mt-30 md:text-5xl font-bold">
            SIGNATURE<br />PRODUCT
          </h1>
        </div>
        <div className="text-white z-10 text-center md:text-right">
          <p className="text-base  md:text-lg">
            Special Offers<br />July 25 - 31
          </p>
          <button className="mt-2 cursor-pointer bg-white text-black px-4 md:px-6 py-2 text-sm font-semibold">
            Off Until 25%
          </button>
        </div>
      </motion.section>

      <hr className="text-white" />

      {/* Gender Categories */}
      <motion.section
        className="flex flex-col md:flex-row w-full h-auto md:h-[450px]"
        variants={fadeInUp}
      >
        {/* Men's Section */}
        <motion.div
          className="w-full md:w-1/2 h-[300px] md:h-full relative overflow-hidden"
          
        >
          <img
            src="Images/About-Page/bg11.jpg"
            alt="Men"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <h2 className="text-white text-2xl md:text-3xl font-semibold">
              Men's Bicycle
            </h2>
          </div>
        </motion.div>

        {/* Women's Section */}
        <motion.div
          className="w-full md:w-1/2 h-[300px] md:h-full relative overflow-hidden"
          
        >
          <img
            src="Images/About-Page/bg10.jpg"
            alt="Women"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <h2 className="text-white text-2xl md:text-3xl font-semibold">
              Women's Bicycle
            </h2>
          </div>
        </motion.div>
      </motion.section>

      {/* Product Lineup */}
      <motion.section
        className="text-center py-14 px-4 md:px-16"
        variants={fadeInUp}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">BICYCLE'S</h2>
        <hr className="my-10" />

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {/* Product Card 1 */}
          <Card />
          {/* Add more <Card />s as needed */}
        </motion.div>
      </motion.section>
    </motion.div>
  )
}

export default Products
