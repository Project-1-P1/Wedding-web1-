import { motion, AnimatePresence } from 'framer-motion';
import { DustParticles, FireLight } from './Effects';

export const EntryGate = ({ onOpen }: { onOpen: () => void }) => {
  return (
    <motion.div
      className="fixed inset-0 z-40 bg-[#0b1a2e] flex flex-col items-center justify-end overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 2.5, ease: "easeInOut", delay: 1 } }}
    >
      {/* Background Image of Fort at Dusk */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 blur-[2px]"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=2000&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1a2e]/80 via-transparent to-[#0b1a2e] pointer-events-none" />
      
      <DustParticles />

      {/* Torches */}
      <div className="absolute left-[5%] md:left-[20%] bottom-1/4 z-20">
        <FireLight className="w-48 h-48 -translate-y-8" />
        <div className="w-8 h-32 bg-sandstone engraved border border-[#a8872c] relative">
          <div className="absolute -top-4 -left-2 w-12 h-6 bg-[#a8872c] rounded-t-full" />
        </div>
      </div>
      <div className="absolute right-[5%] md:right-[20%] bottom-1/4 z-20">
        <FireLight className="w-48 h-48 -translate-y-8" />
        <div className="w-8 h-32 bg-sandstone engraved border border-[#a8872c] relative">
          <div className="absolute -top-4 -left-2 w-12 h-6 bg-[#a8872c] rounded-t-full" />
        </div>
      </div>

      {/* The Central Arch Container */}
      <div className="relative w-[90%] md:w-[500px] h-[80vh] flex justify-center z-30">
        {/* Glow behind doors (revealed when opened) */}
        <motion.div 
          className="absolute inset-0 bg-[#f1d77a] blur-[100px] opacity-0"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Doors Wrapper */}
        <div className="absolute inset-0 flex overflow-hidden">
          
          {/* Left Door */}
          <motion.div 
            className="w-1/2 h-full bg-sandstone engraved border-r border-[#a8872c] relative overflow-hidden"
            style={{ borderTopLeftRadius: '50% 20%' }}
            exit={{ x: "-100%", transition: { duration: 3, ease: [0.4, 0, 0.2, 1] } }}
          >
            {/* Inner details / carvings */}
            <div className="absolute inset-2 border-2 border-[#a8872c]/40 rounded-tl-[40% 15%] pointer-events-none" />
          </motion.div>

          {/* Right Door */}
          <motion.div 
            className="w-1/2 h-full bg-sandstone engraved relative overflow-hidden"
            style={{ borderTopRightRadius: '50% 20%' }}
            exit={{ x: "100%", transition: { duration: 3, ease: [0.4, 0, 0.2, 1] } }}
          >
            <div className="absolute inset-2 border-2 border-[#a8872c]/40 rounded-tr-[40% 15%] pointer-events-none" />
          </motion.div>
        </div>

        {/* Typography & CTA (Centered over the doors) */}
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          exit={{ opacity: 0, scale: 1.1, transition: { duration: 1, ease: "easeInOut" } }}
        >
          <div className="text-center bg-[#0b1a2e]/60 p-8 rounded-lg border border-[#a8872c]/50 backdrop-blur-sm pointer-events-auto shadow-soft-diffuse">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-gold-gradient tracking-[0.2em] uppercase font-bold mb-4 embossed">
              Aarav & Ananya
            </h1>
            <p className="text-xl md:text-2xl text-[#fff8e1] italic opacity-80 mb-12 font-serif tracking-wide">
              A Royal Union
            </p>

            <button 
              onClick={onOpen}
              className="bg-sandstone px-10 py-4 border-2 border-[#d4af37] shadow-soft-diffuse engraved group transition-all duration-700 hover:scale-105"
            >
              <span className="text-[#5a090a] font-bold tracking-[0.15em] uppercase text-sm md:text-base group-hover:text-[#7b1113] transition-colors">
                Enter the Darbar
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
