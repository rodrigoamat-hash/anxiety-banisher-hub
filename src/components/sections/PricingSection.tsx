import { CountdownTimer } from '../CountdownTimer';

interface PricingSectionProps {
  spacesLeft: number;
  onPurchaseClick?: () => void;
}

export const PricingSection = ({ spacesLeft, onPurchaseClick }: PricingSectionProps) => {
  return (
    <section id="pricing" className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in-up">
          🚨 PRECIO ESPECIAL TERMINA EN:
        </h2>
        <div className="mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <CountdownTimer size="lg" className="text-white bg-urgent/20 backdrop-blur-sm px-6 py-4 rounded-2xl border border-urgent/30" />
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 hover-lift animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <h3 className="text-2xl font-semibold mb-6 text-white">¿Por qué este precio especial?</h3>
            <p className="text-white/90 mb-8 text-lg leading-relaxed">
              Estamos recopilando casos de éxito para nuestro próximo estudio científico 
              sobre la efectividad del método. Por eso ofrecemos acceso con descuento.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 hover-scale transition-all duration-300">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse-glow"></div>
                <span className="text-white">75% descuento de investigación</span>
              </div>
              <div className="flex items-center gap-4 hover-scale transition-all duration-300">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse-glow" style={{animationDelay: '0.5s'}}></div>
                <span className="text-white">Seguimiento personalizado incluido</span>
              </div>
              <div className="flex items-center gap-4 hover-scale transition-all duration-300">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse-glow" style={{animationDelay: '1s'}}></div>
                <span className="text-white">Actualizaciones futuras gratuitas</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white text-foreground rounded-3xl p-10 shadow-float border border-white/20 hover-lift hover-glow animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="text-center mb-8">
              <div className="bg-gradient-urgent text-white px-6 py-3 rounded-full text-lg font-bold inline-block mb-6 animate-bounce-soft">
                75% OFF - OFERTA LIMITADA
              </div>
              <div className="text-xl text-muted-foreground line-through mb-3">
                Precio regular: $47
              </div>
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-6">
                $12
              </div>
            </div>
            
            <h4 className="text-2xl font-bold mb-6 text-center text-primary">Incluye:</h4>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-4 hover-scale transition-all duration-300">
                <span className="text-success text-xl font-bold">✓</span>
                <span className="text-lg">Guía completa paso a paso</span>
              </li>
              <li className="flex items-center gap-4 hover-scale transition-all duration-300">
                <span className="text-success text-xl font-bold">✓</span>
                <span className="text-lg">Técnicas de respiración y relajación</span>
              </li>
              <li className="flex items-center gap-4 hover-scale transition-all duration-300">
                <span className="text-success text-xl font-bold">✓</span>
                <span className="text-lg">Manejo de pensamientos intrusivos</span>
              </li>
              <li className="flex items-center gap-4 hover-scale transition-all duration-300">
                <span className="text-success text-xl font-bold">✓</span>
                <span className="text-lg">Rutinas diarias anti-ansiedad</span>
              </li>
              <li className="flex items-center gap-4 hover-scale transition-all duration-300">
                <span className="text-success text-xl font-bold">✓</span>
                <span className="text-lg">3 bonos adicionales (valor $45)</span>
              </li>
              <li className="flex items-center gap-4 hover-scale transition-all duration-300">
                <span className="text-success text-xl font-bold">✓</span>
                <span className="text-lg">Garantía de satisfacción 7 días</span>
              </li>
            </ul>
            
            <div className="bg-warning/20 backdrop-blur-sm border border-warning/30 text-warning-foreground px-6 py-4 rounded-2xl mb-8 text-center animate-bounce-soft">
              Solo {spacesLeft} espacios disponibles esta semana
            </div>
            
            <button
              onClick={onPurchaseClick}
              className="w-full bg-gradient-primary text-white py-5 px-8 text-xl font-bold rounded-2xl shadow-primary hover-lift hover-glow transition-all duration-300 transform hover:scale-105"
            >
              Acceder al Método - $12
            </button>
            
            <p className="text-sm text-muted-foreground text-center mt-6">
              Acceso inmediato tras la confirmación del pago
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};