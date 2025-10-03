import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Component/Navigation"
import Footer from "../Component/Footer"
import ScrollToTop from "../Component/ScrollToTop"

function About() {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);

  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px"
    };

    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsTitleVisible(true);
        }
      });
    }, observerOptions);

    const textObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsTextVisible(true);
        }
      });
    }, observerOptions);

    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }

    if (textRef.current) {
      textObserver.observe(textRef.current);
    }

    return () => {
      if (titleRef.current) {
        titleObserver.unobserve(titleRef.current);
      }
      if (textRef.current) {
        textObserver.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div>
      <Navigation />

      <div>
        <section className="max-w-screen-2xl m-auto px-10 py-20">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/2">
              <div 
                ref={titleRef}
                className={`transition-all duration-1000 ease-out ${isTitleVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
                }`}
              >
                <h1 className="text-5xl">About</h1>
              </div>
            </div>
            <div className="md:w-1/2 font-thin">
              <div 
                ref={textRef}
                className={`transition-all duration-1000 ease-out ${isTextVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
                }`}
              >
                <p className="mb-4">
                  We think of fashion not as a single practice, but as several interlocking ones. Cultural heritage is inseparable from contemporary trends, individuality is inseparable from bold innovation, and empowering self-expression is the ultimate goal of any collection. Styles come and go, but we have found these principles to be timeless.
                </p>
                <p className="mb-4">
                  As the creative director of Dave Mol Bespoke, I strive for honesty and clarity. My first job is to understand the client’s vision and needs, not to impose my own. I value timeliness, direct communication, and hand-sketched prototypes over polished presentations, as well as the occasional face-to-face collaboration infused with Lagos energy.
                </p>
                <p className="mb-4">
                  Over the years, I have been fortunate to collaborate with inspiring individuals on bespoke pieces that tell personal stories, but I believe it is still too early to weigh in on the enduring success of the work. A garment lives through its wearer, its relevance tied to how it continues to evoke confidence and cultural pride.
                </p>
                <p>
                  I am proud of my Nigerian roots and the vibrant heritage of Lagos, but I do not confine myself to a single national style. In fashion, as in life, a design must first and foremost resonate with the wearer's unique essence and the rhythms of the world around them.
                </p>
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

export default About