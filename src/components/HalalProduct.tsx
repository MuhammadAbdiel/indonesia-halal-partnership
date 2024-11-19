import {
  arrowRight,
  bahanHalal,
  fasilitas,
  kosmetik,
  makanan,
  minuman,
  plus,
  produkHalal,
} from "../assets";

const ProductCategoryCard = ({ title, imageUrl }: any) => (
  <div className="bg-white/10 backdrop-blur rounded-lg overflow-hidden">
    <div className="p-6">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      {/* <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/90">{description}</p> */}
    </div>
  </div>
);

export const HalalProduct = () => {
  const productCategories = [
    {
      title: "Perawatan & Kosmetik",
      description:
        "Produk kecantikan dan perawatan pribadi yang terjamin kehalalannya",
      imageUrl: kosmetik, // Replace with cosmetics image
    },
    {
      title: "Makanan & Minuman",
      description: "Bahan makanan dan minuman yang telah tersertifikasi halal",
      imageUrl: makanan, // Replace with food/beverage image
    },
    {
      title: "Pembersih & Sanitasi",
      description: "Produk pembersih dan sanitasi yang aman dan halal",
      imageUrl: minuman, // Replace with cleaning products image
    },
  ];

  return (
    <section
      className="bg-[#c6a671] py-20 px-6 md:px-16 lg:px-32"
      id="halal-product"
    >
      <div className="relative" data-aos="fade-down">
        {/* Decorative dots */}
        <div className="flex items-center justify-center space-x-2 text-white mb-4">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-halal-lime rounded-full"></div>
            <div className="w-3 h-3 bg-halal-lime rounded-full"></div>
            <div className="w-3 h-3 bg-halal-lime rounded-full"></div>
          </div>
        </div>

        {/* Main heading */}
        <h2 className="text-[32px] md:text-5xl text-center font-bold text-[#106935] mb-6">
          Tentang Produk Halal
        </h2>

        {/* Halal Process Flow */}
        <h2 className="text-[24px] md:text-2xl text-center font-semibold text-white mb-6">
          SUBSTANSI PRODUK HALAL
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center mt-8 text-center">
          {/* Bahan Halal */}
          <div className="flex flex-col items-center">
            <img
              src={bahanHalal}
              alt="bahan-halal"
              className="w-full max-w-[150px] md:max-w-[350px]"
            />
            <p className="mt-2 text-xl font-semibold text-white">Bahan Halal</p>
          </div>

          {/* Plus */}
          <div className="flex justify-center">
            <img src={plus} alt="plus" className="w-12 md:w-[50px]" />
          </div>

          {/* Fasilitas */}
          <div className="flex flex-col items-center">
            <img
              src={fasilitas}
              alt="fasilitas"
              className="w-full max-w-[150px] md:max-w-[350px]"
            />
            <p className="mt-2 text-xl font-semibold text-white">
              Fasilitas bebas kontaminasi bahan haram/najis
            </p>
          </div>

          {/* Arrow Right */}
          <div className="flex justify-center">
            <img
              src={arrowRight}
              alt="arrow-right"
              className="w-12 md:w-[50px]"
            />
          </div>

          {/* Produk Halal */}
          <div className="flex flex-col items-center">
            <img
              src={produkHalal}
              alt="produk-halal"
              className="w-full max-w-[150px] md:max-w-[350px]"
            />
            <p className="mt-2 text-xl font-semibold text-white">
              Produk Halal
            </p>
          </div>
        </div>

        {/* Subheading */}
        {/* <h2 className="text-[24px] md:text-2xl text-center font-semibold text-white mb-12">
          KATEGORI PRODUK HALAL
        </h2> */}

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {productCategories.map((category, index) => (
            <ProductCategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HalalProduct;
