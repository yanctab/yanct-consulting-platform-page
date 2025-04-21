
import React from "react";
import { Button } from "@/components/ui/button";

const GRADIENT_STYLE =
  "bg-[linear-gradient(90deg,hsla(22,100%,78%,1)_0%,hsla(2,78%,62%,1)_100%)]";

const About = () => {
  return (
    <>
      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-[#e0e0e0] relative"
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
          </div>
          <div className="prose prose-lg max-w-none mx-auto flex flex-col items-center">
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
            <div className="relative flex flex-col items-center w-full mt-10">
              <div
                className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10"
                style={{
                  top: '68px',
                  height: 'calc(100% - 68px)',
                  width: '0px',
                  borderLeft: '3px solid #30586D',
                  pointerEvents: "none",
                }}
              />
              <Button
                size="lg"
                className="bg-white rounded-xl text-primary-foreground text-xl px-14 py-7 font-typewriter border-2 border-white shadow-lg"
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

      {/* Highlights Section */}
      <section
        id="about-highlights"
        className={`relative py-16 md:py-24 overflow-visible ${GRADIENT_STYLE} bg-fixed`}
        style={{
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10"
          style={{
            top: "-68px",
            height: "calc(100% + 140px)",
            width: "0px",
            borderLeft: "3px solid #fff",
            opacity: 0.35,
            pointerEvents: "none"
          }}
        />
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
            <div className="h-10 md:h-16" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch w-full">
              <div className="bg-white flex flex-col justify-center border border-[#e5e5e5] p-8 h-full w-full aspect-[1.8/1] rounded-none">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#30586D] mb-4 font-typewriter">
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
            <div className="w-full flex justify-center">
              <div className="bg-white flex flex-col justify-center items-center border border-[#e5e5e5] aspect-[1.8/1] md:w-[50%] max-w-[480px] min-h-[240px] md:min-h-[260px] rounded-none relative px-24 text-center">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#30586D] font-typewriter mb-4">
                  Connect
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Let's discuss your needs and explore how I can assist you. Whatever your requirements may be, I'm confident that I can provide valuable support and guidance.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col items-center w-full mt-0 md:mt-8 mb-4">
              <div
                className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10"
                style={{
                  top: 0,
                  height: '48px',
                  width: '0px',
                  borderLeft: '3px solid #fff',
                  opacity: 0.35,
                  pointerEvents: "none",
                }}
              />
              <Button
                size="lg"
                className="bg-white rounded-xl text-primary-foreground text-xl px-14 py-7 font-typewriter border-2 border-white shadow-lg"
                onClick={()=>{
                  const servicesSection = document.getElementById('services');
                  servicesSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

