"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar currentPage="home" />

      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="relative w-full h-[calc(100vh-5rem)]">
          <Image src="/images/hero.jpg" alt="Hero Background" fill className="object-cover object-top" priority />
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70 z-10"></div>
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="text-[8rem] sm:text-[12rem] md:text-[20rem] font-bold text-white/10 tracking-wider">ALPHA</div>
          </div>
          
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4 sm:px-6">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Crafted with premium<br />fabrics for all-day comfort
              </h1>
              <button className="mt-6 sm:mt-8 border border-white px-6 sm:px-8 py-2 sm:py-3 rounded hover:bg-white hover:text-black transition text-sm sm:text-base">
                See More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">♻️</div>
              <p className="text-xs sm:text-sm text-gray-400">Rich colors</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">👔</div>
              <p className="text-xs sm:text-sm text-gray-400">Polished look</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">📦</div>
              <p className="text-xs sm:text-sm text-gray-400">Easy to care</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">✨</div>
              <p className="text-xs sm:text-sm text-gray-400">Clean design</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            Elevate Your <span className="text-gray-600">Modest</span><br />
            Style with AFEWORK
          </h2>
          <p className="text-gray-400 mt-4 sm:mt-6 text-sm sm:text-base">Minimalist design with a modern touch</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
            <div className="bg-gray-900 aspect-[3/4] rounded-lg overflow-hidden relative">
              <Image src="/images/product-1.jpg" alt="Product 1" fill className="object-cover" />
            </div>
            <div className="bg-gray-900 aspect-[3/4] rounded-lg overflow-hidden relative">
              <Image src="/images/product-2.jpg" alt="Product 2" fill className="object-cover" />
            </div>
            <div className="bg-gray-900 aspect-[3/4] rounded-lg overflow-hidden relative sm:col-span-2 md:col-span-1">
              <Image src="/images/product-3.jpg" alt="Product 3" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
