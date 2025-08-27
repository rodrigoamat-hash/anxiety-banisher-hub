import { CountdownTimer } from './CountdownTimer';

interface FloatingCTAProps {
  onClick?: () => void;
}

export const FloatingCTA = ({ onClick }: FloatingCTAProps) => {
  const handleClick = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-gradient-urgent text-urgent-foreground px-6 py-4 rounded-full font-bold shadow-urgent z-40 animate-bounce-soft hover-lift"
    >
      <div className="text-center">
        <div>🚨 $12 AHORA</div>
        <div className="text-xs mt-1">
          ⏰ <CountdownTimer size="sm" />
        </div>
      </div>
    </button>
  );
};