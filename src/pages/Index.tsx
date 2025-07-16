
import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  GraduationCap, 
  Heart, 
  Users, 
  Shield, 
  Zap, 
  ChevronLeft, 
  ChevronRight,
  Calendar,
  User,
  Target
} from 'lucide-react';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentVolunteer, setCurrentVolunteer] = useState(0);

  const heroSlides = [
    {
      title: "EDUCATION OF THE CHILDREN",
      subtitle: "Development Society for Poor",
      image: "https://images.unsplash.com/photo-1544717684-8b6b75e9b59f?w=1200&h=600&fit=crop"
    }
  ];

  const volunteers = [
    { name: "Mrs. G. Thomasamma", role: "Santacrujvula Volunteer" },
    { name: "Mrs. S. Thomasamma", role: "Santacrujvula Volunteer Strut President" },
    { name: "Mrs. Laxmi", role: "Santacrujvula Volunteer and Works at the home for the Aged" },
    { name: "Mrs. Ramana", role: "Ramachajvula Volunteer who works at Home for the Aged" },
    { name: "Mrs. K. Thomasamma", role: "Gputur President" }
  ];

  const events = [
    {
      title: "President Speaks...",
      date: "January 15, 2024",
      description: "During the Annual Celebrations at Christmas, the President Mrs. K. Thomasamma gave away her Christmas Gifts to the needy and Elderly people.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop"
    },
    {
      title: "Emergency Flood Relief Activity - 2018",
      date: "July 28, 2018",
      description: "Emergency Flood Relief Activity - 2018",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop"
    },
    {
      title: "Educational Awareness on COVID 19",
      date: "January 30, 2020",
      description: "Educational awareness program on COVID-19 conducted in the community.",
      image: "/lovable-uploads/7597c083-d11a-430d-b6c3-95ae3e10456e.png"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextVolunteer = () => {
    setCurrentVolunteer((prev) => (prev + 1) % volunteers.length);
  };

  const prevVolunteer = () => {
    setCurrentVolunteer((prev) => (prev - 1 + volunteers.length) % volunteers.length);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-gray-800"
          style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <p className="text-[#f15a24] text-lg md:text-xl mb-2">{heroSlides[currentSlide].subtitle}</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide">
              {heroSlides[currentSlide].title}
            </h1>
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <button 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white z-20"
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
        >
          <ChevronLeft size={40} />
        </button>
        <button 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white z-20"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
        >
          <ChevronRight size={40} />
        </button>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#f15a24] text-lg mb-2">Development Society for Poor</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">OUR SERVICES</h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
              To be more relevant in the approach we divided our projects into 5 sectors according to its characteristic nature of 
              addressing the concerns of the poor.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <ServiceCard
              title="Educational And Vocational Skill Training Projects."
              icon={GraduationCap}
              bgColor="bg-emerald-500"
            />
            <ServiceCard
              title="Health And Projects For The Differently Abled."
              icon={Heart}
              bgColor="bg-cyan-500"
            />
            <ServiceCard
              title="Women Development And Elderly Care Projects."
              icon={Users}
              bgColor="bg-pink-400"
            />
            <ServiceCard
              title="Projects For The Victims."
              icon={Shield}
              bgColor="bg-orange-400"
            />
            <ServiceCard
              title="Emergency Relief Projects."
              icon={Zap}
              bgColor="bg-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 bg-emerald-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#f15a24] rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">OUR MISSION</h3>
                <p className="text-gray-600 mb-6">
                  To work with communities to end hunger and poverty and care for the Earth providing 
                  educational, medical and social assistance to those most in need regardless...
                </p>
                <Button className="bg-[#f15a24] hover:bg-[#d14619] text-white">
                  Click Here
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#f15a24] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">OUR VISION</h3>
                <p className="text-gray-600 mb-6">
                  To build up a Society based on egalitarian virtues of Love, Truth, Justice through quality Education, 
                  Health Care, Care for the undead and shelter for the homeless.
                </p>
                <Button className="bg-[#f15a24] hover:bg-[#d14619] text-white">
                  Click Here
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">OUR VOLUNTEER</h2>
          
          <div className="relative">
            <div className="flex justify-center items-center space-x-4 overflow-hidden">
              {volunteers.slice(currentVolunteer, currentVolunteer + 5).map((volunteer, index) => (
                <div key={index} className="text-center min-w-[200px]">
                  <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-${1494790108755 + index}-000000000000?w=150&h=150&fit=crop&crop=face`}
                      alt={volunteer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">{volunteer.name}</h4>
                  <p className="text-gray-600 text-xs">{volunteer.role}</p>
                </div>
              ))}
            </div>
            
            <button 
              onClick={prevVolunteer}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <ChevronLeft size={32} />
            </button>
            <button 
              onClick={nextVolunteer}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* Latest Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">LATEST EVENTS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-[#f15a24] text-lg mb-2">{event.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar size={16} className="mr-2" />
                    {event.date}
                  </div>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button className="bg-[#f15a24] hover:bg-[#d14619] text-white px-8 py-2">
              View More
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
