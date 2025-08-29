import { useEffect, useState } from 'react';
import { CountdownTimer } from './CountdownTimer';

interface StickyHeaderProps {
  spacesLeft: number;
  onTimerUpdate?: (timeString: string) => void;
}

export const StickyHeader = ({ spacesLeft }: StickyHeaderProps) => {
  return (
    <div className="fixed top-0 w-full glass-effect border-b border-border z-50 py-4 px-4 text-center shadow-float backdrop-blur-xl">
      <div className="flex items-center justify-center gap-6 text-sm md:text-base font-medium">
        <span className="flex items-center gap-2 text-success">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          QUEDAN {spacesLeft} ESPACIOS
        </span>
        <span className="text-muted-foreground hidden md:inline">|</span>
        <div className="flex items-center gap-2 text-foreground">
          <span>⏰</span>
          <CountdownTimer size="sm" className="font-semibold" />
        </div>
        <span className="text-muted-foreground hidden md:inline">|</span>
        <span className="text-primary font-semibold">75% OFF</span>
      </div>
    </div>
  );
};