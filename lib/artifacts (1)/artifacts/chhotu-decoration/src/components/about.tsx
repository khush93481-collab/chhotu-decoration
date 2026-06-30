import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/hooks/use-scroll';

export function About() {
  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Using a solid elegant shape/layout since we are out of specific images, or we can just use styling */}
            <div className="aspect-[4/5] rounded-xl overflow-hidden bg-[#111] border border-primary/20 p-2 relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
               <div className="w-full h-full border border-primary/30 rounded-lg flex flex-col items-center justify-center p-8 text-center bg-black/50 backdrop-blur-sm relative z-10">
                 <h3 className="font-serif text-5xl font-bold text-white mb-4">CD</h3>
                 <div className="w-16 h-1 bg-primary mb-6"></div>
                 <p className="text-white/80 font-serif italic text-xl mb-8">"Elegance in every detail."</p>
                 <div className="flex gap-4 items-center">
                   <div className="text-center">
                     <span className="block text-3xl font-bold text-primary mb-1">500+</span>
                     <span className="text-xs uppercase tracking-widest text-white/50">Events</span>
                   </div>
                   <div className="w-px h-12 bg-primary/30"></div>
                   <div className="text-center">
                     <span className="block text-3xl font-bold text-primary mb-1">100%</span>
                     <span className="text-xs uppercase tracking-widest text-white/50">Satisfaction</span>
                   </div>
                 </div>
               </div>
            </div>
            {/* Floating decoration */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/5 rounded-full blur-[50px]"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Our Story</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Crafting Unforgettable Experiences Since 2016
            </h2>
            <div className="prose prose-invert prose-lg max-w-none text-white/70 mb-8">
              <p>
                At <strong>CHHOTU DECORATION</strong>, we believe that every milestone in life deserves to be celebrated in a setting that reflects its significance. Based in Suriya, Jharkhand, we have grown from a passionate small team into one of the region's premier luxury event decorators.
              </p>
              <p>
                Our philosophy is simple: no two events should look the same. Whether it's the grandeur of a traditional Indian wedding, the intimacy of an anniversary dinner, or the vibrant energy of a birthday party, we bring a bespoke approach to every project.
              </p>
              <p>
                We obsess over details—from the precise shade of fresh florals to the warm glow of ambient lighting—ensuring that when you walk into your event, it feels nothing short of magical.
              </p>
            </div>
            
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Button onClick={() => scrollToSection('contact')} variant="gold" size="lg">
                Book Consultation
              </Button>
              
              <div className="text-sm text-white/50">
                Digital presence designed & developed by{" "}
                <a 
                  href="https://logo-finder-web-pocket-et3x.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="web-pocket-link"
                  title="Visit Web Pocket"
                  aria-label="Visit Web Pocket"
                >
                  WEB POCKET
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
