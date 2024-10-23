import Image from "next/image";

const ListWorkShops = () => {
  return (
    <div className="p-10 md:p-20 mt-10 text-white w-full">
      <h3 className="text-lg md:text-3xl mb-4 md:mb-10 font-bold">
        All WorkShops Organized by SES.
      </h3>
      <div className="space-y-4 w-full">
        {list.map((item, key) => (
          <div key={key} className="w-full h-full">
            <div className=" h-auto bg-black rounded-xl p-6 border border-gray-800">
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 mb-4 h-full">
                <div className="relative flex justify-between items-start mb-4">
                  <div>
                    <p className="text-blue-400 text-sm mb-1 animate-bounce">
                      {item.title}
                    </p>
                    <h3 className="text-blue-300 text-2xl font-bold mb-2 animate-bounce">
                      WORKSHOP
                    </h3>
                    {/* <p className="bg-gray-400 rounded-lg p-2 text-sm">Done</p> */}
                  </div>
                  <Image
                    className="absolute right-10 top-6 rounded-lg h-40 w-auto"
                    src={item.image}
                    width={200}
                    height={200}
                    alt="workshop or ecent picture"
                  />
                </div>

                <div className="mt-6 text-gray-300">
                  <p className="mb-2">{item.date}</p>
                  <p className="mb-2">Venue: {item.venue}</p>
                  <p>{item.time}</p>
                </div>

                <div className="mt-auto pt-6">
                  <hr className="border-t border-gray-600 my-4" />
                  <button className="w-full bg-primary hover:bg-slate-600 text-white py-2 px-4 rounded-md transition-colors">
                    View More Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListWorkShops;

const list = [
  {
    title: "Workshop 1",
    description: "Workshop 1 description",
    date: "Dec 24, 2024",
    time: "1 PM",
    location: "Workshop 1 location",
    image: "/About/AboutSES_Img.jpg",
    venue: "Auditorium",
  },
  {
    title: "Workshop 2",
    description: "Workshop 2 description",
    date: "Dec 24, 2024",
    time: "1 PM",
    location: "Workshop 2 location",
    image: "/About/AboutSES_Img.jpg",
    venue: "Auditorium",
  },
  {
    title: "Workshop 3",
    description: "Workshop 3 description",
    date: "Dec 24, 2024",
    time: "1 PM",
    location: "Workshop 3 location",
    image: "/About/AboutSES_Img.jpg",
    venue: "Auditorium",
  },
];
