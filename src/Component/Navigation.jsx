  import { useState } from "react";
  import { motion, AnimatePresence } from "framer-motion";
  import Logo from "../assets/Logo.png";
  import { Menu, X } from "lucide-react";

  const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const menuVariants = {
      closed: {
        opacity: 0,
        scale: 0.95,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
          when: "afterChildren",
        },
      },
      open: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
          when: "beforeChildren",
          staggerChildren: 0.1,
        },
      },
    };

    const itemVariants = {
      closed: {
        opacity: 0,
        y: -10,
        transition: {
          duration: 0.2,
        },
      },
      open: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.2,
        },
      },
    };

    const overlayVariants = {
      closed: {
        opacity: 0,
        scale: 0.95,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      },
      open: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      },
    };

    const menuItems = ["About", "Categories", "Styles", "Contact"];

    return (
      <div className="Navigation">
        <header>
          <nav className="max-w-screen-xl m-auto fixed top-0 right-0 left-0 mt-3 z-50">
            <div className="glass flex items-center justify-between rounded-full py-2 px-4 mx-4">
              <div>
                <img src={Logo} alt="Logo" className="w-16" />
              </div>

              {/* Desktop Menu */}
              <ul className="md:flex gap-4 me-2 bricolage-grotesque hidden">
                {menuItems.map((item) => (
                  <li key={item} className="cursor-pointer text-gray-200 font-semibold hover:opacity-70 transition-opacity">
                    {item}
                  </li>
                ))}
              </ul>

              {/* Mobile Menu Toggle */}
              <motion.button
                className="md:hidden block me-2 w-8 h-8"
                onClick={toggleMenu}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.1 }}
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </motion.div>
              </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="md:hidden fixed top-0 left-0 right-0 bottom-0 z-45 glass"
                  variants={menuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between py-2 px-4 mt-3 mx-4">
                      <div>
                        <img src={Logo} alt="Logo" className="w-16" />
                      </div>
                      <motion.button
                        className="w-8 h-8 bg-black rounded-full flex items-center justify-center"
                        onClick={toggleMenu}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.1 }}
                      >
                        <X className="w-5 h-5 text-white" />
                      </motion.button>
                    </div>

                    {/* Menu Items */}
                    <motion.ul className="bricolage-grotesque py-8 px-4 flex-1 flex flex-col justify-center">
                      {menuItems.map((item, index) => (
                        <motion.li
                          key={item}
                          variants={itemVariants}
                          className="px-6 py-4 cursor-pointer hover:bg-white/20 rounded hover:bg-opacity-10 transition-colors text-center text-2xl text-white font-bold"
                          onClick={toggleMenu}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </header>
      </div>
    );
  };

  export default Navigation;