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

export interface GiocoMenuCategory {
  id: number;
  sort?: number;
  category: string;
}

export interface GiocoMenuItem {
  id: number;
  title: string;
  image: string | DirectusFile;
  description: string;
  category: number | GiocoMenuCategory;
  price: string;
  price_small?: string;
}

export interface GiocoOffer {
  id: number;
  sort?: number;
  title: string;
  subtitle: string;
}

export interface GiocoDetails {
  id: number;
  title: string;
  about: string;
  schedule: string;
  phone_number: string;
}

// Define the complete schema for your Directus instance
export interface DirectusSchema {
  gioco_menu_categories: GiocoMenuCategory[];
  gioco_menu_items: GiocoMenuItem[];
  gioco_offers: GiocoOffer[];
  gioco_details: GiocoDetails; // Singleton, not an array
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
