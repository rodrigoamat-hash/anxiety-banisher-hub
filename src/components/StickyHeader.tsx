import { useEffect, useState } from 'react';

interface StickyHeaderProps {
  spacesLeft: number;
  onTimerUpdate?: (timeString: string) => void;
}

export const StickyHeader = ({ spacesLeft, onTimerUpdate }: StickyHeaderProps) => {
  const [timeLeft, setTimeLeft] = useState('23:47:15');

  useEffect(() => {
    const endTime = Date.now() + (23 * 60 * 60 * 1000) + (47 * 60 * 1000) + (15 * 1000);
    
    const interval = setInterval(() => {
      const now = Date.now();
      const remaining = Math.max(0, endTime - now);
      
      const hours = Math.floor(remaining / (1000 * 60 * 60));
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
      
      const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      setTimeLeft(timeString);
      onTimerUpdate?.(timeString);
      
      if (remaining <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [onTimerUpdate]);

  return (
    <div className="fixed top-0 w-full bg-gradient-urgent text-urgent-foreground text-center py-3 z-50 shadow-urgent animate-pulse-urgent">
      <div className="font-bold text-lg">
        🔥 QUEDAN {spacesLeft} ESPACIOS | ⏰ {timeLeft} | 75% OFF
      </div>
    </div>
  );
};