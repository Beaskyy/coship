"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faqs" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FDF3E8] h-[98px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[98px]">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <span 
              className="text-[42px] font-semibold text-brand"
              style={{ fontFamily: "'Gooper Trial SemiCondensed', serif" }}
            >
              coship
            </span>
          </Link>

          {/* Center Nav */}
          <nav className="hidden md:flex items-center gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm py-2 px-3 font-medium text-[#5C5C5C] hover:text-gray-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#"
              className="flex justify-center items-center text-[15px] bg-white border border-[#F0F3FF] rounded-[10px] text-[#D97706] text-sm font-semibold w-[79px] h-10 hover:text-brand-dark transition-colors"
            >
              Login
            </Link>
            <Link
              href="#"
              className="px-[18px] py-2.5 text-[15px] font-semibold text-white rounded-[10px] transition-colors flex items-center justify-center h-10"
              style={{ 
                background: 'linear-gradient(0deg, #E87000 0.04%, #EA7100 100.17%)',
                // Also adding the P3 color version as a fallback/enhancement if supported
                backgroundColor: '#E87000' 
              }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-base font-medium text-gray-700 hover:text-brand transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <Link
                href="#"
                className="flex justify-center items-center w-full text-[15px] bg-white border border-[#F0F3FF] rounded-[10px] text-[#D97706] text-sm font-semibold h-10 hover:text-brand-dark transition-colors"
              >
                Login
              </Link>
              <Link
                href="#"
                className="flex justify-center items-center w-full text-[15px] font-semibold text-white rounded-[10px] h-10 transition-colors"
                style={{ background: 'linear-gradient(0deg, #E87000 0.04%, #EA7100 100.17%)' }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
