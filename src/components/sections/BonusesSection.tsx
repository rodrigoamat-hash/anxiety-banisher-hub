const bonuses = [
  {
    number: 1,
    title: "Consejos para deshacerse del estrés",
    description: "Métodos 100% naturales para bajar el estrés cotidiano y recuperar tu equilibrio emocional. Técnicas probadas que complementan perfectamente tu proceso de sanación.",
    value: "$15"
  },
  {
    number: 2,
    title: "Los secretos de la pasión por uno mismo",
    description: "Autocuidado y autoestima para sostener tu progreso y mantener una relación saludable contigo mismo. Herramientas esenciales para el amor propio.",
    value: "$15"
  },
  {
    number: 3,
    title: "Técnicas para redefinir la mente",
    description: "Reencuadre mental y ejercicios de enfoque para transformar patrones de pensamiento negativos. Cambia tu diálogo interno para siempre.",
    value: "$15"
  }
];

export const BonusesSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              🎁 BONOS INCLUIDOS GRATIS
            </h2>
            <p className="text-xl text-muted-foreground">
              Herramientas adicionales que potencian tu transformación
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {bonuses.map((bonus, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-primary rounded-2xl p-8 shadow-card hover:shadow-float transition-all duration-300 relative"
              >
                <div className="absolute -top-4 left-6">
                  <span className="bg-success text-white px-4 py-2 rounded-full text-sm font-bold">
                    Valor {bonus.value} - Hoy GRATIS
                  </span>
                </div>
                
                <div className="mt-4">
                  <div className="text-3xl font-black text-primary mb-4">
                    BONO {bonus.number}:
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {bonus.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {bonus.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-primary text-white p-8 rounded-2xl shadow-primary max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                💰 Valor Total de los Bonos: $45
              </h3>
              <p className="text-xl leading-relaxed">
                Incluidos GRATIS con tu método completo. Solo paga $12 por todo el paquete.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};