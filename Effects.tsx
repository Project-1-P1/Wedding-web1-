import React from 'react';

export const DustParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
            animationDuration: `${10 + Math.random() * 20}s`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: 0.2 + Math.random() * 0.4,
            transform: `scale(${0.5 + Math.random() * 1})`,
          }}
        />
      ))}
    </div>
  );
};

export const FallingPetals = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="petal"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${8 + Math.random() * 12}s`,
            animationDelay: `${Math.random() * 10}s`,
            opacity: 0.6 + Math.random() * 0.4,
            transform: `scale(${0.8 + Math.random() * 0.6})`,
          }}
        />
      ))}
    </div>
  );
};

export const FireLight = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute w-32 h-32 rounded-full blur-3xl animate-flicker pointer-events-none ${className}`} 
         style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.6) 0%, rgba(212,175,55,0) 70%)' }} />
  );
};

export const GlobalTexture = () => (
  <div className="fixed inset-0 pointer-events-none z-50 mix-blend-overlay opacity-30 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />
);

