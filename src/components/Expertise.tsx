
import { HardDrive, Code, Settings } from "lucide-react";

const Expertise = () => {
  return (
    <section id="expertise" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Background & Expertise
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <HardDrive className="h-12 w-12 mx-auto mb-6 text-emerald-600" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Embedded Linux Development
            </h3>
            <p className="text-gray-600">
              Since 2008, I've helped companies implement and optimize embedded Linux systems 
              across various industries, covering everything from bootloaders and kernels to 
              middleware layers.
            </p>
          </div>

          <div className="text-center">
            <Code className="h-12 w-12 mx-auto mb-6 text-emerald-600" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Yocto Project Expertise
            </h3>
            <p className="text-gray-600">
              The Yocto Project can be daunting, but I've worked extensively with its BSP 
              and platform layers, gaining deep insights into its quirks across different 
              vendor ecosystems.
            </p>
          </div>

          <div className="text-center">
            <Settings className="h-12 w-12 mx-auto mb-6 text-emerald-600" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Developer Enablement
            </h3>
            <p className="text-gray-600">
              I simplify workflows and enhance productivity, allowing your team to focus on 
              their strengths. I also collaborate with DevOps to optimize build pipelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
