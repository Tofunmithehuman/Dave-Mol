import { Link } from "react-router-dom";
import Navigation from "../Component/Navigation";
import Hero from "../assets/Hero.jpg";
import HeroTwo from "../assets/HeroTwo.jpg";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const Home = () => {
  const containerRef = useRef(null);
  const secondSectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Check if second section is in view
  const isSecondSectionInView = useInView(secondSectionRef, {
    once: true,
    amount: 0.3,
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

  // Animation variants for second section
  const secondSectionVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.4,
      },
    },
  };

  const leftContentVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      y: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const rightContentVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textItemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
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
                className="text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-8"
                variants={itemVariants}
              >
                Dave Mol Luxury fashion brand offering timeless elegance and
                sophisticated style
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

      <section
        ref={secondSectionRef}
        className="min-h-screen h-auto lg:h-screen bg-black/90 flex items-center py-10 lg:py-0"
      >
        <div className="max-w-6xl mx-auto px-4 ysabeau w-full">
          <motion.div
            className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center h-full"
            variants={secondSectionVariants}
            initial="hidden"
            animate={isSecondSectionInView ? "visible" : "hidden"}
          >
            <motion.div
              className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1"
              variants={leftContentVariants}
            >
              <motion.h1
                className="text-white text-3xl sm:text-4xl lg:text-6xl font-semibold mb-4 lg:mb-6"
                variants={textItemVariants}
              >
                Who is Dave Mol?
              </motion.h1>
              <motion.p
                className="text-base sm:text-lg text-gray-100 leading-relaxed mb-6 lg:mb-8"
                variants={textItemVariants}
              >
                Dave Mol, a talented fashion designer based in Lekki Phase 1,
                Nigeria, is making waves in the industry with his innovative and
                bespoke creations. As the creative force behind Dave Mol
                Bespoke, he has carved a niche for himself by blending
                contemporary aesthetics with timeless craftsmanship. His work
                reflects a deep understanding of style, culture, and
                individuality, catering to clients who seek unique, tailored
                designs. Mol's journey in fashion began with a passion for
                creating garments that tell a story. His designs often
                incorporate bold silhouettes and a fusion of modern and
                traditional elements, appealing to a diverse clientele.
              </motion.p>

              <motion.div variants={textItemVariants}>
                <Link
                  target="_blank"
                  to="https://www.instagram.com/_davemol"
                  className="inline-block bg-white text-black px-6 py-3 lg:px-8 rounded text-lg lg:text-2xl font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                >
                  View Socials
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2"
              variants={rightContentVariants}
            >
              <img
                src={HeroTwo}
                alt="Designs"
                className="w-full max-w-md lg:max-w-full h-auto object-contain rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
