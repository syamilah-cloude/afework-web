"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar currentPage="about" />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] pt-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 top-20">
          <Image src="/images/about-hero.jpg" alt="About Us" fill className="object-cover" priority />
        </div>
        
        <div className="absolute inset-0 top-20 bg-black/60 z-10"></div>
        
        <div className="relative z-20 text-center px-4 sm:px-6 py-16 sm:py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">About Us</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Crafting timeless modest fashion with premium quality
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Our Story</h2>
              <p className="text-gray-400 mb-4 leading-relaxed text-sm sm:text-base">
                Afework dimulai dari passion untuk menciptakan busana muslim yang tidak hanya nyaman, 
                tetapi juga mencerminkan gaya hidup modern dan elegan.
              </p>
              <p className="text-gray-400 mb-4 leading-relaxed text-sm sm:text-base">
                Kami percaya bahwa setiap individu berhak tampil percaya diri dengan pakaian yang 
                berkualitas tinggi, nyaman dipakai sepanjang hari, dan tetap mempertahankan nilai-nilai kesopanan.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Dengan dedikasi pada detail dan pemilihan bahan premium, kami menghadirkan koleksi 
                yang sempurna untuk setiap momen dalam hidup Anda.
              </p>
            </div>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image src="/images/about-story.jpg" alt="Our Story" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">Our Values</h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-6 sm:p-8 bg-gray-800/30 rounded-lg">
              <div className="text-4xl sm:text-5xl mb-4">✨</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Quality</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Kami hanya menggunakan bahan premium yang telah dipilih dengan cermat untuk kenyamanan maksimal.
              </p>
            </div>
            
            <div className="text-center p-6 sm:p-8 bg-gray-800/30 rounded-lg">
              <div className="text-4xl sm:text-5xl mb-4">🎨</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Design</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Desain minimalis modern yang timeless, cocok untuk berbagai kesempatan dan gaya pribadi.
              </p>
            </div>
            
            <div className="text-center p-6 sm:p-8 bg-gray-800/30 rounded-lg sm:col-span-2 md:col-span-1">
              <div className="text-4xl sm:text-5xl mb-4">💚</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Sustainability</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Komitmen kami terhadap produksi yang bertanggung jawab dan ramah lingkungan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden order-2 md:order-1">
              <Image src="/images/about-mission.jpg" alt="Our Mission" fill className="object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Our Mission</h2>
              <p className="text-gray-400 mb-4 leading-relaxed text-sm sm:text-base">
                Misi kami adalah memberdayakan setiap individu untuk mengekspresikan diri mereka 
                dengan percaya diri melalui busana muslim berkualitas tinggi.
              </p>
              <p className="text-gray-400 mb-4 leading-relaxed text-sm sm:text-base">
                Kami berkomitmen untuk terus berinovasi dalam desain dan material, sambil tetap 
                mempertahankan nilai-nilai tradisional dan kesopanan.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Setiap produk Afework dirancang dengan perhatian penuh terhadap detail, 
                memastikan Anda mendapatkan yang terbaik.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Join Our Journey
          </h2>
          <p className="text-gray-400 mb-6 sm:mb-8 text-base sm:text-lg">
            Temukan koleksi kami dan rasakan perbedaan kualitas premium Afework
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://shopee.co.id/afework.id#product_list" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-8 py-3 rounded hover:bg-gray-200 transition text-sm sm:text-base">
              Shop Now
            </Link>
            <Link href="/contact" className="border border-white px-8 py-3 rounded hover:bg-white hover:text-black transition text-sm sm:text-base">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
