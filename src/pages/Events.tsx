import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Users, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      image: "/images/event2.jpg",
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Link to="/" className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-300">
              <ArrowLeft className="mr-2" />
              Back to Home
            </Link>
          </div>

          <div className="text-center mb-12">
            <p className="text-[#f15a24] text-lg mb-2 font-medium">Community Impact</p>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
              ALL EVENTS
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Discover our recent initiatives and community outreach programs making a difference in people's lives.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#f15a24] to-orange-400 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {events.map((event, index) => (
              <Link to={`/event/${event.id}`}>
                <Card key={index} className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer">
                  {/* Image Container */}
                  <div className="relative h-72 p-4">
                    <img 
                      src={event.image}
                      alt={event.title}
                      className={`w-full h-full ${['1', '6'].includes(event.id) ? 'object-cover' : 'object-contain'} group-hover:scale-110 transition-transform duration-500`}
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-[#f15a24] to-orange-600 text-white text-xs font-semibold rounded-full shadow-lg">
                      {event.category}
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <CardContent className="p-6 relative">
                    {/* Date and Location */}
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2 text-[#f15a24]" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1 text-[#f15a24]" />
                        Development Society for Poor
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-bold text-gray-800 text-xl mb-3 group-hover:text-[#f15a24] transition-colors duration-300 line-clamp-2">
                      {event.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {event.description}
                    </p>
                    
                    {/* Participants Info */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-sm text-gray-500">
                        <Users size={16} className="mr-2 text-[#f15a24]" />
                        {event.participants}
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-[#f15a24] hover:text-orange-600 hover:bg-orange-50 p-2 group-hover:translate-x-1 transition-all duration-300"
                      >
                        Read More
                        <ArrowRight size={16} className="ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                  
                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#f15a24]/20 rounded-lg transition-all duration-300"></div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
