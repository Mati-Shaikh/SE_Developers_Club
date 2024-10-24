import React, { useState } from 'react';

const EditEventModal = ({ eventData, handleClose, handleSave }) => {
  const [formData, setFormData] = useState(eventData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(formData); // Pass the updated form data to parent for saving
  };


  return (
    <div className="fixed inset-0 bg-dark  bg-opacity-50 flex items-center justify-center">
      <div className="bg-dark p-8 rounded-lg shadow-lg w-1/2">
        <h2 className="text-xl font-bold mb-4">Edit Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Event Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded bg-dark hover:bg-gray-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Date and Time</label>
            <input
              type="datetime-local"
              name="time"
              value={new Date(formData.time).toISOString().slice(0, -1)} // Format date for input
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded bg-dark hover:bg-gray-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Venue</label>
            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded bg-dark hover:bg-gray-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Capacity</label>
            <input
              type="number"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded bg-dark hover:bg-gray-600"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded hover:bg-secondary"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEventModal;
