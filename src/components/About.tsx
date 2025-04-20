
import React from "react";

// "About" headline font/style now exactly matches Hero headline.

const About = () => {
  return (
    <>
      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-[#f3f3f3] relative"
      >
        <div className="container mx-auto px-4 relative z-20">
          {/* Vertical line from headline down to sections below */}
          <div className="relative flex flex-col items-center">
            <h2
              className="font-typewriter font-bold text-5xl md:text-7xl text-gray-900 mb-10 text-center"
              style={{
                fontFamily: 'Courier New, Courier, monospace',
                // Matching Hero headline style, no arrow
              }}
            >
              About
            </h2>
            {/* Vertical line below headline to white cells */}
            <div
              className="hidden md:block absolute left-1/2 -translate-x-1/2"
              style={{
                top: "100%",
                height: "68px",
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

      {/* Expertise Highlights Section – two stacked white grid rows with images/text */}
      <section
        className="py-20 bg-[#30586D] relative"
        style={{ overflow: "visible" }}
      >
        {/* Vertical line continues from about headline to first and second row */}
        <div
          className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10"
          style={{
            top: "-70px",
            height: "calc(100% + 70px)",
            width: "0px",
            borderLeft: "3px solid #fff",
            opacity: 0.35,
            pointerEvents: "none"
          }}
        />
        <div className="container mx-auto px-4 flex flex-col gap-16 md:gap-24 relative z-20">
          {/* Row 1: Collaborative Mindset (Image left, text right) */}
          <div className="grid md:grid-cols-2 gap-0 items-stretch relative">
            {/* Image cell */}
            <div className="bg-white rounded-lg shadow-lg flex items-center justify-center p-0 md:p-8">
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800"
                alt="People collaborating"
                className="w-full h-56 object-cover rounded-lg"
              />
            </div>
            {/* Text cell */}
            <div className="bg-white rounded-lg shadow-lg flex flex-col justify-center p-8">
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
          {/* Space between rows */}
          <div className="h-12 md:h-16" />
          {/* Row 2: Network of Experts (Text left, image right) */}
          <div className="grid md:grid-cols-2 gap-0 items-stretch relative">
            {/* Text cell */}
            <div className="bg-white rounded-lg shadow-lg flex flex-col justify-center p-8 order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#30586D] mb-4 font-typewriter">
                Network of Experts
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Over the years, I've cultivated a strong network of talented professionals
                across embedded systems and software development. When specialized knowledge
                is required, I can connect you with the right expert.
              </p>
            </div>
            {/* Image cell */}
            <div className="bg-white rounded-lg shadow-lg flex items-center justify-center p-0 md:p-8 order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800"
                alt="Technology workspace"
                className="w-full h-56 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
