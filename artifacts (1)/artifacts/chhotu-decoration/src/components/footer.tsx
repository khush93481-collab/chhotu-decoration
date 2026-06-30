import { scrollToSection } from '@/hooks/use-scroll';
import { Phone, MapPin, Mail, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-primary/20 pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <h2 className="font-serif text-2xl font-bold tracking-wider text-white mb-6">
              CHHOTU <span className="text-primary block text-sm mt-1">DECORATION</span>
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Transforming ordinary spaces into extraordinary experiences. Premium event decoration services for weddings, birthdays, and special celebrations in Jharkhand.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/ay5897788?igsh=and2MHA3eHQxZ2p4" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#111] border border-primary/20 flex items-center justify-center text-white hover:bg-primary hover:text-black hover:border-primary transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Gallery', 'Services', 'About', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-white/60 hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>Wedding Decoration</li>
              <li>Birthday Decoration</li>
              <li>Anniversary Setup</li>
              <li>Engagement Stage</li>
              <li>Balloon Art</li>
              <li>Corporate Events</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 shrink-0" />
                <span className="text-white/60 text-sm">Suriya Vivekanand Chowk, Suriya, Jharkhand, India</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-primary mr-3 shrink-0" />
                <div className="flex flex-col text-sm text-white/60">
                  <a href="tel:6204187216" className="hover:text-primary transition-colors">+91 6204 187 216</a>
                  <a href="tel:8419940177" className="hover:text-primary transition-colors">+91 84199 40177</a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-primary mr-3 shrink-0" />
                <a href="mailto:cy394544@gmail.com" className="text-white/60 text-sm hover:text-primary transition-colors">
                  cy394544@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2026 Chhotu Decoration. All Rights Reserved.
          </p>
          <div className="text-sm text-white/40">
            Designed & Developed by{" "}
            <a 
              href="https://logo-finder-web-pocket-et3x.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="web-pocket-link ml-1"
              title="Visit Web Pocket"
              aria-label="Visit Web Pocket"
            >
              WEB POCKET
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
