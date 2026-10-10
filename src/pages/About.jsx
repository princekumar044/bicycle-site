
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};
const About = () => {
  return (
      <div className="font-sans w-full">
      {/* Top Section */}
      <div className="bg-[#1a1a1a] text-white px-6 md:px-20 py-30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[url('/Images/About-Page/bg1.jpg')] bg-no-repeat bg-cover blur-md opacity-30 rotate-12 -z-10" />

        <motion.div
          className="grid md:grid-cols-2 gap-10 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Images */}
          <motion.div className="space-y-4" variants={fadeUp} custom={1}>
            <img
              src="/Images/About-Page/bg2.jpg"
              alt="Speaker"
              className="rounded-md w-full"
            />
            <div className="grid grid-cols-2 gap-4">
              <motion.img
                src="/Images/About-Page/bg4.jpg"
                alt="Speaker 2"
                className="rounded-md"
                variants={fadeUp}
                custom={2}
              />
              <motion.img
                src="/Images/About-Page/bg5.jpg"
                alt="Audience"
                className="rounded-md"
                variants={fadeUp}
                custom={3}
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div variants={fadeUp} custom={4}>
            <h2 className="text-white text-4xl font-bold mb-6">
              About Bicycle Hub
            </h2>
            <p className="text-gray-300 mb-6 text-[16px] leading-[1.8]">
              Bicycle Hub, your ultimate destination for everything cycling.
              Whether you’re a seasoned rider, a daily commuter, or just
              beginning your biking journey, we’re here to support and empower
              your ride. At Bicycle Hub, we believe that cycling is more than
              just transportation — it’s a lifestyle. We bring together a
              passionate community of riders, top-tier brands, expert advice,
              and innovative gear to help you explore the world on two wheels.
              From curated events and educational workshops to product showcases
              and riding groups, we offer an inclusive space for connection,
              growth, and adventure.
            </p>

            <h1 className="text-white text-3xl font-bold mt-6">Why Bicycle Hub?</h1>
            <ul className="flex flex-col gap-2 mt-4">
              <li>🛠️ Expert tips,</li>
              <li>🚴 Trusted by thousands of cyclists nationwide </li>
              <li>🧰 Gear guides, and maintenance support</li>
              <li>🌍 Community-driven events and rides</li>
              <li>🔧 Personalized recommendations based on your riding</li>
            </ul>

            <motion.div className="flex mt-20 gap-4" variants={fadeUp} custom={5}>
              <div className="bg-white text-black px-5 py-3 rounded-[10px] text-sm font-semibold">
                <Link to="/products">View Products</Link>
              </div>
              <div className="bg-white text-black px-5 py-3 rounded-[10px] text-sm font-semibold">
                <Link to="/contact">Contact</Link>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Captured Images */}
      <div className="bg-[#f6f6f6] px-6 md:px-20 py-20">
        <motion.h2
          className="text-black text-4xl font-bold mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Images That Captured
        </motion.h2>

        <motion.div
          className="grid grid-cols-3 md:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {["bg1", "bg2", "bg9", "bg4", "bg5", "bg6"].map((img, i) => (
            <motion.img
              key={img}
              src={`/Images/About-Page/${img}.jpg`}
              className={`rounded-md ${img === "bg9" ? "row-span-2 h-[200px] object-cover" : ""}`}
              alt="past"
              variants={fadeUp}
              custom={i + 1}
            />
          ))}
        </motion.div>
      </div>

      {/* Closing Note */}
      <motion.div
        className="px-6 md:px-20 py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <p className="text-black text-[18px] md:text-lg max-w-3xl leading-relaxed">
          Join us as we build a better, healthier, and more connected cycling
          community — one ride at a time.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
