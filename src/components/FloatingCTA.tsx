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
      className="fixed bottom-6 right-6 bg-primary text-primary-foreground px-6 py-4 rounded-lg shadow-float hover-lift font-semibold text-center border border-border z-40"
    >
      <div>Acceder Ahora</div>
      <div className="text-sm opacity-90">$12</div>
    </button>
  );
};