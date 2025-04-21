
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
        <div className="flex justify-center mb-16">
          <Button
            size="lg"
            id="expertise-header-btn"
            className="text-white border-white border-2 rounded-full text-xl px-14 py-7 font-typewriter shadow-none bg-transparent cursor-default pointer-events-none"
          >
            Background & Expertise
          </Button>
        </div>

        {/* Custom 3x2 "table" grid with connecting lines */}
        <div className="grid grid-cols-2 grid-rows-3 gap-12 relative">
          {/* Vertical line in the middle */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-white -translate-x-1/2" />

          {/* Row 1, Col 1 — Empty */}
          <div />

          {/* Row 1, Col 2 with horizontal line */}
          <div className="relative pl-16">
            {/* Horizontal connecting line */}
            <div className="absolute left-0 top-1/2 w-16 h-[3px] bg-white" />
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

          {/* Row 2, Col 1 with horizontal line */}
          <div className="relative pr-16">
            {/* Horizontal connecting line */}
            <div className="absolute right-0 top-1/2 w-16 h-[3px] bg-white" />
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

          {/* Row 2, Col 2 — Empty */}
          <div />

          {/* Row 3, Col 1 — Empty */}
          <div />

          {/* Row 3, Col 2 with horizontal line */}
          <div className="relative pl-16">
            {/* Horizontal connecting line */}
            <div className="absolute left-0 top-1/2 w-16 h-[3px] bg-white" />
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

        {/* Continue button */}
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
