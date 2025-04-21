import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <section id="services" className="relative py-16 md:py-24 overflow-visible bg-fixed"
      style={{
        backgroundImage: 'linear-gradient(180deg, #293d3d 0%, #3d4c4a 60%, #9f8984 100%)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex flex-col gap-16 md:gap-20 w-full">
          {/* Remote-First Support */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch w-full">
            <div className="bg-white flex items-center justify-center border border-[#e5e5e5] h-full w-full aspect-[1.8/1] rounded-none">
              {/* Optional illustrative image or icon could go here */}
            </div>
            <div className="bg-white flex flex-col justify-center border border-[#e5e5e5] p-8 h-full w-full aspect-[1.8/1] rounded-none">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 font-typewriter">
                Remote-First Support
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Ideal for small to mid-sized companies, offering flexible, ongoing support with expert-level embedded Linux and Yocto expertise.
              </p>
            </div>
          </div>
          <div className="h-10 md:h-16" />
          {/* Full-Time Engagement */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch w-full">
            <div className="bg-white flex flex-col justify-center border border-[#e5e5e5] p-8 h-full w-full aspect-[1.8/1] rounded-none">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 font-typewriter">
                Full-Time Engagement
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Full-time, on-site or hybrid consulting, providing hands-on support for day-to-day development and real-time issue resolution.
              </p>
            </div>
            <div className="bg-white flex items-center justify-center border border-[#e5e5e5] h-full w-full aspect-[1.8/1] rounded-none">
              {/* Optional illustrative image or icon could go here */}
            </div>
          </div>
          <div className="h-10 md:h-16" />
          {/* Platform Review & Roadmap */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch w-full">
            <div className="bg-white flex items-center justify-center border border-[#e5e5e5] h-full w-full aspect-[1.8/1] rounded-none">
              {/* Optional illustrative image or icon could go here */}
            </div>
            <div className="bg-white flex flex-col justify-center border border-[#e5e5e5] p-8 h-full w-full aspect-[1.8/1] rounded-none">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 font-typewriter">
                Platform Review & Roadmap
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Tailored review of your platform and processes, with a clear roadmap for improvements and implementation options.
              </p>
            </div>
          </div>
          <div className="h-10 md:h-16" />
          <div className="relative flex flex-col items-center w-full mt-0 md:mt-8 mb-4">
            <Button
              size="lg"
              id="services-main-btn"
              className="bg-white text-[#436576] hover:bg-gray-200 rounded-full text-xl px-14 py-7 font-typewriter shadow-lg transition-colors duration-300 border-none"
              onClick={() => {
                // This could navigate or scroll elsewhere -- keep as in About Highlights
                const highlights = document.getElementById('contact');
                highlights?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
