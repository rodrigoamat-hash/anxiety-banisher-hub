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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-primary">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Método Ansiedad
          </div>
          <div className="flex items-center gap-6 text-sm">
            <span className="bg-success/20 text-success-foreground px-3 py-1 rounded-full font-medium hover-scale transition-all duration-300">
              {spacesLeft} espacios disponibles
            </span>
            <span className="bg-urgent/20 text-urgent-foreground px-3 py-1 rounded-full font-medium animate-pulse-glow">
              ⏰ {timeLeft}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};