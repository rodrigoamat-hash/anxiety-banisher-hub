import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CountdownTimer } from '@/components/CountdownTimer';
import { Check, BookOpen, Heart, Shield } from 'lucide-react';

const Downsell = () => {
  const [spacesLeft, setSpacesLeft] = useState(15);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpacesLeft(prev => Math.max(5, prev - Math.floor(Math.random() * 2)));
    }, 150000);

    return () => clearInterval(interval);
  }, []);

  const handleBasicPurchase = () => {
    alert('¡Redirigiendo al checkout básico! 🔒\n\nGuía Esencial + Audio Meditaciones + Garantía 14 días');
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
              {spacesLeft} espacios disponibles
            </span>
            <CountdownTimer size="sm" />
          </div>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Heart className="w-4 h-4" />
              ÚLTIMA OPORTUNIDAD ESPECIAL
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              ¡Una Última Oferta!
              <span className="text-primary block">
                Comienza Tu Cambio Hoy Mismo
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Entiendo que el programa completo puede parecer mucho ahora. 
              Pero no quiero que te vayas sin nada. Aquí tienes una versión 
              <strong> esencial</strong> que te dará las herramientas básicas para empezar.
            </p>

            <div className="glass-effect border border-success/20 rounded-2xl p-8 mb-12">
              <p className="text-lg italic text-foreground/90 mb-4">
                "Incluso con lo básico pude ver cambios en mi ansiedad. 
                Es el primer paso perfecto para quien quiere empezar gradualmente."
              </p>
              <p className="text-success font-semibold">- Carlos Mendoza, Colombia</p>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Con la <span className="text-success">Guía Esencial</span> obtienes:
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-effect border border-success/20 rounded-xl p-8">
                <div className="w-16 h-16 bg-success/10 rounded-xl flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-xl font-bold mb-4">Guía PDF de 50 Páginas</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    5 técnicas esenciales de respiración
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    Ejercicios para crisis de ansiedad
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    Plan de 14 días paso a paso
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    Rutina matutina anti-ansiedad
                  </li>
                </ul>
              </div>

              <div className="glass-effect border border-success/20 rounded-xl p-8">
                <div className="w-16 h-16 bg-success/10 rounded-xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-xl font-bold mb-4">5 Audio Meditaciones</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    Meditación para dormir mejor
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    Respiración calmante de 10 min
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    Relajación muscular progresiva
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    Mindfulness para principiantes
                  </li>
                </ul>
              </div>
            </div>

            <div className="glass-effect border border-success/20 rounded-xl p-6 text-center">
              <Shield className="w-12 h-12 text-success mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Garantía de 14 Días</h3>
              <p className="text-muted-foreground">
                Si en 14 días no sientes ninguna mejora, te devolvemos tu dinero completo.
              </p>
            </div>
          </div>
        </section>

        {/* Special Price */}
        <section className="py-16 px-6 bg-gradient-card">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-8">
              Precio Especial de Último Momento
            </h2>

            <div className="glass-effect border-2 border-success/30 rounded-2xl p-8 mb-8">
              <div className="text-muted-foreground mb-2 line-through text-lg">Precio normal: $27</div>
              <div className="text-6xl font-bold text-success mb-4">$7</div>
              
              <div className="bg-success/10 border border-success/20 rounded-xl p-4 mb-6">
                <div className="text-success font-bold text-lg mb-2">74% DE DESCUENTO</div>
                <div className="text-sm text-muted-foreground">
                  Perfecto para empezar tu transformación
                </div>
              </div>

              <Button
                onClick={handleBasicPurchase}
                variant="success"
                size="cta"
                className="w-full mb-4"
              >
                SÍ, QUIERO LA GUÍA ESENCIAL - $7
              </Button>

              <div className="text-sm text-muted-foreground">
                ⏰ Esta oferta expira cuando se acabe el tiempo
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg font-semibold text-foreground">
                ¿Por qué solo $7?
              </p>
              <p className="text-muted-foreground">
                Porque creo que todos merecen tener herramientas para manejar la ansiedad, 
                sin importar su situación económica. Este precio cubre apenas los costos de entrega.
              </p>
            </div>

            <div className="mt-8">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                No gracias, prefiero no llevarlo
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
            "name": "Guía Esencial para Vencer la Ansiedad",
            "description": "Guía PDF + Audio meditaciones + Garantía 14 días",
            "offers": {
              "@type": "Offer",
              "price": "7",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />
    </div>
  );
};

export default Downsell;