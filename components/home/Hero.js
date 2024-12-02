import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-black text-white min-h-screen mt-10">
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto p-8 space-y-10 lg:space-y-0 lg:space-x-20 lg:h-[600px]">
        {/* Text Section */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Explore & Grow with <br /> Our Software <br /> Workshops and Events!
          </h1>
          <p className="text-lg text-[#C0C7DC] max-w-xl">
            We&apos;re a community of passionate tech learners and innovators.
            We foster creativity and collaboration through workshops,
            hackathons, and knowledge sharing. Our goal is to equip students
            with cutting-edge software skills to tackle real-world challenges
            and shape the future of technology.
          </p>
          <div className="space-x-4 mt-10">
            <Link
              href={"/workskops"}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg"
            >
              VISIT WORKSHOPS
            </Link>
            <Link
              href={"/events"}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg"
            >
              VISIT EVENTS
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 h-full flex items-center">
          <Image
            width={300}
            height={300}
            src="/hero.jpg"
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
          <h3 className="text-lg font-semibold text-[#6272A1]">Innovation</h3>
          <p>
            We spark wild ideas, pushing boundaries to craft groundbreaking
            software solutions.
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
            Collaboration
          </h3>
          <p>
            Team up. Mix minds. Create magic together—because solo coding is so
            last year.
          </p>
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
            Skill Development
          </h3>
          <p>
            Master your craft, one epic workshop at a time. Get ready to code
            like a pro!
          </p>
        </div>
      </div>
    </div>
  );
}
