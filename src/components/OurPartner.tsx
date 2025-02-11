import {
  apmiso,
  berkahJayaChicken,
  bpjph,
  chingchong,
  cookies,
  halal,
  lily,
  lphUin,
  lppom,
  mera,
  minang,
  ppkly,
  roomah,
  shinyama,
  sopteja,
  steak21,
} from "../assets";
import { useEffect, useRef } from "react";

export const OurPartner = () => {
  const halalLogo = [{ image: lppom }, { image: lphUin }, { image: halal }];

  const listPartner = [
    { image: shinyama },
    { image: steak21 },
    { image: mera },
    { image: cookies },
    { image: chingchong },
    { image: apmiso },
    { image: minang },
    { image: ppkly },
    { image: roomah },
    { image: sopteja },
    { image: lily },
    { image: berkahJayaChicken },
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

        <div className="md:flex justify-center items-center gap-4 mb-12">
          <div className="max-sm:text-center flex justify-center gap-12 w-80 ">
            <img
              src={bpjph}
              alt="halal"
              className="w-full h-full rounded-full border-4 border-white object-contain"
            />
          </div>
          <div className="bg-white p-4 rounded-3xl max-md:mt-4">
            <h4 className="max-md:text-center">BADAN PENYELENGGARA</h4>
            <h5 className="font-bold max-md:text-center">
              JAMINAN PRODUK HALAL
            </h5>
          </div>
        </div>

        <div className="grid grid-cols-center-1 md:grid-cols-center-2 lg:grid-cols-center-4 gap-6 md:gap-12 mb-12">
          {halalLogo.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-transparent rounded-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              <div className="relative w-40 h-40">
                <img
                  src={partner.image}
                  alt={partner.image}
                  className="w-full h-full rounded-full border-4 border-white object-cover"
                />
              </div>
            </div>
          ))}
        </div>

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
