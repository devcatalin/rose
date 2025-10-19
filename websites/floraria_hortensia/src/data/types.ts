// Type definitions for floraria_hortensia app data

export interface GalleryImage {
  src: string;
  description: string;
}

export interface BulletPoint {
  text: string;
}

export interface ContentImage {
  src: string;
  alt: string;
}

export interface ContentNote {
  text: string;
  isStrong?: boolean;
}

export interface ContentSection {
  id: string;
  title: string;
  description: string;
  image: ContentImage;
  note?: ContentNote;
  bulletPoints: BulletPoint[];
  buttonText: string;
  buttonHref?: string;
  imagePosition: 'left' | 'right';
  backgroundGradient: string;
  gallery: GalleryImage[];
}
