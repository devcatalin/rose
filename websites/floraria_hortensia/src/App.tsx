import {useState} from 'react';

import {AboutSection} from '@/components/about-section';
import {ContactSection} from '@/components/contact-section';
import {ContentSection} from '@/components/content-section';
import {Footer} from '@/components/footer';
import {HeroSection} from '@/components/hero-section';
import {MobileCarousel} from '@/components/mobile-carousel';
import {SlideshowModal} from '@/components/slideshow-modal';
import {useDirectusDetails} from '@/hooks/useDirectusDetails';
import {useDirectusSections} from '@/hooks/useDirectusSections';
import {transformDirectusSections} from '@/data/transformers';

// Static data kept for reference in src/data/contentSections.ts
// Website now uses data from Directus CMS

export default function App() {
  const [currentSlideshow, setCurrentSlideshow] = useState<string | null>(null);
  const {data: directusSections, loading: sectionsLoading, error: sectionsError} = useDirectusSections();
  const {data: siteDetails, loading: detailsLoading, error: detailsError} = useDirectusDetails();

  const openSlideshow = (sectionId: string) => {
    setCurrentSlideshow(sectionId);
  };

  const closeSlideshow = () => {
    setCurrentSlideshow(null);
  };

  // Show loading state
  if (sectionsLoading || detailsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          <p className="mt-4 text-gray-600">Se încarcă...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (sectionsError || detailsError || !directusSections || !siteDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <div className="text-red-600 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Eroare la încărcare</h2>
          <p className="text-gray-600 mb-4">Nu am putut încărca datele de la server. Vă rugăm să reîncărcați pagina.</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Reîncarcă pagina
          </button>
        </div>
      </div>
    );
  }

  const sections = transformDirectusSections(directusSections);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection sections={sections} siteDetails={siteDetails} />
      <MobileCarousel siteDetails={siteDetails} />
      {sections.map((section, index) => (
        <ContentSection
          key={section.id}
          {...section}
          buttonText="Vezi mai multe poze"
          imagePosition={index % 2 === 0 ? 'right' : 'left'}
          backgroundGradient={index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50'}
          buttonSpacing="extra"
          onClick={() => openSlideshow(section.id)}
        />
      ))}
      <AboutSection />
      <ContactSection siteDetails={siteDetails} />
      <Footer sections={sections} siteDetails={siteDetails} />

      {/* Slideshow Modal */}
      {currentSlideshow && (
        <SlideshowModal
          isOpen={!!currentSlideshow}
          onClose={closeSlideshow}
          images={sections.find(s => s.id === currentSlideshow)?.gallery || []}
          sectionTitle={sections.find(s => s.id === currentSlideshow)?.title || ''}
        />
      )}
    </div>
  );
}
