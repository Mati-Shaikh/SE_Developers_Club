"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Sidebar from "@/components/admin/Sidebar";
import { usePathname } from "next/navigation";

export default function AdminSidebarWrapper() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const path = usePathname();
  const [toShow, setToShow] = useState(false);

  useEffect(() => {
    if (path.startsWith("/admin")) {
      setToShow(true);
    } else {
      setToShow(false);
    }
  }, [path]);

  return (
    <>
      {toShow ? (
        <div
          className={`flex  h-screen relative z-10 ${
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
            {isCollapsed ? (
              <ChevronRight className="cursor-pointer" />
            ) : (
              <ChevronLeft className="cursor-pointer" />
            )}
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
