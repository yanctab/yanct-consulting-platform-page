
import React from "react";

// "About" stays in its own section. Highlights become a new section below.
const About = () => {
  return (
    <>
      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-[#f3f3f3] relative"
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
            {/* Vertical line below headline, reaching expertise section */}
            {/* We'll position the line absolutely, running only down to the end of the highlights rows */}
            <div
              className="hidden md:block absolute left-1/2 -translate-x-1/2"
              style={{
                top: "100%",
                height: "144px", // matches height+spacing of new highlights section
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
        </div>
      </section>

      {/* Highlights Section */}
      <section
        className="relative py-16 md:py-24 bg-[#30586D] overflow-visible"
      >
        {/* Vertical line continues from About, stops above grey section */}
        <div
          className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10"
          style={{
            top: "-68px",
            height: "calc(100% + 68px)",
            width: "0px",
            borderLeft: "3px solid #fff",
            opacity: 0.35,
            pointerEvents: "none"
          }}
        />
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-16 md:gap-20">
            {/* Row 1: Collaborative Mindset (Image left, text right) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch w-full min-h-[260px] md:min-h-[280px]">
              {/* Image cell 1.1 */}
              <div className="bg-white flex items-center justify-center border border-[#e5e5e5] md:border-r-0 h-full w-full aspect-[1.8/1]">
                <img
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800"
                  alt="People collaborating"
                  className="w-full h-56 object-cover"
                  style={{objectPosition:'center', height:'100%'}}
                />
              </div>
              {/* Text cell 1.2 */}
              <div className="bg-white flex flex-col justify-center border border-[#e5e5e5] p-8 h-full w-full aspect-[1.8/1]">
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
            {/* Space between rows, matches section spacing */}
            <div className="h-10 md:h-16" />
            {/* Row 2: Network of Experts (Text left, image right) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch w-full min-h-[260px] md:min-h-[280px]">
              {/* Text cell 2.1 */}
              <div className="bg-white flex flex-col justify-center border border-[#e5e5e5] p-8 h-full w-full aspect-[1.8/1]">
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
              <div className="bg-white flex items-center justify-center border border-[#e5e5e5] md:border-l-0 h-full w-full aspect-[1.8/1]">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800"
                  alt="Technology workspace"
                  className="w-full h-56 object-cover"
                  style={{objectPosition:'center', height:'100%'}}
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

