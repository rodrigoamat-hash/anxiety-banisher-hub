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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-primary">
            Método Ansiedad
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{spacesLeft} espacios disponibles</span>
            <span>⏰ {timeLeft}</span>
          </div>
        </div>
      </div>
    </header>
  );
};