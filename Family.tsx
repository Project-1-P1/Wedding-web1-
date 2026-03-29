import { motion } from 'framer-motion';

const familyTree = [
  { level: 1, members: [
    { name: "Late Shri Ram Pratap Singh", title: "Patriarch, House of Aarav" },
    { name: "Late Smt. Gayatri Devi", title: "Matriarch, House of Aarav" },
    { name: "Late Shri Keshava Rao", title: "Patriarch, House of Ananya" },
    { name: "Late Smt. Saraswati Bai", title: "Matriarch, House of Ananya" }
  ]},
  { level: 2, members: [
    { name: "Shri Vikram Singh", title: "Father of the Groom" },
    { name: "Smt. Meera Singh", title: "Mother of the Groom" },
    { name: "Shri Narayan Rao", title: "Father of the Bride" },
    { name: "Smt. Lakshmi Rao", title: "Mother of the Bride" }
  ]},
  { level: 3, members: [
    { name: "Aarav Singh", title: "The Groom" },
    { name: "Ananya Rao", title: "The Bride" }
  ]}
];

const FamilyCard = ({ name, title }: { name: string, title: string }) => (
  <motion.div 
    className="relative bg-ivory border border-[#d4af37] p-6 w-56 md:w-64 flex flex-col items-center justify-center shadow-soft-diffuse z-10 hover:scale-105 transition-transform duration-500"
    whileHover={{ scale: 1.05 }}
  >
    <div className="absolute inset-0 bg-sandstone opacity-20 pointer-events-none" />
    <h4 className="text-[#5a090a] font-serif font-bold text-lg text-center mb-2">{name}</h4>
    <p className="text-[#a8872c] font-serif italic text-sm text-center">{title}</p>
  </motion.div>
);

export const Family = () => {
  return (
    <div className="min-h-screen bg-[#0b1a2e] relative py-24 flex flex-col items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-30 mix-blend-overlay" />
      
      <h2 className="text-4xl md:text-6xl text-gold-gradient font-bold tracking-[0.3em] uppercase mb-16 embossed z-10">Royal Lineage</h2>

      <div className="relative w-full max-w-7xl flex flex-col items-center gap-16 md:gap-24 px-4">
        
        {/* Connection Line System (Vertical central axis) */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#a8872c] via-[#f1d77a] to-[#a8872c] opacity-50 z-0" />

        {familyTree.map((tier, index) => (
          <div key={index} className="relative w-full flex flex-wrap justify-center gap-8 md:gap-16 z-10">
            {tier.members.map((member, i) => (
              <FamilyCard key={i} name={member.name} title={member.title} />
            ))}
          </div>
        ))}

      </div>
      
    </div>
  );
};
