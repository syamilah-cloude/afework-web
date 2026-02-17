"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-700 flex items-center justify-center text-xs font-bold">
              af
            </div>
            <div className="text-sm">
              <div className="font-semibold">Afework</div>
              <div className="text-gray-400 text-xs">Indonesia</div>
            </div>
          </Link>
          
          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li><Link href="/" className="text-white font-semibold">Home</Link></li>
            <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
            <li><Link href="/collections" className="hover:text-gray-300">Collections</Link></li>
            <li><Link href="#" className="hover:text-gray-300">Categories</Link></li>
            <li>
              <Link href="#" className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="relative w-full h-[calc(100vh-0rem)]">
          <Image src="/images/hero.jpg" alt="Hero Background" fill className="object-cover object-top" priority />
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70 z-10"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-[12rem] md:text-[20rem] font-bold text-white/10 tracking-wider">ALPHA</div>
          </div>
          
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Crafted with premium<br />fabrics for all-day comfort
              </h1>
              <button className="mt-8 border border-white px-8 py-3 rounded hover:bg-white hover:text-black transition">
                See More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-3">♻️</div>
              <p className="text-sm text-gray-400">Rich colors</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-3">👔</div>
              <p className="text-sm text-gray-400">Polished look</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-3">📦</div>
              <p className="text-sm text-gray-400">Easy to care</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-3">✨</div>
              <p className="text-sm text-gray-400">Clean design</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Elevate Your <span className="text-gray-600">Modest</span><br />
            Style with AFEWORK
          </h2>
          <p className="text-gray-400 mt-6">Minimalist design with a modern touch</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-900 aspect-[3/4] rounded-lg overflow-hidden relative">
              <Image src="/images/product-1.jpg" alt="Product 1" fill className="object-cover" />
            </div>
            <div className="bg-gray-900 aspect-[3/4] rounded-lg overflow-hidden relative">
              <Image src="/images/product-2.jpg" alt="Product 2" fill className="object-cover" />
            </div>
            <div className="bg-gray-900 aspect-[3/4] rounded-lg overflow-hidden relative">
              <Image src="/images/product-3.jpg" alt="Product 3" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-700 flex items-center justify-center text-xs font-bold">
              af
            </div>
            <span className="text-sm">Afework Indonesia</span>
          </div>
          <div className="text-sm text-gray-400">
            © Syammilah Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
