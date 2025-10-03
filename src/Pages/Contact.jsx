import { useState, useEffect, useRef } from "react";
import Navigation from "../Component/Navigation"
import Footer from "../Component/Footer"
import ScrollToTop from "../Component/ScrollToTop"
import { Instagram } from 'lucide-react';
import whatsapp from "../assets/whatsapp.svg"
import x from "../assets/x.svg"
import { Link } from "react-router-dom"

function Contact() {
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px"
    };

    const leftObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsLeftVisible(true);
        }
      });
    }, observerOptions);

    const rightObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsRightVisible(true);
        }
      });
    }, observerOptions);

    if (leftRef.current) {
      leftObserver.observe(leftRef.current);
    }

    if (rightRef.current) {
      rightObserver.observe(rightRef.current);
    }

    return () => {
      if (leftRef.current) {
        leftObserver.unobserve(leftRef.current);
      }
      if (rightRef.current) {
        rightObserver.unobserve(rightRef.current);
      }
    };
  }, []);

  return (
    <div>
      <Navigation />

      <div>
        <section className="max-w-screen-xl m-auto px-10 py-20">
          <div>
            <div className="flex flex-col md:flex-row gap-8">
              <div 
                ref={leftRef}
                className={`md:w-1/2 transition-all duration-1000 ease-out ${isLeftVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
                }`}
              >
                <h1 className="text-4xl uppercase mb-4">Get to know mola</h1>
                <p className="font-thin max-w-lg">Please provide some information on your project or goals and we’ll move the conversation on from there.</p>

                <div className="flex items-center gap-2 mt-4">
                  <Link to="https://www.instagram.com/_davemol" target="_blank"><img src={whatsapp} alt="whatsapp" className="w-8" /></Link>
                  <Link to='https://www.instagram.com/_davemol' target="_blank"><Instagram /></Link>
                  <Link to="https://www.instagram.com/_davemol" target="_blank"><img src={x} alt="x" className="w-8" /></Link>
                </div>
              </div>
              <div 
                ref={rightRef}
                className={`md:w-1/2 transition-all duration-1000 ease-out ${isRightVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
                }`}
              >
                <form>
                  <div className="flex item-center gap-2 font-light text-sm"> Name <p className="font-thin">(required)</p></div>

                  <div className="mt-4 flex items-center gap-2 mb-4">
                    <label className="w-full">
                      <p className="text-xs font-light mb-1">First Name</p>
                      <input type="text" className="border border-[#a9a9a9] w-full p-2 font-thin text-sm" />
                    </label>
                    <label className="w-full">
                      <p className="text-xs font-light mb-1"> Last Name</p>
                      <input type="text" className="border border-[#a9a9a9] w-full p-2 font-thin text-sm" />
                    </label>
                  </div>

                  <div className="mb-4">
                    <label>
                      <div className="flex item-center gap-2 text-xs "> <p className="font-light mb-1">Email</p> <p className="font-thin">(required)</p></div>
                      <input type="email" className="border border-[#a9a9a9] w-full p-2 font-thin text-sm" />
                    </label>
                  </div>

                  <div className="mb-4">
                    <label>
                      <div className="flex item-center gap-2 text-xs "> <p className="font-light mb-1">Subject</p> <p className="font-thin">(required)</p></div>
                      <input type="text" className="border border-[#a9a9a9] w-full p-2 font-thin text-sm" />
                    </label>
                  </div>

                  <div className="mb-4">
                    <label>
                      <div className="flex item-center gap-2 text-xs "> <p className="font-light mb-1">Message</p> <p className="font-thin">(required)</p></div>
                      <textarea rows={3} type="text" className="border border-[#a9a9a9] w-full p-2 font-thin text-sm" />
                    </label>
                  </div>
                  <div>
                    <button className="py-2 px-4 bg-black text-white hover:bg-black/80 duration-300 cursor-pointer">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Contact