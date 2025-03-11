"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center">
              <span
                className={`text-xl font-bold ${
                  scrolled ? "text-[var(--primary-color)]" : "text-indigo-700"
                }`}
              >
                SeriComm
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#home"
              className={`hover:text-[var(--primary-color)] transition-colors ${
                scrolled ? "text-gray-700" : "text-indigo-700"
              }`}
            >
              Home
            </Link>
            <Link
              href="/#services"
              className={`hover:text-[var(--primary-color)] transition-colors ${
                scrolled ? "text-gray-700" : "text-indigo-700"
              }`}
            >
              Services
            </Link>
            <Link
              href="/#about"
              className={`hover:text-[var(--primary-color)] transition-colors ${
                scrolled ? "text-gray-700" : "text-indigo-700"
              }`}
            >
              About
            </Link>
            <Link
              href="/#testimonials"
              className={`hover:text-[var(--primary-color)] transition-colors ${
                scrolled ? "text-gray-700" : "text-indigo-700"
              }`}
            >
              Testimonials
            </Link>
            <Link
              href="/#clients"
              className={`hover:text-[var(--primary-color)] transition-colors ${
                scrolled ? "text-gray-700" : "text-indigo-700"
              }`}
            >
              Clients
            </Link>
            <Link
              href="/#contact"
              className={`hover:text-[var(--primary-color)] transition-colors ${
                scrolled ? "text-gray-700" : "text-indigo-700"
              }`}
            >
              Contact
            </Link>
          </div>

          <Link
            href="tel:+44"
            className={`hidden md:inline-flex ${
              scrolled
                ? "btn btn-primary py-2 px-4 text-sm"
                : "bg-indigo-600 text-white hover:bg-indigo-700 py-2 px-4 text-sm font-medium rounded-md shadow-sm transition-colors"
            }`}
          >
            Call Us
          </Link>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden focus:outline-none ${
              scrolled ? "text-gray-700" : "text-indigo-700"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ${
          isOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link
            href="/#home"
            className="text-gray-700 py-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/#services"
            className="text-gray-700 py-2"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/#about"
            className="text-gray-700 py-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/#testimonials"
            className="text-gray-700 py-2"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            href="/#clients"
            className="text-gray-700 py-2"
            onClick={() => setIsOpen(false)}
          >
            Clients
          </Link>
          <Link
            href="/#contact"
            className="text-gray-700 py-2"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="tel:+4"
            className="btn btn-primary self-start"
            onClick={() => setIsOpen(false)}
          >
            Call Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
