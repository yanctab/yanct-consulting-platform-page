import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Connect = () => {
  return (
    <section
      id="connect"
      className="py-24 bg-gray-900 relative"
    >
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

        <div className="relative flex flex-col items-center w-full mt-20">
          <div 
            id="contact-box"
            className="bg-transparent border-2 border-white w-full md:w-3/4 p-8"
          >
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-start">
              <div className="flex flex-col gap-8 items-center">
                <Linkedin className="w-8 h-8 text-white cursor-pointer hover:text-gray-200 transition-colors" />
                <Mail className="w-8 h-8 text-white cursor-pointer hover:text-gray-200 transition-colors" />
                <Github className="w-8 h-8 text-white cursor-pointer hover:text-gray-200 transition-colors" />
              </div>
              <div className="flex flex-col gap-8 text-white text-center md:text-left">
                <p className="text-lg">www.linkedin.com/in/måns-zigher-a4656954</p>
                <p className="text-lg">info @ yanct.com</p>
                <p className="text-lg">https://github.com/yanctab</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
