import { Phone, MessageCircle } from 'lucide-react';

export function FloatingButtons() {
  return (
    <>
      {/* WhatsApp - Bottom Left */}
      <a
        href="https://wa.me/916204187216"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-black/50 hover:scale-110 transition-transform duration-300 animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* Call - Bottom Right */}
      <a
        href="tel:6204187216"
        className="fixed bottom-[84px] right-6 z-50 w-14 h-14 bg-gradient-to-r from-[#D4AF37] to-[#9E7C2B] text-black rounded-full flex items-center justify-center shadow-lg shadow-black/50 hover:scale-110 transition-transform duration-300"
        aria-label="Call Now"
      >
        <Phone size={24} className="animate-pulse" />
      </a>

      {/* WEB POCKET Sticky Badge - Bottom Right Corner */}
      <a
        href="https://logo-finder-web-pocket-et3x.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-black/80 backdrop-blur-md border border-primary text-primary px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-primary hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]"
        title="Visit Web Pocket"
        aria-label="Visit Web Pocket"
      >
        WEB POCKET
      </a>
    </>
  );
}
