import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1510006575133-c215104d41e7?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542323363-2394d0dc372e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1587326442657-3f338fbbf4f9?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585061619623-28eb5cc378df?q=80&w=800&auto=format&fit=crop"
];

export const Gallery = () => {
  return (
    <div className="min-h-screen bg-[#0b1a2e] flex flex-col items-center py-24 px-8 relative">
      <div className="absolute inset-0 bg-marble opacity-10 mix-blend-overlay pointer-events-none" />
      
      <h2 className="text-4xl md:text-6xl text-gold-gradient font-bold tracking-[0.3em] uppercase mb-16 embossed z-10 text-center">
        The Royal Archive
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full max-w-7xl z-10">
        {images.map((src, index) => (
          <motion.div 
            key={index}
            className="relative aspect-[3/4] overflow-hidden border-4 border-[#a8872c] bg-sandstone group shadow-soft-diffuse cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
          >
            {/* Base Image with grading */}
            <img 
              src={src} 
              alt={`Archive ${index}`} 
              className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105 filter sepia-[0.4] saturate-50 contrast-125 brightness-90"
            />
            
            {/* Hover overlay (gold-tinted) */}
            <div className="absolute inset-0 bg-[#d4af37]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 mix-blend-multiply" />
            
            {/* Inner Border Frame */}
            <div className="absolute inset-2 border-2 border-[#f1d77a]/40 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
