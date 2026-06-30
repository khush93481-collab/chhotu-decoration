import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    event: "Wedding",
    text: "Chhotu Decoration made my dream wedding a reality! The floral mandap was absolutely stunning. Every guest was amazed by the elegance and perfection. Highly recommended!",
    rating: 5
  },
  {
    name: "Rahul Verma",
    event: "Engagement",
    text: "Professional team and premium quality work. They managed the entire ring ceremony setup flawlessly. The lighting and backdrop were exactly what we discussed.",
    rating: 5
  },
  {
    name: "Sneha Gupta",
    event: "1st Birthday",
    text: "We hired them for our son's first birthday. The luxury balloon decoration was incredible. They transformed a simple hall into a magical wonderland.",
    rating: 5
  },
  {
    name: "Amit Singh",
    event: "Anniversary",
    text: "Surprised my wife for our 10th anniversary. The romantic setup with red roses and candles was breathtaking. Thank you for making our day so special.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Testimonials</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-8 rounded-xl border border-card-border relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/10" />
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-white/80 italic mb-6 text-lg relative z-10 leading-relaxed">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white text-lg">{t.name}</h4>
                  <span className="text-primary text-sm font-medium">{t.event} Event</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
