import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, ArrowLeft, ArrowRight } from 'lucide-react';

const Events = () => {
  const events = [
    {
      id: '1',
      title: "President Speaks…",
      date: "January 30, 2023",
      location: "Development Society for Poor",
      description: "During the Annual Celebrations at Christmas, the President Mrs. K. Thomasamma gives away her message to the volunteers, Children, Women, and Elderly people.",
      image: "/images/event1.jpg",
      category: "Events",
      participants: ""
    },
    {
      id: '2',
      title: "Emergency Flood Relief Activity – 2019",
      date: "January 30, 2023",
      location: "Development Society for Poor",
      description: "Emergency Flood Relief Activity – 2019",
      image: "/images/event2.png",
      category: "Events",
      participants: ""
    },
    {
      id: '3',
      title: "Educational Awareness on COVID 19",
      date: "January 30, 2023",
      location: "Development Society for Poor",
      description: "Educational Awareness on COVID 19",
      image: "/images/event3.jpg",
      category: "Events",
      participants: ""
    },
    {
      id: '4',
      title: "Annual Health Camp 2024",
      date: "March 15, 2024",
      location: "Santacrujvula Village",
      description: "Free medical checkup and medicines distribution for elderly and children. Over 200 beneficiaries received quality healthcare services from qualified doctors.",
      image: "/images/event4.jpg",
      category: "Health",
      participants: "200+ beneficiaries"
    },
    {
      id: '5',
      title: "Women Empowerment Workshop",
      date: "February 28, 2024",
      location: "Community Center",
      description: "Skills training workshop for women in tailoring, handicrafts, and small business management. Certificates awarded to 45 participants.",
      image: "/images/event5.jpg",
      category: "Women Development",
      participants: "45 women"
    },
    {
      id: '6',
      title: "Educational Scholarship Distribution",
      date: "January 20, 2024",
      location: "DSP Main Office",
      description: "Annual scholarship ceremony for meritorious students from underprivileged families. Supporting education dreams of 30 bright students.",
      image: "/images/event6.jpg",
      category: "Education",
      participants: "30 students"
    }
  ];

  return (
    <Layout>
      <Breadcrumb title="Our Events" />

      {/* Events Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Our Events</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest events and activities. Join us in making a difference in the community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {events.map((event) => (
            <div key={event.id} className="h-full group">
              <Card className="relative overflow-hidden bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1">
                {/* Image Container */}
                <div className="relative h-60 w-full overflow-hidden rounded-t-xl">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex items-center bg-[#f15a24] text-white text-xs font-medium px-3 py-1 rounded-full">
                      {event.category}
                    </div>
                  </div>
                </div>
                
                {/* Card Content */}
                <CardContent className="p-5 flex-1 flex flex-col">
                  {/* Date */}
                  <div className="flex items-center text-sm text-[#f15a24] font-medium mb-2">
                    <Calendar size={14} className="mr-1.5" />
                    {event.date}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 leading-tight">
                    {event.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                    {event.description}
                  </p>
                  
                  {/* Footer */}
                  <div className="mt-auto pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin size={14} className="mr-1.5 text-[#f15a24]" />
                        <span className="line-clamp-1">{event.location}</span>
                      </div>
                      
                      {event.participants && (
                        <div className="flex items-center text-sm text-gray-500">
                          <Users size={14} className="mr-1.5 text-[#f15a24]" />
                          {event.participants}
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-4">
                      <Link to={`/event/${event.id}`} className="inline-flex items-center text-sm font-medium text-[#f15a24] hover:text-orange-600 transition-colors">
                        Learn more
                        <ArrowRight size={16} className="ml-1.5" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Events;
