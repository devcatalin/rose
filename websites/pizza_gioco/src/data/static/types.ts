// Type definitions for menu items and promotions

export type Category = 'pizza' | 'pasta' | 'dessert' | 'special' | 'pomeni' | 'extra';

export interface Promotion {
  id: string;
  title: string;
  description: string;
  validUntil: string;
}

export interface MenuItem {
  id: string;
  name: string;
  ingredients: string[];
  price: number | string;
  smallPrice?: number;
  portion?: string;
  image: string;
  category: Category;
  isSignature?: boolean;
  isPromotion?: boolean;
  originalPrice?: number;
}
