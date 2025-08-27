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
    <section className="relative bg-gradient-hero text-primary-foreground pt-20 pb-16 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Peaceful meditation scene representing anxiety relief"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          🚨 MÉTODO COMPROBADO PARA VENCER LA ANSIEDAD
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-primary-glow">
          {spacesLeft} espacios restantes esta semana - La ansiedad no puede esperar
        </p>
        
        <div className="bg-urgent/90 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto mb-8 border-2 border-urgent-foreground shadow-urgent">
          <h3 className="text-2xl font-bold mb-4">🚨 CADA DÍA QUE ESPERAS, LA ANSIEDAD SE FORTALECE</h3>
          <div className="bg-warning text-warning-foreground rounded-xl p-6 mb-4">
            <div className="space-y-2 text-left max-w-2xl mx-auto">
              <p>❌ Otra noche sin dormir por pensamientos acelerados</p>
              <p>❌ Otro ataque de pánico que podrías haber evitado</p>
              <p>❌ Otra oportunidad social o laboral perdida por miedo</p>
              <p>❌ Otro día viviendo con síntomas físicos que te debilitan</p>
            </div>
          </div>
          <p className="text-xl font-medium">⏰ La ansiedad no espera... ¿Por qué tú sí?</p>
        </div>
        
        <div className="bg-success text-success-foreground px-8 py-4 rounded-full text-xl font-bold inline-block mb-6 animate-blink shadow-card">
          🔒 QUEDAN {spacesLeft} ESPACIOS ESTA SEMANA
        </div>
        
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          *Por responsabilidad profesional, limitamos el acceso a 50 personas por semana para garantizar seguimiento personalizado*
        </p>
        
        <div className="text-3xl md:text-5xl font-bold mb-8">
          ⏰ TU DESCUENTO TERMINA EN: <CountdownTimer size="lg" className="text-urgent-glow" />
        </div>
        
        <button
          onClick={handleCTAClick}
          className="bg-gradient-urgent text-urgent-foreground px-8 py-6 text-xl md:text-2xl font-bold rounded-full shadow-urgent animate-pulse-urgent hover-lift transition-all duration-300"
        >
          🔥 TERMINAR CON MI ANSIEDAD AHORA - $12<br />
          <small className="text-base">⏰ Solo {spacesLeft} espacios restantes</small>
        </button>
      </div>
    </section>
  );
};