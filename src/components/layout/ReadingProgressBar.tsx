import React from 'react';

interface ReadingProgressBarProps {
  progress: number;
}

export const ReadingProgressBar: React.FC<ReadingProgressBarProps> = ({ progress }) => {
  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-black/30 backdrop-blur-sm">
      <div 
        className="h-full bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-400 transition-all duration-150 ease-out shadow-[0_0_8px_rgba(250,204,21,0.7)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

