import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar, Image as ImageIcon, Info, Star } from 'lucide-react';
import { scrollToSection } from '@/hooks/use-scroll';

export function Navbar({ scrolled }: { scrolled: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home', icon: <Menu className="w-4 h-4 mr-2" /> },
    { name: 'Gallery', id: 'gallery', icon: <ImageIcon className="w-4 h-4 mr-2" /> },
    { name: 'Services', id: 'services', icon: <Calendar className="w-4 h-4 mr-2" /> },
    { name: 'About', id: 'about', icon: <Info className="w-4 h-4 mr-2" /> },
    { name: 'Testimonials', id: 'testimonials', icon: <Star className="w-4 h-4 mr-2" /> },
    { name: 'Contact', id: 'contact', icon: <Phone className="w-4 h-4 mr-2" /> },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    scrollToSection(id);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md border-b border-primary/20 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div 
            className="cursor-pointer group flex items-center"
            onClick={() => handleNavClick('home')}
          >
            <h1 className="font-serif text-2xl md:text-3xl font-bold tracking-wider text-white group-hover:text-primary transition-colors">
              CHHOTU <span className="text-primary">DECORATION</span>
            </h1>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-sm font-medium text-white/80 hover:text-primary transition-colors tracking-wide uppercase"
              >
                {link.name}
              </button>
            ))}
            <a 
              href="tel:6204187216"
              className="px-5 py-2 rounded border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 font-bold uppercase tracking-wider text-sm"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-primary p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-lg border-b border-primary/20 overflow-hidden"
          >
            <div className="flex flex-col py-4 px-4 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="flex items-center text-left text-white/90 hover:text-primary py-2 text-lg font-medium border-b border-white/5"
                >
                  {link.icon}
                  {link.name}
                </button>
              ))}
              <a 
                href="tel:6204187216"
                className="flex items-center justify-center w-full mt-4 px-5 py-3 rounded bg-primary text-black font-bold uppercase tracking-wider text-sm"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
