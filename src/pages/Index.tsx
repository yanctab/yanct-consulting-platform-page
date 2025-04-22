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
            endBtnId="expertise-header-btn"
          />
          <VerticalLine
            containerId="expertise-services-block"
            startBtnId="expertise-header-btn"
            endBtnId="expertise-continue-btn"
          />
          <VerticalLine
            containerId="expertise-services-block"
            startBtnId="expertise-continue-btn"
            endBtnId="services-header-btn"
          />
          <VerticalLine
            containerId="expertise-services-block"
            startBtnId="services-header-btn"
            endBtnId="services-continue-btn"
          />
          <VerticalLine
            containerId="expertise-services-block"
            startBtnId="services-continue-btn"
            endBtnId="connect-main-btn"
          />
          <VerticalLine
            containerId="expertise-services-block"
            startBtnId="connect-main-btn"
            endBtnId="contact-box"
          />
          <Expertise />
          <Services />
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
