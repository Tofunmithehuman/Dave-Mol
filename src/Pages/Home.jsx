import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../Component/ScrollToTop";
import Navigation from "../Component/Navigation";
import Footer from "../Component/Footer";
import Hero from "../assets/Hero.jpg";
import Gallery from "../assets/gallery1.png";
import GalleryTwo from "../assets/gallery2.png";
import GalleryThree from "../assets/gallery3.png";

function Home() {
  const [scale, setScale] = useState(1);
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isSectionTwoVisible, setIsSectionTwoVisible] = useState(false);
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);
  const [isThirdSectionVisible, setIsThirdSectionVisible] = useState(false);

  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const sectionTwoRef = useRef(null);
  const galleryRef = useRef(null);
  const thirdSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const rate = scrolled * 0.0005;
      setScale(Math.min(1 + rate, 2));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px"
    };

    const headingObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsHeadingVisible(true);
        }
      });
    }, observerOptions);

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsImageVisible(true);
        }
      });
    }, observerOptions);

    const sectionTwoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsSectionTwoVisible(true);
        }
      });
    }, observerOptions);

    const galleryObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsGalleryVisible(true);
        }
      });
    }, observerOptions);

    const thirdSectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsThirdSectionVisible(true);
        }
      });
    }, observerOptions);

    if (headingRef.current) {
      headingObserver.observe(headingRef.current);
    }

    if (imageRef.current) {
      imageObserver.observe(imageRef.current);
    }

    if (sectionTwoRef.current) {
      sectionTwoObserver.observe(sectionTwoRef.current);
    }

    if (galleryRef.current) {
      galleryObserver.observe(galleryRef.current);
    }

    if (thirdSectionRef.current) {
      thirdSectionObserver.observe(thirdSectionRef.current);
    }

    return () => {
      if (headingRef.current) {
        headingObserver.unobserve(headingRef.current);
      }
      if (imageRef.current) {
        imageObserver.unobserve(imageRef.current);
      }
      if (sectionTwoRef.current) {
        sectionTwoObserver.unobserve(sectionTwoRef.current);
      }
      if (galleryRef.current) {
        galleryObserver.unobserve(galleryRef.current);
      }
      if (thirdSectionRef.current) {
        thirdSectionObserver.unobserve(thirdSectionRef.current);
      }
    };
  }, []);

  const galleryImages = [
    { src: Gallery, alt: "Dave Mol Gallery", description: "Lagos Vibes Collection" },
    { src: GalleryTwo, alt: "Dave Mol Gallery", description: "Urban Elegance" },
    { src: GalleryThree, alt: "Dave Mol Gallery", description: "Heritage Fusion" },
    { src: Gallery, alt: "Dave Mol Gallery", description: "Lagos Vibes Collection" },
    { src: GalleryTwo, alt: "Dave Mol Gallery", description: "Urban Elegance" },
    { src: GalleryThree, alt: "Dave Mol Gallery", description: "Heritage Fusion" },
    { src: Gallery, alt: "Dave Mol Gallery", description: "Lagos Vibes Collection" },
    { src: GalleryTwo, alt: "Dave Mol Gallery", description: "Urban Elegance" },
    { src: GalleryThree, alt: "Dave Mol Gallery", description: "Heritage Fusion" }
  ];

  return (
    <div>
      <Navigation />
      <div>
        <section className="text-[#010001] mt-16">
          <div className="max-w-screen-2xl m-auto px-10 py-8">
            <h1
              ref={headingRef}
              className={`text-4xl md:text-6xl leading-14 md:leading-18 uppercase transition-all duration-1000 ease-out ${isHeadingVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
                }`}
            >
              David Mola.
            </h1>

            <h1
              ref={headingRef}
              className={`text-3xl md:text-6xl leading-14 md:leading-18 uppercase transition-all duration-1000 ease-out ${isHeadingVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
                }`}
            >
              Nigerian fashion designer redefining contemporary style from the vibrant streets of Lagos.
            </h1>
          </div>
          <div className="relative min-h-screen overflow-hidden">
            <div
              ref={imageRef}
              className={`absolute inset-0 w-full h-[100%] md:h-[85%] transition-all duration-1000 ease-out ${isImageVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-16'
                }`}
            >
              <img
                src={Hero}
                alt="Hero background"
                className="w-full h-full object-cover hidden sm:block"
                style={{ transform: `scale(${scale})` }}
              /> <img
                src={Gallery}
                alt="Hero background"
                className="w-full h-full object-cover block sm:hidden"
                style={{ transform: `scale(${scale})` }}
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          </div>
        </section>


        <section className="text-[#010001] mt-16">
          <div className="max-w-screen-2xl m-auto px-4 sm:px-10 py-8">
            <div
              ref={sectionTwoRef}
              className={`max-w-2xl mb-12 transition-all duration-1000 ease-out ${isSectionTwoVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
                }`}
            >
              <h1 className="text-5xl mb-4">Recent Work</h1>
              <p className="text-black/80 font-thin">David Mola's practice spans from bespoke tailoring for discerning clients to the creation of ready-to-wear collections inspired by the vibrant energy of Lagos. While his designs are aesthetically diverse, his projects are united by a focus on empowering individuality and cultural expression through fashion.</p>            </div>

            <div
              ref={galleryRef}
              className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 ease-out ${isGalleryVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-16'
                }`}
            >
              {galleryImages.map((image, index) => (
                <div key={index} className="relative w-full h-64 md:h-96 overflow-hidden rounded group cursor-pointer">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm md:text-base font-light">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="text-white mt-16 bg-[#28292b]">
          <div className="max-w-screen-2xl m-auto px-4 sm:px-10 py-30">
            <div
              ref={thirdSectionRef}
              className={`max-w-2xl transition-all duration-1000 ease-out ${isThirdSectionVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
                }`}
            >
              <h1 className="uppercase text-5xl mb-4  ">Want to get in touch</h1>
              <p className="mb-8 font-thin">We’re always looking for new opportunities and are comfortable working internationally. Please get in touch and one of our project managers will contact you about beginning the proposal process.</p>
              <div>
                <Link to="/contact" className="bg-white hover:bg-white/90 duration-300 px-6 py-2 text-[#28292b]">Contact Us</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Home;