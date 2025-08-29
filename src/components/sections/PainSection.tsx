const painPoints = [
  {
    title: "Noches sin dormir",
    description: "¿Te quedas despierto hasta las 2, 3, 4 de la madrugada, con la mente acelerada, repasando problemas una y otra vez, mientras el cansancio se acumula día tras día y afecta tu rendimiento laboral?"
  },
  {
    title: "Ataques de pánico inesperados",
    description: "¿Has sentido esa sensación abrumadora de miedo que aparece de la nada en el supermercado, en reuniones, o manejando, con el corazón acelerado a 120 pulsaciones, sudoración y la sensación de que algo terrible va a pasar?"
  },
  {
    title: "Evitar situaciones sociales",
    description: "¿Cancelas planes con amigos, evitas presentaciones en el trabajo, o sientes pánico al pensar en hablar en público, limitando tus oportunidades de crecimiento personal y profesional?"
  },
  {
    title: "Síntomas físicos constantes",
    description: "¿Experimentas tensión muscular permanente en cuello y hombros, dolores de cabeza frecuentes, problemas digestivos, o sensación de ahogo que te hacen visitar médicos sin encontrar causas físicas?"
  },
  {
    title: "Preocupación constante por el futuro",
    description: "¿Tu mente no para de crear escenarios catastróficos sobre problemas que aún no han pasado, impidiéndote disfrutar el presente y manteniéndote en un estado de alerta permanente las 24 horas del día?"
  }
];

export const PainSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Seamos honestos... ¿cuántas veces ya has vivido esto?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              La ansiedad puede estar controlando tu vida de maneras que ni siquiera te das cuenta.
            </p>
          </div>
          
          <div className="space-y-8">
            {painPoints.map((pain, index) => (
              <div 
                key={index}
                className="bg-secondary border-l-4 border-urgent p-8 rounded-lg shadow-card hover:shadow-float transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-urgent">
                  {pain.title}
                </h3>
                <p className="text-lg text-foreground leading-relaxed">
                  {pain.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-gradient-subtle border border-warning/30 p-8 rounded-lg shadow-card">
              <h3 className="text-2xl font-bold mb-4 text-warning">
                ⚠️ IMPORTANTE: Cada día que esperas, la ansiedad se fortalece
              </h3>
              <p className="text-lg text-foreground leading-relaxed">
                Los patrones ansiosos se refuerzan neurológicamente cada día que no se abordan. 
                Cuanto antes actúes, más rápidos y efectivos serán los resultados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};