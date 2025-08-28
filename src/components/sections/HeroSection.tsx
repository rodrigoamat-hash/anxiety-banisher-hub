import { CountdownTimer } from '../CountdownTimer';
import heroImage from '@/assets/hero-anxiety-relief.jpg';

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
    <section className="relative bg-gradient-hero text-white pt-20 pb-16 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroImage} 
          alt="Peaceful meditation scene representing anxiety relief"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="mb-6 animate-fade-in-up">
          <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white border border-white/30 hover-glow transition-all duration-300">
            ✨ Método Científicamente Validado
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in-up leading-tight" style={{animationDelay: '0.2s'}}>
          Método Comprobado para<br />
          <span className="gradient-text bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
            Vencer la Ansiedad
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-fade-in-up leading-relaxed" style={{animationDelay: '0.4s'}}>
          Recupera el control de tu vida con técnicas científicamente probadas 
          que han ayudado a más de 1,000 personas a superar la ansiedad
        </p>
        
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto mb-8 shadow-float hover-lift animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <h3 className="text-2xl font-semibold mb-6 text-white">¿Te identificas con alguna de estas situaciones?</h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="flex items-start gap-4 hover-scale transition-all duration-300">
              <div className="w-3 h-3 bg-urgent rounded-full mt-2 flex-shrink-0 animate-pulse-glow"></div>
              <p className="text-white/90">Noches sin dormir por pensamientos acelerados</p>
            </div>
            <div className="flex items-start gap-4 hover-scale transition-all duration-300">
              <div className="w-3 h-3 bg-urgent rounded-full mt-2 flex-shrink-0 animate-pulse-glow" style={{animationDelay: '0.5s'}}></div>
              <p className="text-white/90">Ataques de pánico inesperados e incontrolables</p>
            </div>
            <div className="flex items-start gap-4 hover-scale transition-all duration-300">
              <div className="w-3 h-3 bg-urgent rounded-full mt-2 flex-shrink-0 animate-pulse-glow" style={{animationDelay: '1s'}}></div>
              <p className="text-white/90">Evitar situaciones sociales o laborales por miedo</p>
            </div>
            <div className="flex items-start gap-4 hover-scale transition-all duration-300">
              <div className="w-3 h-3 bg-urgent rounded-full mt-2 flex-shrink-0 animate-pulse-glow" style={{animationDelay: '1.5s'}}></div>
              <p className="text-white/90">Síntomas físicos que limitan tu día a día</p>
            </div>
          </div>
        </div>
        
        <div className="bg-success/20 backdrop-blur-sm border border-success/30 text-white px-8 py-4 rounded-full text-lg font-medium inline-block mb-6 hover-glow animate-bounce-soft animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          🔒 Acceso limitado: {spacesLeft} espacios disponibles esta semana
        </div>
        
        <p className="text-base mb-8 max-w-2xl mx-auto text-white/80 animate-fade-in-up" style={{animationDelay: '1s'}}>
          Por responsabilidad profesional, limitamos el acceso para garantizar seguimiento personalizado y resultados efectivos
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-6 animate-fade-in-up" style={{animationDelay: '1.2s'}}>
          <button
            onClick={handleCTAClick}
            className="bg-white text-primary px-10 py-5 text-xl font-bold rounded-2xl shadow-float hover-lift hover-glow transition-all duration-300 transform hover:scale-105"
          >
            Acceder al Método Ahora - $12
          </button>
          <div className="text-white/90 bg-urgent/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-urgent/30">
            <CountdownTimer size="sm" className="text-white font-semibold" />
          </div>
        </div>
      </div>
    </section>
  );
};