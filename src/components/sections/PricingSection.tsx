import { CountdownTimer } from '../CountdownTimer';

interface PricingSectionProps {
  spacesLeft: number;
  onPurchaseClick?: () => void;
}

export const PricingSection = ({ spacesLeft, onPurchaseClick }: PricingSectionProps) => {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-glow/20 rounded-full blur-3xl floating" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl floating" style={{animationDelay: '6s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-white bounce-in">
            🚨 PRECIO ESPECIAL TERMINA EN:
          </h2>
          <div className="bounce-in" style={{animationDelay: '0.2s'}}>
            <CountdownTimer 
              size="lg" 
              className="text-white glass-effect px-8 py-6 rounded-3xl border border-white/20 text-2xl md:text-3xl font-bold shadow-float" 
            />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Why this price */}
          <div className="glass-effect rounded-3xl p-8 lg:p-12 hover-lift bounce-in" style={{animationDelay: '0.4s'}}>
            <h3 className="text-3xl lg:text-4xl font-bold mb-8 text-white">¿Por qué este precio especial?</h3>
            <p className="text-white/90 mb-10 text-lg lg:text-xl leading-relaxed">
              Estamos recopilando casos de éxito para nuestro próximo estudio científico 
              sobre la efectividad del método. Por eso ofrecemos acceso con descuento.
            </p>
            
            <div className="space-y-6">
              {[
                "75% descuento de investigación",
                "Seguimiento personalizado incluido", 
                "Actualizaciones futuras gratuitas"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 hover-scale transition-all duration-500" style={{animationDelay: `${0.6 + index * 0.1}s`}}>
                  <div className="w-4 h-4 bg-success rounded-full animate-pulse-glow" style={{animationDelay: `${index * 0.3}s`}}></div>
                  <span className="text-white text-lg lg:text-xl font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Pricing card */}
          <div className="bg-white text-foreground rounded-3xl p-8 lg:p-12 shadow-float hover-lift hover-glow bounce-in" style={{animationDelay: '0.6s'}}>
            <div className="text-center mb-10">
              <div className="bg-gradient-urgent text-white px-8 py-4 rounded-2xl text-lg lg:text-xl font-bold inline-block mb-8 hover-scale cursor-default">
                75% OFF - OFERTA LIMITADA
              </div>
              <div className="text-xl lg:text-2xl text-muted-foreground line-through mb-4">
                Precio regular: $47
              </div>
              <div className="text-6xl lg:text-7xl font-black gradient-text mb-8">
                $12
              </div>
            </div>
            
            <h4 className="text-2xl lg:text-3xl font-bold mb-8 text-center text-primary">Incluye:</h4>
            <ul className="space-y-5 mb-12">
              {[
                "Guía completa paso a paso",
                "Técnicas de respiración y relajación",
                "Manejo de pensamientos intrusivos", 
                "Rutinas diarias anti-ansiedad",
                "3 bonos adicionales (valor $45)",
                "Garantía de satisfacción 7 días"
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-4 hover-scale transition-all duration-500" style={{animationDelay: `${0.8 + index * 0.05}s`}}>
                  <span className="text-success text-xl lg:text-2xl font-bold">✓</span>
                  <span className="text-lg lg:text-xl font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="glass-effect border border-warning/30 text-foreground px-6 py-5 rounded-2xl mb-8 text-center">
              <p className="font-bold text-lg lg:text-xl">
                Solo <span className="text-primary text-2xl">{spacesLeft}</span> espacios disponibles esta semana
              </p>
            </div>
            
            <button
              onClick={onPurchaseClick}
              className="group w-full bg-gradient-primary text-white py-6 px-8 text-xl lg:text-2xl font-bold rounded-2xl shadow-primary hover-lift hover-glow transition-all duration-500 transform hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">Acceder al Método - $12</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            
            <p className="text-muted-foreground text-center mt-6 text-lg">
              Acceso inmediato tras la confirmación del pago
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};