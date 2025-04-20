
import React from "react";
import { Button } from "@/components/ui/button";

// "About" stays in its own section. Highlights become a new section below.
const About = () => {
  // We'll use a slightly darker grey for the About background
  const aboutBg = "#ededed"; // slightly darker than #f3f3f3

  return (
    <>
      {/* About Section */}
      <section
        id="about"
        className="py-24"
        style={{ background: aboutBg, position: "relative" }}
      >
        <div className="container mx-auto px-4 relative z-20">
          <div className="relative flex flex-col items-center">
            <h2
              className="font-typewriter font-bold text-5xl md:text-7xl text-gray-900 mb-10 text-center"
              style={{
                fontFamily: 'Courier New, Courier, monospace',
              }}
            >
              About
            </h2>
            {/* Vertical line from Hero "Start" to this "Continue" button */}
            {/* Height stretches from above to below the "Continue" button */}
            <div
              className="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none"
              style={{
                top: "-80px", // aligns with Hero's line bottom
                height: "calc(100% + 60px)", // extends just past the Continue button
                width: "0px",
                borderLeft: "3px solid #30586D",
                zIndex: 1,
              }}
            />
          </div>
          <div className="prose prose-lg max-w-none mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed mt-2">
              {"Yet another consulting firm,"} you might think — but I'm not just another consultant.
              With over 15 years of embedded Linux experience, I focus on turning complex platforms
              into secure, production-ready systems that actually work in the real world.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-6">
              I specialize in bridging the gap between vendor BSPs and reliable products,
              with deep experience across multiple hardware suppliers and ecosystems.
              But what really sets me apart is how I work — with a service-minded approach,
              strong communication, and a focus on collaboration.
            </p>
          </div>
          {/* "Continue" Button center-aligned, below text, with vertical line below */}
          <div className="flex justify-center mt-12 relative">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-typewriter border-2 border-[#30586D] px-12 py-5 text-2xl md:text-3xl"
              onClick={() => {
                const highlights = document.getElementById('about-highlights-row-1');
                highlights?.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
            >
              Continue
            </Button>
            {/* Continue the line down -- styled to start at the bottom of the button */}
            <div
              className="hidden md:block absolute left-1/2 -translate-x-1/2"
              style={{
                top: "100%",
                height: "52px", // space to the highlights
                width: "0px",
                borderLeft: "3px solid #30586D",
                zIndex: 1,
              }}
            />
          </div>
        </div>
      </section>

      {/* Highlights Section (Collaborative Mindset & Network of Experts) */}
      <section
        className="relative py-24 bg-transparent overflow-visible"
        style={{ minHeight: 0, background: "transparent" }}
      >
        {/* Vertical line continues through both rows, stops above next section */}
        <div
          className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10"
          style={{
            top: "0px",
            height: "100%",
            width: "0px",
            borderLeft: "3px solid #30586D",
            opacity: 0.8,
            pointerEvents: "none"
          }}
        />
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-0 w-full">
            {/* Row 1: Collaborative Mindset */}
            <div
              id="about-highlights-row-1"
              className="grid grid-cols-1 md:grid-cols-2 w-full"
              style={{height: '300px'}}
            >
              {/* Image cell 1.1 */}
              <div className="bg-white flex items-center justify-center border border-[#e5e5e5] h-full w-full aspect-[1.8/1] rounded-none" style={{borderRadius: 0}}>
                <img
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800"
                  alt="People collaborating"
                  className="w-full h-full object-cover"
                  style={{objectPosition:'center', height:'100%', borderRadius: 0}}
                  draggable={false}
                />
              </div>
              {/* Text cell 1.2 */}
              <div className="bg-white flex flex-col justify-center border border-[#e5e5e5] h-full w-full px-8 rounded-none" style={{borderRadius: 0}}>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#30586D] mb-4 font-typewriter">
                  Collaborative Mindset
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Effective communication is key to any successful project. By actively engaging
                  with existing team knowledge, I ensure that solutions are found faster and
                  more effectively.
                </p>
              </div>
            </div>
            {/* Space between rows (should match section spacing) */}
            <div className="h-12 md:h-24" />
            {/* Row 2: Network of Experts */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 w-full"
              style={{height: '300px'}}
            >
              {/* Text cell 2.1 */}
              <div className="bg-white flex flex-col justify-center border border-[#e5e5e5] h-full w-full px-8 rounded-none" style={{borderRadius: 0}}>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#30586D] mb-4 font-typewriter">
                  Network of Experts
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Over the years, I've cultivated a strong network of talented professionals
                  across embedded systems and software development. When specialized knowledge
                  is required, I can connect you with the right expert.
                </p>
              </div>
              {/* Image cell 2.2 */}
              <div className="bg-white flex items-center justify-center border border-[#e5e5e5] h-full w-full aspect-[1.8/1] rounded-none" style={{borderRadius: 0}}>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800"
                  alt="Technology workspace"
                  className="w-full h-full object-cover"
                  style={{objectPosition:'center', height:'100%', borderRadius: 0}}
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

