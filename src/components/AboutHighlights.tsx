
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
    <div className="container mx-auto px-4 flex flex-col items-center">
      <div className="relative flex flex-col items-center w-full mt-0 md:mt-8 mb-4">
        <Button
          size="lg"
          id="about-highlights-continue-btn"
          className="bg-white text-[#0B132B] hover:bg-gray-200 rounded-full text-xl px-14 py-7 font-typewriter shadow-lg transition-colors duration-300 border-none"
          onClick={() => {
            const highlights = document.getElementById('expertise');
            highlights?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Continue
        </Button>
      </div>
    </div>
  </section>
);

export default AboutHighlights;
