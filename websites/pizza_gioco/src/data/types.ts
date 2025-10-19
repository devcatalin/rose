// Type definitions for menu items and promotions

export interface Promotion {
  id: string;
  title: string;
  subtitle: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  smallPrice?: string;
  image: string;
  category: string;
  categoryName: string;
}

export interface MenuCategory {
  id: number;
  category: string;
  sort?: number;
}
