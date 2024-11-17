import {
  arrowRight,
  bahanHalal,
  fasilitas,
  plus,
  produkHalal,
} from "../assets";

export const HalalProduct = () => {
  return (
    <section
      className="bg-[#c6a671] py-20 px-6 md:px-16 lg:px-32"
      id="halal-product"
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
        <h2 className="text-[32px] md:text-5xl text-center font-bold text-[#106935] mb-6">
          Tentang Produk Halal
        </h2>

        <h2 className="text-[24px] md:text-2xl text-center font-semibold text-white mb-6">
          SUBSTANSI PRODUK HALAL
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center mt-22 text-center">
          {/* Bahan Halal */}
          <div>
            <img
              src={bahanHalal}
              alt="bahan-halal"
              className="w-full max-w-[150px] md:max-w-[350px] mx-auto"
            />
            <p className="mt-2 text-xl font-semibold text-white">Bahan Halal</p>
          </div>

          {/* Plus */}
          <div>
            <img src={plus} alt="plus" className="w-12 md:w-[50px] mx-auto" />
          </div>

          {/* Fasilitas */}
          <div>
            <img
              src={fasilitas}
              alt="fasilitas"
              className="w-full max-w-[150px] md:max-w-[350px] mx-auto"
            />
            <p className="mt-2 text-xl font-semibold text-white">
              Fasilitas bebas kontaminasi bahan haram/najis
            </p>
          </div>

          {/* Arrow Right */}
          <div>
            <img
              src={arrowRight}
              alt="arrow-right"
              className="w-12 md:w-[50px] mx-auto"
            />
          </div>

          {/* Produk Halal */}
          <div>
            <img
              src={produkHalal}
              alt="produk-halal"
              className="w-full max-w-[150px] md:max-w-[350px] mx-auto"
            />
            <p className="mt-2 text-xl font-semibold text-white">
              Produk Halal
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
