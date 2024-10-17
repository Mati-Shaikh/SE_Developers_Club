"use client";
import { Calendar, Settings, ClipboardList, LogOut } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
const Sidebar = () => {
  const [events, setEvents] = useState(true);
  const [workshops, setWorkshops] = useState(false);
  const [registrations, setRegistration] = useState(false);
  const buttonClassName1 =
    "flex items-center space-x-3 bg-[#6E78AA] text-white font-semibold py-3 rounded-lg shadow-md";
  const buttonClassName2 =
    "flex items-center space-x-2 bg-[#CBD5E1] text-white font-semibold py-3 rounded-lg shadow-md hover:bg-[#B4C0D1]";

  const handleEventClick = (e) => {
    setEvents(true);
    setWorkshops(false);
    setRegistration(false);
  };
  const handleWorkshopClick = (e) => {
    setEvents(false);
    setWorkshops(true);
    setRegistration(false);
  };
  const handleRegistrationClick = (e) => {
    setEvents(false);
    setWorkshops(false);
    setRegistration(true);
  };

  return (
    <div className="h-screen flex flex-col justify-between bg-gradient-to-b from-blue-50 to-purple-100 py-6 px-8     w-64">
      <div>
        <div className="flex items-center space-x-2 mb-8">
          <Image
            src="/logo.png"
            width={204}
            height={61}
            style={{ marginTop: "-70px" }}
          />
        </div>

        <nav className="space-y-4">
          <button
            className={
              (events ? buttonClassName1 : buttonClassName2) + " px-12"
            }
            onClick={handleEventClick}
          >
            <Calendar className="w-6 h-6" />
            <span>Events</span>
          </button>
          <button
            className={
              (workshops ? buttonClassName1 : buttonClassName2) + " px-8"
            }
            onClick={handleWorkshopClick}
          >
            <Settings size={20} />
            <span>Workshops</span>
          </button>
          <button
            className={
              (registrations ? buttonClassName1 : buttonClassName2) + " px-6"
            }
            onClick={handleRegistrationClick}
          >
            <ClipboardList size={20} />
            <span>Registrations</span>
          </button>
        </nav>
      </div>

      <div className="space-y-4 items-center">
        <div className="text-[#6E78AA] items-center px-10">
          <span className=" text-lg font-medium mb-4">User Name</span>
        </div>
        <button className={buttonClassName1 + " px-12"}>
          <LogOut className="w-6 h-6" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
