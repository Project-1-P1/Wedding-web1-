import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const updates = [
  "Welcome to the grand celebration of Aarav & Ananya.",
  "The Baraat departs from the North Gate at sunset.",
  "Guests are requested to proceed to the Kalyana Mantapa.",
  "Dinner will be served in the Amba Vilas Courtyard."
];

export const LiveSystem = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % updates.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-10 bg-gold-metallic z-50 flex items-center justify-end overflow-hidden border-b-2 border-gold-dark shadow-soft-diffuse px-8">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="text-[#0b1a2e] font-serif font-medium tracking-wider text-sm md:text-base italic"
        >
          {updates[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};
