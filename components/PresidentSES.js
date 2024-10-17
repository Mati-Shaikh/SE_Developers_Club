import Image from "next/image";

export default function PresidentSES() {
  return (
    <div className="relative flex flex-col lg:flex-row items-center lg:items-start px-4 sm:px-6 md:px-8 lg:px-10 py-8 md:py-10 bg-black text-white">
      <div className="lg:w-7/12 text-left p-4 sm:p-6 md:p-8 lg:p-16 text-lg sm:text-xl md:text-2xl font-medium">
        {/* Placeholder paragraph */}
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod
          tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam,
          quis exercitation ullamco laboris nis.
        </p>
        {/* Name and title */}
        <h2 className="font-bold text-[20px] sm:text-[25px] md:text-[32px] lg:text-5xl text-primary lg:mt-24">
          Ibraheem Kayani
        </h2>
        <h3 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[70px] text-primary">
          President SES
        </h3>
      </div>
      {/* Image Section */}
      <div className="lg:w-5/12 relative">
        <Image
          src="/About/President.png"
          height={402}
          width={350}
          className="h-auto object-cover rounded-lg shadow-lg"
          alt="President SES"
        />
      </div>
    </div>
  );
}
