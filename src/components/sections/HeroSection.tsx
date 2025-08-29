import { CountdownTimer } from '../CountdownTimer';

interface HeroSectionProps {
  spacesLeft: number;
  onCTAClick?: () => void;
}

export const HeroSection = ({ spacesLeft, onCTAClick }: HeroSectionProps) => {
  const handleCTAClick = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
    onCTAClick?.();
  };

  return (
    <section className="bg-gradient-primary text-white py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-glow opacity-90"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Pre-headline */}
          <div className="mb-8">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-lg font-semibold border border-white/30">
              MÉTODO COMPROBADO
            </span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
            Descubre un Método Simplificado para Vencer la
            <br />
            <span className="text-yellow-300">ANSIEDAD</span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl font-normal text-white/90 block mt-4">
              y los tormentos que esta enfermedad provoca en tu vida
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
            Miles de personas han transformado sus vidas. Técnicas científicamente probadas 
            que realmente funcionan.
          </p>
          
          {/* CTA Button */}
          <div className="mb-8">
            <button
              onClick={handleCTAClick}
              className="bg-white text-primary px-12 py-6 text-xl md:text-2xl font-bold rounded-lg shadow-float hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:bg-gray-50"
            >
              VENCER MI ANSIEDAD - $12
            </button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              Método Paso a Paso
            </span>
            <span className="hidden sm:block">•</span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              Acceso Instantáneo
            </span>
            <span className="hidden sm:block">•</span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              Profesionales Calificados
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};