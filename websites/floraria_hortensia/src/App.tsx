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
      {contentSections.map((section, index) => {
        // Compute background gradient based on pattern
        let backgroundGradient =
          index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50';
        if (section.id === 'funerare') {
          backgroundGradient = 'bg-gradient-to-br from-gray-50 to-white';
        }

        return (
          <ContentSection
            key={section.id}
            {...section}
            buttonText="Vezi mai multe poze"
            imagePosition={index % 2 === 0 ? 'right' : 'left'}
            backgroundGradient={backgroundGradient}
            buttonSpacing={section.id === 'funerare' ? 'normal' : 'extra'}
            onClick={() => openSlideshow(section.id)}
          />
        );
      })}
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
