// Common types for all content
export interface BaseContent {
  id: string;
  title: string;
  description: string;
  image?: string;
  slug: string;
  date?: string;
  isFeatured?: boolean;
}

// Event specific type
export interface Event extends BaseContent {
  date: string;
  location: string;
  time?: string;
  gallery?: string[];
  isFeatured?: boolean;
}

// Service specific type
export interface Service extends BaseContent {
  icon?: string;
  category: string;
  details: string;
  isFeatured?: boolean;
}

// Program specific type
export interface Program extends BaseContent {
  startDate: string;
  endDate?: string;
  location: string;
  participants?: number;
  category: string;
  details: string;
}

// Gallery item type
export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: 'events' | 'programs' | 'services' | 'general';
  date?: string;
  description?: string;
}
