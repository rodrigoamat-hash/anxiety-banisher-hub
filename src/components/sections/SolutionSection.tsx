const solutions = [
  {
    icon: "⚡",
    title: "Calmar tu Mente en Minutos",
    description: "Aprende técnicas de respiración y relajación que puedes aplicar en cualquier momento y lugar. Sin complicaciones, sin curva de aprendizaje."
  },
  {
    icon: "🎯",
    title: "Eliminar Pensamientos Negativos",
    description: "Técnicas validadas científicamente para identificar y transformar patrones de pensamiento que alimentan tu ansiedad."
  },
  {
    icon: "💪",
    title: "Recuperar tu Confianza",
    description: "Desarrolla herramientas para enfrentar situaciones que antes evitabas, recuperando el control de tu vida social y profesional."
  }
];

export const SolutionSection = () => {
  return (
    <section className="py-20 bg-gradient-success text-success-foreground">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          ¡La Solución Está Aquí!
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border-2 border-white/20 hover-lift shadow-card"
            >
              <div className="text-5xl mb-4">{solution.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
              <p className="text-lg leading-relaxed opacity-90">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};