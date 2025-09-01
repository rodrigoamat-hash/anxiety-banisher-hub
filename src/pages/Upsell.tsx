import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CountdownTimer } from '@/components/CountdownTimer';
import { Check, Star, Trophy, Zap, Target } from 'lucide-react';

const Upsell = () => {
  const [spacesLeft, setSpacesLeft] = useState(8);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpacesLeft(prev => Math.max(1, prev - Math.floor(Math.random() * 2)));
    }, 120000);

    return () => clearInterval(interval);
  }, []);

  const handlePremiumPurchase = () => {
    alert('¡Redirigiendo al checkout premium! 🔒\n\nCoaching personalizado + Curso Avanzado + Soporte VIP');
  };

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Header */}
      <header className="fixed top-0 w-full glass-effect border-b border-border z-50 py-4 px-4 backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="text-primary font-bold text-xl">
            ← Volver
          </Link>
          <div className="flex items-center gap-4 text-sm font-medium">
            <span className="flex items-center gap-2 text-success">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              Solo {spacesLeft} cupos VIP
            </span>
            <CountdownTimer size="sm" />
          </div>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Trophy className="w-4 h-4" />
              OFERTA EXCLUSIVA PREMIUM
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              ¡Espera! 
              <span className="text-primary block">
                Lleva tu Transformación al Siguiente Nivel
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Antes de que te vayas... ¿Te gustaría acelerar tu progreso con <strong>coaching personalizado</strong> 
              y herramientas avanzadas que garantizan resultados en <strong>solo 14 días</strong>?
            </p>

            <div className="glass-effect border border-primary/20 rounded-2xl p-8 mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Star className="w-8 h-8 text-warning fill-warning" />
                <Star className="w-8 h-8 text-warning fill-warning" />
                <Star className="w-8 h-8 text-warning fill-warning" />
                <Star className="w-8 h-8 text-warning fill-warning" />
                <Star className="w-8 h-8 text-warning fill-warning" />
              </div>
              <p className="text-lg italic text-foreground/90">
                "El coaching personalizado fue lo que realmente marcó la diferencia. 
                En 2 semanas logré lo que no había conseguido en meses."
              </p>
              <p className="text-primary font-semibold mt-4">- María González, México</p>
            </div>
          </div>
        </section>

        {/* Premium Features */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Esto es lo que obtienes en el 
              <span className="text-primary"> Programa Premium</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-effect border border-primary/20 rounded-xl p-8 hover-lift">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Coaching Personalizado 1:1</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    4 sesiones privadas de 60 min
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    Plan personalizado según tu caso
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    Seguimiento semanal de progreso
                  </li>
                </ul>
              </div>

              <div className="glass-effect border border-primary/20 rounded-xl p-8 hover-lift">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Curso Avanzado Exclusivo</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    20 módulos adicionales avanzados
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    Técnicas de nivel profesional
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    Casos de estudio reales
                  </li>
                </ul>
              </div>

              <div className="glass-effect border border-primary/20 rounded-xl p-8 hover-lift md:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Trophy className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Soporte VIP</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    WhatsApp directo 24/7
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    Grupo VIP exclusivo
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    Garantía extendida 30 días
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 px-6 bg-gradient-card">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-8">
              Oferta Especial Solo Por Hoy
            </h2>

            <div className="glass-effect border-2 border-primary/30 rounded-2xl p-8 mb-8">
              <div className="text-6xl font-bold text-primary mb-4">$197</div>
              <div className="text-xl text-muted-foreground mb-6 line-through">Precio regular: $597</div>
              
              <div className="bg-urgent/10 border border-urgent/20 rounded-xl p-4 mb-6">
                <div className="text-urgent font-bold text-lg mb-2">67% DE DESCUENTO</div>
                <div className="text-sm text-muted-foreground">
                  Solo por ser cliente de nuestro curso básico
                </div>
              </div>

              <Button
                onClick={handlePremiumPurchase}
                variant="hero"
                size="cta"
                className="w-full mb-4"
              >
                QUIERO EL PROGRAMA PREMIUM - $197
              </Button>

              <div className="text-sm text-muted-foreground">
                ⏰ Esta oferta expira cuando se acabe el tiempo
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                No gracias, continuar con el curso básico
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Programa Premium para Vencer la Ansiedad",
            "description": "Coaching personalizado 1:1 + Curso avanzado + Soporte VIP",
            "offers": {
              "@type": "Offer",
              "price": "197",
              "priceCurrency": "USD",
              "availability": "https://schema.org/LimitedAvailability"
            }
          })
        }}
      />
    </div>
  );
};

export default Upsell;