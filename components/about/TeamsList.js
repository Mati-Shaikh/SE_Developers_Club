import Link from 'next/link';


const TeamsList = () => {
    return (
        <>
        <div className="bg-dark text-secondary flex flex-col items-center py-8">
            <h2 className="text-2xl font-bold mb-6 text-left md:text-center text-primary">
                Meet Our Teams
            </h2>
            <div className="w-full max-w-4xl p-8 grid grid-cols-1 md:grid-cols-2 gap-2">
                {/* First row */}
                <Link href="/teams/pr-marketing" className="bg-red-200 hover:bg-red-300 flex items-center justify-center h-16 text-dark font-bold text-lg rounded transform hover:translate-y-0.5">
                    PR & Marketing
                </Link>
                <Link href="/teams/research-workshops" className="bg-indigo-200 hover:bg-indigo-300 flex items-center justify-center h-16 text-dark font-bold text-lg rounded transform hover:translate-y-0.5">
                    Research & Workshops
                </Link>

                {/* Second row */}
                <Link href="/teams/operations" className="bg-yellow-200 hover:bg-yellow-300 flex items-center justify-center h-16 text-dark font-bold text-lg rounded transform hover:translate-y-0.5">
                    Operations
                </Link>
                <Link href="/teams/research-workshops" className="bg-teal-200 hover:bg-teal-300 flex items-center justify-center h-16 text-dark font-bold text-lg rounded transform hover:translate-y-0.5">
                    Research & Workshops
                </Link>

                {/* Third row */}
                <Link href="/teams/pr-marketing" className="bg-indigo-200 hover:bg-indigo-300 flex items-center justify-center h-16 text-dark font-bold text-lg rounded transform hover:translate-y-0.5">
                    PR & Marketing
                </Link>
                <Link href="/teams/research-workshops" className="bg-yellow-200 hover:bg-yellow-300 flex items-center justify-center h-16 text-dark font-bold text-lg rounded transform hover:translate-y-0.5">
                    Research & Workshops
                </Link>

                {/* Fourth row */}
                <Link href="/teams/pr-marketing" className="bg-red-200 hover:bg-red-300 flex items-center justify-center h-16 text-dark font-bold text-lg rounded transform hover:translate-y-0.5">
                    PR & Marketing
                </Link>
                <Link href="/teams/research-workshops" className="bg-teal-200 hover:bg-teal-300 flex items-center justify-center h-16 text-dark font-bold text-lg rounded transform hover:translate-y-0.5">
                    Research & Workshops
                </Link>
            </div>
        </div>

        
        </>
    );
};

export default TeamsList;