import {createDirectus, rest} from '@directus/sdk';

// Define the schema for your Directus collections
export interface DirectusFile {
  id: string;
  filename_download: string;
  title?: string;
  description?: string;
  width?: number;
  height?: number;
}

export interface HortensiaGallery {
  id: number;
  description: string;
  image: string | DirectusFile;
}

export interface HortensiaSection {
  id: number;
  title: string;
  description?: string;
  image: string | DirectusFile;
  bulletPoints?: {text: string}[];
  note?: string;
  sort?: number;
  gallery?: {
    hortensia_gallery_id: HortensiaGallery | number;
  }[];
}

export interface HortensiaAbout {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface HortensiaDetails {
  id: number;
  primary_phone_number: string;
  secondary_phone_number: string;
  schedule: string;
  short_about: string;
  slideshow?: {
    hortensia_gallery_id: HortensiaGallery | number;
  }[];
}

export interface HortensiaShare {
  id: number;
  share_title: string;
  share_description: string;
  share_image: string | DirectusFile;
}

// Define the complete schema for your Directus instance
// Add new collections here as you create them in Directus
export interface DirectusSchema {
  hortensia_sections: HortensiaSection[];
  hortensia_gallery: HortensiaGallery[];
  hortensia_about: HortensiaAbout[];
  hortensia_details: HortensiaDetails; // Singleton, not an array
  hortensia_share: HortensiaShare; // Singleton, not an array
  // Add more collections here as needed:
  // example_collection: ExampleType[];
}

// Get the Directus URL from environment variables or use a default
const directusUrl = import.meta.env.VITE_DIRECTUS_URL || 'https://cms.devcatalin.com';

// Create and configure the Directus client with rest() for API access
export const directus = createDirectus<DirectusSchema>(directusUrl).with(rest());

// Helper function to check if Directus is reachable
export async function checkDirectusConnection(): Promise<boolean> {
  try {
    await fetch(`${directusUrl}/server/ping`);
    return true;
  } catch (error) {
    console.error('Failed to connect to Directus:', error);
    return false;
  }
}
