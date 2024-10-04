export default function ClubInfo() {
    return (
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">About Our Club</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoCard 
              title="Our Mission" 
              description="To foster a community of passionate developers and engineers, promoting innovation and continuous learning."
            />
            <InfoCard 
              title="What We Do" 
              description="We organize workshops, hackathons, and guest lectures to enhance our members' skills and industry knowledge."
            />
            <InfoCard 
              title="Join Us" 
              description="Open to all students interested in software engineering. Beginners and experts alike are welcome to join our diverse community."
            />
          </div>
        </div>
      </div>
    )
  }
  
  function InfoCard({ title, description }) {
    return (
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    )
  }