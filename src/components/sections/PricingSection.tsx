import { CountdownTimer } from '../CountdownTimer';

interface PricingSectionProps {
  spacesLeft: number;
  onPurchaseClick?: () => void;
}

export const PricingSection = ({ spacesLeft, onPurchaseClick }: PricingSectionProps) => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              🚨 PRECIO ESPECIAL TERMINA EN:
            </h2>
            <div className="mb-12">
              <CountdownTimer 
                size="lg" 
                className="text-foreground bg-urgent/20 backdrop-blur-sm px-8 py-6 rounded-2xl border border-urgent/30 text-3xl font-bold shadow-card inline-block" 
              />
            </div>
          </div>
          
          {/* Pricing Box */}
          <div className="bg-secondary border-2 border-primary rounded-3xl p-12 shadow-float text-center max-w-2xl mx-auto mb-16">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                Acceso Completo al Método Comprobado para Vencer la Ansiedad
              </h3>
              <div className="bg-urgent text-white px-6 py-3 rounded-full text-lg font-bold inline-block mb-6">
                Solo {spacesLeft} copias disponibles este mes
              </div>
            </div>
            
            <div className="mb-8">
              <div className="text-2xl text-muted-foreground line-through mb-2">
                $47
              </div>
              <div className="text-6xl font-black text-primary mb-4">
                $12
              </div>
              <div className="bg-urgent text-white px-6 py-2 rounded-full text-xl font-bold inline-block">
                75% OFF
              </div>
            </div>
            
            <div className="text-lg text-muted-foreground mb-8">
              Guía Completa + 3 bonos valorados en $45<br />
              Descarga inmediata + GARANTÍA 100% - 7 DÍAS
            </div>
            
            <button
              onClick={onPurchaseClick}
              className="w-full bg-primary text-white py-6 px-8 text-2xl font-bold rounded-2xl shadow-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 mb-6"
            >
              VENCER MI ANSIEDAD - $12
            </button>
            
            <div className="text-muted-foreground">
              Acceso inmediato tras la confirmación del pago
            </div>
          </div>
          
          {/* Multiple CTAs */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-8 text-foreground">
              No esperes más para recuperar tu paz mental
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Miles de personas ya han transformado sus vidas. Es tu turno.
            </p>
            
            <button
              onClick={onPurchaseClick}
              className="bg-primary text-white px-12 py-6 text-2xl font-bold rounded-2xl shadow-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 mb-6"
            >
              RECUPERAR MI PAZ MENTAL - $12
            </button>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground mt-6">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                Método Paso a Paso
              </span>
              <span className="hidden sm:block">•</span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                Acceso Instantáneo
              </span>
              <span className="hidden sm:block">•</span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                Profesionales Calificados
              </span>
            </div>
            
            <div className="mt-8">
              <p className="text-lg text-muted-foreground mb-4">
                Recibes todo listo - sin terapias costosas, aunque nunca hayas intentado técnicas de autoayuda antes.
              </p>
              <div className="text-foreground font-semibold">
                <div>✓ Funciona con ansiedad generalizada, ataques de pánico y fobias</div>
                <div>✓ Para quienes no entienden nada de psicología</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};