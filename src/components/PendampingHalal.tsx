import {
  // dwidja,
  faiqotul,
  hartono,
  kristina,
  muzammil,
  roesmadji,
  sriutami,
  titalina,
} from "../assets";

export const PendampingHalal = () => {
  const teamMembers = [
    {
      name: "Faiqotul Himah, A.Md, Keb <br /> A-270/BD.II/P.II.II/KP.02/12/2023",
      image: faiqotul,
    },
    {
      name: "Ahmad Muzammil <br /> A-729/BD.II/P.II.II/KP.02/12/2023",
      image: muzammil,
    },
    {
      name: "Titalina, IR <br /> A-740/BD.II/P.II.II/KP.02/08/2023",
      image: titalina,
    },
    {
      name: "Dwi Budi Hartono, SE, MM <br /> A-709/BD.II/P.II.II/KP.02/03/2024",
      image: hartono,
    },
    {
      name: "Kristina Noviawati, SP <br /> A-833/BD.II/P.II.II/KP.02/08/2023",
      image: kristina,
    },
    {
      name: "Sri Utami, ST <br /> A-1331/BD.II/P.II.II/KP.02/11/2023",
      image: sriutami,
    },
    {
      name: "Dwidja Wahyono, SE <br /> A-516/BD.II/P.II.II/KP.02/11/2024",
      image: "",
    },
    {
      name: "Roesmadji <br /> A-908/BD.II/P.II.II/KP.02/10/2024",
      image: roesmadji,
    },
  ];

  return (
    <section
      className="bg-[#b7a2cd] py-20 px-6 md:px-16 lg:px-32"
      id="pendamping"
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
          Pendamping Halal IHP
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
                {member.image && (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full border-4 border-white object-contain bg-transparent"
                  />
                )}
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
