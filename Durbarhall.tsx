import { motion } from 'framer-motion';

export default function DurbarHall() {
  return (
    <section className="py-32 relative bg-mysore-dark text-mysore-ivory">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-mysore-red-texture opacity-30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <h2 className="font-cinzel text-mysore-gold text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.2em] mb-4">The Royal Couple</h2>
          <div className="h-1 w-32 bg-gold-gradient mx-auto mb-6"></div>
          <p className="font-cormorant text-2xl text-mysore-ivory/80 italic max-w-3xl mx-auto">
            Meeting in the corridors of fate, bound by destiny, stepping into forever.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">
          
          {/* Groom Container */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col items-center max-w-md group relative"
          >
            {/* Scalloped Arch Frame */}
            <div className="relative p-2 bg-gradient-to-br from-mysore-gold to-mysore-goldDark rounded-t-full shadow-gold group-hover:shadow-gold-inset transition-all duration-700">
              <div className="relative w-72 h-96 overflow-hidden rounded-t-full bg-mysore-dark border-4 border-mysore-dark">
                <img 
                  src="https://images.unsplash.com/photo-1614088929007-88d070b809d3?q=80&w=800&auto=format&fit=crop" 
                  alt="Groom"
                  className="w-full h-full object-cover object-top filter contrast-125 saturate-110 group-hover:scale-105 transition-transform duration-1000"
                />
                {/* Vintage overlay */}
                <div className="absolute inset-0 bg-mysore-gold/10 mix-blend-color"></div>
              </div>
              
              {/* Bottom decorative bar */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-mysore-dark border border-mysore-gold flex items-center justify-center shadow-lg">
                <span className="font-cinzel text-xl text-mysore-gold tracking-widest uppercase">The Groom</span>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3 className="font-script text-5xl text-mysore-ivory mb-4">Aarav</h3>
              <p className="font-cormorant text-lg text-mysore-ivory/70 leading-relaxed px-4">
                Son of Mrs. & Mr. Sharma. A true gentleman with a heart of gold, carrying the legacy of his family with grace and honor.
              </p>
            </div>
          </motion.div>

          {/* Central Ornament */}
          <motion.div 
             initial={{ opacity: 0, scale: 0 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1, delay: 0.5 }}
             className="hidden md:flex flex-col items-center gap-4"
          >
            <div className="w-1 h-32 bg-gradient-to-b from-transparent via-mysore-gold to-transparent"></div>
            <div className="w-16 h-16 rounded-full border-2 border-mysore-gold flex items-center justify-center shadow-gold">
               <span className="font-script text-4xl text-mysore-gold mb-1">&amp;</span>
            </div>
            <div className="w-1 h-32 bg-gradient-to-b from-transparent via-mysore-gold to-transparent"></div>
          </motion.div>

          {/* Bride Container */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col items-center max-w-md group relative"
          >
            {/* Scalloped Arch Frame */}
            <div className="relative p-2 bg-gradient-to-bl from-mysore-gold to-mysore-goldDark rounded-t-full shadow-gold group-hover:shadow-gold-inset transition-all duration-700">
              <div className="relative w-72 h-96 overflow-hidden rounded-t-full bg-mysore-dark border-4 border-mysore-dark">
                <img 
                  src="https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?q=80&w=800&auto=format&fit=crop" 
                  alt="Bride"
                  className="w-full h-full object-cover object-top filter contrast-125 saturate-110 group-hover:scale-105 transition-transform duration-1000"
                />
                {/* Vintage overlay */}
                <div className="absolute inset-0 bg-mysore-gold/10 mix-blend-color"></div>
              </div>
              
              {/* Bottom decorative bar */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-mysore-dark border border-mysore-gold flex items-center justify-center shadow-lg">
                <span className="font-cinzel text-xl text-mysore-gold tracking-widest uppercase">The Bride</span>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3 className="font-script text-5xl text-mysore-ivory mb-4">Ananya</h3>
              <p className="font-cormorant text-lg text-mysore-ivory/70 leading-relaxed px-4">
                Daughter of Mrs. & Mr. Verma. An embodiment of elegance and tradition, weaving modern dreams with heritage roots.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
