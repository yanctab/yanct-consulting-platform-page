import { HardDrive, Code, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import TrianglePattern from "./TrianglePattern";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#35b88f] relative overflow-visible">
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
            id="testimonials-header-btn"
            className="text-white border-white border-2 rounded-full text-xl px-14 py-7 font-typewriter shadow-none bg-transparent cursor-default pointer-events-none"
          >
            Testimonials
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-8 md:gap-12 relative">
          {/* Vertical line in the center */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-white -translate-x-1/2 hidden md:block" />

          <div className="hidden md:block md:order-1"></div>

          {/* Left box with line to the right */}
          <div className="relative pr-0 md:pl-16 order-1 md:order-2">
            <div className="absolute left-0 top-1/2 w-12 h-[3px] bg-white hidden md:block transform -translate-y-1/2" />
            <div className="text-center border-4 border-white rounded-2xl p-6 md:p-8 bg-[#2fae84] shadow-lg">
              <HardDrive className="h-12 w-12 mx-auto mb-6 text-white" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Daria Madjidian
              </h3>
              <h4 className="text-2xl font-bold text-white mb-4">
                Co-Founder and Chief Scientist at Emulate Energy
              </h4>
              <p className="text-white opacity-90">
              We consulted Måns for guidance on configuring and delivering IoT gateways for cloud control
              to thousands of end-users in a scalable way. Måns was incredibly service-minded, pedagogical,
              and highly knowledgeable. He not only put us on the right track but also taught us a great deal,
              highlighted things we would have otherwise missed, and suggested several reasonable paths forward.
              We will continue to rely on him as our go-to expert for all IoT-related matters.
              </p>
            </div>
          </div>

          {/* Right box with line to the left */}
          <div className="relative pl-0 md:pr-16 order-2 md:order-3">
            <div className="absolute right-0 top-1/2 w-12 h-[3px] bg-white hidden md:block transform -translate-y-1/2" />
            <div className="text-center border-4 border-white rounded-2xl p-6 md:p-8 bg-[#2fae84] shadow-lg">
              <Code className="h-12 w-12 mx-auto mb-6 text-white" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Kent PålssonKent Pålsson
              </h3>
              <h4 className="text-2xl font-bold text-white mb-4">
                Senior Hardware Project Design Lead på SCHNEIDER ELECTRIC
              </h4>
              <p className="text-white opacity-90">
              Måns is a skilled and experienced embedded SW programmer. He is also experienced in working closely
              with the HW development and HW production team in problem-solving and test design. He is very driven
              in troubleshooting and never give up. Complexity is not a problem.He works proactively and reacts
              fast on observations made. He has good contacts with other team’s and could handle different cultures easily. 
              I highly recommend him since his contribution is very good and he works on a high energy level!
              </p>
            </div>
          </div>

          <div className="hidden md:block md:order-4"></div>
          <div className="hidden md:block md:order-5"></div>

          {/* Left box with line to the right */}
          <div className="relative pr-0 md:pl-16 order-3 md:order-6">
            <div className="absolute left-0 top-1/2 w-12 h-[3px] bg-white hidden md:block transform -translate-y-1/2" />
            <div className="text-center border-4 border-white rounded-2xl p-6 md:p-8 bg-[#2fae84] shadow-lg">
              <Settings className="h-12 w-12 mx-auto mb-6 text-white" />
              <h3 className="text-2xl font-bold text-white mb-4">        
              Jeppe FrandsenJeppe Frandsen
              </h3>
              <h4 className="text-2xl font-bold text-white mb-4">
              Senior Developer | Architect | Manager | DevOps Guy
              </h4>
              <p className="text-white opacity-90">
              Måns is a hardworking and very skilled developer and expert in embedded Linux development (especially Yocto),
              C/C++ and Python programming. Always ready to help improving the development processes, tools etc. and has a
              high focus on quality. A true asset for the team.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full mt-16">
          <Button
            size="lg"
            id="testimonials-continue-btn"
            className="bg-white text-[#35b88f] hover:bg-gray-200 rounded-full text-xl px-14 py-7 font-typewriter shadow-lg transition-colors duration-300 border-none mt-0"
            onClick={() => {
              const highlights = document.getElementById('connect');
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

export default Testimonials;
