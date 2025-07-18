import { GalleryItem } from '@/types';

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Children\'s Day Celebration 2023',
    image: '/images/gallery/childrens-day-1.jpg',
    category: 'events',
    date: '2023-11-14',
    description: 'Children enjoying games and activities during our annual celebration.'
  },
  {
    id: '2',
    title: 'Health Camp',
    image: '/images/gallery/health-camp-1.jpg',
    category: 'events',
    date: '2023-12-05',
    description: 'Community members receiving free health checkups.'
  },
  {
    id: '3',
    title: 'Digital Literacy Class',
    image: '/images/gallery/digital-class-1.jpg',
    category: 'programs',
    date: '2023-09-15',
    description: 'Students learning computer basics in our digital literacy program.'
  },
  {
    id: '4',
    title: 'Women\'s Self-Help Group',
    image: '/images/gallery/women-group-1.jpg',
    category: 'programs',
    date: '2023-10-20',
    description: 'Women participating in skill development training.'
  },
  {
    id: '5',
    title: 'School Renovation',
    image: '/images/gallery/school-renovation-1.jpg',
    category: 'services',
    date: '2023-08-10',
    description: 'Volunteers working on renovating a local school.'
  },
  {
    id: '6',
    title: 'Food Distribution',
    image: '/images/gallery/food-dist-1.jpg',
    category: 'services',
    date: '2023-11-25',
    description: 'Distributing food packets to the needy in the community.'
  }
];

export function getGalleryByCategory(category: string): GalleryItem[] {
  return galleryItems.filter(item => item.category === category);
}

export function getRecentGalleryItems(limit: number = 6): GalleryItem[] {
  return [...galleryItems]
    .sort((a, b) => new Date(b.date || '').getTime() - new Date(a.date || '').getTime())
    .slice(0, limit);
}
