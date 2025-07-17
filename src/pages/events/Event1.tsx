import { EventTemplate } from './EventTemplate';

const Event1 = () => {
  const event = {
    id: '1',
    title: "President Speaks…",
    date: "January 30, 2023",
    time: "10:00 AM - 2:00 PM",
    location: "Development Society for Poor",
    description: "During the Annual Celebrations at Christmas, the President Mrs. K. Thomasamma gives away her message to the volunteers, Children, Women, and Elderly people.",
    image: "/images/event1.jpg",
    category: "Community Event",
    participants: "200+ community members",
    overview: "The President's speech was a highlight of our annual Christmas celebration. Mrs. K. Thomasamma addressed all the volunteers, children, women, and elderly people gathered at the Development Society for Poor. Her inspiring words emphasized the importance of community service and the impact of our work on the lives of those in need.",
    keyHighlights: [
      "Inspiring keynote address by President Mrs. K. Thomasamma",
      "Recognition of outstanding volunteers and contributors",
      "Cultural performances by community members",
      "Distribution of gifts and essentials to the underprivileged",
      "Community feast and networking"
    ],
    impact: [
      "200+ community members attended the event",
      "Inspiring messages on community service",
      "Recognition of volunteer contributions",
      "Motivation for future initiatives",
      "Strengthened community bonds"
    ],
    gallery: [
      "/images/event1.jpg",
      "/images/event1-1.jpg",
      "/images/event1-2.jpg"
    ]
  };

  return <EventTemplate event={event} />;
};

export default Event1;
