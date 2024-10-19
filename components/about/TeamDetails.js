import Image from "next/image";

export default function TeamDetails() {
  return (
    <div className="bg-black text-white min-h-screen mt-10">
      {/* Container for the whole page */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Team R&D Header */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-primary text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-left ml-4 md:ml-8">
            Team R&D
          </h2>
          <p className="text-gray-400 max-w-xl text-base md:text-lg leading-relaxed ml-4 md:ml-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        {/* Meet Team Leads Section */}
        <section className="mb-12 md:mb-16">
          <h2
            className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-left ml-4 md:ml-8"
            style={{ color: "#6272A1" }}
          >
            Meet R&D Leads
          </h2>
          <div className="flex flex-wrap gap-10 md:gap-40 justify-center p-10">
            {leads.map((member, index) => (
              <div
                key={index}
                className="flex flex-wrap justify-center gap-8 md:gap-32"
              >
                {/* Lead 1 */}
                <div className="flex flex-col items-center">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={192}
                    height={192}
                    className="object-cover mb-4"
                  />
                  <h3 className="text-lg md:text-3xl font-semibold text-gray-100 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 md:text-xl">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Meet RTeam Officers Section */}
        <section className="mb-12 md:mb-16">
          <h2
            className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-left ml-4 md:ml-8"
            style={{ color: "#6272A1" }}
          >
            Meet R&D Officers
          </h2>
          <div className="flex flex-wrap gap-10 md:gap-40 justify-center p-10">
            {members.map((member, index) => (
              <div
                key={index}
                className="flex flex-wrap justify-center gap-8 md:gap-32"
              >
                {/* Lead 1 */}
                <div className="flex flex-col items-center">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={142}
                    height={142}
                    className="object-cover mb-4"
                  />
                  <h3 className="text-lg md:text-2xl font-semibold text-gray-100 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 md:text-lg">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

const members = [
  {
    img: "/About/President.png",
    name: "Ibraheem Kayani",
    role: "VP Internals",
  },
  {
    img: "/About/President.png",
    name: "Ibraheem Kayani",
    role: "VP Internals",
  },
  {
    img: "/About/President.png",
    name: "Ibraheem Kayani",
    role: "VP Internals",
  },
  {
    img: "/About/President.png",
    name: "Ibraheem Kayani",
    role: "VP Internals",
  },
  {
    img: "/About/President.png",
    name: "Ibraheem Kayani",
    role: "VP Internals",
  },
  {
    img: "/About/President.png",
    name: "Ibraheem Kayani",
    role: "VP Internals",
  },
];

const leads = [
  {
    img: "/About/President.png",
    name: "Ibraheem Kayani",
    role: "Head Workshops",
  },
  {
    img: "/About/President.png",
    name: "Ibraheem Kayani",
    role: "Head Research & Development",
  },
];
