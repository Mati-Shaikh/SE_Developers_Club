import React from "react";
import Link from "next/link";

import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
const Footer = () => {
  return (
    <>
      <div className="p-5 border-gray-700 pt-3 text-secondary-500 text-sm text-center space-y-4">
        <ul>
          <p className="text-secondary font-bold text-5xl pb-6">
            Follow <span className="text-primary">Us!</span>
          </p>
          <div className="flex gap-6 pb-5 text-secondary-500 justify-center">
                <Link href="#">
                <Instagram className="w-6 h-6 hover:text-blue-400" />
                </Link>
                <Link href="#">
                <Twitter className="w-6 h-6 hover:text-blue-400" />
                </Link>
                <Link href="#">
                <Linkedin className="w-6 h-6 hover:text-blue-400" />
                </Link>
                <Link href="#">
                <Facebook className="w-6 h-6 hover:text-blue-400" />
                </Link>
          </div>
          <div class="flex justify-center">
                <div class="w-32 h-2 bg-blue-400 rounded-md"></div>
          </div>
        </ul>
      </div>
      <div className="bg-black w-full flex flex-col md:flex-row justify-center items-center text-secondary py-10 space-y-5">
        {/* Left Column - Contact Info */}
        <div className="flex flex-col mx-8 space-y-4">
          <p className="text-secondary-400 text-left md:text-left">
            Destinize adalah website atau layanan aplikasi yang membantu kamu
            memilih atau merekomendasikan tempat yang dijuluki ‘hidden gems’
            agar lebih dikenal dan ramai
            <Link href="#" className="text-primary">
              {" "}
              Baca Selengkapnya
            </Link>
          </p>
          <div className="space-y-1 text-left md:text-left">
            <p>✆ 0851-5616-2840</p>
            <p>✉︎ syaokay@gmail.com</p>
            <p>⚲ Ciamis, Jawa Barat. Indonesia</p>
            <p>🖨 +1-212-9876543</p>
          </div>
        </div>

        {/* Right Column - Links */}
        <div className="flex flex-col mx-8 space-y-4 w-2/3">
          <div className="flex flex-col md:flex-row gap-8 justify-center ">
            <div className="basis-1/3">
              <ul className="space-y-1 text-secondary text-left md:text-left">
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 font-semibold text-secondary-500"
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
              <ul className="space-y-1 text-secondary text-left md:text-left">
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
              <ul className="space-y-1 text-secondary text-left md:text-left">
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
      <div className="border-gray-700 pt-3 text-secondary text-sm text-center space-y-4">
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
