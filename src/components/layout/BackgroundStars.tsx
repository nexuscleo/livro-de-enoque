import React from 'react';

export const BackgroundStars: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Radial Gradient Base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-transparent to-black/60" />
      
      {/* Particle Stars Grid */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(1.5px 1.5px at 20px 30px, #ffffff, rgba(0, 0, 0, 0)),
            radial-gradient(1px 1px at 70px 120px, rgba(255, 255, 255, 0.7), rgba(0, 0, 0, 0)),
            radial-gradient(1.5px 1.5px at 160px 240px, rgba(250, 204, 21, 0.8), rgba(0, 0, 0, 0)),
            radial-gradient(1px 1px at 250px 80px, #38bdf8, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 310px 190px, rgba(254, 240, 138, 0.6), rgba(0, 0, 0, 0))
          `,
          backgroundRepeat: 'repeat',
          backgroundSize: '320px 320px'
        }}
      />
    </div>
  );
};

