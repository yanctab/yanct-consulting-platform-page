import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div
      className="min-h-[80vh] relative flex items-center justify-center bg-cover bg-center font-typewriter"
      style={{
        backgroundImage:
          'linear-gradient(rgba(48, 88, 109, 0.7), rgba(48, 88, 109, 0.9)), url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000")',
      }}
    >
      <div className="text-white max-w-xl text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-12">Welcome To Yanct.</h1>
        <p className="text-xl md:text-2xl text-white/80 mb-12">
          With over a decade of hands-on experience, I bring a wealth of knowledge to the table, poised to elevate your projects to new heights of success.
        </p>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-typewriter"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Hero;