export const SolutionPresentationSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            <span className="text-success">¡La Solución Está Aquí!</span>
          </h2>
          
          <div className="bg-gradient-primary text-white p-12 rounded-2xl shadow-float mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              "Método Comprobado para Vencer la Ansiedad: Guía Completa de Transformación"
            </h3>
            <p className="text-xl leading-relaxed">
              resuelve todos estos problemas de una vez.
            </p>
          </div>
          
          <p className="text-2xl text-foreground leading-relaxed mb-12 max-w-4xl mx-auto">
            Una guía completa que te permite <span className="font-bold text-primary">recuperar el control total de tu mente y emociones</span> en semanas, 
            con técnicas probadas, ejercicios prácticos y resultados que realmente perduran.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-secondary p-8 rounded-lg border-l-4 border-success">
              <h4 className="text-2xl font-bold mb-4 text-success">✅ Lo que SÍ obtienes</h4>
              <ul className="text-left space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-success font-bold">•</span>
                  Técnicas científicamente validadas
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-success font-bold">•</span>
                  Aplicación inmediata desde día 1
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-success font-bold">•</span>
                  Resultados visibles en 2-3 semanas
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-success font-bold">•</span>
                  Método paso a paso simple
                </li>
              </ul>
            </div>
            
            <div className="bg-secondary p-8 rounded-lg border-l-4 border-urgent">
              <h4 className="text-2xl font-bold mb-4 text-urgent">❌ Lo que NO necesitas</h4>
              <ul className="text-left space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-urgent font-bold">•</span>
                  Años de terapia costosa
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-urgent font-bold">•</span>
                  Medicamentos con efectos secundarios
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-urgent font-bold">•</span>
                  Experiencia previa en psicología
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-urgent font-bold">•</span>
                  Complicadas rutinas diarias
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};