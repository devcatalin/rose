import type {ContentSection} from '@/data/static/types';
import slugify from 'slugify';

import type {DirectusFile, HortensiaSection} from './directus';

/**
 * Get the Directus URL from environment variables or use a default
 */
const directusUrl = import.meta.env.VITE_DIRECTUS_URL || 'https://cms.devcatalin.com';

/**
 * Transform a DirectusFile object or UUID to a full image URL
 */
function getImageUrl(image: string | DirectusFile | undefined): string {
  if (!image) {
    return '';
  }

  if (typeof image === 'string') {
    // It's a UUID, construct the URL
    return `${directusUrl}/assets/${image}`;
  }

  // It's a DirectusFile object
  // Prefer filename_download if available, otherwise use id
  if (image.filename_download) {
    return `${directusUrl}/assets/${image.id}?download=${encodeURIComponent(image.filename_download)}`;
  }

  return `${directusUrl}/assets/${image.id}`;
} /**
 * Transform HortensiaSection from Directus to ContentSection for the app
 */
export function transformDirectusSection(section: HortensiaSection): ContentSection {
  // Get the main image URL and description
  const imageObj = typeof section.image === 'object' ? section.image : null;
  const imageUrl = getImageUrl(section.image);
  const imageAlt = imageObj?.title || imageObj?.description || section.title;

  // Transform gallery items
  const gallery =
    section.gallery?.map(item => {
      const galleryItem = typeof item.hortensia_gallery_id === 'object' ? item.hortensia_gallery_id : null;

      if (!galleryItem) {
        return {
          src: '',
          description: '',
        };
      }

      return {
        src: getImageUrl(galleryItem.image),
        description: galleryItem.description || '',
      };
    }) || [];

  // Transform bullet points - they're already in the correct format from Directus
  const bulletPoints = section.bulletPoints || [];

  // Create a slugified ID from the title for nice URLs
  const slugId = slugify(section.title, {
    replacement: '-',
    lower: true,
    strict: true,
    locale: 'ro',
    trim: true,
  });

  // Create the ContentSection object
  const contentSection: ContentSection = {
    id: slugId,
    title: section.title,
    description: section.description || '',
    image: {
      src: imageUrl,
      alt: imageAlt,
    },
    bulletPoints,
    gallery,
  };

  // Add note if it exists
  if (section.note) {
    contentSection.note = {
      text: section.note,
      isStrong: section.note.includes('Nu oferim'), // Mark as strong if it's a disclaimer
    };
  }

  return contentSection;
}

/**
 * Transform an array of HortensiaSection from Directus to ContentSection array
 */
export function transformDirectusSections(sections: HortensiaSection[]): ContentSection[] {
  return sections.map(transformDirectusSection);
}
