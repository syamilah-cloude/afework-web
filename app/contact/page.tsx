"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactUs() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar currentPage="contact" />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">Contact Us</h1>
          <p className="text-gray-400 text-base sm:text-lg">
            Hubungi kami untuk pertanyaan, saran, atau informasi lebih lanjut
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="text-center p-6 sm:p-8 bg-gray-900/50 rounded-lg">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📍</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Location</h3>
              <p className="text-gray-400 text-sm sm:text-base">Jakarta, Indonesia</p>
            </div>
            
            <div className="text-center p-6 sm:p-8 bg-gray-900/50 rounded-lg">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📧</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Email</h3>
              <a href="mailto:info@afework.id" className="text-gray-400 hover:text-white transition text-sm sm:text-base">
                info@afework.id
              </a>
            </div>
            
            <div className="text-center p-6 sm:p-8 bg-gray-900/50 rounded-lg sm:col-span-2 md:col-span-1">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📱</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Phone</h3>
              <a href="tel:+6281234567890" className="text-gray-400 hover:text-white transition text-sm sm:text-base">
                +62 812-3456-7890
              </a>
            </div>
          </div>

          {/* Social Media & Shop */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Connect With Us</h2>
            
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
              <a 
                href="https://shopee.co.id/afework.id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 p-5 sm:p-6 bg-gradient-to-r from-orange-600/20 to-orange-800/20 rounded-lg hover:from-orange-600/30 hover:to-orange-800/30 transition"
              >
                <div className="text-3xl sm:text-4xl">🛍️</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1">Shopee</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">@afework.id</p>
                </div>
              </a>

              <a 
                href="https://instagram.com/afework.id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 p-5 sm:p-6 bg-gradient-to-r from-pink-600/20 to-purple-800/20 rounded-lg hover:from-pink-600/30 hover:to-purple-800/30 transition"
              >
                <div className="text-3xl sm:text-4xl">📷</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1">Instagram</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">@afework.id</p>
                </div>
              </a>

              <a 
                href="https://wa.me/6281234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 p-5 sm:p-6 bg-gradient-to-r from-green-600/20 to-green-800/20 rounded-lg hover:from-green-600/30 hover:to-green-800/30 transition"
              >
                <div className="text-3xl sm:text-4xl">💬</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1">WhatsApp</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">Chat with us</p>
                </div>
              </a>

              <a 
                href="https://tiktok.com/@afework.id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 p-5 sm:p-6 bg-gradient-to-r from-gray-700/20 to-gray-900/20 rounded-lg hover:from-gray-700/30 hover:to-gray-900/30 transition"
              >
                <div className="text-3xl sm:text-4xl">🎵</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1">TikTok</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">@afework.id</p>
                </div>
              </a>
            </div>

            {/* Business Hours */}
            <div className="text-center p-6 sm:p-8 bg-gray-900/50 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Business Hours</h3>
              <div className="text-gray-400 space-y-2 text-sm sm:text-base">
                <p>Senin - Jumat: 09:00 - 18:00 WIB</p>
                <p>Sabtu: 09:00 - 15:00 WIB</p>
                <p>Minggu: Tutup</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Visit Our Store
          </h2>
          <p className="text-gray-400 mb-6 sm:mb-8 text-base sm:text-lg">
            Lihat koleksi lengkap kami dan dapatkan penawaran spesial
          </p>
          <Link 
            href="https://shopee.co.id/afework.id#product_list" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-white text-black px-10 sm:px-12 py-3 sm:py-4 rounded text-base sm:text-lg font-semibold hover:bg-gray-200 transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
