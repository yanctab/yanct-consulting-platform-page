
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-primary/80 backdrop-blur-sm z-50 shadow-sm font-typewriter">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/yanct.png" alt="Yanct Logo" className="h-12 w-auto" />
          <div className="text-xl font-semibold text-primary-foreground">
            Yanct
            <span className="text-sm text-primary-foreground/70 ml-2">by mans zigher</span>
          </div>
        </div>
        <div className="hidden md:flex space-x-6">
          <Button variant="ghost" className="text-primary-foreground hover:bg-primary/20 font-typewriter" onClick={() => scrollToSection('about')}>About</Button>
          <Button variant="ghost" className="text-primary-foreground hover:bg-primary/20 font-typewriter" onClick={() => scrollToSection('services')}>Services</Button>
          <Button variant="ghost" className="text-primary-foreground hover:bg-primary/20 font-typewriter" onClick={() => scrollToSection('expertise')}>Expertise</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
