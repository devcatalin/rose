import type {DirectusFile, GiocoMenuItem, GiocoOffer, GiocoSection} from './directus';
import type {MenuItem, Promotion} from './types';

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
}

/**
 * Transform GiocoMenuItem from Directus to MenuItem for the app
 */
export function transformDirectusMenuItem(item: GiocoMenuItem): MenuItem {
  const categoryObj = typeof item.category === 'object' ? item.category : null;

  return {
    id: String(item.id),
    name: item.title,
    description: item.description,
    price: item.price,
    smallPrice: item.price_small,
    image: getImageUrl(item.image),
    category: categoryObj ? String(categoryObj.id) : String(item.category),
    categoryName: categoryObj ? categoryObj.category : '',
  };
}

/**
 * Transform an array of GiocoMenuItem from Directus to MenuItem array
 */
export function transformDirectusMenuItems(items: GiocoMenuItem[]): MenuItem[] {
  return items.map(transformDirectusMenuItem);
}

/**
 * Transform GiocoOffer from Directus to Promotion for the app
 */
export function transformDirectusOffer(offer: GiocoOffer): Promotion {
  return {
    id: String(offer.id),
    title: offer.title,
    subtitle: offer.subtitle,
  };
}

/**
 * Transform an array of GiocoOffer from Directus to Promotion array
 */
export function transformDirectusOffers(offers: GiocoOffer[]): Promotion[] {
  return offers.map(transformDirectusOffer);
}

/**
 * Interface for transformed section data used by ContentSection component
 */
export interface TransformedSection {
  id: number;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  bulletPoints: {text: string}[];
}

/**
 * Transform GiocoSection from Directus to TransformedSection for the app
 */
export function transformDirectusSection(section: GiocoSection): TransformedSection {
  // Get the main image URL and description
  const imageObj = typeof section.image === 'object' ? section.image : null;
  const imageUrl = getImageUrl(section.image);
  const imageAlt = imageObj?.title || imageObj?.description || section.title;

  return {
    id: section.id,
    title: section.title,
    description: section.description,
    image: {
      src: imageUrl,
      alt: imageAlt,
    },
    bulletPoints: section.bulletPoints || [],
  };
}

/**
 * Transform an array of GiocoSection from Directus to TransformedSection array
 */
export function transformDirectusSections(sections: GiocoSection[]): TransformedSection[] {
  return sections.map(transformDirectusSection);
}
