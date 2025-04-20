
const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">
              "Yet another consulting firm," you might think — but I'm not just another consultant. 
              With over 15 years of embedded Linux experience, I focus on turning complex platforms 
              into secure, production-ready systems that actually work in the real world.
            </p>
            <p className="text-gray-600 mb-6">
              I specialize in bridging the gap between vendor BSPs and reliable products, 
              with deep experience across multiple hardware suppliers and ecosystems. 
              But what really sets me apart is how I work — with a service-minded approach, 
              strong communication, and a focus on collaboration.
            </p>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Collaborative Mindset & Communication
          </h3>
          <p className="text-gray-600 mb-6">
            Effective communication is key to any successful project, and I've seen firsthand 
            how breakdowns in communication can lead to inefficiencies. By actively engaging 
            with existing team knowledge, I ensure that solutions are found faster and more effectively.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Network of Experts
          </h3>
          <p className="text-gray-600">
            Over the years, I've cultivated a strong network of talented professionals across 
            embedded systems and software development. When specialized knowledge is required, 
            I can connect you with the right expert.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
