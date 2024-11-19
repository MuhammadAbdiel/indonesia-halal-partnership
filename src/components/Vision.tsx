import { Shield, Users, Network } from "lucide-react";

export const Vision = () => {
  const values = [
    {
      icon: <Shield className="w-16 h-16" />,
      title: "Integrity",
      description:
        "Menjalankan setiap aktivitas dengan kejujuran, etika, dan tanggung jawab penuh untuk membangun kepercayaan dengan semua pemangku kepentingan.",
    },
    {
      icon: <Users className="w-16 h-16" />,
      title: "Professionalism",
      description:
        "Memberikan layanan dengan standar kualitas tinggi, kompetensi yang teruji, dan komitmen untuk terus meningkatkan kemampuan dalam bidang sertifikasi halal.",
    },
    {
      icon: <Network className="w-16 h-16" />,
      title: "Networking",
      description:
        "Membangun dan mengembangkan jejaring kerjasama yang kuat dengan berbagai pihak untuk mendukung pengembangan ekosistem halal di Indonesia dan global.",
    },
  ];

  return (
    <section
      className="bg-halal-green py-20 px-6 md:px-16 lg:px-32"
      id="vision"
    >
      <div className="relative" data-aos="fade-down">
        {/* Number and Decoration */}
        <div className="flex items-center justify-center space-x-2 text-white mb-4">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-halal-lime rounded-full"></div>
            <div className="w-3 h-3 bg-halal-lime rounded-full"></div>
            <div className="w-3 h-3 bg-halal-lime rounded-full"></div>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-[32px] md:text-5xl text-center font-bold text-white mb-12">
          Visi
        </h2>

        <p className="font-light text-xl text-white mb-12">
          Menjadi pusat Layanan Halal terkemuka yang mendukung Pelaku Usaha
          dalam mengembangkan produk halal di Indonesia memasuki pasar global
        </p>

        <h2 className="text-[32px] md:text-5xl text-center font-bold text-white mb-12">
          Misi
        </h2>

        <div className="flex items-center gap-8 mb-8">
          <p className="font-semibold text-halal-lime text-4xl">01</p>
          <p className="font-light text-xl text-white">
            Melakukan Sosialisasi kepada masyarakat tentang pentingnya
            menggunakan produk halal untuk makanan, minuman, kosmetik maupun
            bahan kimia dalam kehidupan sehari-hari
          </p>
        </div>
        <div className="flex items-center gap-8 mb-8">
          <p className="font-semibold text-halal-lime text-4xl">02</p>
          <p className="font-light text-xl text-white">
            Memberikan jasa layanan, konsultasi & pendampingan kepada pelaku
            usaha agar memahami konsep halal dan menjalankan proses produksi
            dengan bahan baku halal , sesuai Regulasi & Standard SERTIFIKASI
            HALAL sampai diterbitkan SERTIFIKAT HALAL
          </p>
        </div>
        <div className="flex items-center gap-8 mb-12">
          <p className="font-semibold text-halal-lime text-4xl">03</p>
          <p className="font-light text-xl text-white">
            Menjadi mitra Pemerintah dalam mewujudkan Indonesia sebagai PUSAT
            HALAL DUNIA
          </p>
        </div>

        <h2 className="text-[32px] md:text-5xl text-center font-bold text-white mb-12">
          Value
        </h2>

        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-halal-green mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-halal-green mb-4">
                  {value.title}
                </h3>
                {/* <p className="text-gray-600 text-lg">{value.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
