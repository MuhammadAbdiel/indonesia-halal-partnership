import {
  auditor,
  dewanPakar,
  direkturMarketing,
  dirkerma,
  dirkeu,
  dirut,
  image3938,
  iwan,
  komisarisDua,
  komisarisSatu,
  komisarisUtama,
  management,
  naila,
} from "../assets";

export const OurExpert = () => {
  const teamMembers = [
    {
      name: "PROFESSOR HALAL DUNIA",
      image: dewanPakar,
    },
    // {
    //   name: "K-204/ADM/Halal/LSP-MUI/XII/2024 <br /> Penyelia Halal : 2995/PHI.4760/B/LPK-HI/XII/2024",
    //   image: dirProd,
    // },
    {
      name: "PENYELIA HALAL : R.DN - 1.2.0122",
      image: direkturMarketing,
    },
    {
      name: "P3H (BPJPH) : <br /> A-2424/BD.II/P.II.II/ KP.02/05/2024 <br /> Penyelia Halal <br /> 2971/PHI.4736/B/LPK-HI/XII/2024",
      image: komisarisUtama,
    },
    {
      name: "AHA.1644.01879.2023",
      image: auditor,
    },
    {
      name: "P3H (BPJPH) : A-987/BD.II/P.II.II/ KP.02/08/2024",
      image: komisarisDua,
    },
    {
      name: "P3H (BPJPH) : A-621/BD.II/P.II.II/ KP.02/08/2023",
      image: komisarisSatu,
    },
    {
      name: "P3H (BPJPH) : <br /> A-1020/BD.II/P.II.II/KP.02/03/2024 <br /> Penyelia Halal <br /> 3938/PH.083/IHB.XII/2024",
      image: image3938,
    },
    {
      name: "P3H (BPJPH) : A-810/BD.II/P.II.II/ KP.02/08/2023",
      image: dirut,
    },
    {
      name: "P3H (BPJPH) :  <br /> A-405/BD.II/P.II.II/KP.02/08/2023 <br /> Penyelia Halal <br /> NOMOR : 80/12/PHR/2024/LPKEWI",
      image: iwan,
    },
    {
      name: "P3H (BPJPH) : <br /> A-517/BD.II/P.II.II/KP.02/11/2024",
      image: dirkeu,
    },
    {
      name: "ADMIN <br /> P3H (BPJPH) : A-750/BD.II/P.II.II/KP.02/11/2024",
      image: management,
    },
    {
      name: "P3H (BPJPH) : A-1669/BD.II/P.II.II/ KP.02/05/2024",
      image: dirkerma,
    },
    {
      name: "Naila Nurul Afifah : <br /> PHI 1957 01544 2024",
      image: naila,
    },
  ];

  return (
    <section
      className="bg-[#b7a2cd] py-20 px-6 md:px-16 lg:px-32"
      id="our-expert"
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
        <h2 className="text-[32px] md:text-5xl text-center font-bold text-white mb-12">
          Our Expert
        </h2>

        {/* Team Members */}
        <div className="grid grid-cols-center-1 md:grid-cols-center-2 lg:grid-cols-center-4 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#D5C3E5] p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              {/* Member Image */}
              <div className="relative w-32 h-32 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full border-4 border-white object-cover"
                />
              </div>
              {/* Member Name */}
              <p
                className="text-white font-semibold text-lg text-center mt-4"
                dangerouslySetInnerHTML={{ __html: member.name }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
