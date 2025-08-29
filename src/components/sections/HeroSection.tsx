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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-accent/30 to-background">
      {/* Premium floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-primary-glow/15 to-primary/15 rounded-full blur-3xl floating" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-full blur-3xl floating" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-8 bounce-in">
            <span className="inline-flex items-center glass-effect px-6 py-3 text-sm font-medium text-primary border hover-glow transition-all duration-500 rounded-full">
              ✨ Método Científicamente Validado
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight bounce-in" style={{animationDelay: '0.2s'}}>
            <span className="text-foreground">Método Comprobado</span>
            <br />
            <span className="gradient-text">para Vencer la</span>
            <br />
            <span className="text-primary">ANSIEDAD</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-muted-foreground max-w-4xl mx-auto leading-relaxed bounce-in font-light" style={{animationDelay: '0.4s'}}>
            Recupera el control de tu vida con técnicas científicamente probadas 
            que han ayudado a más de <span className="text-primary font-semibold">1,000 personas</span> a superar la ansiedad
          </p>
          
          {/* Problem indicators */}
          <div className="glass-effect rounded-3xl p-8 md:p-12 max-w-5xl mx-auto mb-12 hover-lift bounce-in" style={{animationDelay: '0.6s'}}>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">¿Te identificas con alguna de estas situaciones?</h3>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {[
                "Noches sin dormir por pensamientos acelerados",
                "Ataques de pánico inesperados e incontrolables", 
                "Evitar situaciones sociales o laborales por miedo",
                "Síntomas físicos que limitan tu día a día"
              ].map((problem, index) => (
                <div key={index} className="flex items-start gap-4 hover-scale transition-all duration-500" style={{animationDelay: `${0.8 + index * 0.1}s`}}>
                  <div className="w-4 h-4 bg-urgent rounded-full mt-1 flex-shrink-0 animate-pulse-glow" style={{animationDelay: `${index * 0.3}s`}}></div>
                  <p className="text-muted-foreground text-lg font-medium text-left">{problem}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Scarcity indicator */}
          <div className="glass-effect border border-success/30 text-foreground px-8 py-6 rounded-2xl text-lg font-semibold inline-block mb-8 hover-glow bounce-in" style={{animationDelay: '1s'}}>
            <span className="text-success">🔒</span> Acceso limitado: <span className="text-primary font-bold">{spacesLeft} espacios</span> disponibles esta semana
          </div>
          
          <p className="text-muted-foreground mb-12 max-w-3xl mx-auto text-lg bounce-in" style={{animationDelay: '1.2s'}}>
            Por responsabilidad profesional, limitamos el acceso para garantizar seguimiento personalizado y resultados efectivos
          </p>
          
          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center bounce-in" style={{animationDelay: '1.4s'}}>
            <button
              onClick={handleCTAClick}
              className="group relative px-12 py-6 text-xl font-bold rounded-2xl shadow-primary hover-lift hover-glow transition-all duration-500 transform hover:scale-105 bg-gradient-primary text-primary-foreground overflow-hidden"
            >
              <span className="relative z-10">Acceder al Método Ahora - $12</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            <div className="glass-effect border border-urgent/30 px-6 py-3 rounded-xl">
              <CountdownTimer size="sm" className="text-foreground font-semibold" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};