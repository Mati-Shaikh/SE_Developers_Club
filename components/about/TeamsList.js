import Link from "next/link";

const TeamsList = () => {
  return (
    <>
      <div className="bg-dark text-secondary flex flex-col items-center py-8">
        <h2 className="text-2xl font-bold mb-6 text-left md:text-center text-primary">
          Meet Our Teams
        </h2>
        <div className="w-full max-w-4xl p-8 grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* First row */}
          <Link
            href="/about/decor"
            className="bg-red-200 hover:bg-red-300 flex items-center justify-center h-16 text-dark font-bold text-lg md:text-2xl rounded transform hover:translate-y-0.5"
          >
            Decor
          </Link>
          <Link
            href="/about/graphics"
            className="bg-indigo-200 hover:bg-indigo-300 flex items-center justify-center h-16 text-dark font-bold text-lg md:text-2xl rounded transform hover:translate-y-0.5"
          >
            Graphics
          </Link>

          {/* Second row */}
          <Link
            href="/about/social-media-and-content"
            className="bg-yellow-200 hover:bg-yellow-300 flex items-center justify-center h-16 text-dark font-bold text-lg md:text-2xl rounded transform hover:translate-y-0.5"
          >
            Social Media & Content
          </Link>
          <Link
            href="/about/event-coverage-and-video-editing"
            className="bg-teal-200 hover:bg-teal-300 flex items-center justify-center h-16 text-dark font-bold text-lg rounded md:text-2xl transform hover:translate-y-0.5"
          >
            Event Coverage & Video Editing
          </Link>

          {/* Third row */}
          <Link
            href="/about/events-planning"
            className="bg-indigo-200 hover:bg-indigo-300 flex items-center justify-center h-16 text-dark font-bold text-lg rounded md:text-2xl transform hover:translate-y-0.5"
          >
            Events Planning
          </Link>
          <Link
            href="/about/finance"
            className="bg-yellow-200 hover:bg-yellow-300 flex items-center justify-center h-16 text-dark font-bold text-lg rounded md:text-2xl transform hover:translate-y-0.5"
          >
            Finanace
          </Link>

          {/* Fourth row */}
          <Link
            href="/about/operations"
            className="bg-red-200 hover:bg-red-300 flex items-center justify-center h-16 text-dark font-bold text-lg rounded md:text-2xl transform hover:translate-y-0.5"
          >
            Operations
          </Link>
          <Link
            href="/about/pr"
            className="bg-teal-200 hover:bg-teal-300 flex items-center justify-center h-16 text-dark font-bold text-lg md:text-2xl rounded transform hover:translate-y-0.5"
          >
            PR
          </Link>
          {/* Fifth row */}
          <Link
            href="/about/marketing"
            className="bg-red-200 hover:bg-red-300 flex items-center justify-center h-16 text-dark font-bold text-lg rounded md:text-2xl transform hover:translate-y-0.5"
          >
            Marketing
          </Link>
          <Link
            href="/about/information-and-coordination"
            className="bg-teal-200 hover:bg-teal-300 flex items-center justify-center h-16 text-dark font-bold text-lg md:text-2xl rounded transform hover:translate-y-0.5"
          >
            Information & Coordination
          </Link>
          {/* Sixth row */}
          <Link
            href="/about/workshops"
            className="bg-red-200 hover:bg-red-300 flex items-center justify-center h-16 text-dark font-bold text-lg rounded md:text-2xl transform hover:translate-y-0.5"
          >
            Workshops
          </Link>
          <Link
            href="/about/research-and-development"
            className="bg-teal-200 hover:bg-teal-300 flex items-center justify-center h-16 text-dark font-bold text-lg md:text-2xl rounded transform hover:translate-y-0.5"
          >
            Research & Development
          </Link>
        </div>
      </div>
    </>
  );
};

export default TeamsList;
