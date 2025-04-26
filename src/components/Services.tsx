
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Services = () => {
  const isMobile = useIsMobile();

  return (
    <section
      id="services"
      className="relative py-16 md:py-24 overflow-visible"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.7) 100%),
          linear-gradient(rgba(11, 19, 43, 0.85), rgba(11, 19, 43, 0.95)),
          url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000")
        `,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative flex flex-col items-center w-full mt-0">
        <h2
          id="services-header-btn"
          className="text-white text-4xl font-ubuntu"
        >
          Services
        </h2>
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center mt-16 md:mt-32">
        <div className="flex flex-col gap-0 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch w-full">
            <div
              className="bg-white flex items-center justify-center border border-[#e5e5e5] h-full w-full aspect-[1.8/1] rounded-2xl bg-cover bg-center grayscale"
              style={{
                backgroundImage: "url('/Southtech-38_edited1.jpg')",
              }}
              aria-label="Black and white photo of building"
              role="img"
            />
            <div className="bg-white p-1 rounded-2xl border-4 border-[#F5F7FA]">
              <div className="h-full w-full bg-[#0B132B] p-1 rounded-[calc(1rem-2px)]">
                <div className="h-full w-full bg-[#F5F7FA] flex flex-col justify-center shadow-md p-4 sm:p-6 md:p-8 rounded-[calc(1rem-4px)]">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 md:mb-4">
                    Remote-First Support
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-tight sm:leading-relaxed">
                    Ideal for small to mid-sized companies, offering flexible,
                    ongoing support with expert-level embedded Linux and Yocto
                    expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch w-full">
            <div className="bg-white p-1 rounded-2xl border-4 border-[#F5F7FA]">
              <div className="h-full w-full bg-[#0B132B] p-1 rounded-[calc(1rem-2px)]">
                <div className="h-full w-full bg-[#F5F7FA] flex flex-col justify-center shadow-md p-4 sm:p-6 md:p-8 rounded-[calc(1rem-4px)]">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 md:mb-4">
                    Full-Time Engagement
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-tight sm:leading-relaxed">
                    Full-time, on-site or hybrid consulting, providing hands-on
                    support for day-to-day development and real-time issue
                    resolution.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="bg-white flex items-center justify-center border border-[#e5e5e5] h-full w-full aspect-[1.8/1] rounded-2xl bg-cover bg-center grayscale"
              style={{
                backgroundImage: "url('/P_AB3418.jpg')",
              }}
              aria-label="Black and white photo of gray building"
              role="img"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch w-full">
            <div
              className="bg-white flex items-center justify-center border border-[#e5e5e5] h-full w-full aspect-[1.8/1] rounded-2xl bg-cover bg-center grayscale"
              style={{
                backgroundImage: "url('P_AB3378.jpg')",
              }}
              aria-label="Black and white photo of herd of sheep"
              role="img"
            />
            <div className="bg-white p-1 rounded-2xl border-4 border-[#F5F7FA]">
              <div className="h-full w-full bg-[#0B132B] p-1 rounded-[calc(1rem-2px)]">
                <div className="h-full w-full bg-[#F5F7FA] flex flex-col justify-center shadow-md p-4 sm:p-6 md:p-8 rounded-[calc(1rem-4px)]">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 md:mb-4">
                    Platform Review & Roadmap
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-tight sm:leading-relaxed">
                    Tailored review of your platform and processes, with a clear
                    roadmap for improvements and implementation options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full mt-16">
          <Button
            size="lg"
            id="services-continue-btn"
            className="bg-white text-[#0B132B] hover:bg-gray-200 rounded-full text-xl px-14 py-7 font-ubuntu shadow-lg transition-colors duration-300 border-none mt-0"
            onClick={() => {
              const highlights = document.getElementById('testimonials');
              highlights?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Continue
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
