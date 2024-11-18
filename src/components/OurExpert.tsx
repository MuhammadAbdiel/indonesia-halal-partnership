import {
  dewanPakar,
  dirIt,
  dirkerma,
  dirkeu,
  dirProd,
  dirut,
  komisarisDua,
  komisarisSatu,
  komisarisUtama,
  management,
  wadirut,
} from "../assets";

export const OurExpert = () => {
  const teamMembers = [
    {
      name: "PROFESSOR HALAL DUNIA",
      image: dewanPakar,
    },
    {
      name: "P3H (BPJPH) : A-2424/BD.II/P.II.II/ KP.02/05/2024",
      image: komisarisUtama,
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
      name: "P3H (BPJPH) : A-810/BD.II/P.II.II/ KP.02/08/2023",
      image: dirut,
    },
    {
      name: "P3H (BPJPH) : A-1020/BD.II/P.II.II/ KP.02/03/2024",
      image: wadirut,
    },
    {
      name: "RHA : 14/VI/LPPPHEWI/RHA/2024",
      image: dirProd,
    },
    {
      name: "SENIOR ACCOUNTING EXPERT",
      image: dirkeu,
    },
    {
      name: "P3H (BPJPH) : A-1669/BD.II/P.II.II/ KP.02/05/2024",
      image: dirkerma,
    },
    {
      name: "P3H (BPJPH) : A-405/BD.II/P.II.II/ KP.02/08/2023",
      image: dirIt,
    },
    {
      name: "Admin",
      image: management,
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
              <p className="text-white font-semibold text-lg text-center mt-4">
                {member.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
