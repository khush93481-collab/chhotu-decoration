import { motion } from 'framer-motion';
import { CheckCircle2, ThumbsUp, Palette, Clock, Diamond, Users } from 'lucide-react';

const reasons = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Professional Team",
    desc: "Experienced decorators who understand your vision."
  },
  {
    icon: <Diamond className="w-6 h-6" />,
    title: "Premium Quality",
    desc: "We use only high-end materials and fresh flowers."
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Customized Designs",
    desc: "Every event is tailored to your unique style."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Timely Service",
    desc: "Punctual setup and teardown, completely hassle-free."
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Affordable Packages",
    desc: "Luxury decoration that fits your budget."
  },
  {
    icon: <ThumbsUp className="w-6 h-6" />,
    title: "Customer Satisfaction",
    desc: "Our priority is making your special day perfect."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-black border-y border-primary/20 relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-primary block mt-2">Chhotu Decoration?</span>
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              With years of experience in the event industry, we bring a touch of elegance and professionalism to every celebration. We don't just decorate spaces; we craft experiences.
            </p>
            <div className="flex items-center gap-4">
              <div className="text-4xl font-serif text-primary font-bold">10+</div>
              <div className="text-white/80 text-sm font-medium leading-tight">Years of<br />Excellence</div>
              <div className="w-px h-10 bg-primary/30 mx-4"></div>
              <div className="text-4xl font-serif text-primary font-bold">500+</div>
              <div className="text-white/80 text-sm font-medium leading-tight">Events<br />Decorated</div>
            </div>
          </motion.div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#111] p-6 rounded-lg border border-primary/10 hover:border-primary/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-black border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  {reason.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-white/60 text-sm">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
