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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          ¿Te identificas con estas situaciones?
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Miles de personas experimentan estos síntomas diariamente. No estás solo en esta lucha.
        </p>
        
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 shadow-card hover-lift text-center"
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-warning/10 border border-warning/20 text-warning-foreground px-8 py-6 rounded-xl max-w-3xl mx-auto">
            <p className="font-medium">
              <strong>Importante:</strong> Cuanto antes actúes, más efectivo será el tratamiento. 
              La ansiedad tiende a reforzarse con el tiempo si no se aborda adecuadamente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};