
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-primary/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-semibold text-primary-foreground">
          Yanct
          <span className="text-sm text-primary-foreground/70 ml-2">by mans zigher</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <Button variant="ghost" className="text-primary-foreground hover:bg-primary/20" onClick={() => scrollToSection('about')}>About</Button>
          <Button variant="ghost" className="text-primary-foreground hover:bg-primary/20" onClick={() => scrollToSection('services')}>Services</Button>
          <Button variant="ghost" className="text-primary-foreground hover:bg-primary/20" onClick={() => scrollToSection('expertise')}>Expertise</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
