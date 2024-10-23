import React from "react";

const EventCard = ({ eventData, handleClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 text-white p-6 rounded-lg w-11/12 md:w-2/3 lg:w-1/2 relative shadow-lg">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-white bg-red-500 rounded-full px-2 hover:bg-red-600 transition"
        >
          &times;
        </button>

        {/* Event Images */}
        <div className="mb-4">
          {eventData.images && eventData.images.length > 0 ? (
            <img
              src={eventData.images[0]}
              alt={eventData.name}
              className="w-full h-48 object-cover rounded-md"
            />
          ) : (
            <div className="w-full h-48 bg-gray-700 rounded-md flex items-center justify-center">
              <span className="text-gray-400">No Image Available</span>
            </div>
          )}
        </div>

        {/* Event Details */}
        <h2 className="text-3xl font-bold mb-4 text-white">{eventData.name}</h2>
        <p className="text-gray-300 mb-2">
          <strong>Description:</strong> {eventData.description}
        </p>
        <p className="text-gray-300 mb-2">
          <strong>Date & Time:</strong>{" "}
          {new Date(eventData.time).toLocaleString()}
        </p>
        <p className="text-gray-300 mb-2">
          <strong>Venue:</strong> {eventData.venue}
        </p>
        <p className="text-gray-300 mb-4">
          <strong>Capacity:</strong> {eventData.capacity}
        </p>

        {/* Helping Materials */}
        {eventData.helpingMaterials && (
          <div className="mb-4">
            <strong>Helping Materials:</strong>{" "}
            <span className="text-gray-300">{eventData.helpingMaterials}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;
