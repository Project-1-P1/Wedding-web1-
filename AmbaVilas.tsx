import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621252171025-055a80f0c058?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1595963753235-901e19448821?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?q=80&w=800&auto=format&fit=crop",
];

export default function AmbaVilas() {
  return (
    <section className="py-32 bg-mysore-dark text-mysore-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="font-cinzel text-mysore-gold text-4xl md:text-6xl uppercase tracking-[0.2em] mb-4">The Amba Vilas Gallery</h2>
          <div className="h-px w-64 bg-gradient-to-r from-transparent via-mysore-gold to-transparent mx-auto mb-6"></div>
          <p className="font-cormorant text-2xl text-mysore-ivory/80 italic max-w-3xl mx-auto">
            Memories enshrined in golden frames, telling the tale of a regal romance.
          </p>
        </motion.div>

        {/* Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 p-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative overflow-hidden ornate-frame transform transition-transform duration-500 hover:-translate-y-2 ${index % 3 === 1 ? 'md:mt-16' : ''}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[3/4]">
                <img 
                  src={src} 
                  alt={`Gallery Memory ${index + 1}`} 
                  className="w-full h-full object-cover grayscale-[30%] sepia-[20%] transition-transform duration-[2s] group-hover:scale-110 group-hover:grayscale-0 group-hover:sepia-0" 
                />
                
                {/* Vintage overlay */}
                <div className="absolute inset-0 bg-mysore-gold/10 mix-blend-overlay"></div>
                
                {/* Glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-mysore-dark via-transparent to-transparent opacity-60"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
