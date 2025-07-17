import { EventTemplate } from './EventTemplate';

const Event4 = () => {
  const event = {
    id: '4',
    title: "Annual Health Camp 2024",
    date: "March 15, 2024",
    time: "9:00 AM - 4:00 PM",
    location: "Santacrujvula Village",
    description: "Free medical checkup and medicines distribution for elderly and children. Over 200 beneficiaries received quality healthcare services from qualified doctors.",
    image: "/images/event4.jpg",
    category: "Health",
    participants: "200+ beneficiaries",
    overview: "Our Annual Health Camp 2024 was a tremendous success, bringing essential healthcare services directly to the doorsteps of those who need it most. The camp was organized in collaboration with qualified medical professionals and local healthcare workers.",
    keyHighlights: [
      "Comprehensive health screenings",
      "Free medicines distribution",
      "Specialist consultations",
      "Health education sessions",
      "Preventive care for all ages"
    ],
    impact: [
      "200+ individuals received free health checkups",
      "150+ medicine packages distributed",
      "50+ children received vaccinations",
      "30+ elderly patients referred for specialized care",
      "Health education for 300+ community members"
    ],
    gallery: [
      "/images/event4.jpg",
      "/images/event4-1.jpg",
      "/images/event4-2.jpg"
    ]
  };

  return <EventTemplate event={event} />;
};

export default Event4;
