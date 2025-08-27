import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const CountdownTimer = ({ className = '', size = 'md' }: CountdownTimerProps) => {
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
      
      if (remaining <= 0) {
        clearInterval(interval);
        setTimeLeft('EXPIRADO');
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  return (
    <span className={`font-bold ${sizeClasses[size]} ${className}`}>
      {timeLeft}
    </span>
  );
};