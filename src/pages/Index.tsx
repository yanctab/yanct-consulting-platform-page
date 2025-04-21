
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";

const Index = () => {
  const scrollToContent = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <Button
          variant="ghost"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          onClick={scrollToContent}
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
        <About />
        <Services />
        <Expertise />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
