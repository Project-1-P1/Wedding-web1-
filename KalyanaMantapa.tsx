import { motion } from 'framer-motion';

const events = [
  {
    title: "The Sangeet",
    date: "14th December 2026",
    time: "07:00 PM Onwards",
    venue: "The Amba Vilas Courtyard",
    description: "An evening of music, dance, and celebration under the starlit sky. Dress code: Indo-Western Glamour.",
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Haldi & Mehendi",
    date: "15th December 2026",
    time: "10:00 AM Onwards",
    venue: "The Peacock Pavilion",
    description: "Bathed in the golden hues of turmeric and intricate henna designs. Dress code: Shades of Yellow & Green.",
    img: "https://images.unsplash.com/photo-1595963753235-901e19448821?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "The Royal Wedding",
    date: "16th December 2026",
    time: "Sunset Muhurtham",
    venue: "The Kalyana Mantapa",
    description: "The grand union where vows are exchanged amidst chanting and royal fanfare. Dress code: Traditional Silk & Regalia.",
    img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop"
  }
];

export default function KalyanaMantapa() {
  return (
    <section className="py-32 relative bg-mysore-emerald-texture text-mysore-ivory overflow-hidden border-y-4 border-mysore-gold">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-mysore-dark/80 via-transparent to-mysore-dark/80 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="font-cinzel text-mysore-gold text-4xl md:text-6xl uppercase tracking-[0.2em] mb-4">The Festivities</h2>
          <div className="h-0.5 w-48 bg-gradient-to-r from-transparent via-mysore-gold to-transparent mx-auto mb-6"></div>
          <p className="font-cormorant text-2xl text-mysore-ivory/80 italic max-w-3xl mx-auto">
            A celebration of tradition, hosted in venues inspired by the magnificent Kalyana Mantapa.
          </p>
        </motion.div>

        <div className="space-y-24">
          {events.map((evt, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: idx * 0.2 }}
              className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              
              {/* Image Container with Stained Glass Vibe border */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative p-3 bg-mysore-dark shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                  {/* Decorative corner pieces */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-mysore-gold"></div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-mysore-gold"></div>
                  <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-mysore-gold"></div>
                  <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-mysore-gold"></div>
                  
                  <div className="w-full max-w-[400px] h-[400px] overflow-hidden">
                     <img src={evt.img} alt={evt.title} className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-110 sepia-[0.2] saturate-[1.2]" />
                  </div>
                </div>
              </div>

              {/* Text Container */}
              <div className={`w-full md:w-1/2 text-center ${idx % 2 === 1 ? 'md:text-right' : 'md:text-left'}`}>
                <h3 className="font-cinzel text-3xl md:text-4xl text-mysore-gold mb-2">{evt.title}</h3>
                <p className="font-cormorant text-2xl text-mysore-ivory/90 mb-6 font-semibold">{evt.date}</p>
                
                <div className="space-y-3 font-cormorant text-lg text-mysore-ivory/80 mb-8">
                  <p className="flex items-center justify-center md:justify-start gap-3">
                     <span className="w-1.5 h-1.5 bg-mysore-gold rotate-45"></span>
                     <span className="uppercase tracking-wider text-sm text-mysore-gold">Time:</span> {evt.time}
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-3">
                     <span className="w-1.5 h-1.5 bg-mysore-gold rotate-45"></span>
                     <span className="uppercase tracking-wider text-sm text-mysore-gold">Venue:</span> {evt.venue}
                  </p>
                </div>
                
                <p className="font-cormorant text-xl text-mysore-ivory italic leading-relaxed">
                  "{evt.description}"
                </p>
                
                <div className={`mt-8 h-px w-32 bg-gradient-to-r from-mysore-gold to-transparent ${idx % 2 === 1 ? 'ml-auto' : 'mr-auto'}`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
