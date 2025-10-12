import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">WS</span>
            </div>
            <span className="font-bold text-xl text-foreground">Casa das Máquinas</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("sobre")} className="text-foreground hover:text-primary transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection("produtos")} className="text-foreground hover:text-primary transition-colors">
              Produtos
            </button>
            <button onClick={() => scrollToSection("diferenciais")} className="text-foreground hover:text-primary transition-colors">
              Diferenciais
            </button>
            <Button onClick={() => scrollToSection("contato")} variant="default">
              Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("sobre")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("produtos")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection("diferenciais")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Diferenciais
            </button>
            <Button onClick={() => scrollToSection("contato")} className="w-full">
              Contato
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
