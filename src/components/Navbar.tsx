
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const handleWhatsAppRedirect = () => {
    window.open("https://wa.me/5543991900405?text=Quero%20saber%20mais%20sobre%20o%20smart%20office.", "_blank");
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-6 transition-all duration-300",
        scrolled ? "frost shadow-subtle" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl md:text-2xl font-bold text-office-blue dark:text-white">SmartOffice</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <a href="#features" className="text-gray-800 dark:text-gray-200 hover:text-office-blue dark:hover:text-white transition-colors text-sm lg:text-base">Funcionalidades</a>
          <a href="#rooms" className="text-gray-800 dark:text-gray-200 hover:text-office-blue dark:hover:text-white transition-colors text-sm lg:text-base">Salas</a>
          <a href="#pricing" className="text-gray-800 dark:text-gray-200 hover:text-office-blue dark:hover:text-white transition-colors text-sm lg:text-base">Planos</a>
          <a href="#cost-comparison" className="text-gray-800 dark:text-gray-200 hover:text-office-blue dark:hover:text-white transition-colors text-sm lg:text-base">Economia</a>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-700" />}
          </Button>
          
          <Button 
            className="bg-gradient-cta hover:opacity-90 transition-opacity shadow-md btn-glow text-sm lg:text-base"
            onClick={handleWhatsAppRedirect}
          >
            Promoção 50% OFF
          </Button>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-700" />}
          </Button>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            className="text-gray-800 dark:text-gray-200 menu-button"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 frost shadow-subtle p-4 animate-fade-in mobile-menu dark:bg-gray-800 dark:bg-opacity-90">
          <div className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-800 dark:text-gray-200 hover:text-office-blue dark:hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Funcionalidades
            </a>
            <a 
              href="#rooms" 
              className="text-gray-800 dark:text-gray-200 hover:text-office-blue dark:hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Salas
            </a>
            <a 
              href="#pricing" 
              className="text-gray-800 dark:text-gray-200 hover:text-office-blue dark:hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Planos
            </a>
            <a 
              href="#cost-comparison" 
              className="text-gray-800 dark:text-gray-200 hover:text-office-blue dark:hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Economia
            </a>
            <Button 
              className="bg-gradient-cta hover:opacity-90 transition-opacity shadow-md w-full btn-glow"
              onClick={() => {
                setIsOpen(false);
                handleWhatsAppRedirect();
              }}
            >
              Promoção 50% OFF
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
