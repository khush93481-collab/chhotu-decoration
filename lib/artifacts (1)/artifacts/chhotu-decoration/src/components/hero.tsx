import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/hooks/use-scroll';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import heroWeddingImg from '@assets/generated_images/hero-wedding.jpg';
import heroBirthdayImg from '@assets/generated_images/hero-birthday.jpg';
import heroStageImg from '@assets/generated_images/hero-stage.jpg';

const images = [
  { src: heroWeddingImg, title: "Luxury Weddings" },
  { src: heroStageImg, title: "Opulent Stages" },
  { src: heroBirthdayImg, title: "Premium Birthdays" },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-[100dvh] w-full overflow-hidden bg-black">
      {/* Background Carousel */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${images[currentIndex].src})`,
            }}
          />
          {/* Gradient Overlays for depth and readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-4 md:px-6 flex flex-col justify-center items-start pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <span className="inline-block py-1 px-3 rounded-full border border-primary/50 text-primary text-xs md:text-sm tracking-[0.2em] font-medium mb-6 uppercase backdrop-blur-sm bg-black/30">
            Premium Event Decoration in Jharkhand
          </span>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6 drop-shadow-2xl">
            CHHOTU<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F5D983] to-[#9E7C2B]">
              DECORATION
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-serif text-white/90 italic mb-4">
            "Turning Every Celebration into a Beautiful Memory"
          </h2>
          
          <p className="text-white/70 text-base md:text-lg mb-10 max-w-2xl font-sans leading-relaxed">
            Professional Decoration Services for Weddings, Birthdays, Anniversaries, Engagements, Baby Showers, Corporate Events, and Special Celebrations.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button 
              variant="gold" 
              size="lg" 
              className="w-full sm:w-auto min-w-[160px] group"
              asChild
            >
              <a href="tel:6204187216">
                <Phone className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Call Now
              </a>
            </Button>
            
            <Button 
              size="lg" 
              className="w-full sm:w-auto min-w-[160px] bg-[#25D366] hover:bg-[#128C7E] text-white border-none group"
              asChild
            >
              <a href="https://wa.me/916204187216" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto min-w-[160px] text-white border-white/30 hover:bg-white hover:text-black group"
              onClick={() => scrollToSection('gallery')}
            >
              Explore Gallery
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentIndex ? 'w-10 bg-primary' : 'w-2 bg-white/40'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
