"use client";

import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="max-w-lg">
              <h4 className="text-[var(--primary-color)] uppercase tracking-widest text-sm font-semibold mb-2">
                ABOUT
              </h4>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Experts Are the Finest
              </h2>

              <div className="space-y-4 text-gray-600">
                <p>
                  We are SeriComm. A premier destination for comprehensive
                  support and administration solutions. Whatever your needs may
                  be, we're here to provide a bespoke solution just for you!
                </p>
                <p>
                  Our team of seasoned professionals is trained to deliver
                  personalized and tailored strategies that drive customer
                  satisfaction, foster brand loyalty, and boost operational
                  efficiency.
                </p>
                <p>
                  With over 12 experts and 25 support specialists who we refer
                  to as our Alliance Allies, available around the clock.
                </p>
                <p>
                  Choose SeriComm as your strategic partner and let us elevate
                  your customer service, online presence, and administrative
                  processes to new heights - propelling your success in the
                  digital landscape.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[var(--primary-color)] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>24/7 Availability</span>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[var(--primary-color)] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Experienced Professionals</span>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[var(--primary-color)] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Tailored Solutions</span>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[var(--primary-color)] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Customer-Centric Approach</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="bg-[var(--secondary-color)] rounded-lg p-4 transform rotate-3 shadow-xl">
              <div className="bg-white rounded-lg overflow-hidden transform -rotate-3">
                <div className="relative w-full h-96">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 flex items-center justify-center text-white">
                    <div className="text-center px-6">
                      <h3 className="text-2xl font-bold mb-4">
                        Professional Support Solutions
                      </h3>
                      <p className="text-lg">
                        Our dedicated team of experts provides comprehensive
                        support services to help your business succeed in
                        today's competitive market.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-[var(--primary-color)] opacity-10 rounded-full"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--secondary-color)] opacity-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
