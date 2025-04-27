
import React from "react";
import { Button } from "@/components/ui/button";

const AboutHighlights = () => (
  <section
    id="about-highlights"
    className="relative py-16 md:py-24 overflow-visible bg-fixed"
    style={{
      backgroundImage: `
        linear-gradient(to right, 
          rgba(0, 0, 0, 0.85) 0%, 
          rgba(0, 0, 0, 0.3) 20%, 
          rgba(0, 0, 0, 0.3) 80%, 
          rgba(0, 0, 0, 0.85) 100%
        ),
        linear-gradient(
          rgba(11, 19, 43, 0.5), 
          rgba(11, 19, 43, 0.7)
        ),
        url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000")
      `,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div
      className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10"
      style={{
        top: "-68px",
        height: "calc(100% - 130px)",
        width: "0px",
        borderLeft: "3px solid #F5F7FA",
        pointerEvents: "none"
      }}
    />
    <div className="container mx-auto px-4 flex flex-col items-center">
      <div className="flex flex-col gap-16 md:gap-20 w-full">

        {/* First Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch w-full">
          {/* Image Card */}
          <div className="bg-[#F5F7FA] flex items-center justify-center border border-[#d1d5db] shadow-xl h-full w-full aspect-[1.8/1] rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800"
              alt="People collaborating"
              className="w-full h-56 object-cover filter grayscale rounded-2xl"
              style={{ objectPosition: 'center', height: '100%' }}
            />
          </div>

          {/* Text Card with Double Border */}
          <div className="bg-[#F5F7FA] p-1 rounded-2xl border-4 border-[#F5F7FA] shadow-2xl">
            <div className="h-full w-full bg-[#0B132B] p-1 rounded-[calc(1rem-2px)]">
              <div className="h-full w-full bg-[#F5F7FA] flex flex-col justify-center p-4 sm:p-6 md:p-8 rounded-[calc(1rem-4px)]">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 md:mb-4">
                  Collaborative Mindset
                </h3>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-tight sm:leading-relaxed">
                  Effective communication is key to any successful project. By actively engaging
                  with existing team knowledge, I ensure that solutions are found faster and
                  more effectively.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-10 md:h-16" />

        {/* Second Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch w-full">
          {/* Text Card with Double Border */}
          <div className="bg-[#F5F7FA] p-1 rounded-2xl border-4 border-[#F5F7FA] shadow-2xl order-2 md:order-1">
            <div className="h-full w-full bg-[#0B132B] p-1 rounded-[calc(1rem-2px)]">
              <div className="h-full w-full bg-[#F5F7FA] flex flex-col justify-center p-4 sm:p-6 md:p-8 rounded-[calc(1rem-4px)]">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 md:mb-4">
                  A Community of Experts
                </h3>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-tight sm:leading-relaxed">
                  Over the years, I've cultivated a strong network of talented professionals
                  across embedded systems and software development. When specialized knowledge
                  is required, I can connect you with the right expert or I can tap into the knowledge base.
                </p>
              </div>
            </div>
          </div>

          {/* Image Card */}
          <div className="bg-[#F5F7FA] flex items-center justify-center border border-[#d1d5db] shadow-xl h-full w-full aspect-[1.8/1] rounded-2xl order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800"
              alt="People in relaxed setting"
              className="w-full h-56 object-cover filter grayscale rounded-2xl"
              style={{ objectPosition: 'center', height: '100%' }}
            />
          </div>
        </div>

        <div className="h-10 md:h-16" />

        <div className="relative flex flex-col items-center w-full mt-0 md:mt-8 mb-4">
          {/* Outer white border with p-2 gap */}
          <div className="p-2 rounded-full border-4 border-white inline-block">
            <Button
              size="lg"
              id="about-highlights-continue-btn"
              className="bg-[#F5F7FA] text-[#0B132B] hover:bg-gray-200 rounded-full text-xl p-6 shadow-xl transition-colors duration-300 border-none"
              onClick={() => {
                const highlights = document.getElementById('expertise');
                highlights?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {/* Downward pointing triangle SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-24 h-24 text-[#0B132B]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Button>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default AboutHighlights;

