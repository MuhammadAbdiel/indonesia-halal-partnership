import { useState, useEffect } from "react";
import {
  coffeeMorning,
  conferenceHalalInternational,
  halalTalks,
  signingLph,
  silaturrahmi,
} from "../assets";

export const Gallery = () => {
  const galleryItems = [
    {
      title: "HALAL TALKS - LPH UB",
      description:
        "HALAL TALKS - LPH UB, dihadiri Narsum dari Sekretaris Komite Fatwa MUI Jatim, Dewan Pakar LPH UB, Halal Food Analysis (University Malaysia Sabah)",
      image: conferenceHalalInternational,
    },
    {
      title: "Conference Halal International & Trading Expo",
      description:
        "The 3rd H2O Conference Halal International & Trading EXPO Indonesia",
      image: halalTalks,
    },
    {
      title: "SIGNING LPH Hidayatullah - IHP",
      description:
        "Penandatanganan Kerjasama antara LPH Hidayatullah dan IHP di Jakarta",
      image: signingLph,
    },
    {
      title: "SILATURRAHMI - LPH UIN Malang",
      description:
        "Silaturrahmi Pra Kerjasama UIN Maulana Malik Ibrahim Malang - IHP",
      image: silaturrahmi,
    },
    {
      title: "IHP for INTERNATIONAL PARTNERS",
      description:
        "Coffee Morning bersama Dewan Pakar IHP, Poffessor Irwandi Jaswir",
      image: coffeeMorning,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section
      className="relative bg-gradient-to-r from-[#8ed2cc] to-[#ffe59e] py-20 px-6 md:px-16 lg:px-32"
      id="gallery"
    >
      <div className="relative" data-aos="fade-down">
        <div className="flex items-center justify-center space-x-2 text-white mb-4">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-halal-lime rounded-full"></div>
            <div className="w-3 h-3 bg-halal-lime rounded-full"></div>
            <div className="w-3 h-3 bg-halal-lime rounded-full"></div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-[#1B3932]">Gallery</h2>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div
            className="transition-transform duration-500 ease-in-out flex"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="min-w-full flex flex-col md:flex-row items-center justify-center gap-8 px-2"
              >
                {/* Image Container with Custom Shape */}
                <div className="relative w-full md:w-1/2 aspect-video">
                  <div className="absolute inset-0 bg-white rounded-[100px] overflow-hidden transform">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover p-4"
                    />
                  </div>
                </div>

                {/* Content Container */}
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="bg-emerald-500 text-white text-center py-3 px-6 rounded-full inline-block">
                    {item.title}
                  </div>
                  <p className="text-gray-700 bg-white/80 backdrop-blur-sm p-4 rounded-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={prevSlide}
              className="text-3xl text-[#1B3932] hover:text-[#B6D74A] transition"
            >
              &#8592; {/* Panah kiri */}
            </button>
            <div className="space-x-2">
              {galleryItems.map((_, index) => (
                <span
                  key={index}
                  className={`w-3 h-3 rounded-full inline-block ${
                    activeIndex === index ? "bg-halal-green" : "bg-gray-300"
                  }`}
                ></span>
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="text-3xl text-[#1B3932] hover:text-[#B6D74A] transition"
            >
              &#8594; {/* Panah kanan */}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
