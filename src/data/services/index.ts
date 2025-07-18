import { Service } from '@/types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Educational Support',
    description: 'Providing quality education to underprivileged children through various programs.',
    category: 'Education',
    details: 'We run schools, provide scholarships, and conduct after-school programs to ensure every child gets access to quality education regardless of their economic background.',
    icon: 'book-open',
    image: '/images/services/education.jpg',
    slug: 'educational-support',
    isFeatured: true
  },
  {
    id: '2',
    title: 'Healthcare Initiatives',
    description: 'Organizing health camps and providing medical assistance to those in need.',
    category: 'Health',
    details: 'Regular health checkup camps, medicine distribution, and health awareness programs in rural and urban slum areas.',
    icon: 'heart-pulse',
    image: '/images/services/healthcare.jpg',
    slug: 'healthcare-initiatives',
    isFeatured: true
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getServicesByCategory(category: string): Service[] {
  return services.filter(service => service.category.toLowerCase() === category.toLowerCase());
}

export function getFeaturedServices(): Service[] {
  return services.filter(service => service.isFeatured);
}
