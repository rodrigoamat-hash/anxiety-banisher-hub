interface FinalFooterSectionProps {
  onPurchaseClick?: () => void;
}

export const FinalFooterSection = ({ onPurchaseClick }: FinalFooterSectionProps) => {
  return (
    <section className="py-20 bg-gradient-primary text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Tu nueva vida libre de ansiedad empieza hoy
          </h2>
          
          <p className="text-xl mb-12 leading-relaxed">
            Miles de personas ya dieron el paso. No dejes que la ansiedad controle un día más de tu vida.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-12">
            <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
              <div className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-success rounded-full"></div>
                <span className="font-semibold">Descarga inmediata</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-success rounded-full"></div>
                <span className="font-semibold">Garantía de 7 días</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-success rounded-full"></div>
                <span className="font-semibold">3 bonos incluidos</span>
              </div>
            </div>
          </div>
          
          <button
            onClick={onPurchaseClick}
            className="bg-white text-primary px-16 py-8 text-2xl md:text-3xl font-black rounded-2xl shadow-float hover:shadow-glow transition-all duration-300 transform hover:scale-105 mb-8"
          >
            TRANSFORMAR MI VIDA - $12
          </button>
          
          <div className="text-lg mb-8 text-white/90">
            Descarga segura + Garantía 7 días
          </div>
          
          <div className="border-t border-white/20 pt-8 text-white/70">
            <p className="mb-4">
              © 2024 Método Comprobado para Vencer la Ansiedad. Todos los derechos reservados.
            </p>
            <p className="text-sm">
              Para consultas: contacto@metodoansiedad.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};