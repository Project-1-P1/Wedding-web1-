import { motion } from 'framer-motion';
import { Mail, Check } from 'lucide-react';
import { useState } from 'react';

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-32 relative bg-mysore-red-texture text-mysore-dark border-t-4 border-mysore-gold overflow-hidden">
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-mysore-dark/60 pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-mysore-gold text-4xl md:text-6xl uppercase tracking-[0.2em] mb-4">Your Presence</h2>
          <div className="h-px w-64 bg-gradient-to-r from-transparent via-mysore-gold to-transparent mx-auto mb-6"></div>
          <p className="font-cormorant text-2xl text-mysore-ivory/90 italic max-w-2xl mx-auto drop-shadow-md">
            We would be honored to host you at our royal celebration. Kindly send us your tidings.
          </p>
        </motion.div>

        {/* RSVP Card - Ivory Paper Design */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.2 }}
           className="w-full max-w-2xl bg-[#fffff0] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative ornate-frame"
           style={{ background: 'linear-gradient(to bottom right, #fffff0, #fcf4e8, #fffff0)' }}
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-mysore-dark p-3 rounded-full border-2 border-mysore-gold shadow-gold">
            <Mail className="w-6 h-6 text-mysore-gold" />
          </div>

          <div className="border border-mysore-gold/30 p-8 md:p-12 text-center h-full flex flex-col justify-center bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
            
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 flex flex-col items-center gap-6"
              >
                <div className="w-20 h-20 bg-mysore-dark rounded-full border border-mysore-gold flex items-center justify-center mb-4">
                  <Check className="w-10 h-10 text-mysore-gold" />
                </div>
                <h3 className="font-cinzel text-3xl text-mysore-dark">A Royal Decree Received</h3>
                <p className="font-cormorant text-xl text-mysore-dark/70 italic">
                  We look forward to welcoming you with regal hospitality.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 mt-6">
                
                <div className="space-y-2">
                   <label className="block font-cinzel text-mysore-dark tracking-widest uppercase text-sm">Honored Guest Name(s)</label>
                   <input 
                     required 
                     type="text" 
                     className="w-full bg-transparent border-b border-mysore-dark/30 py-3 text-center font-cormorant text-xl text-mysore-dark focus:outline-none focus:border-mysore-gold transition-colors placeholder:text-mysore-dark/30"
                     placeholder="The Duke & Duchess of..."
                   />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                     <label className="block font-cinzel text-mysore-dark tracking-widest uppercase text-sm">Number of Guests</label>
                     <select className="w-full bg-transparent border-b border-mysore-dark/30 py-3 text-center font-cormorant text-xl text-mysore-dark focus:outline-none focus:border-mysore-gold transition-colors appearance-none cursor-pointer">
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                       <option value="4">4+</option>
                     </select>
                  </div>

                  <div className="space-y-2">
                     <label className="block font-cinzel text-mysore-dark tracking-widest uppercase text-sm">Will You Attend?</label>
                     <select className="w-full bg-transparent border-b border-mysore-dark/30 py-3 text-center font-cormorant text-xl text-mysore-dark focus:outline-none focus:border-mysore-gold transition-colors appearance-none cursor-pointer">
                       <option value="yes">Joyfully Accepts</option>
                       <option value="no">Regretfully Declines</option>
                     </select>
                  </div>
                </div>

                <div className="space-y-2">
                   <label className="block font-cinzel text-mysore-dark tracking-widest uppercase text-sm">A Message for the Couple</label>
                   <textarea 
                     rows={3} 
                     className="w-full bg-transparent border-b border-mysore-dark/30 py-3 text-center font-cormorant text-xl text-mysore-dark focus:outline-none focus:border-mysore-gold transition-colors resize-none placeholder:text-mysore-dark/30"
                     placeholder="Bestow your blessings upon the union..."
                   />
                </div>

                <button 
                  type="submit" 
                  className="mt-8 px-12 py-4 bg-mysore-dark text-mysore-gold font-cinzel tracking-[0.2em] uppercase text-sm hover:bg-mysore-gold hover:text-mysore-dark transition-all duration-500 border border-mysore-gold shadow-gold-inset"
                >
                  Send RSVP
                </button>
              </form>
            )}

            {/* Signature at bottom of card */}
            <div className="mt-12 flex justify-center">
              <span className="font-script text-4xl text-mysore-dark/80">Aarav & Ananya</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
