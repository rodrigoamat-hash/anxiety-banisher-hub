const testimonials = [
  {
    text: "Después de años luchando con ataques de pánico nocturnos, finalmente encontré un método que realmente funciona. En 2 semanas dejé de tener ataques de pánico que me despertaban a las 3 AM. Ahora duermo tranquila.",
    author: "María González, España",
    rating: 5
  },
  {
    text: "Antes evitaba reuniones de trabajo por mi ansiedad social. Con estas técnicas pude presentar mi proyecto sin temblar ni sudar. Las herramientas son súper prácticas y las uso en cualquier momento.",
    author: "Carlos Mendoza, México", 
    rating: 5
  },
  {
    text: "Mi vida cambió completamente. Pasé de tener 5-6 ataques de pánico por semana a no tener ninguno en el último mes. El método es fácil de seguir y realmente efectivo.",
    author: "Ana Rodríguez, Colombia",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Lo que dicen nuestros usuarios
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card border-l-4 border-success hover-lift"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-lg leading-relaxed mb-6 text-card-foreground">
                "{testimonial.text}"
              </p>
              <div className="font-bold text-success text-lg">
                - {testimonial.author}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-success text-success-foreground px-8 py-4 rounded-xl inline-block">
            <p className="text-xl font-bold">
              🔥 MIENTRAS LEES ESTO: 156 usuarios reportaron mejorías esta semana
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};