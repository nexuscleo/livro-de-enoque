import { useState, useEffect, RefObject } from 'react';

export function useReadingProgress(containerRef?: RefObject<HTMLElement>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef && containerRef.current) {
        const el = containerRef.current;
        const totalHeight = el.scrollHeight - el.clientHeight;
        if (totalHeight > 0) {
          const currentProgress = (el.scrollTop / totalHeight) * 100;
          setProgress(Math.min(100, Math.max(0, currentProgress)));
        } else {
          setProgress(0);
        }
      } else {
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        if (height > 0) {
          const scrolled = (winScroll / height) * 100;
          setProgress(Math.min(100, Math.max(0, scrolled)));
        }
      }
    };

    const target = (containerRef && containerRef.current) || window;
    target.addEventListener('scroll', handleScroll as any, { passive: true });
    handleScroll();

    return () => {
      target.removeEventListener('scroll', handleScroll as any);
    };
  }, [containerRef]);

  return progress;
}

