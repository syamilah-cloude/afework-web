"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  { id: 1, name: "Elmire Thobe Black Jubah", price: "Rp 400.000", image: "/images/collection-1.jpg" },
  { id: 2, name: "Elmire Thobe Grey Jubah", price: "Rp 400.000", image: "/images/collection-2.jpg" },
  { id: 3, name: "Modern Olive Jubah", price: "Rp 400.000", image: "/images/collection-3.jpg" },
  { id: 4, name: "Premium Navy Jubah", price: "Rp 400.000", image: "/images/collection-4.jpg" },
  { id: 5, name: "Elmire Thobe Coffe Jubah", price: "Rp 400.000", image: "/images/collection-5.jpg" },
  { id: 6, name: "Minimalist White Jubah", price: "Rp 400.000", image: "/images/collection-6.jpg" },
  { id: 7, name: "Urban Charcoal Jubah", price: "Rp 309.000", image: "/images/collection-7.jpg" },
  { id: 8, name: "Signature Olive Jubah", price: "Rp 299.000", image: "/images/collection-8.jpg" },
  { id: 9, name: "Essential Black Jubah", price: "Rp 289.000", image: "/images/collection-9.jpg" },
];

export default function Collections() {
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
            <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
            <li><Link href="/collections" className="text-white font-semibold">Collections</Link></li>
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
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Collections</h1>
          <p className="text-gray-400 text-lg">
            Discover our premium collection of modest fashion
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-400">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Elevate Your Style?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Kunjungi toko kami untuk melihat koleksi lengkap dan penawaran spesial
          </p>
          <Link 
            href="https://shopee.co.id/afework.id#product_list" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-white text-black px-12 py-4 rounded text-lg font-semibold hover:bg-gray-200 transition"
          >
            Shop Now
          </Link>
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
