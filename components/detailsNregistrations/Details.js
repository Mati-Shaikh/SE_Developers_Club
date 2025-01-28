import { Calendar, MapPin, Users, Users2 } from "lucide-react";
import Image from "next/image";

const Details = ({ item }) => {
  return (
    <div className="w-full p-8 shadow-lg rounded-lg text-white">
      <h3 className="text-3xl font-bold">{item.name}</h3>
      <p className="text-lg ">{item.description}</p>
      <div className="flex justify-left items-center flex-wrap gap-4 mt-4">
        <div className="bg-neutral-800 py-4 px-10 rounded-lg">
          <p className="text-lg font-bold flex flex-row items-center">
            <Calendar className="inline-block mr-4" size={15} />
            Date
          </p>
          <p className="text-lg">{new Date(item.time).toLocaleString()}</p>
        </div>
        <div className="bg-neutral-800 py-4 p-10 rounded-lg ">
          <p className="text-lg font-bold flex flex-row items-center">
            <MapPin className="inline-block mr-4" size={15} />
            Location
          </p>
          <p className="text-lg">{item.venue}</p>
        </div>
        <div className="bg-neutral-800 py-4 p-10 rounded-lg ">
          <p className="text-lg font-bold flex flex-row items-center">
            <Users2 className="inline-block mr-4" size={15} />
            Team Size
          </p>
          <p className="text-lg">{item.teamSize}</p>
        </div>
        <div className="bg-neutral-800 py-4 px-10 rounded-lg ">
          <p className="text-lg font-bold flex flex-row items-center">
            <Users className="inline-block mr-4" size={15} />
            Max Capacity
          </p>
          <p className="text-lg">{item.capacity}</p>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {item.images.map((img, index) => (
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
