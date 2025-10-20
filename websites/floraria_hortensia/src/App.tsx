import {useState} from 'react';
import {Helmet} from 'react-helmet-async';

import {AboutSection} from '@/components/about-section';
import {ContactSection} from '@/components/contact-section';
import {ContentSection} from '@/components/content-section';
import {Footer} from '@/components/footer';
import {HeroSection} from '@/components/hero-section';
import {MobileCarousel} from '@/components/mobile-carousel';
import {SlideshowModal} from '@/components/slideshow-modal';
import {transformDirectusSections} from '@/data/transformers';
import {useDirectusDetails} from '@/hooks/useDirectusDetails';
import {useDirectusSections} from '@/hooks/useDirectusSections';
import {useDirectusShare} from '@/hooks/useDirectusShare';

// Static data kept for reference in src/data/contentSections.ts
// Website now uses data from Directus CMS

export default function App() {
  const [currentSlideshow, setCurrentSlideshow] = useState<string | null>(null);
  const {data: directusSections, loading: sectionsLoading, error: sectionsError} = useDirectusSections();
  const {data: siteDetails, loading: detailsLoading, error: detailsError} = useDirectusDetails();
  const {data: shareData} = useDirectusShare();

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

  // SEO defaults - fallback to Directus data when available
  const directusUrl = import.meta.env.VITE_DIRECTUS_URL || 'https://cms.devcatalin.com';
  const defaultTitle = 'Florăria Hortensia';
  const defaultDescription =
    'Florăria Hortensia oferă aranjamente florale unice pentru orice ocazie. Flori proaspete și design personalizat pentru momentele tale speciale.';
  const defaultImageUrl = `${window.location.origin}/og-image-hortensia.jpg`; // You can add this image later

  const pageTitle = shareData?.share_title || defaultTitle;
  const pageDescription = shareData?.share_description || defaultDescription;
  const pageImage: string =
    shareData?.share_image && typeof shareData.share_image === 'object'
      ? `${directusUrl}/assets/${shareData.share_image.id}`
      : typeof shareData?.share_image === 'string'
        ? shareData.share_image
        : defaultImageUrl;

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDescription} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={window.location.href} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content={pageImage} />
      </Helmet>

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
