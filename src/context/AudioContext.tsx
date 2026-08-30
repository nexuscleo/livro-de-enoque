import React, { createContext, useContext } from 'react';
import { useCelestialSynth } from '../hooks/useCelestialSynth';

interface AudioContextType {
  isPlaying: boolean;
  volume: number;
  start: () => void;
  stop: () => void;
  toggle: () => void;
  changeVolume: (vol: number) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const audio = useCelestialSynth();

  return (
    <AudioContext.Provider value={audio}>
      {children}
    </AudioContext.Provider>
  );
};

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio deve ser usado dentro de AudioProvider');
  }
  return context;
}

