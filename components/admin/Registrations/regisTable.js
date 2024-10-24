"use client";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const EditRegistrationModal = ({ registrationData, handleClose, handleSave }) => {
    const [formData, setFormData] = useState({
      ...registrationData,
      department: registrationData.userInfo.department,
      rollno: registrationData.userInfo.rollno,
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      handleSave(formData);
    };
  
    return (
      <div className="fixed inset-0 bg-dark bg-opacity-50 flex items-center justify-center">
        <div className="bg-dark p-8 rounded-lg shadow-lg w-1/2">
          <h2 className="text-xl font-bold mb-4">Edit Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Department</label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded bg-dark hover:bg-gray-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Roll Number</label>
              <input
                type="text"
                name="rollno"
                value={formData.rollno}
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

const RegistrationTable = () => {
    const [loading, setLoading] = useState(false);
    const [registrations, setRegistrations] = useState(null);
    const [selectedRegistration, setSelectedRegistration] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [registrationToEdit, setRegistrationToEdit] = useState(null);
  
    useEffect(() => {
      setLoading(true);
      fetch("/api/RegistrationApi/getRegistration")
        .then((res) => res.json())
        .then((data) => {
          if (data.data) {
            setRegistrations(data.data);
            setLoading(false);
          } else {
            console.log(data.error);
            setLoading(false);
            toast.error(data.error);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          toast.error("Something went wrong!");
        });
    }, []);
  
    const handleView = (registration) => {
      setSelectedRegistration(registration);
    };
  
    const handleClose = () => {
      setSelectedRegistration(null);
    };
  
    const handleOpenEditModal = (registration) => {
      setRegistrationToEdit(registration);
      setIsEditModalOpen(true);
    };
  
    const handleSaveEdit = (updatedRegistration) => {
      const registrationData = {
        id: updatedRegistration._id,
        department: updatedRegistration.department,
        rollno: updatedRegistration.rollno,
      };
  
      fetch(`/api/RegistrationApi/updateRegistration?id=${updatedRegistration._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message === "Registration updated successfully") {
            setRegistrations((prevItems) =>
              prevItems.map((item) =>
                item._id === updatedRegistration._id
                  ? {
                      ...item,
                      userInfo: {
                        ...item.userInfo,
                        department: updatedRegistration.department,
                        rollno: updatedRegistration.rollno,
                      },
                    }
                  : item
              )
            );
            toast.success("Registration updated successfully");
          } else {
            console.error(data.error);
            toast.error("Failed to update registration");
          }
        })
        .catch((error) => {
          console.error("Failed to update registration:", error);
          toast.error("Failed to update registration");
        });
  
      setIsEditModalOpen(false);
    };
  
    const handleDelete = (registrationId) => {
      fetch("/api/RegistrationApi/deleteRegistration", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: registrationId }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message === "Registration deleted successfully") {
            setRegistrations((prevItems) => 
              prevItems.filter((item) => item._id !== registrationId)
            );
            toast.success("Registration deleted successfully");
          } else {
            console.error(data.error);
            toast.error("Failed to delete registration");
          }
        })
        .catch((error) => {
          console.error("Failed to delete registration:", error);
          toast.error("Failed to delete registration");
        });
    };
  
    return (
      <>
        <div className="w-full bg-transparent overflow-x-auto rounded-lg shadow-sm shadow-gray-200 border border-gray-200 text-white">
          <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr className="bg-slate-800 divide-x">
                <th className="whitespace-nowrap px-4 py-2 font-bold">User Name</th>
                <th className="whitespace-nowrap px-4 py-2 font-bold">Email</th>
                <th className="whitespace-nowrap px-4 py-2 font-bold">Department</th>
                <th className="whitespace-nowrap px-4 py-2 font-bold">Roll Number</th>
                <th className="whitespace-nowrap px-4 py-2 font-bold">Event/Workshop</th>
                <th className="whitespace-nowrap px-4 py-2 font-bold">Registration Date</th>
                <th className="whitespace-nowrap px-4 py-2 font-bold">Actions</th>
              </tr>
            </thead>
  
            <tbody className="divide-y divide-gray-200 relative">
              {registrations &&
                registrations.map((registration, index) => (
                  <tr key={index} className="divide-x">
                    <td className="whitespace-nowrap px-4 py-2 font-medium">
                      {registration.userInfo.name}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium">
                      {registration.userInfo.email}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                      {registration.userInfo.department}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                      {registration.userInfo.rollno}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                      {registration.eventOrWorkshopName}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                      {new Date(registration.createdAt).toLocaleString()}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 space-x-2">
                      <button
                        className="inline-block rounded bg-primary px-4 py-2 text-xs font-medium hover:bg-slate-700"
                        onClick={() => handleView(registration)}
                      >
                        View
                      </button>
                      <button
                        className="inline-block rounded bg-primary px-4 py-2 text-xs font-medium hover:bg-slate-700"
                        onClick={() => handleOpenEditModal(registration)}
                      >
                        Edit
                      </button>
                      <button
                        className="inline-block rounded bg-red-500 px-4 py-2 text-xs font-medium hover:bg-red-700"
                        onClick={() => handleDelete(registration._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {loading && (
          <Loader2 className="m-4 mr-2 h-6 w-6 text-white animate-spin" />
        )}
  
        {selectedRegistration && (
          <RegistrationCard 
            registrationData={selectedRegistration} 
            handleClose={handleClose} 
          />
        )}
        
        {isEditModalOpen && (
          <EditRegistrationModal
            registrationData={registrationToEdit}
            handleClose={() => setIsEditModalOpen(false)}
            handleSave={handleSaveEdit}
          />
        )}
      </>
    );
  };
  
  export default RegistrationTable;