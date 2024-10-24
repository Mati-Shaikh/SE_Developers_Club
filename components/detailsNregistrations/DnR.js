"use client";
import { CalendarCheck, Info, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import RegisterForm from "./RegsiterForm";
import Details from "./Details";
import { usePathname } from "next/navigation";
import { toast } from "sonner";

const DnR = () => {
  const path = usePathname();
  const [selectedTab, setSelectedTab] = useState("details");
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState(null);

  useEffect(() => {
    let id = path.split("/")[2];
    let url = "/api";
    if (path.split("/")[1] === "events") {
      url += "/EventApi/getEvent";
    } else {
      url += "/WorkshopApi/getWorkshop";
    }

    setLoading(true);
    fetch(`${url}?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          // console.log(data);
          setItem(data.data);
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
      {item && (
        <div className="mt-4">
          {selectedTab === "details" && (
            <div className="p-4 bg-neutral-950 rounded-md shadow-md">
              <Details item={item} />
            </div>
          )}
          {selectedTab === "register" && (
            <div className="p-4 bg-neutral-950 rounded-md shadow-md">
              <RegisterForm
                id={item._id}
                usecase={path.split("/")[1] === "events" ? "Event" : "Workshop"}
              />
            </div>
          )}
        </div>
      )}
      {loading && (
        <Loader2 className="m-4 mr-2 h-6 w-6 text-white animate-spin" />
      )}
    </div>
  );
};

export default DnR;
