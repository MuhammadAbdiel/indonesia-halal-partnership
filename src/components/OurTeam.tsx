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

export const OurTeam = () => {
  const teamMembers = [
    {
      name: "M Monarita D, SKeb, M.Si",
      position: "Komisaris Utama",
      image: komisarisUtama,
    },
    {
      name: "Prof. DR. Irwandi Jaswir",
      position: "Dewan Pakar",
      image: dewanPakar,
    },
    {
      name: "Azman, SKM, M.M",
      position: "Komisaris",
      image: komisarisDua,
    },
    {
      name: "Ainur R Rinata, SSos, M.M",
      position: "Komisaris",
      image: komisarisSatu,
    },
    {
      name: "Sri Ida W, S.Pd",
      position: "Dirut",
      image: dirut,
    },
    {
      name: "Eka Ristri D, S.Si, MT",
      position: "Wadirut",
      image: wadirut,
    },
    {
      name: "Gusper N, ST",
      position: "DirProd",
      image: dirProd,
    },
    {
      name: "Nina Afrisanti, SE, MM",
      position: "DirKeu",
      image: dirkeu,
    },
    {
      name: "Joelijanto Yusuf, A.Md",
      position: "DirKerma",
      image: dirkerma,
    },
    {
      name: "Iwan Santoso, ST",
      position: "Dir-IT",
      image: dirIt,
    },
    {
      name: "Mida Nopitasari, S.Sos",
      position: "Management",
      image: management,
    },
  ];

  return (
    <section
      className="bg-[#1B3932] py-20 px-6 md:px-16 lg:px-32"
      id="our-team"
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
          Our Team
        </h2>

        {/* Team Members */}
        <div className="grid grid-cols-center-1 md:grid-cols-center-2 lg:grid-cols-center-4 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#2D4D42] p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              {/* Member Image */}
              <div className="relative w-32 h-32 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full border-4 border-white object-cover"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-[#B6D74A] text-xs text-white py-1 px-3 rounded shadow-md text-center">
                  {member.position}
                </div>
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
