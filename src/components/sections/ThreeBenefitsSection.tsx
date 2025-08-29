const benefits = [
  {
    icon: "⚡",
    title: "Calma Mental Inmediata",
    subtitle: "Técnicas de 5 Minutos que Funcionan",
    description: "Aprende respiración controlada, anclaje sensorial y técnicas de tierra que puedes aplicar en cualquier momento y lugar. Sin complicaciones, sin curva de aprendizaje. Resultados desde la primera aplicación."
  },
  {
    icon: "🧠",
    title: "Transformación de Pensamientos",
    subtitle: "Reprogramación Mental Científica",
    description: "Técnicas validadas de reestructuración cognitiva para identificar y transformar patrones de pensamiento que alimentan tu ansiedad. Cambia tu diálogo interno para siempre con métodos probados por neurociencia."
  },
  {
    icon: "💪",
    title: "Recuperación Total de Confianza",
    subtitle: "Vuelve a Vivir Sin Limitaciones",
    description: "Desarrolla herramientas para enfrentar situaciones que antes evitabas, recuperando el control de tu vida social y profesional. Técnicas de exposición gradual y construcción de autoeficacia."
  }
];

export const ThreeBenefitsSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Con este método vas a...
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-card hover:shadow-float transition-all duration-300 text-center border-t-4 border-primary"
              >
                <div className="text-6xl mb-6">{benefit.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-primary">
                  {benefit.title}
                </h3>
                <div className="text-lg font-semibold mb-4 text-urgent">
                  {benefit.subtitle}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-primary text-white p-8 rounded-2xl shadow-primary max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                🎯 Resultado Garantizado en 30 Días
              </h3>
              <p className="text-xl leading-relaxed">
                Si sigues el método correctamente y no ves mejorías significativas en tu ansiedad, 
                te devolvemos el 100% de tu dinero. Sin preguntas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};