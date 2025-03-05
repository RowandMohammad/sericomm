"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

type ServiceCategory = "all" | "business" | "lifestyle";

type Service = {
  id: string;
  icon: string;
  title: string;
  description: string;
  category: ServiceCategory;
};

const services: Service[] = [
  // Business Services
  {
    id: "customer-support",
    icon: "support",
    title: "Customer Support Management",
    description:
      "Our highly skilled team is well-versed in the intricacies of customer satisfaction. With flexible plans which allow you to tailor your support needs according to your requirements, ensuring reliable service at all times.",
    category: "business",
  },
  {
    id: "administration",
    icon: "admin",
    title: "Administration",
    description:
      "With a commitment to excellence, our team of experienced professionals excels in managing administrative tasks such as data entry, document processing, calendar management, and travel coordination. We pride ourselves on our attention to detail and ability to streamline operations.",
    category: "business",
  },
  {
    id: "social-media",
    icon: "social",
    title: "Social Media Community Management",
    description:
      "A team of leading social media community managers specializing in creating vibrant and engaging online communities. Our comprehensive suite of services is designed to elevate your brand's digital presence and foster genuine connections with your audience.",
    category: "business",
  },
  {
    id: "virtual-assistance",
    icon: "virtual",
    title: "Virtual Assistance",
    description:
      "Full-service email management, scheduling, and administrative tasks handled by dedicated professionals. We ensure your day-to-day operations run smoothly so you can focus on growth.",
    category: "business",
  },
  {
    id: "project-management",
    icon: "project",
    title: "Project Management",
    description:
      "Expert timeline tracking, resource allocation, and project coordination services to ensure your initiatives are completed on time and within budget.",
    category: "business",
  },
  {
    id: "web-development",
    icon: "web",
    title: "Website Development",
    description:
      "Professional design, development, and maintenance of websites that are visually appealing, user-friendly, and optimized for performance and search engines.",
    category: "business",
  },
  {
    id: "financial-management",
    icon: "finance",
    title: "Financial Management",
    description:
      "Comprehensive bookkeeping, budgeting, and financial planning services to keep your business finances organized and optimized for growth.",
    category: "business",
  },
  {
    id: "it-support",
    icon: "it",
    title: "IT Support",
    description:
      "Responsive technical troubleshooting, software solutions, and IT infrastructure management to keep your technology running smoothly.",
    category: "business",
  },
  {
    id: "sales-lead",
    icon: "sales",
    title: "Sales & Lead Generation",
    description:
      "Strategic lead generation and sales process optimization to help you attract and convert more qualified prospects into customers.",
    category: "business",
  },

  // Lifestyle Services
  {
    id: "personal-concierge",
    icon: "concierge",
    title: "Personal Concierge",
    description:
      "Exclusive concierge services handling travel arrangements, restaurant reservations, and personal errands to make your life easier and more enjoyable.",
    category: "lifestyle",
  },
  {
    id: "event-planning",
    icon: "event",
    title: "Event Planning",
    description:
      "Comprehensive planning and coordination of corporate events, personal celebrations, and special occasions with attention to every detail.",
    category: "lifestyle",
  },
  {
    id: "finance-coaching",
    icon: "coaching",
    title: "Finance Coaching",
    description:
      "Personalized financial guidance, budgeting strategies, and investment advice to help you achieve your financial goals and secure your future.",
    category: "lifestyle",
  },
  {
    id: "health-wellness",
    icon: "health",
    title: "Health & Wellness",
    description:
      "Customized fitness programs, nutrition plans, and wellness strategies to support your physical and mental wellbeing goals.",
    category: "lifestyle",
  },
  {
    id: "home-organization",
    icon: "home",
    title: "Home Organization",
    description:
      "Professional decluttering, organizing, and cleaning services to transform your living spaces into functional, peaceful environments.",
    category: "lifestyle",
  },
  {
    id: "travel-planning",
    icon: "travel",
    title: "Travel Planning",
    description:
      "Comprehensive vacation planning, itinerary creation, and travel coordination services to ensure memorable and stress-free experiences.",
    category: "lifestyle",
  },
  {
    id: "time-management",
    icon: "time",
    title: "Time Management",
    description:
      "Effective productivity systems, scheduling optimization, and time-saving strategies to help you make the most of each day.",
    category: "lifestyle",
  },
];

