import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Mouse } from "lucide-react";

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <div
      className="min-h-[80vh] relative flex items-center justify-center bg-cover bg-center font-typewriter"
      style={{
        backgroundImage:
          'linear-gradient(rgba(48, 88, 109, 0.7), rgba(48, 88, 109, 0.9)), url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000")',
      }}
    >
      <div className="text-white max-w-3xl text-center px-4">
        <img
          src="/yanct.png"
          alt="Yanct Logo"
          className={`mx-auto mb-8 ${
            isMobile ? "w-[250px]" : "w-[500px]"
          } h-auto drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]`}
        />
        <h1
          className={`${
            isMobile ? "text-4xl" : "text-5xl md:text-7xl"
          } font-bold mb-8`}
        >
          Welcome To Yanct.
        </h1>
        <p
          className={`${
            isMobile ? "text-lg" : "text-xl md:text-2xl"
          } text-white/80 mb-12 max-w-2xl mx-auto`}
        >
          With over a decade of hands-on experience, I bring a wealth of
          knowledge to the table, poised to elevate your projects to new
          heights of success.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Button
            size="lg"
            className="min-w-[220px] bg-white text-[#436576] hover:bg-gray-200 rounded-full text-xl px-14 py-7 font-typewriter shadow-lg transition-colors duration-300 border-none"
            onClick={() => {
              const about = document.getElementById("about");
              about?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Learn More
          </Button>
          <Button
            size="lg"
            className="min-w-[220px] bg-white text-[#436576] hover:bg-gray-200 rounded-full text-xl px-14 py-7 font-typewriter shadow-lg transition-colors duration-300 border-none"
            onClick={() => {
              const connect = document.getElementById("connect");
              connect?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </Button>
        </div>

        <div className="flex flex-col items-center mt-8 animate-bounce">
          <Mouse
            className="w-8 h-8 text-white opacity-75"
            aria-label="Scroll for more"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
