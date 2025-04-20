
import { Users, Link } from "lucide-react";

// "About" headline font/size based on Hero headline styles.
// Sections are separated and styled accordingly.

const About = () => {
  return (
    <>
      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-[#f3f3f3]" // Light gray, no mosaic or image background
      >
        <div className="container mx-auto px-4 relative z-20">
          {/* Headline styled as in Hero */}
          <h2 className="font-typewriter text-5xl md:text-7xl font-bold text-gray-900 mb-8 text-center">
            About
          </h2>
          <div className="prose prose-lg max-w-none mx-auto mb-0">
            <p className="text-gray-700 text-lg leading-relaxed">
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

      {/* Expertise Highlights Section with hero-matching background */}
      <section className="py-20 bg-[#30586D]">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16">
          {/* Collaborative Mindset */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <Link className="h-6 w-6 text-blue-200" />
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Collaborative Mindset
              </h3>
            </div>
            <p className="text-blue-100 text-lg leading-relaxed mb-6">
              Effective communication is key to any successful project. By actively engaging
              with existing team knowledge, I ensure that solutions are found faster and
              more effectively.
            </p>
            <div className="rounded-lg overflow-hidden shadow-lg hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800"
                alt="People collaborating"
                className="w-full h-56 object-cover opacity-80"
              />
            </div>
          </div>
          {/* Network of Experts */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-6 w-6 text-blue-200" />
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Network of Experts
              </h3>
            </div>
            <p className="text-blue-100 text-lg leading-relaxed mb-6">
              Over the years, I've cultivated a strong network of talented professionals
              across embedded systems and software development. When specialized knowledge
              is required, I can connect you with the right expert.
            </p>
            <div className="rounded-lg overflow-hidden shadow-lg hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800"
                alt="Technology workspace"
                className="w-full h-56 object-cover opacity-80"
              />
            </div>
          </div>
        </div>
        {/* Show images in mobile below cards for good stacking */}
        <div className="container mx-auto px-4 mt-12 grid grid-cols-1 md:hidden gap-8">
          <img
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800"
            alt="People collaborating"
            className="w-full h-56 object-cover rounded-lg opacity-80"
          />
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800"
            alt="Technology workspace"
            className="w-full h-56 object-cover rounded-lg opacity-80"
          />
        </div>
      </section>
    </>
  );
};

export default About;
