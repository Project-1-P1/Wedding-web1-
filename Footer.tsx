import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-24 bg-mysore-dark border-t border-mysore-gold/30 text-center relative overflow-hidden">
      
      {/* Texture Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/royal-purp.png')] opacity-10 pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center"
      >
        <div className="w-16 h-16 rounded-full border border-mysore-gold flex items-center justify-center mb-8 shadow-gold">
           <span className="font-script text-3xl text-mysore-gold">&amp;</span>
        </div>
        
        <h3 className="font-script text-6xl md:text-8xl text-mysore-ivory mb-6">Aarav &amp; Ananya</h3>
        
        <p className="font-cinzel text-mysore-gold tracking-[0.3em] uppercase text-sm md:text-base mb-12">
          Forever Begins Here
        </p>

        <div className="h-px w-full max-w-sm bg-gradient-to-r from-transparent via-mysore-gold/50 to-transparent mb-12"></div>
        
        <p className="font-cormorant text-mysore-ivory/60 italic text-lg">
          Crafted with love for the royal union.
        </p>
      </motion.div>
    </footer>
  );
}
