import { Program } from '@/types';

export const programs: Program[] = [
  {
    id: '1',
    title: 'Digital Literacy Program',
    description: 'Empowering youth with essential digital skills for better employment opportunities.',
    category: 'Education',
    details: 'A 3-month intensive program covering basic computer skills, internet usage, and office applications.',
    startDate: '2023-09-01',
    endDate: '2023-12-01',
    location: 'Community Center, Downtown',
    participants: 50,
    image: '/images/programs/digital-literacy.jpg',
    slug: 'digital-literacy-program',
    isFeatured: true
  },
  {
    id: '2',
    title: 'Women Empowerment Initiative',
    description: 'Skill development and entrepreneurship training for women.',
    category: 'Empowerment',
    details: 'Six-month program providing vocational training, financial literacy, and business development skills.',
    startDate: '2023-10-15',
    endDate: '2024-04-15',
    location: 'Women\'s Center, City',
    participants: 30,
    image: '/images/programs/women-empowerment.jpg',
    slug: 'women-empowerment-initiative',
    isFeatured: true
  }
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find(program => program.slug === slug);
}

export function getOngoingPrograms(): Program[] {
  const today = new Date();
  return programs.filter(program => {
    const endDate = program.endDate ? new Date(program.endDate) : null;
    return new Date(program.startDate) <= today && (!endDate || endDate >= today);
  });
}

export function getUpcomingPrograms(): Program[] {
  const today = new Date();
  return programs.filter(program => new Date(program.startDate) > today);
}
