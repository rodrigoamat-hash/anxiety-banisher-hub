const learningItems = [
  {
    title: "Técnica de Respiración 4-7-8 Modificada",
    description: "Protocolo específico para detener ataques de pánico en menos de 3 minutos"
  },
  {
    title: "Método de Anclaje Sensorial 5-4-3-2-1",
    description: "Sistema de conexión con el presente para interrumpir espirales ansiosos"
  },
  {
    title: "Reestructuración Cognitiva con Preguntas Socráticas",
    description: "Técnicas para identificar y cambiar pensamientos automáticos negativos"
  },
  {
    title: "Protocolo de Exposición Gradual Personalizada",
    description: "Plan sistemático para enfrentar situaciones evitadas sin recaer"
  },
  {
    title: "Ejercicios de Relajación Muscular Progresiva Express",
    description: "Rutinas de 5-15 minutos para liberar tensión física acumulada"
  },
  {
    title: "Sistema de Regulación del Ciclo del Sueño",
    description: "Técnicas específicas para recuperar patrones de sueño saludables"
  },
  {
    title: "Mindfulness Adaptado para Ansiedad (MAA)",
    description: "Meditaciones específicas que no agravan estados ansiosos"
  },
  {
    title: "Plan de Prevención de Recaídas de 90 Días",
    description: "Estrategias para mantener el progreso y evitar retrocesos"
  }
];

export const ContentSpecificSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Lo que aprenderás en esta guía
            </h2>
            <p className="text-xl text-muted-foreground">
              Contenido específico y aplicable desde el primer día
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {learningItems.map((item, index) => (
              <div 
                key={index}
                className="bg-secondary border-l-4 border-primary p-6 rounded-lg shadow-card hover:shadow-float transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3 text-primary">
                  ✓ {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-gradient-primary text-white p-8 rounded-2xl shadow-primary max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                📚 +127 páginas de contenido práctico
              </h3>
              <p className="text-lg leading-relaxed">
                Sin relleno teórico. Solo técnicas que funcionan, explicadas paso a paso con ejemplos reales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};