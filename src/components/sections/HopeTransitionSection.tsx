export const HopeTransitionSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
            El control de la ansiedad ya está<br />
            <span className="text-success">al alcance de tus manos hoy.</span>
          </h2>
          
          <div className="text-2xl md:text-3xl font-semibold mb-8 text-foreground">
            Y esto es solo el comienzo.
          </div>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Mientras muchos siguen luchando con terapias costosas e ineficaces que toman años, 
            tú puedes estar aplicando técnicas comprobadas que transforman vidas en cuestión de semanas.
          </p>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-card">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2 text-primary">Resultados Rápidos</h3>
              <p className="text-muted-foreground">Técnicas que funcionan desde la primera aplicación</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-card">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-2 text-primary">Base Científica</h3>
              <p className="text-muted-foreground">Métodos respaldados por neurociencia moderna</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-card">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2 text-primary">Transformación Real</h3>
              <p className="text-muted-foreground">Cambios profundos y duraderos en tu vida</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};