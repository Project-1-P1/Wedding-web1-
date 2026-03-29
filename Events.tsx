import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FallingPetals, FireLight } from './Effects';

export const Events = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  return (
    <div ref={containerRef} className="relative w-full">
      {/* 1. Mehendi */}
      <section className="h-screen relative flex items-center justify-center bg-[#005f40] bg-marble overflow-hidden border-b-4 border-gold-metallic">
        <FallingPetals />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1510006575133-c215104d41e7?q=80&w=2000')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="absolute inset-8 md:inset-16 border-8 border-gold-solid rounded-[30%_10%] flex flex-col items-center justify-center bg-[#004d33]/80 backdrop-blur-sm shadow-soft-diffuse">
          <h2 className="text-5xl md:text-7xl text-gold-gradient uppercase font-bold tracking-[0.3em] mb-4 embossed">Mehendi</h2>
          <p className="text-xl md:text-2xl text-marigold italic font-serif opacity-90">An Evening of Colors & Courtyard Whispers</p>
        </div>
      </section>

      {/* 2. Haldi */}
      <section className="h-screen relative flex items-center justify-center bg-[#d4af37] overflow-hidden border-b-4 border-gold-dark text-center">
        {/* Powder effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(224,168,0,0.8)_0%,rgba(184,134,11,0.6)_100%)] mix-blend-multiply" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-60 pointer-events-none mix-blend-overlay" />
        
        <div className="relative z-10 p-12 bg-[#fff8e1]/90 rounded-[50%_50%] border-4 border-[#8b5a2b] shadow-soft-diffuse max-w-2xl">
          <h2 className="text-4xl md:text-6xl text-[#8b5a2b] uppercase font-bold tracking-[0.2em] mb-6 embossed">The Haldi</h2>
          <p className="text-lg md:text-xl text-[#5a3a1b] font-serif leading-relaxed">Awash in golden hues. A blessing of purity before the eternal bond.</p>
        </div>
      </section>

      {/* 3. Baraat */}
      <section className="h-screen relative flex flex-col items-center justify-center bg-[#0b1a2e] overflow-hidden border-b-4 border-gold-metallic">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?q=80&w=2000')] bg-cover bg-center opacity-30 mix-blend-screen saturate-50 blur-[2px]" />
        
        {/* Map Structure */}
        <div className="w-[80%] md:w-[60%] h-[60%] relative border-4 border-[#d4af37] bg-[#162a44]/80 shadow-soft-diffuse overflow-hidden mt-16 p-8 flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-sandstone opacity-10" />
          <h2 className="text-4xl md:text-6xl text-gold-gradient uppercase font-bold tracking-[0.2em] z-10 mb-8 embossed">The Grand Baraat</h2>
          
          {/* Animated Path/Map element */}
          <div className="relative w-full h-32 mt-8">
            <svg viewBox="0 0 400 100" className="w-full h-full stroke-[#d4af37] stroke-2 fill-transparent opacity-60">
              <path d="M 0 50 Q 100 0 200 50 T 400 50" strokeDasharray="5,5" />
            </svg>
            <motion.div 
              className="absolute top-1/2 -mt-4 w-8 h-8 rounded-full bg-gold-metallic shadow-[0_0_20px_#f1d77a] flex items-center justify-center"
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 10, ease: "linear", repeat: Infinity }}
            >
              <span className="text-xs font-serif text-[#0b1a2e]">H</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Wedding (Mandap) */}
      <section className="h-screen relative flex items-center justify-center bg-[#1a0b0b] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(123,17,19,0.3)_0%,rgba(10,5,5,0.9)_80%)]" />
        
        {/* Mandap structure */}
        <div className="relative w-[90%] md:w-[70%] h-[70%] border-x-4 border-t-8 border-gold-metallic rounded-t-[50%] flex flex-col items-center justify-end pb-24 shadow-[0_0_100px_rgba(212,175,55,0.1)]">
          
          <h2 className="text-5xl md:text-7xl text-gold-gradient uppercase font-bold tracking-[0.3em] mb-12 embossed">The Wedding</h2>
          <p className="text-xl md:text-2xl text-ivory italic font-serif opacity-80 mb-24 text-center px-8">The Sacred Fire Witnesses the Union of Two Souls in the Royal Mandap</p>
          
          {/* Central Fire */}
          <div className="relative w-32 h-32 mb-12">
            <FireLight className="absolute inset-0 scale-150" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-12 bg-sandstone rounded-full border border-gold-dark shadow-soft-diffuse" />
          </div>
        </div>
      </section>
    </div>
  );
};
