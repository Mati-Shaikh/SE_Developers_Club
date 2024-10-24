import Image from "next/image";

const Gallery = () => {
  return (
    <div className="p-10 md:p-28">
      <h3 className="text-4xl font-bold text-primary text-left">
        Our Events and Workshops Highlights
      </h3>
      <div className="flex flex-col items-center justify-center gap-4 py-10 w-full">
        <div className="flex flex-col md:flex-row gap-4 w-full md:items-start md:justify-center">
          <div className="flex flex-row md:hidden xl:block rounded-lg gap-4 w-full min-w-[150px] md:w-[400px]">
            <Image
              src="/event.jpg"
              height={200}
              width={200}
              className="rounded-lg w-full h-40 md:h-60 object-cover object-center"
              alt="ses workshops and event"
            />
            <div className="space-y-2 pt-4 block md:hidden xl:block">
              <h4 className="text-xl xl:text-3xl font-bold text-primary text-left">
                SES Workshops and Events
              </h4>
              <p className="text-md xl:text-lg text-white text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>
          <video
            src="/ses.mp4"
            autoPlay
            muted
            playsInline
            className="rounded-lg w-full"
          />
        </div>

        <div className="grid grid-cols-3 gap-4 w-full max-w-[1200px]">
          <Image
            src="/pixels.jpg"
            height={200}
            width={200}
            className="w-full rounded-lg object-cover object-center"
            alt="ses workshops and event"
          />
          <Image
            src="/pixels.jpg"
            height={200}
            width={200}
            className="w-full rounded-lg object-cover object-center"
            alt="ses workshops and event"
          />
          <Image
            src="/pixels.jpg"
            height={200}
            width={200}
            className="w-full rounded-lg object-cover object-center"
            alt="ses workshops and event"
          />
        </div>

        <div className="relative flex flex-col md:flex-row gap-4 w-full">
          <div className="relative w-full">
            <Image
              src="/pixels.jpg"
              height={200}
              width={200}
              className="w-full rounded-lg object-cover object-center h-60 opacity-80"
              alt="ses workshops and event"
            />
            <div className="h-60 absolute top-0 left-0 p-4 space-y-2 rounded-lg">
              <h4 className="text-xl md:text-3xl font-bold text-primary text-left mt-4">
                SES Workshops and Events
              </h4>
              <p className="text-md md:text-lg text-white text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
                <br />
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam
                <br />
                <span className="flex flex-row py-4">🔥❤️👨‍💻</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
