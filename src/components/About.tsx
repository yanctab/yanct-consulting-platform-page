
import React from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import TrianglePattern from "./TrianglePattern";
import AboutHighlights from "./AboutHighlights";

const About = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-[#35b88f] relative overflow-hidden"
      >
        <TrianglePattern />
        {/* Full fade on both sides */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.50) 100%)",
          }}
        />

        <div className="container mx-auto px-4 relative z-20">
          <div className="relative flex flex-col items-center">
            {/* Profile Picture - larger and more spacing from headline */}
            <img
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=350&q=80"
              alt="Profile of smiling man"
              className="mb-6 w-52 h-52 object-cover rounded-full grayscale shadow-xl border-4 border-white"
              style={{
                marginTop: '-24px', // Optional: fine-tune to balance spacing
                backgroundColor: '#fff',
              }}
              width={208}
              height={208}
            />

            <h2
              className="font-typewriter font-bold text-5xl md:text-7xl text-white mt-6 mb-10 text-center"
              style={{
                fontFamily: 'Courier New, Courier, monospace',
              }}
            >
              About
            </h2>
          </div>
          <div className="prose prose-lg prose-invert max-w-none mx-auto flex flex-col items-center">
            <p className="text-white text-lg leading-relaxed mt-2">
              {"Yet another consulting firm,"} you might think — but I'm not just another consultant.
              With over 15 years of embedded Linux experience, I focus on turning complex platforms
              into secure, production-ready systems that actually work in the real world.
            </p>
            <p className="text-white text-lg leading-relaxed mt-6">
              I specialize in bridging the gap between vendor BSPs and reliable products,
              with deep experience across multiple hardware suppliers and ecosystems.
              But what really sets me apart is how I work — with a service-minded approach,
              strong communication, and a focus on collaboration.
            </p>
            <div className="relative flex flex-col items-center w-full mt-10">
              <div
                className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10"
                style={{
                  top: '68px',
                  height: 'calc(100% - 60px)',
                  width: '0px',
                  borderLeft: '3px solid #fff',
                  pointerEvents: "none",
                }}
              />
              <Button
                size="lg"
                className="bg-white text-[#35b88f] hover:bg-gray-200 rounded-full text-xl px-14 py-7 font-typewriter shadow-lg transition-colors duration-300 border-none"
                onClick={() => {
                  const highlights = document.getElementById('about-highlights');
                  highlights?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </section>
      <AboutHighlights />
    </>
  );
};

export default About;

