import { HardDrive, Code, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import TrianglePattern from "./TrianglePattern";

const Expertise = () => {
  return (
    <section id="expertise" className="py-24 bg-[#35b88f] relative overflow-visible">
      <TrianglePattern />
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.50) 100%)",
        }}
      />
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex justify-center mb-16">
          <Button
            size="lg"
            id="expertise-header-btn"
            className="text-white border-white border-2 rounded-full text-xl px-14 py-7 font-typewriter shadow-none bg-transparent cursor-default pointer-events-none"
          >
            Expertise
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-8 md:gap-12 relative">
          {/* Vertical line in the center */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-white -translate-x-1/2 hidden md:block" />

          <div className="hidden md:block md:order-1"></div>

          {/* Left box with line to the right */}
          <div className="relative pr-0 md:pl-16 order-1 md:order-2">
            {/* Horizontal line from the left border, extending towards the center */}
            <div className="absolute left-0 top-1/2 w-12 h-[3px] bg-white hidden md:block transform -translate-y-1/2" />
            <div className="text-center border-2 border-white rounded-lg p-6">
              <HardDrive className="h-12 w-12 mx-auto mb-6 text-white" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Embedded Linux Development
              </h3>
              <p className="text-white opacity-90">
                Since 2008, I've helped companies implement and optimize embedded Linux systems 
                across various industries, covering everything from bootloaders and kernels to 
                middleware layers.
              </p>
            </div>
          </div>

          {/* Right box with line to the left */}
          <div className="relative pl-0 md:pr-16 order-2 md:order-3">
            {/* Horizontal line from the right border, extending towards the center */}
            <div className="absolute right-0 top-1/2 w-12 h-[3px] bg-white hidden md:block transform -translate-y-1/2" />
            <div className="text-center border-2 border-white rounded-lg p-6">
              <Code className="h-12 w-12 mx-auto mb-6 text-white" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Yocto Project Expertise
              </h3>
              <p className="text-white opacity-90">
                The Yocto Project can be daunting, but I've worked extensively with its BSP 
                and platform layers, gaining deep insights into its quirks across different 
                vendor ecosystems.
              </p>
            </div>
          </div>

          <div className="hidden md:block md:order-4"></div>
          <div className="hidden md:block md:order-5"></div>

          {/* Left box with line to the right */}
          <div className="relative pr-0 md:pl-16 order-3 md:order-6">
            {/* Horizontal line from the left border, extending towards the center */}
            <div className="absolute left-0 top-1/2 w-12 h-[3px] bg-white hidden md:block transform -translate-y-1/2" />
            <div className="text-center border-2 border-white rounded-lg p-6">
              <Settings className="h-12 w-12 mx-auto mb-6 text-white" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Developer Enablement
              </h3>
              <p className="text-white opacity-90">
                I simplify workflows and enhance productivity, allowing your team to focus on 
                their strengths. I also collaborate with DevOps to optimize build pipelines.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full mt-16">
          <Button
            size="lg"
            id="expertise-continue-btn"
            className="bg-white text-[#35b88f] hover:bg-gray-200 rounded-full text-xl px-14 py-7 font-typewriter shadow-lg transition-colors duration-300 border-none mt-0"
            onClick={() => {
              const highlights = document.getElementById('services');
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

export default Expertise;
