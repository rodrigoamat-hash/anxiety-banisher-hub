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
    <section className="relative bg-gradient-hero text-foreground pt-20 pb-16 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={heroImage} 
          alt="Peaceful meditation scene representing anxiety relief"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="mb-4">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            ✨ Método Científicamente Validado
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
          Método Comprobado para<br />Vencer la Ansiedad
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
          Recupera el control de tu vida con técnicas científicamente probadas 
          que han ayudado a más de 1,000 personas a superar la ansiedad
        </p>
        
        <div className="bg-card border border-border rounded-2xl p-8 max-w-4xl mx-auto mb-8 shadow-card">
          <h3 className="text-2xl font-semibold mb-6 text-primary">¿Te identificas con alguna de estas situaciones?</h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-urgent rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-muted-foreground">Noches sin dormir por pensamientos acelerados</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-urgent rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-muted-foreground">Ataques de pánico inesperados e incontrolables</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-urgent rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-muted-foreground">Evitar situaciones sociales o laborales por miedo</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-urgent rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-muted-foreground">Síntomas físicos que limitan tu día a día</p>
            </div>
          </div>
        </div>
        
        <div className="bg-success/10 border border-success/20 text-success-foreground px-6 py-3 rounded-full text-lg font-medium inline-block mb-6">
          🔒 Acceso limitado: {spacesLeft} espacios disponibles esta semana
        </div>
        
        <p className="text-base mb-8 max-w-2xl mx-auto text-muted-foreground">
          Por responsabilidad profesional, limitamos el acceso para garantizar seguimiento personalizado y resultados efectivos
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <button
            onClick={handleCTAClick}
            className="bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-primary hover-lift transition-all duration-300"
          >
            Acceder al Método Ahora - $12
          </button>
          <div className="text-muted-foreground">
            <CountdownTimer size="sm" className="text-urgent" />
          </div>
        </div>
      </div>
    </section>
  );
};