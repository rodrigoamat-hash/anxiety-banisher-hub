import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface ExitIntentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept?: () => void;
}

export const ExitIntentModal = ({ isOpen, onClose, onAccept }: ExitIntentModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const handleAccept = () => {
    onAccept?.();
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`bg-card rounded-2xl p-8 max-w-md w-full relative shadow-float transition-transform duration-300 ${isVisible ? 'scale-100' : 'scale-95'}`}>
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-urgent mb-4">
            ⚠️ ¡ESPERA! ¿VAS A DEJAR QUE LA ANSIEDAD GANE?
          </h2>
          
          <div className="bg-gradient-urgent text-urgent-foreground rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold mb-2">🚨 ÚLTIMO DESCUENTO DISPONIBLE:</h3>
            <div className="text-3xl font-bold mb-2">$12 → $8</div>
            <p className="text-sm">SOLO por los próximos 10 minutos</p>
          </div>
          
          <ul className="text-left mb-6 space-y-2">
            <li className="flex items-center">✓ Método completo + 3 bonos</li>
            <li className="flex items-center">✓ Garantía total 7 días</li>
            <li className="flex items-center">✓ Descarga inmediata</li>
          </ul>
          
          <button
            onClick={handleAccept}
            className="w-full bg-gradient-urgent text-urgent-foreground py-4 px-6 rounded-xl font-bold text-lg hover-lift shadow-urgent animate-pulse-urgent"
          >
            TOMAR MI ÚLTIMA OPORTUNIDAD - $8
          </button>
          
          <p className="text-sm text-muted-foreground mt-4">
            <em>*Esta ventana no aparecerá de nuevo*</em>
          </p>
        </div>
      </div>
    </div>
  );
};