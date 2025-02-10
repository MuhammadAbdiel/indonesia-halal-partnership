export const CompanyHistory = () => {
  return (
    <section
      className="bg-[#0097b2] py-20 px-6 md:px-16 lg:px-32"
      id="company-history"
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
        <h2 className="text-[32px] text-center md:text-5xl font-bold text-white mb-28">
          Company History
        </h2>

        <p className="font-light text-xl text-white">
          Banyaknya Produk yang membanjiri pasaran Indonesia, bertumbuhnya para
          Pelaku Usaha dan adanya Regulasi dari Pemerintah apalagi Indonesia
          memiliki penduduk mayoritas Muslim, merupakan dasar awal pendirian
          Perusahaan INDONESIA HALAL PARTNERSHIP (IHP)
        </p>
        <br />
        <p className="font-light text-xl text-white">
          Bertumbuhnya industri makanan, minuman, obat tradisional dan
          kosmetika, tidak disertai dengan kelengkapan dokumen sesuai Regulasi
          Pemerintah Indonesia salah satunya adalah Sertifikasi Halal. Setelah
          turun ke lapangan sebagai Pendamping Proses Produk Halal, baru kami
          pahami bahwa masyarakat membutuhkan pelayanan terkait dokumen usaha
          salah satunya adalah Sertifikat Halal dengan kemudahan akses. Ada
          sekitar 89% ekonomi Indonesia ditunjang oleh UKM, serta penyerapan
          tenaga kerja sebesar 74%, kepemilikan Sertifikat Halal baru sekitar
          10%
        </p>
      </div>
    </section>
  );
};
