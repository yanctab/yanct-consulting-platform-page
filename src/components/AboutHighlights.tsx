
import React from "react";
import { Button } from "@/components/ui/button";

const AboutHighlights = () => (
  <section
    id="about-highlights"
    className="relative py-16 md:py-24 overflow-visible bg-fixed"
    style={{
      backgroundImage: 'linear-gradient(180deg, #293d3d 0%, #3d4c4a 60%, #9f8984 100%)',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}
  >
    {/* The vertical line above will cover this, since it's rendered in About */}
    <div className="container mx-auto px-4 flex flex-col items-center">
      <div className="flex flex-col gap-16 md:gap-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch w-full">
          <div className="bg-white flex items-center justify-center border border-[#e5e5e5] h-full w-full aspect-[1.8/1] rounded-none">
            <img
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800"
              alt="People collaborating"
              className="w-full h-56 object-cover filter grayscale"
              style={{ objectPosition: 'center', height: '100%' }}
            />
          </div>
          <div className="bg-white flex flex-col justify-center border border-[#e5e5e5] p-8 h-full w-full aspect-[1.8/1] rounded-none">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 font-typewriter">
              Collaborative Mindset
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Effective communication is key to any successful project. By actively engaging
              with existing team knowledge, I ensure that solutions are found faster and
              more effectively.
            </p>
          </div>
        </div>
        <div className="h-10 md:h-16" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch w-full">
          <div className="bg-white flex flex-col justify-center border border-[#e5e5e5] p-8 h-full w-full aspect-[1.8/1] rounded-none">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 font-typewriter">
              Network of Experts
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Over the years, I've cultivated a strong network of talented professionals
              across embedded systems and software development. When specialized knowledge
              is required, I can connect you with the right expert.
            </p>
          </div>
          <div className="bg-white flex items-center justify-center border border-[#e5e5e5] h-full w-full aspect-[1.8/1] rounded-none">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800"
              alt="People in relaxed setting"
              className="w-full h-56 object-cover filter grayscale"
              style={{ objectPosition: 'center', height: '100%' }}
            />
          </div>
        </div>
        <div className="h-10 md:h-16" />
        <div className="relative flex flex-col items-center w-full mt-0 md:mt-8 mb-4">
          <Button
            size="lg"
            id="about-highlights-services-btn"
            className="bg-white text-[#436576] hover:bg-gray-200 rounded-full text-xl px-14 py-7 font-typewriter shadow-lg transition-colors duration-300 border-none"
            onClick={() => {
              const highlights = document.getElementById('services');
              highlights?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Services
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default AboutHighlights;
