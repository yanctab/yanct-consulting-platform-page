
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Embedded Linux
            <span className="text-blue-600"> Excellence</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transforming complex platforms into secure, production-ready systems
            with over 15 years of expertise.
          </p>
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Services
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
