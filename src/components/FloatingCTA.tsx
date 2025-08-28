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
      className="fixed bottom-6 right-6 bg-gradient-primary text-white px-8 py-5 rounded-2xl shadow-float hover-lift hover-glow font-bold text-center border border-primary/20 z-40 animate-bounce-soft group"
    >
      <div className="group-hover:scale-105 transition-transform duration-300">Acceder Ahora</div>
      <div className="text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">$12</div>
    </button>
  );
};