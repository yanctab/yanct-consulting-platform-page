
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-semibold text-gray-900">
          Yanct
          <span className="text-sm text-gray-600 ml-2">by mans zigher</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <Button variant="ghost" onClick={() => scrollToSection('about')}>About</Button>
          <Button variant="ghost" onClick={() => scrollToSection('services')}>Services</Button>
          <Button variant="ghost" onClick={() => scrollToSection('expertise')}>Expertise</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
