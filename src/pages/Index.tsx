import { useState, useEffect } from 'react';
import { StickyHeader } from '@/components/StickyHeader';
import { HeroSection } from '@/components/sections/HeroSection';
import { ActivityFeed } from '@/components/ActivityFeed';
import { PainSection } from '@/components/sections/PainSection';
import { HopeTransitionSection } from '@/components/sections/HopeTransitionSection';
import { SolutionPresentationSection } from '@/components/sections/SolutionPresentationSection';
import { ThreeBenefitsSection } from '@/components/sections/ThreeBenefitsSection';
import { ScientificValidationSection } from '@/components/sections/ScientificValidationSection';
import { ThreeStepsProcessSection } from '@/components/sections/ThreeStepsProcessSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContentSpecificSection } from '@/components/sections/ContentSpecificSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { BonusesSection } from '@/components/sections/BonusesSection';
import { ProfessionalBackingSection } from '@/components/sections/ProfessionalBackingSection';
import { FinalFooterSection } from '@/components/sections/FinalFooterSection';
import { FloatingCTA } from '@/components/FloatingCTA';
import { ExitIntentModal } from '@/components/ExitIntentModal';

const Index = () => {
  const [spacesLeft, setSpacesLeft] = useState(23);
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);
  const [exitModalShown, setExitModalShown] = useState(false);

  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitModalShown) {
        setIsExitModalOpen(true);
        setExitModalShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [exitModalShown]);

  // Simulate space reduction
  useEffect(() => {
    const interval = setInterval(() => {
      setSpacesLeft(prev => Math.max(1, prev - Math.floor(Math.random() * 2)));
    }, 180000); // Reduce every 3 minutes

    return () => clearInterval(interval);
  }, []);

  const handlePurchaseClick = () => {
    // Simulate purchase flow
    alert('¡Redirigiendo al checkout seguro! 🔒\n\nEn una aplicación real, aquí se integraría con un procesador de pagos como Stripe o PayPal.');
  };

  const handleExitModalAccept = () => {
    handlePurchaseClick();
  };

  return (
    <div className="min-h-screen bg-gradient-bg">
      <StickyHeader spacesLeft={spacesLeft} />
      
      <main>
        <HeroSection 
          spacesLeft={spacesLeft} 
          onCTAClick={handlePurchaseClick}
        />
        
        {/* Activity Feed */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-6">
            <ActivityFeed />
          </div>
        </section>
        
        <PainSection />
        <HopeTransitionSection />
        <SolutionPresentationSection />
        <ThreeBenefitsSection />
        <ScientificValidationSection />
        <ThreeStepsProcessSection />
        <TestimonialsSection />
        <ContentSpecificSection />
        <PricingSection 
          spacesLeft={spacesLeft}
          onPurchaseClick={handlePurchaseClick}
        />
        <BonusesSection />
        <ProfessionalBackingSection />
        <FinalFooterSection onPurchaseClick={handlePurchaseClick} />
      </main>

      <FloatingCTA onClick={handlePurchaseClick} />
      
      <ExitIntentModal
        isOpen={isExitModalOpen}
        onClose={() => setIsExitModalOpen(false)}
        onAccept={handleExitModalAccept}
      />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Método Comprobado para Vencer la Ansiedad",
            "description": "Curso digital para superar la ansiedad con técnicas científicamente probadas",
            "offers": {
              "@type": "Offer",
              "price": "12",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "validThrough": new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "156"
            }
          })
        }}
      />
    </div>
  );
};

export default Index;