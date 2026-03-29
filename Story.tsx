import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Story = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const bg1Opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const bg2Opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.7], [0, 1, 0]);
  const bg3Opacity = useTransform(scrollYProgress, [0.6, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative w-full h-[300vh] bg-[#0b1a2e]">
      
      {/* Parallax Backgrounds */}
      <motion.div 
        className="fixed inset-0 bg-cover bg-center pointer-events-none"
        style={{ opacity: bg1Opacity, backgroundImage: "url('https://images.unsplash.com/photo-1582201943021-e8e5b6ebddbf?q=80&w=2000')" }}
      >
        <div className="absolute inset-0 bg-[#0b1a2e]/60 mix-blend-multiply" />
      </motion.div>
      
      <motion.div 
        className="fixed inset-0 bg-cover bg-center pointer-events-none"
        style={{ opacity: bg2Opacity, backgroundImage: "url('https://images.unsplash.com/photo-1542323363-2394d0dc372e?q=80&w=2000')" }}
      >
        <div className="absolute inset-0 bg-[#d2b48c]/40 mix-blend-overlay" />
      </motion.div>

      <motion.div 
        className="fixed inset-0 bg-cover bg-center pointer-events-none"
        style={{ opacity: bg3Opacity, backgroundImage: "url('https://images.unsplash.com/photo-1587326442657-3f338fbbf4f9?q=80&w=2000')" }}
      >
        <div className="absolute inset-0 bg-[#061121]/70" />
      </motion.div>

      {/* Content Layers */}
      <div className="relative z-10 w-full flex flex-col items-center">
        
        {/* Section 1: Interior Palace Setting */}
        <section className="h-screen w-full flex items-center justify-center p-8">
          <div className="w-full max-w-6xl flex flex-col md:flex-row gap-12 justify-center items-center h-full">
            {/* Split layout showing two lineages */}
            <div className="w-full md:w-1/2 flex flex-col items-center p-8 bg-silk-red border border-gold-metallic rounded-t-full shadow-soft-diffuse">
              <h3 className="text-3xl text-gold-gradient font-bold tracking-widest uppercase mb-6 embossed">House of Aarav</h3>
              <p className="text-lg text-ivory text-center font-serif leading-loose italic opacity-90">
                Rooted in valor and tradition, carrying the legacy of the desert winds and ancient swords.
              </p>
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col items-center p-8 bg-silk-blue border border-gold-metallic rounded-t-full shadow-soft-diffuse">
              <h3 className="text-3xl text-gold-gradient font-bold tracking-widest uppercase mb-6 embossed">House of Ananya</h3>
              <p className="text-lg text-ivory text-center font-serif leading-loose italic opacity-90">
                A lineage of grace, woven with the threads of literature, fine arts, and enduring strength.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Open Desert Environment */}
        <section className="h-screen w-full flex flex-col items-center justify-center text-center p-8">
          <div className="max-w-4xl p-12 bg-sandstone/20 backdrop-blur-md border-y-2 border-gold-metallic">
            <h2 className="text-5xl md:text-7xl text-gold-gradient font-bold tracking-[0.3em] uppercase mb-8 shadow-soft-diffuse embossed">The Convergence</h2>
            <p className="text-xl md:text-3xl text-ivory italic font-serif leading-loose shadow-soft-diffuse">
              Two paths traversing the vast expanse of time, destined to meet under the boundless sky.
            </p>
          </div>
        </section>

        {/* Section 3: Night Palace */}
        <section className="h-screen w-full flex flex-col items-center justify-end pb-32 p-8">
          <div className="w-full max-w-4xl border-4 border-gold-metallic p-12 bg-[#0b1a2e]/80 backdrop-blur-sm jharokha-arch shadow-[0_0_50px_rgba(212,175,55,0.2)] text-center">
            <h2 className="text-5xl md:text-7xl text-gold-gradient font-bold tracking-[0.3em] uppercase mb-8 embossed">An Eternal Promise</h2>
            <p className="text-xl text-ivory italic font-serif leading-loose mb-12">
              Illuminated by a thousand lamps, we mark the beginning of our forever.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};
