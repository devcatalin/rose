import {useState} from 'react';

import {AboutSection} from '@/components/about-section';
import {ContactSection} from '@/components/contact-section';
import {ContentSection} from '@/components/content-section';
import {Footer} from '@/components/footer';
import {HeroSection} from '@/components/hero-section';
import {MobileCarousel} from '@/components/mobile-carousel';
import {SlideshowModal} from '@/components/slideshow-modal';
import {contentSections} from '@/data';

// Data has been extracted to separate files in the data folder
// See: src/data/contentSections.ts

export default function App() {
  const [currentSlideshow, setCurrentSlideshow] = useState<string | null>(null);

  const openSlideshow = (sectionId: string) => {
    setCurrentSlideshow(sectionId);
  };

  const closeSlideshow = () => {
    setCurrentSlideshow(null);
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <MobileCarousel />
      {contentSections
        .filter(section => section.id !== 'despre')
        .map(section => (
          <ContentSection
            key={section.id}
            {...section}
            buttonSpacing={section.id === 'funerare' ? 'normal' : 'extra'}
            onClick={section.buttonText === 'Vezi mai multe poze' ? () => openSlideshow(section.id) : undefined}
          />
        ))}
      <AboutSection />
      <ContactSection />
      <Footer />

      {/* Slideshow Modal */}
      {currentSlideshow && (
        <SlideshowModal
          isOpen={!!currentSlideshow}
          onClose={closeSlideshow}
          images={contentSections.find(s => s.id === currentSlideshow)?.gallery || []}
          sectionTitle={contentSections.find(s => s.id === currentSlideshow)?.title || ''}
        />
      )}
    </div>
  );
}
