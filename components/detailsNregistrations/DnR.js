"use client";
import { CalendarCheck, Info } from "lucide-react";
import { useState } from "react";
import RegisterForm from "./RegsiterForm";
import Details from "./Details";

const DnR = () => {
  const [selectedTab, setSelectedTab] = useState("details");
  return (
    <div className="p-10 md:p-28">
      {/* Tab Header */}
      <div className="flex space-x-4 border-b border-gray-200">
        {/* Home Tab */}
        <button
          className={`flex items-center px-4 py-2 text-sm font-medium cursor-pointer ${
            selectedTab === "details"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => setSelectedTab("details")}
        >
          <Info className="w-5 h-5 mr-2" />
          Details
        </button>

        {/* Profile Tab */}
        <button
          className={`flex items-center px-4 py-2 text-sm font-medium cursor-pointer ${
            selectedTab === "register"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => setSelectedTab("register")}
        >
          <CalendarCheck className="w-5 h-5 mr-2" />
          Register
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {selectedTab === "details" && (
          <div className="p-4 bg-neutral-950 rounded-md shadow-md">
            <Details />
          </div>
        )}
        {selectedTab === "register" && (
          <div className="p-4 bg-neutral-950 rounded-md shadow-md">
            <RegisterForm usecase={"Workshop"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DnR;
