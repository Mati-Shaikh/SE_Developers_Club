"use client";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const path = usePathname();
  const [toShow, setToShow] = useState(true);

  useEffect(() => {
    if (path.includes("/admin")) {
      setToShow(false);
    } else {
      setToShow(true);
    }
  }, [path]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {toShow ? (
        <nav className="backdrop-filter backdrop-blur-lg bg-[rgba(255,255,255,0.1)] shadow-lg p-1 fixed top-0 left-0 w-full z-20">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <Image width={230} height={40} src="/Frame 1.png" alt="SES Logo" />

            {/* Links for larger screens */}
            <div className="hidden md:flex md:items-center space-x-8 mr-4">
              <Link
                href="/"
                className="group text-lg relative text-white rounded-lg"
              >
                Home
                <span className="absolute left-0 bottom-0 rounded w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
              </Link>
              <Link
                href="/about"
                className="group text-lg relative text-white rounded-lg"
              >
                About Us
                <span className="absolute left-0 bottom-0 rounded w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
              </Link>
              <Link
                href="/workshops"
                className="group text-lg relative text-white rounded-lg"
              >
                Workshops
                <span className="absolute left-0 bottom-0 rounded w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
              </Link>
              <Link
                href="/events"
                className="group text-lg relative text-white rounded-lg"
              >
                Events
                <span className="absolute left-0 bottom-0 rounded w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
              </Link>

              <div className="h-4 w-1 bg-primary rounded" />

              <div className="">
                <Link href={"/"} target="_blank">
                  <Image
                    src="/instagram.png"
                    width={40}
                    height={40}
                    alt="instagram"
                  />
                </Link>
              </div>
            </div>

            {/* Menu button for smaller screens */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="hover:bg-gray-800 p-2 rounded-lg"
              >
                <Menu className="text-white h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Dropdown menu for smaller screens */}
          {isOpen && (
            <div className="md:hidden mt-4 backdrop-filter backdrop-blur-lg bg-[rgba(255,255,255,0.1)] rounded-lg shadow-lg">
              <Link
                href="/"
                className="block py-2 px-4 text-white rounded-lg hover:bg-gray-800"
              >
                Home
              </Link>
              <Link
                href="/workshops"
                className="block py-2 px-4 text-white rounded-lg hover:bg-gray-800"
              >
                Workshops
              </Link>
              <Link
                href="/events"
                className="block py-2 px-4 text-white rounded-lg hover:bg-gray-800"
              >
                Events
              </Link>
              <Link
                href="/about"
                className="block py-2 px-4 text-white rounded-lg hover:bg-gray-800"
              >
                About Us
              </Link>
            </div>
          )}
        </nav>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
