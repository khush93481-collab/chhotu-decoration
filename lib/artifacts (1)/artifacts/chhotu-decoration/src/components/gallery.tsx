import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { X, ZoomIn } from 'lucide-react';

// Import images
import imgWedding1 from '@assets/generated_images/gallery-wedding-1.jpg';
import imgAnniversary1 from '@assets/generated_images/gallery-anniversary-1.jpg';
import imgEngagement1 from '@assets/generated_images/gallery-engagement-1.jpg';
import imgBalloon1 from '@assets/generated_images/gallery-balloon-1.jpg';
import imgFestival1 from '@assets/generated_images/gallery-festival-1.jpg';
import heroStageImg from '@assets/generated_images/hero-stage.jpg';
import heroBirthdayImg from '@assets/generated_images/hero-birthday.jpg';

// Client original images
import clientWeddingStage from '@assets/generated_images/client-wedding-stage.jpg';
import clientWeddingMandap from '@assets/generated_images/client-wedding-mandap.jpg';
import clientBirthday from '@assets/generated_images/client-birthday.jpg';
import clientFloralMandap from '@assets/generated_images/client-floral-mandap.jpg';

const categories = [
  "All",
  "Wedding",
  "Anniversary",
  "Birthday",
  "Engagement",
  "Balloon",
  "Stage",
  "Festival",
  "Other"
];

const galleryImages = [
  { id: 1, src: clientWeddingMandap, category: "Wedding", title: "Wedding Mandap Decoration" },
  { id: 2, src: imgAnniversary1, category: "Anniversary", title: "Romantic Anniversary Setup" },
  { id: 3, src: clientBirthday, category: "Birthday", title: "Birthday Balloon Decoration" },
  { id: 4, src: imgEngagement1, category: "Engagement", title: "Floral Ring Backdrop" },
  { id: 5, src: imgBalloon1, category: "Balloon", title: "Luxury Organic Balloons" },
  { id: 6, src: clientWeddingStage, category: "Stage", title: "Wedding Stage Decoration" },
  { id: 7, src: imgFestival1, category: "Festival", title: "Diwali Floral Decoration" },
  { id: 8, src: clientFloralMandap, category: "Wedding", title: "Floral Mandap Decoration" },
  { id: 9, src: imgBalloon1, category: "Balloon", title: "Golden Balloon Arch" },
  { id: 10, src: imgEngagement1, category: "Other", title: "Corporate Event Setup" },
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory || (activeCategory === "Other" && img.category !== "All"));

  return (
    <section id="gallery" className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Our Portfolio</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Explore Our Work</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === cat 
                    ? 'bg-primary border-primary text-black' 
                    : 'bg-transparent border-primary/30 text-white hover:border-primary/80 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer bg-muted"
                onClick={() => setSelectedImage(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <Badge variant="outline" className="w-fit mb-2 text-primary border-primary/50 bg-black/50 backdrop-blur-sm">
                    {img.category}
                  </Badge>
                  <h3 className="text-white font-serif text-xl">{img.title}</h3>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                    <ZoomIn className="text-white w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 p-2 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Full screen preview"
              className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent click from closing when clicking image
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
