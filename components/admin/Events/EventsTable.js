"use client";
import { Ban, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import EventCard from "./EventCard";

const EventsTable = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [items, setItems] = useState(null);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  const handleView = (workshop) => {
    setSelectedWorkshop(workshop);
  };

  // Handle close modal
  const handleClose = () => {
    setSelectedWorkshop(null);
  };
  useEffect(() => {
    setLoading(true);
    fetch("/api/EventApi/getEvent")
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          console.log(data);
          setItems(data.data);
          setLoading(false);
          setError(false);
        } else {
          console.log(data.error);
          setLoading(false);
          setError(data.error);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError("Something went wrong!!");
      });
  }, []);

  return (
    <>
      <div className="w- full bg-transparent overflow-x-auto rounded-lg shadow-sm shadow-gray-200 border border-gray-200 text-white">
        <table className="min-w-full divide-y-2 divide-gray-200  text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr className="bg-slate-800 divide-x">
              <th className="whitespace-nowrap px-4 py-2 font-bold">Name</th>
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
                <tr className="divide-x">
                  <td className="whitespace-nowrap px-4 py-2 font-medium">
                    {i.name}
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
                    <button className="inline-block rounded bg-primary px-4 py-2 text-xs font-medium  hover:bg-slate-700">
                      Edit
                    </button>
                    <button className="inline-block rounded bg-red-500 px-4 py-2 text-xs font-medium  hover:bg-red-700">
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
      {error && (
        <div className="bg-red-500 w-full rounded p-2 flex items-center gap-4 text-white">
          <Ban />
          {error}
        </div>
      )}

      {selectedWorkshop && (
        <EventCard eventData={selectedWorkshop} handleClose={handleClose} />
      )}
    </>
  );
};

export default EventsTable;
