
import { HardDrive, Code, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import TrianglePattern from "./TrianglePattern";

const Expertise = () => {
  return (
    <section id="expertise" className="py-24 bg-[#35b88f] relative overflow-visible">
      <TrianglePattern />
      {/* Full fade on both sides */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.50) 100%)",
        }}
      />
      <div className="container mx-auto px-4 relative z-20">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Background & Expertise
        </h2>
        
        {/* Parent container for the grid and button with the vertical line */}
        <div className="relative">
          {/* Vertical line that starts below the button and goes downward */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10"
            style={{
              top: "calc(100% + 48px)", // start just below the button (button height ~56px + margin, approximated 48px here)
              height: "400px", // extend downward length enough to reach Services section visually (adjust if needed)
              width: "0px",
              borderLeft: "3px solid #fff",
              pointerEvents: "none",
            }}
          />
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
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
            <div className="text-center">
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
            <div className="text-center">
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
          
          {/* Button container */}
          <div className="flex flex-col items-center w-full mt-16">
            <Button
              size="lg"
              className="bg-white text-[#35b88f] hover:bg-gray-200 rounded-full text-xl px-14 py-7 font-typewriter shadow-lg transition-colors duration-300 border-none mt-0"
              onClick={() => {
                const highlights = document.getElementById('about');
                highlights?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;

