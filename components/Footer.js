// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
        <div className='grid grid-cols-2'>         
            <div className="flex flex-col mx-8 space-y-4">
                <div className="flex items-center space-x-2">
                    {/* <img src="/path-to-logo.png" alt="Logo" className="h-8 w-8" /> */}
                    <span className="font-bold text-lg">Destinize</span>
                </div>
                <p className="text-gray-400">
                    Destinize adalah website atau layanan aplikasi yang membantu kamu memilih 
                    atau merekomendasikan tempat yang dijuluki ‘hidden gems’ agar lebih dikenal dan ramai
                    <a href="#" className="text-blue-400"> Baca Selengkapnya</a>
                </p>
                <div className="space-y-1">
                    <p>📞 0851-5616-2840</p>
                    <p>📧 syaokay@gmail.com</p>
                    <p>📍 Ciamis, Jawa Barat. Indonesia</p>
                    <p>📞 +1-212-9876543</p>
                </div>
            </div>
            <div className="flex flex-row gap-8 mr-8">
                    <div className="basis-1/3">
                    {/* <h3 className="text">About Us</h3> */}
                    <ul className="space-y-1 text-gray-400">
                        <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                        <li><a href="#" className="hover:text-blue-400">Blog</a></li>
                        <li><a href="#" className="hover:text-blue-400">Karir</a></li>
                        <li><a href="#" className="hover:text-blue-400">Pekerjaan</a></li>
                        <li><a href="#" className="hover:text-blue-400">Berita</a></li>
                        <li><a href="#" className="hover:text-blue-400">Galeri</a></li>
                        <li><a href="#" className="hover:text-blue-400">Afiliasi</a></li>
                    </ul>
                    </div>

                    <div className="basis-1/3">
                    {/* <h3 className="font-semibold">Contact Us</h3> */}
                    <ul className="space-y-1 text-gray-400">
                        <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
                        <li><a href="#" className="hover:text-blue-400">Online Chat</a></li>
                        <li><a href="#" className="hover:text-blue-400">WhatsApp</a></li>
                        <li><a href="#" className="hover:text-blue-400">Telegram</a></li>
                        <li><a href="#" className="hover:text-blue-400">Tiket</a></li>
                        <li><a href="#" className="hover:text-blue-400">Call Center</a></li>
                        <li><a href="#" className="hover:text-blue-400">Bantuan</a></li>
                    </ul>
                    </div>

                    <div className="basis-1/3">
                    {/* <h3 className="font-semibold">Akun</h3> */}
                    <ul className="space-y-1 text-gray-400">
                        <li><a href="#" className="hover:text-blue-400">Account</a></li>
                        <li><a href="#" className="hover:text-blue-400">Organiser</a></li>
                        <li><a href="#" className="hover:text-blue-400">Order</a></li>
                        <li><a href="#" className="hover:text-blue-400">Pembayaren</a></li>
                        <li><a href="#" className="hover:text-blue-400">Pengembalian</a></li>
                        <li><a href="#" className="hover:text-blue-400">Copyright</a></li>
                        <li><a href="#" className="hover:text-blue-400">Bahassa</a></li>
                    </ul>
                    </div>

            </div>
            <div></div>
            <div className="border-t border-gray-700 mt-5 pt-3 text-gray-500 text-sm text-center space-y-2">
                <div className="flex justify-center space-x-6">
                <a href="#" className="hover:text-blue-400">Tentang Kami</a>
                <a href="#" className="hover:text-blue-400">Kontak</a>
                <a href="#" className="hover:text-blue-400">Privasi & Policy</a>
                <a href="#" className="hover:text-blue-400">Sitemap</a>
                <a href="#" className="hover:text-blue-400">Panduan Penggunaan</a>
                </div>
                <p>© 2021–2022, All Rights Reserved</p>
            </div>

        </div>
    </footer>
    
  );
};

export default Footer;
