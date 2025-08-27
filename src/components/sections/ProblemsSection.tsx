const problems = [
  {
    icon: "🌙",
    title: "Noches sin dormir",
    description: "¿Te quedas despierto hasta altas horas, con la mente acelerada, repasando problemas una y otra vez, mientras el cansancio se acumula día tras día?"
  },
  {
    icon: "💓",
    title: "Ataques de pánico inesperados",
    description: "¿Has sentido esa sensación abrumadora de miedo que aparece de la nada, con el corazón acelerado, sudoración y la sensación de que algo terrible va a pasar?"
  },
  {
    icon: "🧠",
    title: "Preocupación constante",
    description: "¿Tu mente no para de crear escenarios negativos sobre el futuro, impidiéndote disfrutar el presente y manteniéndote en un estado de alerta permanente?"
  }
];

export const ProblemsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Seamos honestos... ¿cuántas veces ya has vivido esto?
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-muted/50 border-l-4 border-urgent rounded-lg p-8 shadow-card hover-lift"
            >
              <h3 className="text-2xl font-bold text-urgent mb-4 flex items-center">
                <span className="mr-3 text-3xl">{problem.icon}</span>
                {problem.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-urgent text-urgent-foreground px-8 py-4 rounded-xl max-w-3xl mx-auto font-bold text-lg animate-pulse-urgent">
            ⚠️ VENTANA DE OPORTUNIDAD NEUROLÓGICA: Cada hora que postpongas, tu cerebro se adapta más al patrón ansioso
          </div>
        </div>
      </div>
    </section>
  );
};