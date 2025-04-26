import { Button } from "@/components/ui/button";
import TrianglePattern from "./TrianglePattern";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-24 bg-[#35b88f] relative overflow-visible"
    >
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

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-8 md:gap-12">
          {/* Testimonial 1 - top left */}
          <div className="text-center border-4 border-white rounded-2xl p-6 md:p-8 bg-[#2fae84] shadow-lg">
            <div className="text-6xl text-white mb-4 leading-none">“</div>
            <p className="text-white opacity-90 mb-6">
              We consulted Måns for guidance on configuring and delivering IoT gateways for cloud control to thousands of end-users in a scalable way. Måns was incredibly service-minded, pedagogical, and highly knowledgeable. We will continue to rely on him as our go-to expert for all IoT-related matters.
            </p>
            <p className="text-white font-bold">Daria Madjidian</p>
            <p className="text-white italic text-sm">
              Co-Founder and Chief Scientist at Emulate Energy
            </p>
          </div>

          {/* Testimonial 2 - top right */}
          <div className="text-center border-4 border-white rounded-2xl p-6 md:p-8 bg-[#2fae84] shadow-lg">
            <div className="text-6xl text-white mb-4 leading-none">“</div>
            <p className="text-white opacity-90 mb-6">
              Complexity is not a problem. He works proactively and reacts fast on observations made. He has good contacts with other teams and could handle different cultures easily. I highly recommend him since his contribution is very good and he works on a high energy level!
            </p>
            <p className="text-white font-bold">Kent Pålsson</p>
            <p className="text-white italic text-sm">
              Senior Hardware Project Design Lead på SCHNEIDER ELECTRIC
            </p>
          </div>

          {/* Testimonial 3 - bottom left */}
          <div className="text-center border-4 border-white rounded-2xl p-6 md:p-8 bg-[#2fae84] shadow-lg">
            <div className="text-6xl text-white mb-4 leading-none">“</div>
            <p className="text-white opacity-90 mb-6">
            Måns is next level embedded linux expert. Not only does he understand the tools surrounding custom embedded linux system like yocto, but he has very good linux knowledge which is important to have this combo in my opinion. From classical linux stuff, to drivers to device tree setup and board bring ups. I higly recommend Måns.
            </p>
            <p className="text-white font-bold">Frederik Vibe-Petersen</p>
            <p className="text-white italic text-sm">
              Creator of the TopBrewer Experience. Engineering awesome.
            </p>
          </div>

          {/* Testimonial 4 - bottom right */}
          <div className="text-center border-4 border-white rounded-2xl p-6 md:p-8 bg-[#2fae84] shadow-lg">
            <div className="text-6xl text-white mb-4 leading-none">“</div>
            <p className="text-white opacity-90 mb-6">
              Måns is a hardworking and very skilled developer and expert in embedded Linux development (especially Yocto), C/C++ and Python programming. Always ready to help improving the development processes, tools etc. and has a high focus on quality. A true asset for the team.
            </p>
            <p className="text-white font-bold">Jeppe Frandsen</p>
            <p className="text-white italic text-sm">
              Senior Developer | Architect | Manager | DevOps Guy
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center w-full mt-16">
          <Button
            size="lg"
            id="testimonials-continue-btn"
            className="bg-white text-[#35b88f] hover:bg-gray-200 rounded-full text-xl px-14 py-7 font-typewriter shadow-lg transition-colors duration-300 border-none mt-0"
            onClick={() => {
              const highlights = document.getElementById("connect");
              highlights?.scrollIntoView({ behavior: "smooth" });
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
