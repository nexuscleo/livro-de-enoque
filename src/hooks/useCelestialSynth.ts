import { useRef, useState, useCallback, useEffect } from 'react';

export function useCelestialSynth() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioContextRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const nodesRef = useRef<any[]>([]);

  const initAudio = useCallback(() => {
    if (!audioContextRef.current) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        audioContextRef.current = new AudioContextClass();
      }
    }
  }, []);

  const start = useCallback(() => {
    initAudio();
    const ctx = audioContextRef.current;
    if (!ctx) return;

    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    if (isPlaying) return;

    const now = ctx.currentTime;

    // Master Gain
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0, now);
    masterGain.gain.linearRampToValueAtTime(volume, now + 3);
    masterGainRef.current = masterGain;

    // LowPass Filter for warmth and depth
    const lpFilter = ctx.createBiquadFilter();
    lpFilter.type = 'lowpass';
    lpFilter.frequency.setValueAtTime(320, now);

    // Delay effect for celestial spaciousness
    const delay = ctx.createDelay();
    delay.delayTime.setValueAtTime(0.6, now);
    const delayFeedback = ctx.createGain();
    delayFeedback.gain.setValueAtTime(0.4, now);

    delay.connect(delayFeedback);
    delayFeedback.connect(delay);

    // LFO to modulate filter frequency (creates breathing/evolving celestial drone)
    const lfo = ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(0.12, now);

    const lfoGain = ctx.createGain();
    lfoGain.gain.setValueAtTime(80, now);

    lfo.connect(lfoGain);
    lfoGain.connect(lpFilter.frequency);
    lfo.start(now);

    // Celestial Chords (C2 - 65.41Hz, G2 - 98.00Hz, C3 - 130.81Hz, G3 - 196.00Hz)
    const notes = [65.41, 98.00, 130.81, 196.00];
    const oscillators: OscillatorNode[] = [];
    const oscGains: GainNode[] = [];

    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      osc.detune.setValueAtTime(idx % 2 === 0 ? 5 : -5, now);

      oscGain.gain.setValueAtTime(0, now);
      oscGain.gain.linearRampToValueAtTime(0.2, now + 2 + idx);

      osc.connect(oscGain);
      oscGain.connect(lpFilter);
      osc.start(now);

      oscillators.push(osc);
      oscGains.push(oscGain);
    });

    lpFilter.connect(masterGain);
    lpFilter.connect(delay);
    delay.connect(masterGain);
    masterGain.connect(ctx.destination);

    nodesRef.current = [masterGain, lpFilter, delay, delayFeedback, lfo, lfoGain, ...oscillators, ...oscGains];
    setIsPlaying(true);
  }, [initAudio, isPlaying, volume]);

  const stop = useCallback(() => {
    if (!isPlaying || !audioContextRef.current || !masterGainRef.current) return;

    const ctx = audioContextRef.current;
    const now = ctx.currentTime;
    const master = masterGainRef.current;

    master.gain.cancelScheduledValues(now);
    master.gain.setValueAtTime(master.gain.value, now);
    master.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);

    setTimeout(() => {
      nodesRef.current.forEach(node => {
        if (node && typeof node.stop === 'function') {
          try {
            node.stop();
          } catch (e) {
            // Ignore if already stopped
          }
        }
      });
      nodesRef.current = [];
      setIsPlaying(false);
    }, 1500);
  }, [isPlaying]);

  const toggle = useCallback(() => {
    if (isPlaying) {
      stop();
    } else {
      start();
    }
  }, [isPlaying, start, stop]);

  const changeVolume = useCallback((newVol: number) => {
    setVolume(newVol);
    if (isPlaying && masterGainRef.current && audioContextRef.current) {
      const now = audioContextRef.current.currentTime;
      masterGainRef.current.gain.cancelScheduledValues(now);
      masterGainRef.current.gain.linearRampToValueAtTime(newVol, now + 0.15);
    }
  }, [isPlaying]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      nodesRef.current.forEach(node => {
        if (node && typeof node.stop === 'function') {
          try { node.stop(); } catch (e) {}
        }
      });
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, []);

  return {
    isPlaying,
    volume,
    start,
    stop,
    toggle,
    changeVolume
  };
}

