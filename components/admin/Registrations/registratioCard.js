const RegistrationCard = ({ registrationData, handleClose }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-gray-800 text-white p-6 rounded-lg w-11/12 md:w-2/3 lg:w-1/2 relative shadow-lg">
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-white bg-red-500 rounded-full px-2 hover:bg-red-600 transition"
          >
            &times;
          </button>
  
          <h2 className="text-3xl font-bold mb-4 text-white">Registration Details</h2>
          
          <div className="space-y-3">
            <p className="text-gray-300">
              <strong>Name:</strong> {registrationData.userInfo.name}
            </p>
            <p className="text-gray-300">
              <strong>Email:</strong> {registrationData.userInfo.email}
            </p>
            <p className="text-gray-300">
              <strong>Department:</strong> {registrationData.userInfo.department}
            </p>
            <p className="text-gray-300">
              <strong>Roll Number:</strong> {registrationData.userInfo.rollno}
            </p>
            <p className="text-gray-300">
              <strong>Event/Workshop:</strong> {registrationData.eventOrWorkshopName}
            </p>
            <p className="text-gray-300">
              <strong>Registration Date:</strong>{" "}
              {new Date(registrationData.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    );
  };
  export default RegistrationCard;