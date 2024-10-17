"use client";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Events() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`flex  h-screen ${
        isCollapsed ? "w-16" : "w-64"
      } bg-indigo-100 transition-width duration-300`}
    >
      {/* Sidebar */}
      {!isCollapsed && <Sidebar />}
      <button
        className={`relative top-400 ${
          isCollapsed ? "left-5" : "-left-5"
        } p-2 bg-[#6E78AA] text-white rounded-full shadow-lg focus:outline-none h-10`}
        style={{ marginTop: "80px" }}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
      </button>
    </div>
  );
}
