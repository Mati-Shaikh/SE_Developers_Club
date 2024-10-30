"use client";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import WksCard from "./WksCard";
import EditWorkshopModal from "./EditWorkshopModal";
import { toast } from "sonner";

const WksTable = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState(null);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [workshopToEdit, setWorkshopToEdit] = useState(null); // Store the event to be edited

  useEffect(() => {
    setLoading(true);
    fetch("/api/WorkshopApi/getWorkshop")
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          // console.log(data);
          setItems(data.data);
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
        toast.error("Something went wrong!!");
      });
  }, []);
  const handleView = (workshop) => {
    setSelectedWorkshop(workshop);
  };

  // Handle close modal
  const handleClose = () => {
    setSelectedWorkshop(null);
  };

  // Handle open edit modal
  const handleOpenEditModal = (event) => {
    setWorkshopToEdit(event); // Set the event to be edited
    setIsEditModalOpen(true); // Open the modal
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
          setItems((prevItems) =>
            prevItems.map((item) =>
              item._id === updatedWorkshop._id
                ? { ...item, ...updatedWorkshop }
                : item
            )
          );
          toast.success(data.message);
        } else {
          toast.error(data.error);
        }
      })
      .catch((error) => {
        toast.error("Something went wrong!!");
        console.error("Failed to update event:", error);
      });

    setIsEditModalOpen(false); // Close the modal after saving
  };

  const handleDelete = (WorkshopId) => {
    const confirmation = confirm(
      "Are you sure you want to delete this workshop?"
    );
    if (!confirmation) {
      return;
    }

    fetch("/api/WorkshopApi/deleteWorkshop", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: WorkshopId }), // Send the event ID to be deleted
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "Workshop deleted successfully") {
          // Update the local state to remove the deleted event
          setItems((prevItems) =>
            prevItems.filter((item) => item._id !== WorkshopId)
          );
          toast.success(data.message);
        } else {
          toast.error(data.error);
        }
      })
      .catch((error) => {
        toast.error("Something went wrong!!");
        console.error("Failed to delete event:", error);
      });
  };

  return (
    <>
      <div className="w- full bg-transparent overflow-x-auto rounded-lg shadow-sm shadow-gray-200 border border-gray-200 text-white">
        <table className="min-w-full divide-y-2 divide-gray-200  text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr className="bg-slate-800 divide-x">
              <th className="whitespace-nowrap px-4 py-2 font-bold">Name</th>
              <th className="whitespace-nowrap px-4 py-2 font-bold">Speaker</th>
              <th className="whitespace-nowrap px-4 py-2 font-bold">
                DateNTime
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-bold">Venue</th>
              <th className="whitespace-nowrap px-4 py-2 font-bold">
                Capacity
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-bold">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 relative">
            {items &&
              items.map((i, k) => (
                <tr key={k} className="divide-x">
                  <td className="whitespace-nowrap px-4 py-2 font-medium">
                    {i.name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium">
                    {i.speaker}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    {new Date(i.time).toLocaleString()}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">{i.venue}</td>
                  <td className="whitespace-nowrap px-4 py-2">{i.capacity}</td>

                  <td className="whitespace-nowrap px-4 py-2 space-x-2 w-60">
                    <button
                      className="inline-block rounded bg-primary px-4 py-2 text-xs font-medium  hover:bg-slate-700"
                      onClick={() => handleView(i)}
                    >
                      View
                    </button>
                    <button
                      className="inline-block rounded bg-primary px-4 py-2 text-xs font-medium  hover:bg-slate-700"
                      onClick={() => handleOpenEditModal(i)}
                    >
                      Edit
                    </button>
                    <button
                      className="inline-block rounded bg-red-500 px-4 py-2 text-xs font-medium  hover:bg-red-700"
                      onClick={() => handleDelete(i._id)}
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

      {selectedWorkshop && (
        <WksCard wksData={selectedWorkshop} handleClose={handleClose} />
      )}
      {isEditModalOpen && (
        <EditWorkshopModal
          workshopData={workshopToEdit}
          handleClose={() => setIsEditModalOpen(false)}
          handleSave={handleSaveEdit}
        />
      )}
    </>
  );
};

export default WksTable;
