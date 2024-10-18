import Image from "next/image";

export default function AboutSES() {
  return (
    <div className="relative p-10 md:py-20 md:pb-0 md:px-40 lg:-translate-y-32">
      <div>
        <h1 className="relative z-10 text-6xl lg:text-8xl font-bold text-primary text-center mb-8 md:mb-12 lg:mb-16 lg:translate-y-40">
          About SES
        </h1>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-8">
          <div className="w-full lg:w-5/12 relative">
            <Image
              src="/About/AboutSES_Img.jpg"
              height={650}
              width={575}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              alt="SES workshops and events"
            />
            <h1 className="absolute top-28 left-0 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-primary transform -translate-x-2/4 -translate-y-1/4">
              #
            </h1>
          </div>
          <div className="w-full lg:w-7/12 text-white p-4 sm:p-6 md:p-8 lg:p-8 text-lg sm:text-xl md:text-2xl font-medium relative">
            <p className="mt-4 lg:mt-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod
              tempor incididunt ut labore et magna aliqua. Ut enim ad minim
              veniam, quis exercitation ullamco laboris nisi ut aliquip ex ea
              consequat. Duis aute irure dolor in reprehenderit voluptate velit
              esse cillum dolore eu fugiat nulla Excepteur sint occaecat
              cupidatat non proident, culpa qui officia deserunt mollit anim id
              est.
            </p>
            <hr className="absolute sm:border-t-[4px] md:border-t-[5px] lg:border-t-[6px] w-[176px] border-primary lg:right-16 md:right-8 right-4 sm:right-6 bottom-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
