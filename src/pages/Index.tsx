import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Expertise from "@/components/Expertise";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";
import VerticalLine from "@/components/VerticalLine";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  const scrollToContent = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white" id="main-container">
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
        <div id="expertise-services-block" className="relative">
          <VerticalLine
            containerId="expertise-services-block"
            startBtnId="about-highlights-continue-btn"
            endBtnId="expertise h2"
          />
          <VerticalLine
            containerId="expertise-services-block"
            startBtnId="expertise h2"
            endBtnId="expertise-continue-btn"
          />
          <VerticalLine
            containerId="expertise-services-block"
            startBtnId="expertise-continue-btn"
            endBtnId="services h2"
          />
          <VerticalLine
            containerId="expertise-services-block"
            startBtnId="services h2"
            endBtnId="services-continue-btn"
          />
          <VerticalLine
            containerId="expertise-services-block"
            startBtnId="services-continue-btn"
            endBtnId="testimonials h2"
          />
          <VerticalLine
            containerId="expertise-services-block"
            startBtnId="testimonials h2"
            endBtnId="testimonials-continue-btn"
          />
          <VerticalLine
            containerId="expertise-services-block"
            startBtnId="testimonials-continue-btn"
            endBtnId="connect h2"
          />
          <VerticalLine
            containerId="expertise-services-block"
            startBtnId="connect h2"
            endBtnId="contact-box"
          />
          <Expertise />
          <Services />
          <Testimonials />
          <Connect />
        </div>
        <VerticalLine
          containerId="main-container"
          startBtnId="contact-box"
          endBtnId="footer-logo"
          color="#fff"
          width={3}
          hideOnMobile={true}
        />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
