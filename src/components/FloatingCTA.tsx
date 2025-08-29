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
      className="group fixed bottom-8 right-8 glass-effect border border-primary/20 text-primary px-8 py-6 rounded-2xl shadow-primary hover-lift hover-glow font-bold text-center z-40 floating overflow-hidden"
    >
      <span className="relative z-10">
        <div className="group-hover:scale-105 transition-transform duration-500 text-lg font-bold">Acceder Ahora</div>
        <div className="text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">$12</div>
      </span>
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300 rounded-2xl"></div>
    </button>
  );
};