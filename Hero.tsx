import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mysore-dark">
      {/* Background with glowing effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-40"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=2000&auto=format&fit=crop")' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mysore-dark/80 to-mysore-dark z-0"></div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full max-w-5xl mx-auto text-center">
        
        {/* Intricate Top Ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-8"
        >
          <svg width="120" height="40" viewBox="0 0 120 40" className="mx-auto drop-shadow-gold">
            <path d="M60,0 C70,20 100,20 120,20 C100,20 70,40 60,40 C50,40 20,20 0,20 C20,20 50,20 60,0 Z" fill="#d4af37" opacity="0.8" />
            <circle cx="60" cy="20" r="5" fill="#fffff0" />
            <circle cx="30" cy="20" r="3" fill="#d4af37" opacity="0.6"/>
            <circle cx="90" cy="20" r="3" fill="#d4af37" opacity="0.6"/>
          </svg>
        </motion.div>

        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-cinzel tracking-[0.3em] text-mysore-gold uppercase text-sm md:text-lg mb-6"
        >
          A Royal Celebration
        </motion.h3>

        {/* Names */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 my-8">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1.5, type: "spring" }}
            className="font-script text-6xl md:text-8xl lg:text-9xl text-gold-shimmer drop-shadow-2xl"
          >
            Aarav
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full border border-mysore-gold bg-mysore-red/50 shadow-gold backdrop-blur-sm"
          >
            <span className="font-cinzel text-xl md:text-3xl text-mysore-ivory">&amp;</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1.5, type: "spring" }}
            className="font-script text-6xl md:text-8xl lg:text-9xl text-gold-shimmer drop-shadow-2xl"
          >
            Ananya
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1.5 }}
          className="font-cormorant text-xl md:text-3xl text-mysore-ivory italic mt-8 max-w-2xl leading-relaxed"
        >
          "Two souls embarking on a majestic journey, illuminated by love."
        </motion.p>

        {/* Decorative Bottom Arch Shape */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1.5 }}
          className="mt-16 w-full flex justify-center"
        >
           <div className="w-[2px] h-24 bg-gradient-to-b from-mysore-gold to-transparent"></div>
        </motion.div>
      </div>

      {/* Floating Gold Particles (Dust) */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-mysore-gold"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.1,
              animation: `float ${Math.random() * 5 + 5}s ease-in-out infinite alternate`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
              }
