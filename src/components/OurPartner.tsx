import {
  apmiso,
  berkahJayaChicken,
  chingchong,
  cookies,
  halal,
  lily,
  lphUin,
  mera,
  minang,
  roomah,
  shinyama,
  sopteja,
  steak21,
} from "../assets";
import { useEffect, useRef } from "react";

export const OurPartner = () => {
  const listPartner = [
    { image: berkahJayaChicken },
    { image: roomah },
    { image: lily },
    { image: apmiso },
    { image: minang },
    { image: steak21 },
    { image: chingchong },
    { image: mera },
    { image: cookies },
    { image: sopteja },
    { image: shinyama },
    { image: lphUin },
    { image: halal },
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        (scrollRef.current as any).scrollLeft += 1;
        if (
          (scrollRef.current as any).scrollLeft >=
          (scrollRef.current as any).scrollWidth / 2
        ) {
          (scrollRef.current as any).scrollLeft = 0;
        }
      }
    };
    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative bg-gradient-to-r from-[#8b55ff] to-[#5ddee6] py-20 px-6 md:px-16 lg:px-32"
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
          <h2 className="text-5xl font-bold text-[#1B3932]">Our Partner</h2>
        </div>

        {/* Horizontal Auto-scrolling Infinite List */}
        <div className="overflow-x-auto hide-scrollbar" ref={scrollRef}>
          <div
            className="flex space-x-6 px-4 md:px-0 whitespace-nowrap"
            style={{ width: "max-content" }}
          >
            {[...listPartner, ...listPartner].map((partner, index) => (
              <img
                key={index}
                src={partner.image}
                alt={`Partner ${index + 1}`}
                className="h-24 md:h-32 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
