
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div 
      className="min-h-[80vh] relative flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000")',
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Embedded Linux
          <span className="block mt-2 text-blue-400">Excellence</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Transforming complex platforms into secure, production-ready systems
          with over 15 years of expertise.
        </p>
        <Button 
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-lg"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Hero;
