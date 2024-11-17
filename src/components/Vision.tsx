export const Vision = () => {
  return (
    <section
      className="bg-halal-green py-20 px-6 md:px-16 lg:px-32"
      id="vision"
    >
      <div className="relative">
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
        <div className="flex items-center gap-8">
          <p className="font-semibold text-halal-lime text-4xl">03</p>
          <p className="font-light text-xl text-white">
            Menjadi mitra Pemerintah dalam mewujudkan Indonesia sebagai PUSAT
            HALAL DUNIA
          </p>
        </div>
      </div>
    </section>
  );
};
