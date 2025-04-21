
import React from "react";
import { Button } from "@/components/ui/button";

const TrianglePattern = () => {
  const size = 64; // increased size
  const rows = 20; // fewer rows needed because triangles are bigger
  const cols = 14;
  const height = rows * size * 0.866;
  const width = cols * size;

  return (
    <svg
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{
        opacity: 0.055,
        mixBlendMode: "overlay",
      }}
    >
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: cols }).map((__, col) => {
          const x = col * size + (row % 2 === 0 ? 0 : size / 2);
          const y = row * size * 0.866;
          return (
            <polygon
              key={`${row}-${col}`}
              points={`${x},${y} ${x + size / 2},${y + size * 0.866} ${x - size / 2},${y + size * 0.866}`}
              fill="#F1F0FB"
            />
          );
        })
      )}
    </svg>
  );
};

const About = () => {
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
              "linear-gradient(to right, rgba(0, 0, 0, 0.25), transparent 20%, transparent 80%, rgba(0, 0, 0, 0.25))",
          }}
        />

        <div className="container mx-auto px-4 relative z-20">
          <div className="relative flex flex-col items-center">
            <h2
              className="font-typewriter font-bold text-5xl md:text-7xl text-white mb-10 text-center"
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

      {/* Highlights Section */}
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
        <div
          className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10"
          style={{
            top: "-68px",
            height: "calc(100% - 140px)",
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
            <div className="w-full flex justify-center">
              <div className="bg-white flex flex-col justify-center items-center border border-[#e5e5e5] aspect-[1.8/1] md:w-[50%] max-w-[480px] min-h-[240px] md:min-h-[260px] rounded-none relative text-center">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 font-typewriter">
                  Connect
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed px-2 md:px-8 py-2">
                  Let's discuss your needs and explore how I can assist you.
                  Whatever your requirements may be, I'm confident that I can provide
                  valuable support and guidance.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col items-center w-full mt-0 md:mt-8 mb-4">
              <div
                className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10"
                style={{
                  top: 0,
                  height: '48px', // Adjusted to make line stop just above Services button
                  width: '0px',
                  borderLeft: '3px solid #fff',
                  opacity: 0.35,
                  pointerEvents: "none",
                }}
              />
              <Button
                size="lg"
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
    </>
  );
};

export default About;
