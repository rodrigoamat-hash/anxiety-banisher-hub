import { CountdownTimer } from '../CountdownTimer';

interface PricingSectionProps {
  spacesLeft: number;
  onPurchaseClick?: () => void;
}

export const PricingSection = ({ spacesLeft, onPurchaseClick }: PricingSectionProps) => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Accede al Método Completo
          </h2>
          <p className="text-xl text-muted-foreground">
            Oferta especial para los primeros usuarios
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-muted/30 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-primary">¿Por qué este precio especial?</h3>
            <p className="text-muted-foreground mb-6">
              Estamos recopilando casos de éxito para nuestro próximo estudio científico 
              sobre la efectividad del método. Por eso ofrecemos acceso con descuento.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>75% descuento de investigación</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Seguimiento personalizado incluido</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Actualizaciones futuras gratuitas</span>
              </div>
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-8 shadow-card">
            <div className="text-center mb-6">
              <div className="bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
                Oferta Especial de Investigación
              </div>
              <div className="text-muted-foreground line-through text-lg">
                Precio regular: $47
              </div>
              <div className="text-primary text-4xl font-bold">$12</div>
            </div>
            
            <h4 className="text-xl font-semibold mb-4 text-center text-primary">Incluye:</h4>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-success mt-1">✓</span>
                <span>Guía completa paso a paso</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-success mt-1">✓</span>
                <span>Técnicas de respiración y relajación</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-success mt-1">✓</span>
                <span>Manejo de pensamientos intrusivos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-success mt-1">✓</span>
                <span>Rutinas diarias anti-ansiedad</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-success mt-1">✓</span>
                <span>3 bonos adicionales (valor $45)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-success mt-1">✓</span>
                <span>Garantía de satisfacción 7 días</span>
              </li>
            </ul>
            
            <div className="bg-warning/10 border border-warning/20 text-warning-foreground px-4 py-3 rounded-lg mb-6 text-center">
              Solo {spacesLeft} espacios disponibles esta semana
            </div>
            
            <button
              onClick={onPurchaseClick}
              className="w-full bg-primary text-primary-foreground py-4 px-6 text-lg font-semibold rounded-lg shadow-primary hover-lift transition-all duration-300"
            >
              Acceder al Método - $12
            </button>
            
            <p className="text-xs text-muted-foreground text-center mt-4">
              Acceso inmediato tras la confirmación del pago
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};