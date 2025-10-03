import { useState, useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import Navigation from "../Component/Navigation"
import Footer from "../Component/Footer"
import ScrollToTop from "../Component/ScrollToTop"
import GalleryOne from "../assets/gallery1.png";
import GalleryTwo from "../assets/gallery2.png";
import GalleryThree from "../assets/gallery3.png";

function Gallery() {
  const [isSectionTwoVisible, setIsSectionTwoVisible] = useState(false);
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);

  const sectionTwoRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px"
    };

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

    if (sectionTwoRef.current) {
      sectionTwoObserver.observe(sectionTwoRef.current);
    }

    if (galleryRef.current) {
      galleryObserver.observe(galleryRef.current);
    }

    return () => {
      if (sectionTwoRef.current) {
        sectionTwoObserver.unobserve(sectionTwoRef.current);
      }
      if (galleryRef.current) {
        galleryObserver.unobserve(galleryRef.current);
      }
    };
  }, []);

  const galleryImages = [
    { src: GalleryOne, alt: "Dave Mol One", description: "Lagos Vibes Collection" },
    { src: GalleryTwo, alt: "Dave Mol Gallery", description: "Urban Elegance" },
    { src: GalleryThree, alt: "Dave Mol Gallery", description: "Heritage Fusion" },
    { src: GalleryOne, alt: "Dave Mol Gallery", description: "Lagos Vibes Collection" },
    { src: GalleryTwo, alt: "Dave Mol Gallery", description: "Urban Elegance" },
    { src: GalleryThree, alt: "Dave Mol Gallery", description: "Heritage Fusion" },
    { src: GalleryOne, alt: "Dave Mol Gallery", description: "Lagos Vibes Collection" },
    { src: GalleryTwo, alt: "Dave Mol Gallery", description: "Urban Elegance" },
    { src: GalleryThree, alt: "Dave Mol Gallery", description: "Heritage Fusion" },
    { src: GalleryOne, alt: "Dave Mol One", description: "Lagos Vibes Collection" },
    { src: GalleryTwo, alt: "Dave Mol Gallery", description: "Urban Elegance" },
    { src: GalleryThree, alt: "Dave Mol Gallery", description: "Heritage Fusion" }
  ];

  return (
    <div>
      <Navigation />

      <div>
        <section className="text-[#010001] mt-6">
          <div className="max-w-screen-2xl m-auto px-4 pb-16 sm:px-10 md:py-16">
            <div
              ref={sectionTwoRef}
              className={`max-w-2xl md:mb-12 transition-all duration-1000 ease-out ${isSectionTwoVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
                }`}
            >
              <h1 className="text-5xl mb-4">Explore <br /> Dave Mol.</h1>
              <p className="text-black/80 font-thin">Discover the latest collections and bespoke designs that blend Nigerian heritage with modern flair, each piece crafted to empower individuality and cultural pride.</p>
              <p className="text-black/80 font-thin uppercase mt-8 flex items-center gap-2 block md:hidden">Scrool down <ArrowDown strokeWidth={1} /></p>
            </div>

            <div
              ref={galleryRef}
              className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 ease-out ${isGalleryVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-16'
                }`}
            >
              {galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className="relative w-full h-64 md:h-96 overflow-hidden rounded group cursor-pointer opacity-0 translate-y-16 transition-all duration-1000 ease-out group-hover:scale-105"
                  style={{
                    transitionDelay: `${index * 150}ms`,
                    ...(isGalleryVisible && { opacity: 1, transform: 'translateY(0)' })
                  }}
                >
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
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Gallery