import { EventTemplate } from './EventTemplate';

const Event5 = () => {
  const event = {
    id: '5',
    title: "Women Empowerment Workshop",
    date: "February 28, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Community Center, Santacrujvula Village",
    description: "Empowering women through skill development and entrepreneurship training.",
    image: "/images/event5.jpg",
    category: "Women Development",
    participants: "45 women",
    overview: "Our Women Empowerment Workshop was designed to provide practical skills and knowledge to women from disadvantaged backgrounds. The comprehensive program included hands-on training in tailoring, handicraft making, and essential business management skills.",
    keyHighlights: [
      "Hands-on training in tailoring and handicrafts",
      "Business management and financial literacy",
      "Marketing and sales strategies",
      "Government schemes and support programs",
      "Networking and mentorship opportunities"
    ],
    impact: [
      "45 women completed the comprehensive training program",
      "30+ women started their own small businesses",
      "15+ self-help groups formed",
      "Skills training in 5 different handicraft areas",
      "Microfinance linkages established for 25 participants"
    ],
    gallery: [
      "/images/event5.jpg",
      "/images/event5-1.jpg",
      "/images/event5-2.jpg"
    ]
  };

  return <EventTemplate event={event} />;
};

export default Event5;
