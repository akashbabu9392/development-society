import { EventTemplate } from './EventTemplate';

const Event6 = () => {
  const event = {
    id: '6',
    title: "Green Earth Initiative - Tree Plantation Drive 2024",
    date: "June 5, 2024",
    time: "7:00 AM - 12:00 PM",
    location: "Rural areas around Santacrujvula Village",
    description: "Join us in our mission to combat climate change by planting trees and creating a greener environment.",
    image: "/images/event6.jpg",
    category: "Environment",
    participants: "100+ volunteers",
    overview: "Our annual Tree Plantation Drive aims to combat climate change and promote environmental sustainability. Volunteers from schools, colleges, and local communities come together to plant native tree species in designated areas, creating a lasting impact on the local ecosystem.",
    keyHighlights: [
      "Planting of native tree species",
      "Educational sessions on environmental conservation",
      "Community participation and engagement",
      "Adopt-a-Tree program",
      "Expert guidance on tree care and maintenance"
    ],
    impact: [
      "1,000+ trees planted in the region",
      "Increased green cover and biodiversity",
      "Improved air quality in the community",
      "Enhanced awareness about environmental conservation",
      "Long-term ecological benefits for future generations"
    ],
    gallery: [
      "/images/event6.jpg",
      "/images/event6-1.jpg",
      "/images/event6-2.jpg"
    ]
  };

  return <EventTemplate event={event} />;
};

export default Event6;
