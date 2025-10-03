import { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { Menu, X } from "lucide-react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopNavVisible, setIsDesktopNavVisible] = useState(false);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const location = useLocation();
  const desktopNavRef = useRef(null);
  const mobileNavRef = useRef(null);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (!desktopNavRef.current) return;

    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsDesktopNavVisible(true);
        }
      });
    }, observerOptions);

    observer.observe(desktopNavRef.current);

    return () => {
      if (desktopNavRef.current) {
        observer.unobserve(desktopNavRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isOpen || !mobileNavRef.current) return;

    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsMobileNavVisible(true);
        }
      });
    }, observerOptions);

    observer.observe(mobileNavRef.current);

    return () => {
      if (mobileNavRef.current) {
        observer.unobserve(mobileNavRef.current);
      }
    };
  }, [isOpen]);

  return (
    <div>
      <header className="max-w-screen-2xl m-auto p-6 md:p-10">
        <nav className="flex items-center justify-between">
          <Link to="/">
            <img src={Logo} alt="Dave Mol" className="w-14" />
          </Link>

          <div className="hidden md:block">
            <ul 
              ref={desktopNavRef}
              className={`flex items-center gap-5 font-light text-[#010001] transition-all duration-1000 ease-out ${
                isDesktopNavVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <li>
                <Link to="/about" className={`block pb-1 ${isActive("/about") ? "border-b-1 border-[#010001]" : ""}`}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/gallery" className={`block pb-1 ${isActive("/gallery") ? "border-b-1 border-[#010001]" : ""}`}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`block pb-1 ${isActive("/contact") ? "border-b-1 border-[#010001]" : ""}`}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="block md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <X strokeWidth={1.3} size={32} /> : <Menu strokeWidth={1.3} size={32} />}
            </button>
          </div>
        </nav>
      </header>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col md:hidden">
          <div className="p-6 flex justify-between items-center ">
            <Link to="/" onClick={toggleMenu}>
              <img src={Logo} alt="Dave Mol" className="w-14" />
            </Link>
            <button onClick={toggleMenu} className="focus:outline-none">
              <X strokeWidth={1.3} size={32} />
            </button>
          </div>
          <ul 
            ref={mobileNavRef}
            className={`flex-1 flex flex-col justify-center items-center gap-8 px-4 font-light text-[#010001] text-2xl transition-all duration-1000 ease-out ${
              isMobileNavVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            <li>
              <Link 
                to="/about" 
                className={`block pb-1 ${isActive("/about") ? "border-b-1 border-[#010001]" : ""}`}
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/gallery" 
                className={`block pb-1 ${isActive("/gallery") ? "border-b-1 border-[#010001]" : ""}`}
                onClick={toggleMenu}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`block pb-1 ${isActive("/contact") ? "border-b-1 border-[#010001]" : ""}`}
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navigation;