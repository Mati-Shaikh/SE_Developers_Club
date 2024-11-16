import CloudinaryUpload from "@/app/lib/CloudinaryUpload";
import { Loader2, X, UploadCloud } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

const EditWorkshopModal = ({ workshopData, handleClose, setRefresh }) => {
  const [formData, setFormData] = useState(workshopData);
  const [selectedImages, setSelectedImages] = useState([]);
  const [existingImages, setExistingImages] = useState(
    workshopData.images || []
  );
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (event) => {
    if (event.target.files) {
      const newImages = Array.from(event.target.files);
      setSelectedImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const handleRemoveSelectedImage = (index) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleRemoveExistingImage = (index) => {
    setExistingImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSaveEdit = (updatedWorkshop) => {
    const workshopData = {
      id: updatedWorkshop._id,
      name: updatedWorkshop.name,
      speaker: updatedWorkshop.speaker,
      time: updatedWorkshop.time,
      venue: updatedWorkshop.venue,
      capacity: updatedWorkshop.capacity,
      description: updatedWorkshop.description,
      images: updatedWorkshop.images,
    };

    fetch("/api/WorkshopApi/updateWorkshop", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workshopData), // Send the updated event data
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Workshop updated successfully") {
          // Update the local state to reflect the changes
          // console.log(data);
          toast.success(data.message);
          setRefresh((prev) => !prev); // refreshing data after saving new data
          handleClose(); // Close the modal after saving
        } else {
          toast.error(data.error);
        }
      })
      .catch((error) => {
        toast.error("Something went wrong!!");
        console.error("Failed to update event:", error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let newImages = [];
    if (selectedImages.length > 0) {
      // uploading images first
      newImages = await CloudinaryUpload(selectedImages);
    }
    const updatedWKSData = {
      ...formData,
      images: [...existingImages, ...newImages],
    };
    handleSaveEdit(updatedWKSData); // Pass the updated form data to parent for saving
  };

  return (
    <div className="fixed inset-0 bg-black text-white bg-opacity-60 flex items-center justify-center">
      <div className="bg-neutral-950 p-8 border shadow-white rounded-lg shadow w-1/2">
        <h2 className="text-xl font-bold mb-4">Edit Workshop</h2>
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
            <label className="block text-sm font-medium mb-2">Speaker</label>
            <input
              type="text"
              name="speaker"
              speaker="speaker"
              value={formData.speaker}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded bg-dark hover:bg-gray-600"
            />
          </div>
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

          {/* Attach Images Section */}
          <div className="mb-4 space-y-3">
            <label
              htmlFor="uploadimg"
              className="block text-sm font-medium mb-3"
            >
              Attach Images
            </label>
            <label
              htmlFor="uploadimg"
              className="px-4 py-2 border rounded-md cursor-pointer"
            >
              <UploadCloud className="text-white inline-block mr-2" />
              Attach Images
              <input
                id="uploadimg"
                type="file"
                multiple
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
              />
            </label>
            <div className="flex flex-wrap mt-2 gap-2">
              {/* Display existing images */}
              {existingImages.map((image, index) => (
                <div key={`existing-${index}`} className="relative">
                  <img
                    src={image} // Use the existing image URL
                    alt={`Existing Image ${index}`}
                    className="h-12 w-12 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveExistingImage(index)}
                    className="absolute -top-1 -right-1 bg-gray-800 text-white rounded-full p-1 hover:bg-red-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}

              {/* Display newly added images */}
              {selectedImages.map((image, index) => (
                <div key={`selected-${index}`} className="relative">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Selected Image ${index}`}
                    className="h-12 w-12 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveSelectedImage(index)}
                    className="absolute -top-1 -right-1 bg-gray-800 text-white rounded-full p-1 hover:bg-red-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
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
              disabled={loading}
              className="px-4 py-2 bg-primary text-white rounded hover:bg-secondary"
            >
              {loading ? (
                <Loader2 className="h-6 w-6 text-white animate-spin" />
              ) : (
                "Save"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditWorkshopModal;