// SVG Icons for categories
const renderIcon = (iconName: string) => {
  switch (iconName) {
    case "support":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-[var(--primary-color)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      );
    case "admin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-[var(--primary-color)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      );
    case "social":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-[var(--primary-color)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          />
        </svg>
      );
    case "virtual":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-[var(--primary-color)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      );
    // Default icon for other services
    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-[var(--primary-color)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      );
  }
};

const ServicesSection = () => {
  const [category, setCategory] = useState<ServiceCategory>("all");
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const filteredServices = services.filter(
    (service) => category === "all" || service.category === category
  );

  useEffect(() => {
    // Add animation when section comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoaded(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="services" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto">
        <div
          className={`section-title opacity-0 ${
            isLoaded ? "animate-fade-in-up" : ""
          }`}
          style={{ animationFillMode: "forwards" }}
        >
          <h4>WHAT WE OFFER</h4>
          <h2>Our Services</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We provide a wide range of professional services to help your
            business thrive. Our dedicated team is here to support you every
            step of the way.
          </p>
        </div>

        {/* Service Category Tabs with animated underline */}
        <div
          className={`mt-12 flex justify-center space-x-4 opacity-0 ${
            isLoaded ? "animate-fade-in-up" : ""
          }`}
          style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
        >
          <button
            onClick={() => setCategory("all")}
            className={`px-5 py-2 rounded-full relative font-medium transition-colors duration-300 ${
              category === "all"
                ? "text-indigo-700"
                : "text-gray-500 hover:text-indigo-600"
            }`}
          >
            All Services
            {category === "all" && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform origin-left animate-scale-in"></span>
            )}
          </button>
          <button
            onClick={() => setCategory("business")}
            className={`px-5 py-2 rounded-full relative font-medium transition-colors duration-300 ${
              category === "business"
                ? "text-indigo-700"
                : "text-gray-500 hover:text-indigo-600"
            }`}
          >
            Business
            {category === "business" && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform origin-left animate-scale-in"></span>
            )}
          </button>
          <button
            onClick={() => setCategory("lifestyle")}
            className={`px-5 py-2 rounded-full relative font-medium transition-colors duration-300 ${
              category === "lifestyle"
                ? "text-indigo-700"
                : "text-gray-500 hover:text-indigo-600"
            }`}
          >
            Lifestyle
            {category === "lifestyle" && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform origin-left animate-scale-in"></span>
            )}
          </button>
        </div>

        {/* Service Cards with Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white p-8 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-2 opacity-0 ${
                isLoaded ? "animate-fade-in-up" : ""
              }`}
              style={{
                animationDelay: `${300 + index * 100}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div className="mb-4 text-indigo-600">
                {renderIcon(service.icon)}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div
          className={`mt-20 opacity-0 ${isLoaded ? "animate-fade-in-up" : ""}`}
          style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
        >
          <h2 className="text-3xl font-bold text-center mb-10">
            We're Good with Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg hover:scale-105">
              <span className="block text-4xl font-bold text-[var(--primary-color)] mb-2 counter">
                15
              </span>
              <span className="text-gray-600">Years of Experience</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg hover:scale-105">
              <span className="block text-4xl font-bold text-[var(--primary-color)] mb-2 counter">
                12
              </span>
              <span className="text-gray-600">Experts</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg hover:scale-105">
              <span className="block text-4xl font-bold text-[var(--primary-color)] mb-2">
                24/7
              </span>
              <span className="text-gray-600">Availability</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg hover:scale-105">
              <span className="block text-4xl font-bold text-[var(--primary-color)] mb-2 counter">
                24
              </span>
              <span className="text-gray-600">Assistance Allies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
