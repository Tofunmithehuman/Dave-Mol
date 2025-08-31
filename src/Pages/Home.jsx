import Navigation from "../Component/Navigation";
import Hero from "../assets/Hero.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 2.5]);
  
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.3, 0]);

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div ref={containerRef}>
      <div className="Home h-screen relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${Hero})`,
            scale,
            opacity,
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <div className="relative z-20">
          <Navigation />

          <section className="h-screen flex items-center justify-start">
            <motion.div
              className="bricolage-grotesque pt-10 text-left md:text-center px-8 max-w-6xl m-auto"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-8"
                variants={itemVariants}
              >
                Luxury fashion brand offering timeless elegance & sophisticated
                style.
              </motion.h1>

              <motion.div variants={itemVariants}>
                <button className="bg-white text-black px-8 py-3 rounded text-2xl font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                  Explore
                </button>
              </motion.div>
            </motion.div>
          </section>
        </div>
      </div>

      <section className="h-screen bg-black/70 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Next Section
          </h2>
          <p className="text-gray-400 text-xl">
            Your second section content goes here
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;