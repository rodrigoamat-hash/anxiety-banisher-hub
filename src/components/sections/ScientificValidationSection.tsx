const validationPoints = [
  {
    icon: "🔬",
    title: "Técnicas Científicamente Validadas",
    description: "Basado en más de 20 años de investigación en neurociencia y psicología cognitiva. Métodos utilizados en las mejores clínicas de ansiedad del mundo, ahora disponibles en un formato simple y práctico."
  },
  {
    icon: "🚀",
    title: "Aplicación Inmediata",
    description: "Diseñado para personas sin experiencia previa. Cada técnica viene con instrucciones paso a paso, ejemplos reales y ejercicios prácticos que puedes implementar desde el día 1, sin necesidad de conocimientos técnicos."
  },
  {
    icon: "🎯",
    title: "Enfoque en Resultados Duraderos",
    description: "A diferencia de métodos que solo ofrecen alivio temporal, este sistema trabaja en las causas profundas de la ansiedad, creando cambios neurológicos permanentes que duran toda la vida."
  }
];

export const ScientificValidationSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              ¿Qué hace que este método entregue resultados reales?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              No es solo otro libro de autoayuda. Es un sistema completo basado en ciencia real.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {validationPoints.map((point, index) => (
              <div 
                key={index}
                className="bg-gradient-subtle p-8 rounded-2xl shadow-card hover:shadow-float transition-all duration-300 border border-primary/20"
              >
                <div className="text-5xl mb-6 text-center">{point.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-primary text-center">
                  {point.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-center">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="bg-primary text-white p-12 rounded-2xl shadow-primary text-center">
            <h3 className="text-3xl font-bold mb-6">
              📊 Respaldado por más de 1,247 casos de éxito
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-black mb-2">94%</div>
                <div className="text-lg">Reducción significativa de ansiedad en 30 días</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">87%</div>
                <div className="text-lg">Eliminación completa de ataques de pánico</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">96%</div>
                <div className="text-lg">Recomendarían el método a otros</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};