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
    <section className="py-20 bg-gradient-to-br from-background to-accent/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground leading-tight">
          Seamos honestos... ¿cuántas veces ya has vivido esto?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 hover-lift hover-glow shadow-card group transition-all duration-500 animate-fade-in-up">
            <div className="w-16 h-16 bg-gradient-to-br from-urgent to-urgent-glow rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">🌙</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-card-foreground group-hover:text-primary transition-colors duration-300">Noches sin dormir</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              ¿Te quedas despierto hasta altas horas, con la mente acelerada, repasando problemas una y otra vez, mientras el cansancio se acumula día tras día?
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 hover-lift hover-glow shadow-card group transition-all duration-500 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="w-16 h-16 bg-gradient-to-br from-urgent to-urgent-glow rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">💓</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-card-foreground group-hover:text-primary transition-colors duration-300">Ataques de pánico inesperados</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              ¿Has sentido esa sensación abrumadora de miedo que aparece de la nada, con el corazón acelerado, sudoración y la sensación de que algo terrible va a pasar?
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-2xl p-8 hover-lift hover-glow shadow-card group transition-all duration-500 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="w-16 h-16 bg-gradient-to-br from-urgent to-urgent-glow rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">🧠</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-card-foreground group-hover:text-primary transition-colors duration-300">Preocupación constante</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              ¿Tu mente no para de crear escenarios negativos sobre el futuro, impidiéndote disfrutar el presente y manteniéndote en un estado de alerta permanente?
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="bg-warning/10 backdrop-blur-sm border border-warning/20 text-warning-foreground px-8 py-6 rounded-2xl max-w-3xl mx-auto hover-lift shadow-card">
            <p className="font-medium text-lg">
              <strong>Importante:</strong> Cuanto antes actúes, más efectivo será el tratamiento. 
              La ansiedad tiende a reforzarse con el tiempo si no se aborda adecuadamente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};