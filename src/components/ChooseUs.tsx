export const ChooseUs = () => {
  return (
    <section
      className="bg-[#b7a2cd] py-20 px-6 md:px-16 lg:px-32"
      // className="bg-halal-green py-20 px-6 md:px-16 lg:px-32"
      id="choose-us"
    >
      <div className="relative" data-aos="fade-down">
        {/* Number and Decoration */}
        <div className="flex items-center justify-center space-x-2 text-dark-800 mb-4">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-halal-lime rounded-full"></div>
            <div className="w-3 h-3 bg-halal-lime rounded-full"></div>
            <div className="w-3 h-3 bg-halal-lime rounded-full"></div>
          </div>
        </div>

        {/* Heading */}
        <div className="flex justify-between">
          <h2 className="text-[32px] md:text-5xl font-bold text-dark-800 mb-4">
            Why Choose Us?
            <p className="text-[18px] md:text-3xl font-medium text-dark-800 mb-12">
              Mengapa memilih kami
            </p>
          </h2>
          <p className="text-[14px] md:text-xl font-bold text-dark-800 mb-12">
            AKTE NOTARIS
            <br />
            PT INDONESIA HALAL PARTNERSHIP, NO : 3663
            <br />
            NOMOR AHU -0092826.AH.01.01.TAHUN 2024
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col">
            <div className="flex items-center gap-8 mb-8">
              <p className="font-semibold text-dark-800 text-4xl">01</p>
              <p className="font-bold text-xl text-dark-800">
                Inovasi Teknologi - Digital
              </p>
            </div>
            <div className="w-12 h-2 bg-halal-lime rounded-full mb-4"></div>
            <p className="font-extralight text-xl text-dark-800">
              Memudahkan Pelaku Usaha mencari informasi hanya dengan satu
              sentuhan jari /DCS (Digital Customer Service) sebagai solusi untuk
              UMKM & Industri menengah, besar melalui Chatbot untuk merespon
              kebutuhan customer secara cepat
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-8 mb-8">
              <p className="font-semibold text-dark-800 text-4xl">02</p>
              <p className="font-bold text-xl text-dark-800">
                Keberlanjutan Pelayanan
              </p>
            </div>
            <div className="w-12 h-2 bg-halal-lime rounded-full mb-4"></div>
            <p className="font-extralight text-xl text-dark-800">
              Penjelasan tata cara proses produk HALAL, mendapatkan Sertifikat
              Halal, dibantu bagaimana cara pemasaran digital, kurasi produk
              (design kemasan yang menarik untuk media instagram, FB dan media
              pemasaran digital lainnya)
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-8 mb-8">
              <p className="font-semibold text-dark-800 text-4xl">03</p>
              <p className="font-bold text-xl text-dark-800">
                Partnerships Network
              </p>
            </div>
            <div className="w-12 h-2 bg-halal-lime rounded-full mb-4"></div>
            <p className="font-extralight text-xl text-dark-800">
              Menjadi Partner untuk pengembangan Network
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-8 mb-8">
              <p className="font-semibold text-dark-800 text-4xl">04</p>
              <p className="font-bold text-xl text-dark-800">
                One Stop Service
              </p>
            </div>
            <div className="w-12 h-2 bg-halal-lime rounded-full mb-4"></div>
            <p className="font-extralight text-xl text-dark-800">
              Hanya dengan{" "}
              <span className="font-bold">PT Indonesia Halal Partnership</span>,
              Anda akan mendapatkan support dari hulu hingga hilir, bukan hanya
              perijinan Halal tetapi juga perijinan lain yang dibutuhkan Pelaku
              Usaha serta informasi pengembangan usaha terkait pemasaran produk
              melalui event-event promosi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
