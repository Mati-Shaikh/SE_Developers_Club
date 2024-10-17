import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="p-5 border-gray-700 pt-3 text-gray-500 text-sm text-center space-y-4">
        <ul>
          <p className="text-gray-800 font-bold text-5xl pb-6">
            Follow <span className="text-blue-600">Us</span>
          </p>
          <div className="flex gap-6 pb-5 text-white justify-center">
            <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
            <FaGoogle className="text-2xl cursor-pointer hover:text-red-600" />
            <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
            <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
          </div>
        </ul>
      </div>
      <div className="bg-black w-full flex flex-col md:flex-row justify-center items-center text-white py-10 space-y-5">
        {/* Left Column - Contact Info */}
        <div className="flex flex-col mx-8 space-y-4">
          <p className="text-gray-400 text-center md:text-left">
            Destinize adalah website atau layanan aplikasi yang membantu kamu
            memilih atau merekomendasikan tempat yang dijuluki ‘hidden gems’
            agar lebih dikenal dan ramai
            <Link href="#" className="text-blue-400">
              {" "}
              Baca Selengkapnya
            </Link>
          </p>
          <div className="space-y-1 text-center md:text-left">
            <p>✆ 0851-5616-2840</p>
            <p>✉︎ syaokay@gmail.com</p>
            <p>⚲ Ciamis, Jawa Barat. Indonesia</p>
            <p>🖨 +1-212-9876543</p>
          </div>
        </div>

        {/* Right Column - Links */}
        <div className="flex flex-col mx-8 space-y-4 w-2/3">
          <div className="flex flex-col md:flex-row gap-8 mx-3 justify-center">
            <div className="basis-1/3">
              <ul className="space-y-1 text-gray-400 text-center md:text-left">
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 font-semibold text-white"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Karir
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Pekerjaan
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Berita
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Galeri
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Afiliasi
                  </Link>
                </li>
              </ul>
            </div>

            <div className="basis-1/3">
              <ul className="space-y-1 text-gray-400 text-center md:text-left">
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 font-semibold text-white"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Online Chat
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    WhatsApp
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Telegram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Tiket
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Call Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Bantuan
                  </Link>
                </li>
              </ul>
            </div>

            <div className="basis-1/3">
              <ul className="space-y-1 text-gray-400 text-center md:text-left">
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 font-semibold text-white"
                  >
                    Account
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Organiser
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Order
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Pembayaren
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Pengembalian
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Copyright
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Bahassa
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="border-gray-700 pt-3 text-gray-500 text-sm text-center space-y-4">
        <div className="flex mx-3 justify-center space-x-10">
          <Link href="#" className="hover:text-blue-400">
            Tentang Kami
          </Link>
          <Link href="#" className="hover:text-blue-400">
            Kontak
          </Link>
          <Link href="#" className="hover:text-blue-400">
            Privasi & Policy
          </Link>
          <Link href="#" className="hover:text-blue-400">
            Sitemap
          </Link>
          <Link href="#" className="hover:text-blue-400">
            Panduan Penggunaan
          </Link>
        </div>
        <p className="text-center md:text-center">
          © 2021–2022, All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
