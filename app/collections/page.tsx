"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const products = [
  { id: 1, name: "Alpha Black Jubah", price: "Rp 299.000", image: "/images/collection-1.jpg" },
  { id: 2, name: "Classic Grey Jubah", price: "Rp 289.000", image: "/images/collection-2.jpg" },
  { id: 3, name: "Modern Beige Jubah", price: "Rp 299.000", image: "/images/collection-3.jpg" },
  { id: 4, name: "Premium Navy Jubah", price: "Rp 319.000", image: "/images/collection-4.jpg" },
  { id: 5, name: "Elegant Brown Jubah", price: "Rp 299.000", image: "/images/collection-5.jpg" },
  { id: 6, name: "Minimalist White Jubah", price: "Rp 289.000", image: "/images/collection-6.jpg" },
  { id: 7, name: "Urban Charcoal Jubah", price: "Rp 309.000", image: "/images/collection-7.jpg" },
  { id: 8, name: "Signature Olive Jubah", price: "Rp 299.000", image: "/images/collection-8.jpg" },
  { id: 9, name: "Essential Black Jubah", price: "Rp 289.000", image: "/images/collection-9.jpg" },
];

export default function Collections() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar currentPage="collections" />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">Our Collections</h1>
          <p className="text-gray-400 text-base sm:text-lg">
            Discover our premium collection of modest fashion
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4 bg-gray-900">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm sm:text-base">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Elevate Your Style?
          </h2>
          <p className="text-gray-400 mb-6 sm:mb-8 text-base sm:text-lg">
            Kunjungi toko kami untuk melihat koleksi lengkap dan penawaran spesial
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
