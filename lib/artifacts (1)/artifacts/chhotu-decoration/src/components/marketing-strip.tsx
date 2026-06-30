import { motion } from 'framer-motion';

const statements = [
  "✨ Where Dreams Meet Decorations",
  "✨ Creating Magical Moments You'll Never Forget",
  "✨ Your Celebration, Our Creativity",
  "✨ Every Event Deserves a Grand Decoration",
  "✨ Transforming Ordinary Spaces into Extraordinary Experiences",
  "✨ We Don't Just Decorate Events, We Create Memories"
];

export function MarketingStrip() {
  return (
    <div className="w-full bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 border-y border-primary/20 overflow-hidden py-4">
      <div className="relative flex overflow-x-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1035] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // Adjust speed here
          }}
        >
          {/* Double the array for seamless looping */}
          {[...statements, ...statements].map((statement, idx) => (
            <span 
              key={idx} 
              className="mx-8 text-sm md:text-base font-serif italic text-primary/90 tracking-wider"
            >
              {statement}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
