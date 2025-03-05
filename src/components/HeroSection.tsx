"use client";

import { useEffect, useRef } from "react";

const HeroSection = () => {
  const scrollToNextSection = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with softer gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white"></div>

      {/* Animated background blobs - adjusted z-index to be behind content */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob z-0"></div>
      <div
        className="absolute top-40 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob z-0"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob z-0"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* Geometric shapes for modern look with animations - adjusted z-index */}
      <div
        className="absolute top-1/4 left-1/5 w-24 h-24 bg-indigo-100 rounded-xl rotate-12 opacity-20 animate-pulse-soft z-0"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/5 w-32 h-32 bg-emerald-100 rounded-full opacity-20 animate-pulse-soft z-0"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/3 right-1/4 w-16 h-16 bg-orange-100 rounded-lg rotate-45 opacity-20 animate-pulse-soft z-0"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-emerald-600 opacity-0 animate-fade-in-down"
            style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
          >
            Expert Support Solutions for Your Business
          </h1>
          <p
            className="text-lg md:text-xl text-slate-700 mb-10 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
          >
            Comprehensive customer support, virtual assistance, and
            administrative services tailored to elevate your customer experience
            and streamline operations.
          </p>
          <div
            className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "900ms", animationFillMode: "forwards" }}
          >
            <a
              href="#services"
              className="btn btn-primary rounded-lg shadow-lg shadow-indigo-200 transition-all duration-300 hover:scale-105"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="btn btn-secondary rounded-lg shadow-lg shadow-emerald-200 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </a>
          </div>

          {/* Trust indicators with background to ensure readability */}
          <div
            className="mt-16 pt-6 border-t border-gray-100 opacity-0 animate-fade-in-up relative z-20 bg-white bg-opacity-60 rounded-lg p-4"
            style={{ animationDelay: "1200ms", animationFillMode: "forwards" }}
          >
            <p className="text-gray-500 mb-4">
              Trusted by forward-thinking companies
            </p>
            <div className="flex justify-center space-x-8">
              <div className="text-gray-400 font-semibold hover:text-indigo-600 transition-colors duration-300">
                Zendesk
              </div>
              <div className="text-gray-400 font-semibold hover:text-indigo-600 transition-colors duration-300">
                ServiceNow
              </div>
              <div className="text-gray-400 font-semibold hover:text-indigo-600 transition-colors duration-300">
                Meta
              </div>
              <div className="text-gray-400 font-semibold hover:text-indigo-600 transition-colors duration-300">
                Instagram
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator - Repositioned and with higher z-index */}
      <div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 animate-bounce opacity-0 animate-fade-in"
        style={{ animationDelay: "1500ms", animationFillMode: "forwards" }}
      >
        <button
          onClick={scrollToNextSection}
          aria-label="Scroll to services section"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>

      {/* Animated dot pattern for design flair */}
      <div
        className="hidden lg:block absolute right-0 top-1/3 w-1/5 h-96 opacity-0 animate-fade-in-left z-0"
        style={{ animationDelay: "1000ms", animationFillMode: "forwards" }}
      >
        <div className="grid grid-cols-6 gap-2">
          {[...Array(36)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-indigo-600 opacity-70 hover:opacity-100 transition-opacity duration-300"
              style={{ animationDelay: `${i * 50}ms` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
