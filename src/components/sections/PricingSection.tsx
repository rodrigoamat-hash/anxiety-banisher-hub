import { CountdownTimer } from '../CountdownTimer';

interface PricingSectionProps {
  spacesLeft: number;
  onPurchaseClick?: () => void;
}

export const PricingSection = ({ spacesLeft, onPurchaseClick }: PricingSectionProps) => {
  return (
    <section id="pricing" className="py-20 bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          🚨 PRECIO ESPECIAL TERMINA EN:
        </h2>
        <div className="text-4xl md:text-6xl font-bold mb-12">
          <CountdownTimer size="lg" className="text-urgent-glow" />
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto mb-12 border border-white/20">
          <h3 className="text-2xl font-bold mb-4">RAZÓN DEL DESCUENTO:</h3>
          <p className="text-lg mb-6">
            Estamos recopilando casos de éxito para nuestro próximo estudio científico sobre efectividad del método.
          </p>
          
          <div className="text-left max-w-2xl mx-auto">
            <p className="text-xl font-semibold mb-4">Los primeros 50 usuarios obtienen:</p>
            <ul className="space-y-2 text-lg">
              <li>💰 75% descuento ($47 → $12)</li>
              <li>📊 Seguimiento gratuito de progreso</li>
              <li>📚 Acceso anticipado a actualizaciones</li>
            </ul>
          </div>
          
          <p className="text-primary-glow italic mt-6">
            *Después del estudio, el precio vuelve a $47*
          </p>
        </div>
        
        <div className="bg-card text-card-foreground rounded-3xl p-10 max-w-2xl mx-auto shadow-float border-4 border-urgent">
          <div className="bg-urgent text-urgent-foreground px-6 py-3 rounded-full text-lg font-bold inline-block mb-6">
            75% OFF - OFERTA LIMITADA
          </div>
          
          <div className="mb-6">
            <div className="text-muted-foreground line-through text-2xl mb-2">
              Precio regular: $47
            </div>
            <div className="text-urgent text-5xl font-bold">$12</div>
          </div>
          
          <h3 className="text-2xl font-bold mb-6">Lo que recibes:</h3>
          <ul className="text-left space-y-3 mb-8 max-w-md mx-auto">
            <li className="flex items-center">
              <span className="text-success mr-3">✓</span>
              Guía completa paso a paso
            </li>
            <li className="flex items-center">
              <span className="text-success mr-3">✓</span>
              3 bonos valorados en $45
            </li>
            <li className="flex items-center">
              <span className="text-success mr-3">✓</span>
              Técnicas de respiración efectiva
            </li>
            <li className="flex items-center">
              <span className="text-success mr-3">✓</span>
              Manejo de pensamientos intrusivos
            </li>
            <li className="flex items-center">
              <span className="text-success mr-3">✓</span>
              Rutinas anti-ansiedad
            </li>
            <li className="flex items-center">
              <span className="text-success mr-3">✓</span>
              Garantía 100% - 7 días
            </li>
          </ul>
          
          <div className="bg-urgent text-urgent-foreground px-6 py-4 rounded-xl mb-8 animate-blink">
            🔒 QUEDAN SOLO {spacesLeft} ESPACIOS DE 50 ESTA SEMANA
          </div>
          
          <button
            onClick={onPurchaseClick}
            className="w-full bg-gradient-urgent text-urgent-foreground py-6 px-8 text-xl font-bold rounded-2xl shadow-urgent animate-pulse-urgent hover-lift transition-all duration-300"
          >
            🔥 TERMINAR CON MI ANSIEDAD AHORA - $12<br />
            <small className="text-base">⏰ Acceso inmediato | Solo {spacesLeft} espacios</small>
          </button>
          
          <p className="text-sm text-muted-foreground mt-6">
            ⚠️ Si sales de esta página, perderás este precio para siempre
          </p>
        </div>
      </div>
    </section>
  );
};