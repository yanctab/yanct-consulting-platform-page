
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div 
      className="min-h-[80vh] relative flex items-center bg-cover bg-center font-typewriter"
      style={{
        backgroundImage: 'linear-gradient(rgba(48, 88, 109, 0.7), rgba(48, 88, 109, 0.9)), url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000")',
      }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="text-white max-w-xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm Måns.
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            I have been transformed complex platform into secure, production-ready systems for 15 years.
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-typewriter"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>
        
        <div className="relative hidden md:block">
          <div 
            className="absolute -right-8 -bottom-8 w-64 h-64 rounded-full bg-[#6696ab] opacity-50"
            style={{ transform: 'translate(10%, 10%)' }}
          />
          <img 
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
            alt="Måns Profile" 
            className="relative w-80 h-96 object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
