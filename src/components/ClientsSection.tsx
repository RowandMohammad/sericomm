"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const clients = [
  {
    id: 1,
    name: "Instagram",
    logo: "/images/60ed833f035dbe00046c24b6.png", // We'll add these images later
  },
  {
    id: 2,
    name: "Zendesk",
    logo: "/images/2560px-Zendesk_logo.svg.png",
  },
  {
    id: 3,
    name: "Meta",
    logo: "/images/Meta-Logo.png",
  },
  {
    id: 4,
    name: "Freshdesk",
    logo: "/images/freshdesk-logo-C4B668026C-seeklogo.com.png",
  },
  {
    id: 5,
    name: "ServiceNow",
    logo: "/images/ServiceNow-Logo.png",
  },
];

const ClientsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Animate section title
          const title = sectionRef.current?.querySelector(".section-title");
          title?.classList.add("animate-fade-in-up");

          // Animate logos with staggered delay
          const logos = logosRef.current?.querySelectorAll(".client-logo");
          logos?.forEach((logo, index) => {
            setTimeout(() => {
              logo.classList.add("animate-scale-in");
              logo.classList.remove("opacity-0");
            }, index * 150);
          });
        }
      },
      { threshold: 0.2 }
    );

    const currentSectionRef = sectionRef.current;

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <section
      id="clients"
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-gray-50 to-indigo-50"
    >
      <div className="container mx-auto">
        <div className="section-title opacity-0">
          <h4 className="text-indigo-600 uppercase tracking-widest text-sm font-semibold mb-2">
            OUR EXPERTS SUPPORT
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Leading Platforms
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our team of experts has experience working with these
            industry-leading platforms to provide exceptional support services.
          </p>
        </div>

        <div
          ref={logosRef}
          className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center"
        >
          {clients.map((client, index) => (
            <div
              key={client.id}
              className="client-logo opacity-0 transform transition-all duration-500 hover:scale-110 grayscale hover:grayscale-0"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-20 w-40 group">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium text-indigo-700 bg-white bg-opacity-90 px-2 py-1 rounded shadow-sm">
                    {client.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-16 text-center opacity-0 animate-fade-in-up"
          style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
        >
          <p className="text-gray-600 mb-6">
            Ready to join our list of satisfied clients?
          </p>
          <a
            href="#contact"
            className="btn btn-primary inline-block transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
