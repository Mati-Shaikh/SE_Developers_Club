"use client";
import { CalendarPlus, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const NewEvent = () => {
  const [formData, setFormData] = useState({
    name: "",
    time: "2024-11-15T10:00:00.000+00:00",
    venue: "",
    capacity: 100,
    description: "",
    images: ["/example.jpeg", "/example.jpeg"],
  });
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.time ||
      !formData.venue ||
      !formData.capacity ||
      !formData.description
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    const eventData = {
      name: formData.name,
      time: formData.time,
      venue: formData.venue,
      capacity: formData.capacity,
      description: formData.description,
      images: formData.images,
    };

    fetch("/api/EventApi/addEvent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData), // Send the updated event data
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Event created successfully") {
          toast.success(data.message);
        } else {
          toast.error(data.error);
        }
      })
      .catch((error) => {
        toast.error("Something went wrong!!");
        console.error("Failed to update event:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black text-white bg-opacity-60 flex items-center justify-center">
          <div className="bg-neutral-950 p-8 rounded-lg border shadow-white shadow w-1/2">
            <h2 className="text-2xl font-bold mb-4">Add New Event</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Event Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded bg-dark hover:bg-gray-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded bg-dark hover:bg-gray-600"
                />
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Date and Time
                  </label>
                  <input
                    type="datetime-local"
                    name="time"
                    value={new Date(formData.time).toISOString().slice(0, -1)} // Format date for input
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded bg-dark hover:bg-gray-600"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Capacity
                  </label>
                  <input
                    type="number"
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded bg-dark hover:bg-gray-600"
                  />
                </div>
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

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  disabled={loading}
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded hover:bg-secondary"
                >
                  {loading ? (
                    <Loader2 className="h-6 w-6 text-white animate-spin" />
                  ) : (
                    "Create"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {!showModal && (
        <button
          onClick={() => setShowModal(true)}
          className="absolute bottom-10 right-10 bg-white hover:bg-primary hover:text-white text-black p-2 rounded-md cursor-pointer"
        >
          <CalendarPlus size={30} />
        </button>
      )}
    </>
  );
};

export default NewEvent;
