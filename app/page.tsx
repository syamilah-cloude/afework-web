"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-700 flex items-center justify-center text-xs font-bold">
              af
            </div>
            <div className="text-sm">
              <div className="font-semibold">Afework</div>
              <div className="text-gray-400 text-xs">Indonesia</div>
            </div>
          </div>
          
          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#" className="hover:text-gray-300">Collections</a></li>
            <li><a href="#" className="hover:text-gray-300">Categories</a></li>
            <li>
              <a href="#" className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 grid grid-cols-4 gap-0">
          <div className="relative h-full">
            <Image src="/images/hero-1.jpg" alt="Hero 1" fill className="object-cover" />
          </div>
          <div className="relative h-full">
            <Image src="/images/hero-2.jpg" alt="Hero 2" fill className="object-cover" />
          </div>
          <div className="relative h-full">
            <Image src="/images/hero-3.jpg" alt="Hero 3" fill className="object-cover" />
          </div>
          <div className="relative h-full">
            <Image src="/images/hero-4.jpg" alt="Hero 4" fill className="object-cover" />
          </div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-[20rem] font-bold text-white/10 tracking-wider">ALPHA</div>
        </div>
        
        <div className="relative z-20 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Crafted with premium<br />fabrics for all-day comfort
          </h1>
          <button className="mt-8 border border-white px-8 py-3 rounded hover:bg-white hover:text-black transition">
            See More
          </button>
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

      {/* Product Showcase */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Designed <span className="text-gray-600">for all-day</span><br />
                comfort with a<br />
                distinguished fit
              </h2>
              <p className="text-gray-400 mb-8">
                Jubah AFERWORK dibuat dari bahan pilihan, adem dan jatuh sempurna.
              </p>
              <button className="border border-white px-8 py-3 rounded hover:bg-white hover:text-black transition">
                Shop Now
              </button>
            </div>
            <div className="bg-gray-800 aspect-[3/4] rounded-lg overflow-hidden relative">
              <Image src="/images/showcase.jpg" alt="Showcase Product" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex flex-col items-center py-12 hover:opacity-70 transition-opacity cursor-pointer"
      >
        <p className="text-sm text-gray-400 mb-4">See More</p>
        <div className="flex flex-col gap-2 animate-bounce">
          <div className="w-6 h-6 border-l-2 border-b-2 border-white rotate-[-45deg]"></div>
          <div className="w-6 h-6 border-l-2 border-b-2 border-white rotate-[-45deg]"></div>
        </div>
      </button>

      {/* Featured Product Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="relative bg-gradient-to-br from-amber-900/30 to-gray-900 rounded-2xl overflow-hidden">
            <div className="absolute top-8 left-8 text-white/80 text-sm font-light">
              afework
            </div>
            <div className="absolute top-8 right-8 text-white/60 text-xs">
              <div>SYAMMILAH</div>
              <div>COLLECTION</div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 p-12 md:p-20">
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-md aspect-[3/4] bg-gradient-to-br from-amber-800/20 to-gray-800/40 rounded-lg overflow-hidden">
                  <Image src="/images/featured.jpg" alt="Featured Product" fill className="object-cover" />
                </div>
              </div>
              
              <div className="flex flex-col justify-center text-white">
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  Premium Black<br />Collection
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Koleksi eksklusif dengan desain minimalis dan material premium. 
                  Sempurna untuk tampilan elegan di setiap momen.
                </p>
                <div className="flex gap-4">
                  <button className="bg-white text-black px-8 py-3 rounded hover:bg-gray-200 transition">
                    Shop Now
                  </button>
                  <button className="border border-white px-8 py-3 rounded hover:bg-white hover:text-black transition">
                    View Details
                  </button>
                </div>
              </div>
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
