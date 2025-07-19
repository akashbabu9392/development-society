import { EventTemplate } from './EventTemplate';

const Event2 = () => {
  const event = {
    id: '2',
    title: "Emergency Flood Relief Activity – 2019",
    date: "January 30, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "Development Society for Poor",
    description: "Emergency Flood Relief Activity – 2019",
    image: "/images/event2.png",
    category: "Disaster Relief",
    participants: "50+ volunteers",
    overview: "In response to severe flooding in our region, our organization mobilized quickly to provide immediate relief to affected families. Our team distributed essential supplies and coordinated with local authorities for effective disaster management.",
    keyHighlights: [
      "Rapid response to flood-affected areas",
      "Distribution of food, water, and medical supplies",
      "Coordination with local authorities and NGOs",
      "Temporary shelter setup for displaced families",
      "Community support and counseling services"
    ],
    impact: [
      "500+ families received immediate relief",
      "Distribution of essential supplies to 2000+ people",
      "Coordination with 5+ local authorities",
      "Long-term recovery programs initiated",
      "Community resilience building workshops"
    ],
    gallery: [
      "/images/event2.png",
      "/images/event2-1.png",
      "/images/event2-2.png"
    ]
  };

  return <EventTemplate event={event} />;
};

export default Event2;
