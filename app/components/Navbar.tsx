"use client";

import Link from "next/link";
import { useState } from "react";

interface NavbarProps {
  currentPage: "home" | "about" | "collections" | "contact";
}

export default function Navbar({ currentPage }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          <li>
            <Link 
              href="/" 
              className={currentPage === "home" ? "text-white font-semibold" : "hover:text-gray-300"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className={currentPage === "about" ? "text-white font-semibold" : "hover:text-gray-300"}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              href="/collections" 
              className={currentPage === "collections" ? "text-white font-semibold" : "hover:text-gray-300"}
            >
              Collections
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={currentPage === "contact" ? "bg-white text-black px-4 py-2 rounded font-semibold" : "border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition"}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800">
          <ul className="container mx-auto px-6 py-4 space-y-4">
            <li>
              <Link 
                href="/" 
                className={`block py-2 ${currentPage === "home" ? "text-white font-semibold" : "text-gray-300"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`block py-2 ${currentPage === "about" ? "text-white font-semibold" : "text-gray-300"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                href="/collections" 
                className={`block py-2 ${currentPage === "collections" ? "text-white font-semibold" : "text-gray-300"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Collections
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="block py-2 border border-white px-4 rounded text-center hover:bg-white hover:text-black transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
