import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-black text-white min-h-screen mt-10">
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto p-8 space-y-10 lg:space-y-0 lg:space-x-20 lg:h-[600px]">
        {/* Text Section */}
        <div className="lg:w-1/2 space-y-6 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-[#6272A1] leading-snug">
            Explore & Grow with <br /> Our Software <br /> Workshops and Events!
          </h1>
          <p className="text-lg text-[#C0C7DC] max-w-xl">
            Stay ahead with hands-on workshops and expert-led events designed to
            boost your skills in the latest software technologies.
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg">
              REGISTER NOW
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg">
              VISIT EVENTS
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 h-full flex items-center">
          <Image
            width={300}
            height={300}
            src="/pixels.jpg"
            alt="Events Highlights"
            className="w-full h-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Highlighted Sections with Icons and Text */}
      <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 text-center text-[#C0C7DC]">
        {/* Card 1 */}
        <div className="space-y-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#404040] mx-auto">
            <svg
              className="w-6 h-6 text-[#6272A1]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657a8 8 0 10-11.314 0 8 8 0 0011.314 0zM12 12v.01M12 8v4l2 2"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-[#6272A1]">
            Populer di dekatmu
          </h3>
          <p>
            Tempat pariwisata yang populer dan pasti dikenal semua orang di
            dekatmu.
          </p>
        </div>

        {/* Card 2 */}
        <div className="space-y-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#404040] mx-auto">
            <svg
              className="w-6 h-6 text-[#6272A1]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c1.657 0 3 1.343 3 3v1h3v2H6v-2h3v-1c0-1.657 1.343-3 3-3zM3 21h18"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-[#6272A1]">
            Favorit di dekatmu
          </h3>
          <p>Tempat favorit dan disukai semua orang di sekitar daerah kamu.</p>
        </div>

        {/* Card 3 */}
        <div className="space-y-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#404040] mx-auto">
            <svg
              className="w-6 h-6 text-[#6272A1]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 10c0 3.866-3.134 7-7 7S4 13.866 4 10c0-3.866 3.134-7 7-7s7 3.134 7 7zM12 12l3 2m-6 0l3-2m-3-4h.01"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-[#6272A1]">
            Ramai di didekatmu
          </h3>
          <p>
            Spot yang paling ramai dikunjungi para warga sekaligus para
            wisatawan.
          </p>
        </div>
      </div>
    </div>
  );
}
