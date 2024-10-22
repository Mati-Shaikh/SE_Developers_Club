import { Calendar, MapPin, Users } from "lucide-react";
import Image from "next/image";

const Details = () => {
  return (
    <div className="w-full p-8 shadow-lg rounded-lg text-white">
      <h3 className="text-3xl font-bold">Event Name</h3>
      <p className="text-lg ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <div className="flex justify-around flex-wrap gap-4 mt-4">
        <div className="bg-neutral-800 py-4 px-10 rounded-lg min-w-40 md:min-w-80">
          <Calendar />
          <p className="text-lg font-bold">Date</p>
          <p className="text-lg">Date</p>
        </div>
        <div className="bg-neutral-800 py-4 px-10 rounded-lg min-w-40 md:min-w-80">
          <MapPin />
          <p className="text-lg font-bold">Location</p>
          <p className="text-lg">Location</p>
        </div>
        <div className="bg-neutral-800 py-4 px-10 rounded-lg min-w-40 md:min-w-80">
          <Users />
          <p className="text-lg font-bold">Max Capacity</p>
          <p className="text-lg">80</p>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div key={index} className="relative w-full h-64">
              <Image
                src={img}
                alt={`Image ${index + 1}`}
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;

const images = ["/About/AboutSES_Img.jpg", "/pixels.jpg", "/pixels.jpg"];
