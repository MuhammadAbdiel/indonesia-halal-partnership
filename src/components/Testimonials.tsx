import { useState, useEffect } from "react";
import { bumbuRawon, ownerCafe, ukm } from "../assets";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "FAJAR - Owner Cafe",
      content:
        "Alhamdulillah. Terimakasih sudah dibantu proses Sertifikasi Halal Cafe saya, prosesnya cepat, Pelayanannya Profesional. Semoga bisa menambah kepercayaan pelanggan saya.",
      location: "Owner Kopi Rayuan BOGOR",
      image: ownerCafe,
    },
    {
      name: "Ria Yudhistira - Owner Industri Bumbu Rawon",
      content:
        "Alhamdulillah, Produk saya langsung dibeli oleh Yulia Frozen karena sudah ada SH nya. Sekarang banyak orderan karena sudah dibantu juga memasarkan menggunakan media online. Terima kasih sudah dibantu proses Sertifikasi Halal (SH).",
      location: "",
      image: bumbuRawon,
    },
    {
      name: "UKM",
      content:
        "Alhamdulillah, sampai nangis saya, akhirnya punya Sertifikat Halal, supaya bisa mengembangkan penjualan dan diikutkan kegiatan-kegiatan promosi karena banyak produk impor sejenis.",
      location: "",
      image: ukm,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Carousel berjalan otomatis
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Ganti slide setiap 5 detik
    return () => clearInterval(interval); // Bersihkan interval ketika komponen dilepas
  }, [activeIndex]);

  return (
    <section
      className="bg-gradient-to-r from-[#8ed2cc] to-[#ffe59e] py-20 px-6 md:px-16 lg:px-32"
      id="testimonials"
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
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold text-[#1B3932]">
            Customer Testimonials
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
              display: "flex",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8"
                style={{ minWidth: "100%" }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-[#B6D74A]"
                  />
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-[#1B3932]">
                      {testimonial.name}
                    </p>
                    {testimonial.location && (
                      <p className="text-sm text-gray-500">
                        {testimonial.location}
                      </p>
                    )}
                  </div>
                </div>
                <p className="text-gray-700 text-center">
                  {testimonial.content}
                </p>
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
              {testimonials.map((_, index) => (
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
