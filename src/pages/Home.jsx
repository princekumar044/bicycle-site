
import { Card } from "../components/Card";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

const Home = () => {
   const leftText = useAnimationControls();
  const bikeImage = useAnimationControls();
  const rightTag = useAnimationControls();
  const bottomTitle = useAnimationControls();

  useEffect(() => {
    const sequence = async () => {
      await leftText.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      });

      await bikeImage.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.7, ease: "easeOut" },
      });

      await rightTag.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      });

      await bottomTitle.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
      });
    };

    sequence();
  }, []);
  return (
    <main className="overflow-x-hidden">
{/* navigation */}


      {/* home section */}
    <section className="relative w-full min-h-screen bg-[#1d1f20] flex items-center justify-center overflow-hidden px-4 md:px-8">
      {/* Left Content */}
      <motion.div
        className="absolute left-4 top-10 md:top-1/2 text-white text-xs md:text-sm space-y-2 md:space-y-3 max-w-[200px]"
        initial={{ opacity: 0, y: -30 }}
        animate={leftText}
      >
        <p className="uppercase pt-20 opacity-90 md:text-2xl font-semibold">
          Up to €30 OFF
        </p>
        <p className="opacity-70 leading-snug">
          Now & Now+ <br /> Instant Cameras
        </p>
       
          <Link  className="underline cursor-pointer hover:text-gray-300 transition text-xs" to="/products">
          Explore Bicycle →
          </Link>
       
      </motion.div>

      {/* Center Bike Image */}
      <motion.div
        className="z-10 w-full flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={bikeImage}
      >
        <img
          src="/Images/Home_page/Hero-bg.png"
          alt="Bike"
          className="w-[90%] max-w-[700px] object-contain"
        />
      </motion.div>

      {/* Right Tag */}
      <motion.div
        className="absolute right-4 bottom-36 md:bottom-32 bg-[#2b2d2f] text-white p-2 md:p-3 rounded-md flex items-center gap-2 md:gap-3"
        initial={{ opacity: 0, x: 80 }}
        animate={rightTag}
      >
        <img
          src="/Images/Home_page/hero-img-2.png"
          alt="Tag"
          className="w-8 h-8 md:w-20 md:h-20 object-cover rounded-sm"
        />
        <div>
          <p className="text-xs md:text-sm font-semibold leading-tight">
            SHESH - CLASSIC SERIES BLACK
          </p>
          
            <Link  className="text-xs underline cursor-pointer hover:text-gray-300" to="/products"> Shop Now
            </Link>
           
          
        </div>
      </motion.div>

      {/* Bottom Slogan */}
      <motion.div
        className="absolute bottom-6 w-full text-center px-2"
        initial={{ opacity: 0, y: 40 }}
        animate={bottomTitle}
      >
        <h1 className="text-white text-3xl md:text-5xl lg:text-8xl font-bold tracking-tight leading-tight">
          RIDE BEYOND <span className="text-white">LIMITS.</span>
        </h1>
      </motion.div>
    </section>

      {/* section 2 */}
       <section className="relative w-full bg-[#efefec] flex flex-col justify-center items-center px-4 md:px-10 overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className="absolute top-16 md:top-24 text-center px-4"
      >
        <h1 className="text-gray-400 text-2xl md:text-7xl font-extrabold tracking-wider uppercase leading-tight">
          Ergonomic <br className="md:hidden" />
          Control At Hand
        </h1>
      </motion.div>

      {/* Center Bike Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="z-10 w-full flex justify-center items-center"
      >
        <img
          src="/Images/Home_page/img-2.png"
          alt="Ergo Handlebar Bike"
          className="md:w-[50%] mt-40"
        />
      </motion.div>

      {/* Bottom Left Description */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="hidden md:block absolute bottom-6 left-4 md:left-10 text-gray-800 text-xs md:text-sm max-w-[260px]"
      >
        <p className="font-semibold uppercase mb-1">
          Your comfort and cycling <br className="hidden md:block" />
          experience is our priority
        </p>
        
          <Link className="mt-1 underline cursor-pointer hover:text-gray-600 transition text-xs" to="/products">
          
          Ergo Classic Series →
          </Link>
      
      </motion.div>

      {/* Bottom Right Tag */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="hidden md:block absolute bottom-6 right-4 md:right-10 bg-white text-black p-2 md:p-3 rounded-md shadow-md flex items-center gap-2 md:gap-3"
      >
        <img
          src="/Images/Home_page/white.png"
          alt="Bike Tag"
          className="w-8 h-8 md:w-25 md:h-25 object-cover rounded-sm"
        />
        <div>
          <p className="text-xs md:text-sm font-semibold leading-tight">
            SHESH - ERGO CLASSIC WHITE
          </p>
          
            <Link  className="text-xs cursor-pointer underline hover:text-gray-600" to="/products">
            
            Shop Now
            </Link>
        
        </div>
      </motion.div>
    </section>
      {/* section3 */}
         <section className="w-full min-h-[60vh] bg-[#f4f4f462] backdrop-blur-3xl flex flex-col justify-center items-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className="text-center text-gray-300 font-extrabold uppercase leading-tight"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-8xl tracking-wide flex flex-wrap justify-center items-center gap-2">
          <span>Precision</span>
          <motion.img
            src="/Images/Home_page/wheel.png"
            alt="Cyclist"
            className="w-10 md:w-20 object-cover rounded-sm inline-block"
            initial={{ opacity: 0, rotate: -90 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <span>Steering,</span>
        </h1>

        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Ultimate Comfort
        </motion.h2>
      </motion.div>
    </section>
      {/* products */}
          <section className="text-center py-14 px-6 md:px-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">PRODUCTS LINEUP</h2>
      <hr className="my-10" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        <Card limit={4} />
      </div>

      <div className="mt-10">
        <Link className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition" to="/products">
         
            View More Products
         
        </Link>
      </div>
    </section>
      {/* section 4 */}
  <section className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image */}
      <img
        src="/Images/Home_page/img-3.jpg"
        alt="Cyclist Riding"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-80 z-10" />

      {/* Central Slogan & Icon */}
      <motion.div
        className="relative z-20 text-center text-white px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        {/* Speedometer-style arc */}
        <motion.div
          className="w-20 h-20 md:w-28 md:h-28 border-t-4 border-white rounded-full mx-auto mb-3 md:mb-4"
          initial={{ opacity: 0, rotate: -90 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        />

        {/* Slogan */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-[80px] font-extrabold uppercase tracking-tight leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          Ride Beyond <br /> Limits.
        </motion.h1>
      </motion.div>
    </section>

      {/* section 5 */}
     <section className="bg-black text-white py-12 px-4 md:px-16 w-full">
      {/* Heading and Description */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <h1 className="text-3xl md:text-6xl font-extrabold uppercase leading-tight">
          Ultimate <br />
          <span className="text-gray-400">Comfort.</span>
        </h1>

        {/* Description */}
        <p className="text-sm md:text-[20px] md:max-w-[50%] text-gray-300 leading-relaxed">
          Take control on every turn. With responsive brakes and intuitive
          handling, our bikes offer race-proven geometry for superior
          performance.
        </p>
      </motion.div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <motion.div
          className="bg-[#1b1b1b] p-6 rounded-lg flex flex-col justify-between min-h-[250px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <div className="mb-4 text-xl md:text-4xl">📐</div>
            <p className="text-sm font-semibold text-white">
              Experience cutting-edge engineering with aerodynamically optimized frames
            </p>
          </div>
          
            <Link className="mt-4 text-left cursor-pointer text-sm underline hover:text-gray-400" to="/products">
            
            Explore Performance Bikes →
            </Link>
          
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-[#1b1b1b] p-6 rounded-lg flex flex-col justify-between min-h-[250px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div>
            <div className="mb-4 text-xl md:text-4xl">🧩</div>
            <p className="text-sm font-semibold text-white">
              Ergonomic designs and shock-absorbing technology
            </p>
          </div>
       
            <Link className="mt-4 text-left cursor-pointer text-sm underline hover:text-gray-400" to="/products">
            
            Explore Bicycle →
            </Link>
         
        </motion.div>

        {/* Card 3 (with image) */}
        <motion.div
          className="relative p-6 rounded-lg bg-[url(/Images/Home_page/img-4.jpg)] bg-cover bg-center flex flex-col justify-between min-h-[250px]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute w-full h-full bg-black top-0 left-0 opacity-70" />
          <p className="text-xs z-10 font-bold uppercase text-gray-400 mb-2">
            Race-proven geometry <br /> for total control on any terrain
          </p>
          <div className="text-3xl md:text-[60px] font-bold mb-2 z-10">99.8%</div>
          <p className="text-sm text-gray-300 mb-4 z-10">Precision</p>
        </motion.div>
      </div>
    </section>

      {/* section 6 */}

     
    <section className="w-full bg-black text-white py-14 px-4 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      {/* Left: Text Content */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-6xl font-extrabold uppercase leading-tight mb-3">
          Building <br />
          <span className="text-gray-400">Quality For You</span>
        </h2>

        <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed">
          Precision engineering meets premium craftsmanship. Our expertly welded frame ensures a seamless, strong, and long-lasting structure. Designed for maximum durability, it delivers unparalleled reliability and safety — minimizing the risk of fractures.
        </p>

        <div className="text-white text-3xl md:text-8xl font-bold mb-1">99.8%</div>
        <p className="text-xs md:text-[18px] text-gray-400">Precision and Performance.</p>
      </motion.div>

      {/* Right: Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
       <img
  src="/Images/Home_page/gear.png"
  alt="Gear Part"
  className="w-[85%] max-w-[700px] object-contain animate-spin"
/>
      </motion.div>
    </section>
    
    <section className="w-full bg-[#1d1d1d] backdrop-blur-2xl text-white font-semibold text-[100px]">
      <marquee behavior="smooth" direction="left">
 • Premium Bicycles for Every Terrain • Road Bikes • Mountain Bikes • Urban Cruisers • Shop Now!
</marquee>
    </section>
    </main>
  );
};

export default Home;
