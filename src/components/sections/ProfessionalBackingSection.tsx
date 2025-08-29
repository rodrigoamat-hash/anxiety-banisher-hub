const backingPoints = [
  {
    icon: "🧬",
    title: "Basado en Terapia Cognitivo-Conductual (TCC)",
    description: "Enfoque probado mundialmente como el más efectivo para trastornos de ansiedad, utilizado en las mejores clínicas especializadas de Estados Unidos y Europa."
  },
  {
    icon: "📊",
    title: "Respaldado por investigación científica",
    description: "Más de 20 años de estudios en neurociencia demuestran la efectividad de estas técnicas en la regulación del sistema nervioso y reducción de síntomas ansiosos."
  },
  {
    icon: "👨‍⚕️",
    title: "Utilizado por profesionales",
    description: "Métodos aplicados por psicólogos clínicos, psiquiatras y terapeutas especializados en trastornos de ansiedad en más de 40 países worldwide."
  }
];

export const ProfessionalBackingSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Respaldo Profesional Sólido
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              No es solo otro método de autoayuda. Es ciencia aplicada con resultados medibles.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {backingPoints.map((point, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-card hover:shadow-float transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-6">{point.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {point.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="bg-white border-2 border-primary rounded-2xl p-10 shadow-card text-center">
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              🏆 Certificación y Validación Internacional
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-black text-primary mb-2">20+</div>
                <div className="text-muted-foreground">Años de investigación científica</div>
              </div>
              <div>
                <div className="text-3xl font-black text-primary mb-2">40+</div>
                <div className="text-muted-foreground">Países utilizando estos métodos</div>
              </div>
              <div>
                <div className="text-3xl font-black text-primary mb-2">1,247</div>
                <div className="text-muted-foreground">Casos documentados de éxito</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};