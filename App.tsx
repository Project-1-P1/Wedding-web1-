import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { GlobalTexture } from './components/Effects';
import { EntryGate } from './components/EntryGate';
import { DarbarHall } from './components/DarbarHall';
import { LiveSystem } from './components/LiveSystem';
import { Story } from './components/Story';
import { Events } from './components/Events';
import { Family } from './components/Family';
import { Gallery } from './components/Gallery';

type ViewState = 'gate' | 'darbar' | 'The Chronicle' | 'Ceremonials' | 'Royal Lineage' | 'The Archive';

function App() {
  const [view, setView] = useState<ViewState>('gate');

  const handleOpenGate = () => {
    // Delay to let the gate animation play out
    setTimeout(() => {
      setView('darbar');
    }, 2800); 
  };

  const renderView = () => {
    switch (view) {
      case 'The Chronicle':
        return <Story />;
      case 'Ceremonials':
        return <Events />;
      case 'Royal Lineage':
        return <Family />;
      case 'The Archive':
        return <Gallery />;
      default:
        return null; // Handled outside the AnimatePresence for better control
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1a2e] text-[#fff8e1] font-serif relative selection:bg-[#d4af37] selection:text-[#0b1a2e]">
      <GlobalTexture />
      
      {/* Fixed UI */}
      {view !== 'gate' && <LiveSystem />}

      {/* Main Back Button overlay if deep in navigation */}
      {view !== 'gate' && view !== 'darbar' && (
        <button 
          onClick={() => setView('darbar')}
          className="fixed top-20 left-8 z-50 text-[#d4af37] text-sm uppercase tracking-[0.2em] font-bold py-2 px-4 border border-[#d4af37] bg-[#0b1a2e]/80 backdrop-blur-sm shadow-soft-diffuse hover:scale-105 transition-transform"
        >
          Return to Darbar
        </button>
      )}

      {/* Scene Transitions */}
      <AnimatePresence mode="wait">
        {view === 'gate' && (
          <EntryGate key="gate" onOpen={handleOpenGate} />
        )}

        {view === 'darbar' && (
          <motion.div
            key="darbar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <DarbarHall setView={(v) => setView(v as ViewState)} />
          </motion.div>
        )}

        {view !== 'gate' && view !== 'darbar' && (
          <motion.div
            key={view}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="pt-10" // Space for LiveSystem
          >
            {renderView()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
