"use client";

import { useState, useEffect, useRef } from "react";

type Testimonial = {
  id: number;
  quote: string;
  author: string;
  company: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "SeriComm's customer support team has completely transformed our customer service. Their expertise and professionalism have significantly improved customer satisfaction rates.",
    author: "Louise Maxwell",
    company: "TechInnovate Solutions",
  },
  {
    id: 2,
    quote:
      "The virtual assistance services provided by SeriComm have streamlined our administrative processes, saving us valuable time and resources.",
    author: "Serina Johnson",
    company: "Global Ventures Inc.",
  },
  {
    id: 3,
    quote:
      "We've been working with SeriComm for over three years now, and their consistent quality of service continues to exceed our expectations.",
    author: "Rowan Smith",
    company: "Nexus Enterprises",
  },
  {
    id: 4,
    quote:
      "SeriComm's lifestyle support services have made a remarkable difference in maintaining work-life balance for our executive team.",
    author: "Jack Williams",
    company: "Apex Industries",
  },
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Detect when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
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

  // Handle manual testimonial change with smooth transitions
  const changeTestimonial = (index: number) => {
    // Add a small class for the clicked effect
    const button = document.querySelector(
      `button[aria-label="View testimonial ${index + 1}"]`
    );
    if (button) {
      button.classList.add("scale-125");
      setTimeout(() => {
        button.classList.remove("scale-125");
      }, 300);
    }
    setCurrentTestimonial(index);
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-indigo-900 to-blue-900 text-white relative overflow-hidden"
    >
      {/* Background particles */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `pulse-soft ${Math.random() * 3 + 2}s infinite`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div
          className={`section-title transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h4 className="text-white opacity-80 uppercase tracking-widest text-sm font-semibold mb-2">
            TESTIMONIALS
          </h4>
          <h2 className="text-white">What Our Clients Say</h2>
        </div>

        <div
          className={`mt-12 max-w-4xl mx-auto transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {/* Decorative quote marks */}
          <svg
            className="absolute -top-12 -left-12 h-24 w-24 text-white opacity-10"
            fill="currentColor"
            viewBox="0 0 32 32"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L25.864 4z" />
          </svg>

          {/* Testimonial content with glass effect */}
          <div className="relative px-8 py-10 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg shadow-lg text-center transform transition-all duration-500 hover:bg-opacity-15">
            <div className="min-h-[200px] md:min-h-[180px] flex items-center justify-center">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-700 absolute w-full transform ${
                    index === currentTestimonial
                      ? "opacity-100 z-10 scale-100"
                      : "opacity-0 -z-10 scale-95"
                  }`}
                >
                  <p className="text-xl md:text-2xl italic mb-6 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="transform transition-all duration-500">
                    <p className="font-semibold text-lg">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-white text-opacity-80">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots with enhanced interactivity */}
          <div className="flex justify-center mt-8 space-x-3 pt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => changeTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 transform ${
                  index === currentTestimonial
                    ? "bg-white scale-110"
                    : "bg-white bg-opacity-40 hover:bg-opacity-70 hover:scale-105"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
