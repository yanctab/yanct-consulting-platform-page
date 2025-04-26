
import React from "react";
import { Button } from "@/components/ui/button";

const AboutHighlights = () => (
  <section
    id="about-highlights"
    className="relative py-16 md:py-24 overflow-visible bg-fixed"
    style={{
      backgroundImage: 'linear-gradient(180deg, #0B132B 0%, #477087 60%, #F5F7FA 100%)',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div
      className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10"
      style={{
        top: "-68px",
        height: "calc(100% - 130px)",
        width: "0px",
        borderLeft: "3px solid #fff",
        pointerEvents: "none"
      }}
    />
    <div className="container mx-auto px-4 flex flex-col items-center">
      <div className="flex flex-col gap-16 md:gap-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch w-full">
          <div className="bg-white flex items-center justify-center border border-[#d1d5db] shadow-md h-full w-full aspect-[1.8/1] rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800"
              alt="People collaborating"
              className="w-full h-56 object-cover filter grayscale rounded-2xl"
              style={{ objectPosition: 'center', height: '100%' }}
            />
          </div>
          <div className="bg-white flex flex-col justify-center border border-[#d1d5db] shadow-md p-4 sm:p-6 md:p-8 h-full w-full aspect-auto md:aspect-[1.8/1] rounded-2xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 md:mb-4 font-typewriter">
              Collaborative Mindset
            </h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-tight sm:leading-relaxed">
              Effective communication is key to any successful project. By actively engaging
              with existing team knowledge, I ensure that solutions are found faster and
              more effectively.
            </p>
          </div>
        </div>

        <div className="h-10 md:h-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch w-full">
          <div className="bg-white flex flex-col justify-center border border-[#d1d5db] shadow-md p-4 sm:p-6 md:p-8 h-full w-full aspect-auto md:aspect-[1.8/1] rounded-2xl order-2 md:order-1">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 md:mb-4 font-typewriter">
              A Community of Experts
            </h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-tight sm:leading-relaxed">
              Over the years, I've cultivated a strong network of talented professionals
              across embedded systems and software development. When specialized knowledge
              is required, I can connect you with the right expert or I can tap into the knowledge base.
            </p>
          </div>
          <div className="bg-white flex items-center justify-center border border-[#d1d5db] shadow-md h-full w-full aspect-[1.8/1] rounded-2xl order-1 md:order-2">
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
          <Button
            size="lg"
            id="about-highlights-continue-btn"
            className="bg-white text-[#436576] hover:bg-gray-200 rounded-full text-xl px-14 py-7 font-typewriter shadow-lg transition-colors duration-300 border-none"
            onClick={() => {
              const highlights = document.getElementById('expertise');
              highlights?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default AboutHighlights;
