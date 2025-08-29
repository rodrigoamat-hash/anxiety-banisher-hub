export const ThreeStepsProcessSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Cómo funciona en la práctica:
            </h2>
            <p className="text-xl text-muted-foreground">
              Un sistema simple de 3 pasos que transforma tu relación con la ansiedad
            </p>
          </div>
          
          <div className="space-y-12">
            {/* Paso 1 */}
            <div className="bg-white p-10 rounded-2xl shadow-card border-l-8 border-primary">
              <div className="flex items-start gap-6">
                <div className="bg-primary text-white text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-primary">
                    PASO 1: IDENTIFICACIÓN INTELIGENTE
                  </h3>
                  <div className="text-xl font-semibold mb-4 text-urgent">
                    "Mapeo completo de tus patrones ansiosos únicos"
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Como un GPS emocional, primero necesitas saber exactamente dónde estás para llegar donde quieres ir. 
                    Te enseño a identificar tus triggers específicos, patrones de pensamiento automáticos, y las señales 
                    físicas tempranas que tu cuerpo envía antes de que la ansiedad tome control.
                  </p>
                  <div className="bg-secondary p-4 rounded-lg">
                    <h4 className="font-bold mb-2 text-foreground">Incluye herramientas como:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Diario de Mapeo Ansioso (formato específico)</li>
                      <li>Test de Identificación de Triggers Personales</li>
                      <li>Escala de Intensidad Física y Emocional</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Paso 2 */}
            <div className="bg-white p-10 rounded-2xl shadow-card border-l-8 border-success">
              <div className="flex items-start gap-6">
                <div className="bg-success text-white text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-success">
                    PASO 2: TÉCNICAS DE INTERVENCIÓN RÁPIDA
                  </h3>
                  <div className="text-xl font-semibold mb-4 text-urgent">
                    "Herramientas de Calma en 5 Minutos"
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    El arsenal completo de técnicas de intervención inmediata que detienen la ansiedad en su momento más intenso. 
                    Cada técnica está diseñada para trabajar en diferentes situaciones y niveles de intensidad.
                  </p>
                  <div className="bg-secondary p-4 rounded-lg">
                    <h4 className="font-bold mb-2 text-foreground">Técnicas incluidas:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Respiración 4-7-8 Modificada para Ansiedad Aguda</li>
                      <li>Técnica de Anclaje Sensorial 5-4-3-2-1</li>
                      <li>Relajación Muscular Progresiva Express</li>
                      <li>Método de Parada de Pensamiento por Interrupción</li>
                      <li>Visualización de Lugar Seguro Personalizado</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Paso 3 */}
            <div className="bg-white p-10 rounded-2xl shadow-card border-l-8 border-warning">
              <div className="flex items-start gap-6">
                <div className="bg-warning text-white text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-warning">
                    PASO 3: TRANSFORMACIÓN PROFUNDA
                  </h3>
                  <div className="text-xl font-semibold mb-4 text-urgent">
                    "Cambios Permanentes en tu Vida"
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Recibes no 1, sino 7 estrategias complementarias para crear cambios duraderos en tu sistema nervioso 
                    y patrones de pensamiento. Aquí es donde la verdadera transformación ocurre.
                  </p>
                  <div className="bg-secondary p-4 rounded-lg">
                    <h4 className="font-bold mb-2 text-foreground">Estrategias avanzadas:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Reestructuración Cognitiva con Método Socrático</li>
                      <li>Exposición Gradual Sistemática Personalizada</li>
                      <li>Técnicas de Mindfulness Adaptadas para Ansiedad</li>
                      <li>Protocolo de Regulación del Sistema Nervioso</li>
                      <li>Plan de Mantenimiento a Largo Plazo</li>
                      <li>Sistema de Prevención de Recaídas</li>
                      <li>Ejercicios de Fortalecimiento de Autoeficacia</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-gradient-primary text-white p-8 rounded-2xl shadow-primary max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                ⏱️ Tiempo total de implementación: 30-45 días
              </h3>
              <p className="text-lg leading-relaxed">
                Cada paso se construye sobre el anterior, creando una transformación sólida y permanente. 
                No más parches temporales, sino una solución real y duradera.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};