"use client";
import CloudinaryUpload from "@/app/lib/CloudinaryUpload";
import { Loader2, PackagePlus, UploadCloud,X} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const NewWorkshop = () => {
  const [formData, setFormData] = useState({
    name: "",
    time: "2024-11-15T10:00:00.000+00:00",
    venue: "",
    capacity: 100,
    description: "",
    // images: ["/example.jpeg", "/example.jpeg"],
    speaker: "",
    helpingMaterials: "https://drive.google.com/somefolder",
  });
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (event) => {
    if (event.target.files) {
      const newImages = Array.from(event.target.files);
      setSelectedImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const handleRemoveImage = (index) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.description ||
      !formData.speaker ||
      !formData.helpingMaterials||
      !selectedImages.length > 0
    ) {
      toast.error("Please fill all the fields");
      return;
    }
    setLoading(true);

    let imagesURLS = await CloudinaryUpload(selectedImages);

    if (!imagesURLS) {
      toast.error("Something went wrong while uploading images");
      return;
    }

    const eventData = {
      name: formData.name,
      time: formData.time,
      venue: formData.venue,
      capacity: formData.capacity,
      description: formData.description,
      images: imagesURLS,
      speaker: formData.speaker,
      helpingMaterials: formData.helpingMaterials,
    };

    fetch("/api/WorkshopApi/addWorkshop", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData), // Send the updated event data
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Workshop added successfully") {
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
            <h2 className="text-2xl font-bold mb-4">Add New Workshop</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Workshop Name
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
              <div className="flex flex-row justify-between items-center gap-4">
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
                    className="w-20 p-2 border border-gray-300 rounded bg-dark hover:bg-gray-600"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Helping Materials
                  </label>
                  <input
                    type="text"
                    name="helpingMaterials"
                    value={formData.helpingMaterials}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded bg-dark hover:bg-gray-600"
                  />
                </div>
              </div>
              <div className="flex flex-row justify-between items-center gap-4">
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Speaker
                  </label>
                  <input
                    type="text"
                    name="speaker"
                    value={formData.speaker}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded bg-dark hover:bg-gray-600"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Venue
                  </label>
                  <input
                    type="text"
                    name="venue"
                    value={formData.venue}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded bg-dark hover:bg-gray-600"
                  />
                </div>
              </div>

              <div className="mb-2 flex flex-row items-center gap-2">
                <label htmlFor="uploadimg">
                  <span className="px-4 py-2 border rounded-md cursor-pointer">
                    <UploadCloud className="text-white inline-block mr-2" />
                    Attach Images
                  </span>
                  <input
                    id="uploadimg"
                    type="file"
                    multiple
                    onChange={handleImageChange}
                    accept="image/*"
                    className="hidden"
                  />
                </label>

                <div className="flex flex-row items-center space-x-2 mt-2">
                  {selectedImages.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Selected Image ${index}`}
                        className="h-12 w-12 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(index)}
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
          <PackagePlus size={30} />
        </button>
      )}
    </>
  );
};

export default NewWorkshop;
