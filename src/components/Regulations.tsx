import { ContentCarousel } from "./ContentCarousel";

export const Regulations = () => {
  return (
    <section
      className="bg-[#c6a671] py-20 px-6 md:px-16 lg:px-32"
      id="regulations"
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
          Kenapa Harus memiliki <br />
          Sertifikat Halal?
        </h2>

        <ContentCarousel />
      </div>
    </section>
  );
};
