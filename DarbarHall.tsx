import { motion } from 'framer-motion';
import { Compass, BookOpen, Users, ImageIcon } from 'lucide-react';

const navItems = [
  { label: 'The Chronicle', icon: BookOpen, desc: 'Our Lineage & Story' },
  { label: 'Ceremonials', icon: Compass, desc: 'A Journey Through Time' },
  { label: 'Royal Lineage', icon: Users, desc: 'Ancestors & Bloodlines' },
  { label: 'The Archive', icon: ImageIcon, desc: 'Captured Moments' },
];

export const DarbarHall = ({ setView }: { setView: (v: string) => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2.5, ease: [0.4, 0, 0.2, 1] }}
      className="min-h-screen bg-[#0b1a2e] bg-marble relative flex flex-col items-center"
    >
      {/* Blurred Palace Interior Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 blur-sm pointer-events-none mix-blend-screen"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585061619623-28eb5cc378df?q=80&w=2000&auto=format&fit=crop')" }}
      />
      
      {/* Jharokha Header (Carved Balcony) */}
      <header className="w-full relative h-32 md:h-48 z-20 flex justify-center bg-sandstone engraved border-b-4 border-gold-metallic jharokha-arch shadow-soft-diffuse overflow-hidden">
        {/* Deep red draped silk curtains on sides */}
        <div className="absolute left-0 top-0 w-32 md:w-64 h-[150%] bg-silk-red -skew-x-12 transform -translate-x-12 opacity-80 shadow-2xl" />
        <div className="absolute right-0 top-0 w-32 md:w-64 h-[150%] bg-silk-red skew-x-12 transform translate-x-12 opacity-80 shadow-2xl" />
        
        {/* Center Details */}
        <div className="mt-8 md:mt-16 flex flex-col items-center pointer-events-none">
          <h2 className="text-3xl md:text-5xl text-gold-gradient tracking-[0.2em] font-bold uppercase embossed">Darbar-e-Khas</h2>
          <div className="w-48 h-[2px] bg-gold-metallic mt-4" />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl px-4 md:px-12 py-16 flex flex-col items-center z-10 relative">
        
        {/* Central Circular Frame */}
        <motion.div 
          className="relative w-64 h-64 md:w-80 md:h-80 mb-24 rounded-full border-8 border-gold-solid engraved shadow-soft-diffuse group"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Inner ring */}
          <div className="absolute inset-2 border-2 border-dashed border-[#a8872c] rounded-full z-10 opacity-70" />
          
          <img 
            src="https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?q=80&w=800&auto=format&fit=crop" 
            alt="Royal Couple" 
            className="w-full h-full object-cover rounded-full saturate-50 contrast-125 sepia-[0.3] transition-all duration-1000 group-hover:saturate-100"
          />
          <div className="absolute inset-0 bg-[#d4af37]/10 rounded-full mix-blend-overlay" />
        </motion.div>

        {/* Navigation Structure (Symmetrical Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 w-full px-8">
          {navItems.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => setView(item.label)}
              className="relative bg-ivory text-[#0b1a2e] border-2 border-gold-solid p-8 flex flex-col items-center shadow-soft-diffuse overflow-hidden group transition-all duration-700 hover:scale-105"
              style={{ borderRadius: '12px 12px 0 0' }}
            >
              {/* Paper/Silk texture overlay */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/old-wall.png')] opacity-40 pointer-events-none" />
              
              {/* Glow edge on hover */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#f1d77a]/50 transition-colors duration-700 pointer-events-none" />
              
              <div className="mb-6 p-4 rounded-full border border-gold-solid bg-[#0b1a2e]/5 text-[#d4af37] shadow-inner group-hover:bg-[#d4af37]/10 transition-colors">
                <item.icon size={48} strokeWidth={1} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-widest mb-3 text-[#5a090a]">{item.label}</h3>
              <p className="text-lg italic font-serif opacity-80 text-[#162a44] tracking-wide">{item.desc}</p>
            </motion.button>
          ))}
        </div>
      </main>
    </motion.div>
  );
};
