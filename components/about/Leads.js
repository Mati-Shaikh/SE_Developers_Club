import Image from "next/image";

const Leads = () => {
  return (
    <div className="p-10 md:-20 space-y-10">
      <section>
        <h2
          className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-left ml-4 md:ml-8"
          style={{ color: "#6272A1" }}
        >
          Meet Our Vice Presidents
        </h2>
        <div className="flex flex-wrap gap-10 md:gap-40 justify-center p-10">
          {vps.map((member, index) => (
            <div
              key={index}
              className="flex flex-wrap justify-center gap-8 md:gap-32"
            >
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
                <p className="text-blue-400 md:text-lg">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2
          className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-left ml-4 md:ml-8"
          style={{ color: "#6272A1" }}
        >
          Meet Exective Council Members
        </h2>
        <div className="flex flex-wrap gap-10 md:gap-40 justify-center p-10">
          {members.map((member, index) => (
            <div
              key={index}
              className="flex flex-wrap justify-center gap-8 md:gap-32"
            >
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
  );
};

export default Leads;

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

const vps = [
  {
    img: "/About/President.png",
    name: "Ibraheem Kayani",
    role: "VP Externals",
  },
  {
    img: "/About/President.png",
    name: "Ibraheem Kayani",
    role: "VP Internals",
  },
];
