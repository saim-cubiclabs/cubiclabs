"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CubicLogo } from "./cubic-labs";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-orange-50/95 backdrop-blur supports-[backdrop-filter]:bg-orange-50/60">
      <div className="container mx-auto px-4">
        <div className="relative flex h-16 items-center justify-between">
          <CubicLogo />

          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <a href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Home</a>
            <a href="/services" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Services</a>
            <a href="/pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
            <a href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">About</a>
          </nav>

          <div className="flex items-center gap-4">
            {/* Correct Contact Us link */}
            <Link href="/contactus" passHref>
              <Button variant="ghost" className="hidden md:inline-flex">
                Contact Us
              </Button>
            </Link>

            <a
              href="https://wa.me/96541147331"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="hidden md:inline-flex items-center justify-center gap-2 rounded-md bg-green-700 px-4 py-2 text-sm font-medium text-white shadow hover:bg-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-700/50"
            >
              WhatsApp
            </a>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          {/* Dim background to indicate modal state */}
          <div
            className="fixed inset-0 z-40 bg-black/80"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="fixed right-4 left-4 top-20 z-50 rounded-xl border border-gray-200 bg-white p-4 shadow-2xl">
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-orange-100 hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                href="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-orange-100 hover:text-gray-900"
              >
                Services
              </Link>
              <Link
                href="/pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-orange-100 hover:text-gray-900"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-orange-100 hover:text-gray-900"
              >
                About
              </Link>
              <Link
                href="/contactus"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-orange-100 hover:text-gray-900"
              >
                Contact Us
              </Link>
              <a
                href="https://wa.me/96541147331"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-green-700 px-4 py-2 text-sm font-medium text-white shadow hover:bg-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-700/50"
              >
                WhatsApp
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
