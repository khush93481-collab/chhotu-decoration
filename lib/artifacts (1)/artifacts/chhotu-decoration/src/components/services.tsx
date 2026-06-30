import { motion, type Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, Heart, Gift, Camera, Gem, Sparkles, Building, Star } from 'lucide-react';

const services = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Wedding Decoration",
    description: "Grand mandaps, elegant entrances, and luxurious floral setups for your big day."
  },
  {
    icon: <Gift className="w-8 h-8" />,
    title: "Birthday Decoration",
    description: "Thematic decors, premium balloon setups, and vibrant spaces for all ages."
  },
  {
    icon: <Gem className="w-8 h-8" />,
    title: "Anniversary Decoration",
    description: "Romantic setups with candles, roses, and intimate lighting for your special milestone."
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Engagement Decoration",
    description: "Beautiful ring ceremony backdrops and elegant stage designs."
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Balloon Decoration",
    description: "Organic arches, luxury metallic balloons, and customized structures."
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: "Stage Decoration",
    description: "Opulent event stages with crystal chandeliers, drapery, and floral artistry."
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Event Decoration",
    description: "Corporate events, baby showers, festivals, and cultural celebrations."
  },
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: "Customized Decoration",
    description: "Have a unique vision? We bring your dream concepts to reality with bespoke design."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-[60%] -right-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">What We Do</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Our Premium Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-white/70 text-lg">
              We specialize in creating breathtaking environments for every occasion. Our attention to detail ensures your event looks extraordinary.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-card border border-card-border p-8 rounded-xl hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-white/60 text-sm mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <Button 
                variant="outline" 
                className="w-full border-primary/30 text-primary hover:bg-primary hover:text-black group-hover:border-primary"
                asChild
              >
                <a href={`https://wa.me/916204187216?text=Hello, I would like to inquire about your ${service.title} services.`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Get Quote
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
