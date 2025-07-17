import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Users, ArrowLeft, Clock, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Event5 = () => {
  const event = {
    id: '5',
    title: "Women Empowerment Workshop",
    date: "February 28, 2024",
    location: "Community Center",
    description: "Skills training workshop for women in tailoring, handicrafts, and small business management. Certificates awarded to 45 participants.",
    image: "/images/event5.jpg",
    category: "Women Development",
    participants: "45 women",
    fullDescription: "The Women Empowerment Workshop was designed to provide practical skills and knowledge to women from disadvantaged backgrounds. The comprehensive program included hands-on training in tailoring, handicraft making, and essential business management skills. Participants learned about financial literacy, marketing basics, and how to start and manage small businesses. The workshop aimed to create sustainable livelihood opportunities and promote economic independence among women in the community. Expert trainers and successful women entrepreneurs shared their experiences and provided mentorship to the participants.",
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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="relative h-full">
          <img 
            src={event.image}
            alt={event.title}
            className="w-[1200px] h-full object-contain mx-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{event.title}</h1>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center">
                <Calendar className="mr-2" size={20} />
                {event.date}
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2" size={20} />
                {event.location}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent>
                <h2 className="text-2xl font-bold mb-4">Event Overview</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">{event.fullDescription}</p>

                <h3 className="text-xl font-bold mb-4">Impact Highlights</h3>
                <ul className="space-y-4">
                  {event.impact.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Target className="mr-2 text-[#f15a24]" size={16} />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mb-4">Event Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {event.gallery.map((img, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg group">
                      <img 
                        src={img}
                        alt={`${event.title} ${index + 1}`}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Event Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="mr-3 text-[#f15a24]" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Date</p>
                      <p className="font-medium">{event.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-3 text-[#f15a24]" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium">{event.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-3 text-[#f15a24]" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Participants</p>
                      <p className="font-medium">{event.participants}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-[#f15a24] to-orange-600 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-3">Support Our Mission</h3>
                <p className="text-sm mb-4 text-orange-100">
                  Help us continue making a difference in the lives of those who need it most.
                </p>
                <Button variant="secondary" className="w-full">
                  Donate Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link to="/events" className="inline-flex items-center text-gray-600 hover:text-gray-800">
            <ArrowLeft className="mr-2" />
            Back to Events
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Event5;
