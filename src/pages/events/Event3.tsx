import { EventTemplate } from './EventTemplate';

const Event3 = () => {
  const event = {
    id: '3',
    title: "Free Medical Camp – 2019",
    date: "March 15, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "Development Society for Poor",
    description: "Free Medical Camp – 2019",
    image: "/images/event3.jpg",
    category: "Health Camp",
    participants: "20+ doctors, 100+ volunteers",
    overview: "Our free medical camp provided essential healthcare services to underprivileged communities. The event included general health check-ups, specialist consultations, and free medications.",
    keyHighlights: [
      "Free health check-ups and consultations",
      "Specialist doctors in various fields",
      "Free medications and basic tests",
      "Health awareness sessions",
      "Follow-up care arrangements"
    ],
    impact: [
      "500+ patients received medical care",
      "1000+ free medications distributed",
      "Specialist consultations provided",
      "Health awareness sessions for 300+ people",
      "Follow-up care for critical cases"
    ],
    gallery: [
      "/images/event3.jpg",
      "/images/event3-1.jpg",
      "/images/event3-2.jpg"
    ]
  };

  return <EventTemplate event={event} />;
};

export default Event3;
