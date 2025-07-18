import { Event } from '@/types';

export const events: Event[] = [
  {
    id: '1',
    title: 'Children\'s Day Celebration',
    description: 'Annual celebration for underprivileged children with games, food, and educational activities.',
    date: '2023-11-14',
    location: 'Community Hall, Main Street',
    time: '10:00 AM - 4:00 PM',
    image: '/images/events/childrens-day.jpg',
    slug: 'childrens-day-celebration',
    isFeatured: true,
    gallery: [
      '/images/events/gallery/childrens-day-1.jpg',
      '/images/events/gallery/childrens-day-2.jpg'
    ]
  },
  {
    id: '2',
    title: 'Health Camp',
    description: 'Free health checkup camp for the local community.',
    date: '2023-12-05',
    location: 'Local Community Center',
    time: '9:00 AM - 5:00 PM',
    image: '/images/events/health-camp.jpg',
    slug: 'health-camp-december',
    isFeatured: true
  }
];

export function getEventBySlug(slug: string): Event | undefined {
  return events.find(event => event.slug === slug);
}

export function getFeaturedEvents(): Event[] {
  return events.filter(event => event.isFeatured);
}

export function getUpcomingEvents(limit?: number): Event[] {
  const now = new Date();
  const upcoming = events
    .filter(event => new Date(event.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  
  return limit ? upcoming.slice(0, limit) : upcoming;
}
