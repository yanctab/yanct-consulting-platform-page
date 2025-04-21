
import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";
import TrianglePattern from "./TrianglePattern";

const Connect = () => {
  return (
    <section
      id="connect"
      className="py-24 bg-[#35b88f] relative overflow-hidden"
    >
      <TrianglePattern />
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="relative flex flex-col items-center w-full">
          <Button
            size="lg"
            id="services-main-btn"
            className="text-white border-white border-2 rounded-full text-xl px-14 py-7 font-typewriter shadow-none bg-transparent hover:bg-transparent cursor-pointer"
          >
            Connect
          </Button>
        </div>

        <div className="relative flex flex-col items-center w-full mt-10">
          <div 
            id="contact-box"
            className="bg-transparent border-2 border-white w-3/4 md:w-1/2 aspect-[2/1] flex items-center justify-center gap-8"
          >
            <Linkedin className="w-8 h-8 text-white cursor-pointer hover:text-gray-200 transition-colors" />
            <Mail className="w-8 h-8 text-white cursor-pointer hover:text-gray-200 transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
