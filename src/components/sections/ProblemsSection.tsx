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
    <section className="py-24 lg:py-32 bg-gradient-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-urgent/10 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-warning/10 rounded-full blur-3xl floating" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-foreground leading-tight bounce-in">
            Seamos honestos...
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light bounce-in" style={{animationDelay: '0.2s'}}>
            ¿Cuántas veces ya has vivido esto?
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto mb-20">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group glass-effect rounded-3xl p-8 lg:p-10 hover-lift shadow-card transition-all duration-700 bounce-in" 
              style={{animationDelay: `${0.4 + index * 0.2}s`}}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-urgent/20 to-urgent-glow/20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <span className="text-4xl">{problem.icon}</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors duration-500">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg lg:text-xl">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center bounce-in" style={{animationDelay: '1s'}}>
          <div className="glass-effect border border-warning/30 text-foreground px-8 lg:px-12 py-8 rounded-3xl max-w-4xl mx-auto hover-lift shadow-card">
            <div className="flex items-center justify-center mb-4">
              <div className="w-3 h-3 bg-warning rounded-full animate-pulse mr-3"></div>
              <span className="text-warning font-bold text-lg">IMPORTANTE</span>
            </div>
            <p className="font-medium text-lg lg:text-xl leading-relaxed">
              Cuanto antes actúes, más efectivo será el tratamiento. 
              La ansiedad tiende a <span className="text-urgent font-bold">reforzarse con el tiempo</span> si no se aborda adecuadamente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};