import { useState, useEffect } from "react";

export const ContentCarousel = () => {
  const slides = [
    {
      id: 1,
      description: `HALAL menjadi bagian dari entitas bisnis internasional dalam Global Market, dimana Kepemilikan Sertifikasi Halal dalam produk Anda akan memperluas juga bisnis Anda selain untuk populasi muslim di bidang produk dan layanan makanan halal dan non halal sekitar 2 miliar juga untuk 5 miliar penduduk non-muslim yang tertarik pada makanan berkualitas dan sehat.`,
      benefits: [
        "Memungkinkan perusahaan Anda mengenakan biaya Premium",
        "Meningkatkan ekspor produk Anda ke negara-negara muslim dengan mudah",
        "Mendapatkan keuntungan kompetitif atas pesaing Anda dengan memasuki pasar baru (meningkatkan nilai tambah, meningkatkan kualitas dan daya saing produk)",
        "Menunjukkan kemampuan institusi Anda dan peluang dilibatkan dalam Kemitraan bernilai tinggi serta peluang mendapatkan bisnis yang menguntungkan",
      ],
    },
    {
      id: 2,
      description: `REGULASI terkait SERTIFIKAT HALAL`,
      benefits: [
        "<strong>Undang-undang Nomor 33 Tahun 2014, Pasal 4</strong> tegas menyatakan bahwa seluruh produk yang masuk, beredar dan diperdagangkan di wilayah Indonesia wajib bersertifikat halal, dengan batasan dan ketentuan yang jelas",
        '<strong>Peraturan Pemerintah (PP) Nomor 42 Tahun 2024</strong>, bahwa Penahapan kewajiban bersertifikat halal bagi produk makanan, minuman, hasil sembelihan, dan jasa penyembelihan sebagaimana dimulai dari tanggal <strong>17 Oktober 2019 sampai dengan tanggal 17 Oktober 2024</strong>, "Artinya, terhitung <strong>18 Oktober 2024</strong>, ketiga kelompok produk tersebut <strong>wajib</strong> bersertifikat halal. Kalau tidak ya siap-siap bisa kena sanksi administratif berupa peringatan tertulis, dan/atau penarikan produk dari peredaran." (Kepala BPJPH, 29 Oktober 2024)',
      ],
    },
    {
      id: 3,
      description: `BEBERAPA  REGULASI LAIN TENTANG  SERTIFIKASI  HALAL`,
      benefits: [
        "UU No. 6 Tahun 2023",
        "Peraturan Pemerintah RI No. 42 Tahun 2024 tentang Penyelenggaraan Bidang Jaminan Produk Halal",
        "Keputusan Menteri Agama No. 748 Tahun 2021 tentang Jenis Produk yang Wajib Bersertifikat Halal",
        "Keputusan Menteri Agama No. 1360 Tahun 2021 tentang Bahan yang Dikecualikan dari Kewajiban Sertifikasi Halal",
        `PP No 42 tahun 2024,
        <ul>
          <li>
          Pasal 50, bahwa Pelaku Usaha yang mengajukan Sertifikasi Halal, wajib  
          memiliki Penyelia Halal
          </li>
          <li>
          Pasal  60 bahwa Penyelia Halal harus memenuhi persyaratan :
            <ol className="custom-ol">
              <li>Beragama Islam</li>
              <li>Memiliki wawasan luas dan memahami syareat tentang Kehalalan</li>
              <li>MEMILIKI  SERTIFIKAT  PELATIHAN DAN KOMPETENSI PENYELIA HALAL</li>
            </ol>
          </li>
        </ul>`,
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Carousel otomatis
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Interval 5 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative overflow-hidden text-black"
      onMouseEnter={() => clearInterval((window as any).interval)}
      onMouseLeave={() => {
        (window as any).interval = setInterval(nextSlide, 5000);
      }}
    >
      {/* Slides */}
      <div
        className="transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
          display: "flex",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
            style={{ minWidth: "100%" }}
          >
            {slide.id === 1 ? (
              <p className="text-xl mb-6">{slide.description}</p>
            ) : (
              <p className="text-2xl font-bold mb-6 text-white">
                {slide.description}
              </p>
            )}
            <div className="text-xl space-y-3">
              {slide.id === 1 && (
                <p className="font-bold">Benefit dari SERTIFIKAT HALAL:</p>
              )}
              <ol className="list-decimal ml-6 space-y-2">
                {slide.benefits.map((benefit, i) => (
                  <div key={i}>
                    {slide.id === 1 ? (
                      <li key={i}>{benefit}</li>
                    ) : (
                      <li
                        key={i}
                        dangerouslySetInnerHTML={{ __html: benefit }}
                      />
                    )}
                  </div>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="text-white font-bold text-2xl mt-10">
        <h2 className="text-left mt-2">- IHP TEAM</h2>
      </div> */}

      {/* Navigation */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={prevSlide}
          className="text-3xl text-[#1B3932] hover:text-[#B6D74A] transition"
        >
          &#8592; {/* Panah kiri */}
        </button>
        <div className="space-x-2">
          {slides.map((_, index) => (
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
  );
};
