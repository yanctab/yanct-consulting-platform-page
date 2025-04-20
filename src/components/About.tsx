
import { Users, Link } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-24"
      style={{
        backgroundColor: "#f3f3f3", // light gray background color
      }}
    >
      <div className="container mx-auto px-4 relative z-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">About</h2>
        <div className="prose prose-lg max-w-none mb-16">
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
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Link className="h-6 w-6 text-blue-600" />
              <h3 className="text-2xl font-semibold text-gray-900">
                Collaborative Mindset
              </h3>
            </div>
            <p className="text-gray-600">
              Effective communication is key to any successful project. By actively engaging 
              with existing team knowledge, I ensure that solutions are found faster and 
              more effectively.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800" 
              alt="People collaborating" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800" 
              alt="Technology workspace" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-6 w-6 text-blue-600" />
              <h3 className="text-2xl font-semibold text-gray-900">
                Network of Experts
              </h3>
            </div>
            <p className="text-gray-600">
              Over the years, I've cultivated a strong network of talented professionals 
              across embedded systems and software development. When specialized knowledge 
              is required, I can connect you with the right expert.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

