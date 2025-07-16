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
  Target,
  MapPin,
  Clock,
  ArrowRight
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
      id: '1',
      title: "Annual Health Camp 2024",
      date: "March 15, 2024",
      location: "Santacrujvula Village",
      description: "Free medical checkup and medicines distribution for elderly and children. Over 200 beneficiaries received quality healthcare services from qualified doctors.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      category: "Health",
      participants: "200+ beneficiaries"
    },
    {
      id: '2',
      title: "Women Empowerment Workshop",
      date: "February 28, 2024",
      location: "Community Center",
      description: "Skills training workshop for women in tailoring, handicrafts, and small business management. Certificates awarded to 45 participants.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
      category: "Women Development",
      participants: "45 women"
    },
    {
      id: '3',
      title: "Educational Scholarship Distribution",
      date: "January 20, 2024",
      location: "DSP Main Office",
      description: "Annual scholarship ceremony for meritorious students from underprivileged families. Supporting education dreams of 30 bright students.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
      category: "Education",
      participants: "30 students"
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
            <a href="/service/education" className="block">
              <ServiceCard
                title="Educational And Vocational Skill Training Projects."
                icon={GraduationCap}
                gradientFrom="from-teal-400"
                gradientTo="to-emerald-600"
                backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop"
              />
            </a>
            <a href="/service/health" className="block">
              <ServiceCard
                title="Health And Projects For The Differently Abled."
                icon={Heart}
                gradientFrom="from-cyan-400"
                gradientTo="to-blue-600"
                backgroundImage="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
              />
            </a>
            <a href="/service/women" className="block">
              <ServiceCard
                title="Women Development And Elderly Care Projects."
                icon={Users}
                gradientFrom="from-pink-400"
                gradientTo="to-rose-600"
                backgroundImage="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop"
              />
            </a>
            <a href="/service/victims" className="block">
              <ServiceCard
                title="Projects For The Victims."
                icon={Shield}
                gradientFrom="from-yellow-400"
                gradientTo="to-orange-600"
                backgroundImage="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=300&fit=crop"
              />
            </a>
            <a href="/service/emergency" className="block">
              <ServiceCard
                title="Emergency Relief Projects."
                icon={Zap}
                gradientFrom="from-sky-400"
                gradientTo="to-blue-700"
                backgroundImage="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Mission and Vision Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <p className="text-[#f15a24] text-lg mb-2 font-medium">Our Purpose</p>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
              Mission & Vision
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#f15a24] to-orange-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission Card */}
            <Card className="group relative overflow-hidden bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f15a24]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardContent className="relative z-10 p-8 md:p-10 text-center h-full flex flex-col justify-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#f15a24] to-orange-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <User className="text-white" size={40} />
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#f15a24]/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-800 mb-6 group-hover:text-[#f15a24] transition-colors duration-300">
                  OUR MISSION
                </h3>
                
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  To work with communities to end hunger and poverty and care for the Earth, providing 
                  educational, medical and social assistance to those most in need regardless of caste, 
                  creed, or religion.
                </p>
                
                <Button className="bg-gradient-to-r from-[#f15a24] to-orange-600 hover:from-orange-600 hover:to-[#f15a24] text-white group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
            
            {/* Vision Card */}
            <Card className="group relative overflow-hidden bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardContent className="relative z-10 p-8 md:p-10 text-center h-full flex flex-col justify-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <Target className="text-white" size={40} />
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-800 mb-6 group-hover:text-blue-600 transition-colors duration-300">
                  OUR VISION
                </h3>
                
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  To build up a Society based on egalitarian virtues of Love, Truth, Justice through quality Education, 
                  Health Care, Care for the underprivileged and shelter for the homeless.
                </p>
                
                <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
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

      {/* Enhanced Latest Events Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-slate-100 to-gray-200 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-green-400 to-blue-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <p className="text-[#f15a24] text-lg mb-2 font-medium">Community Impact</p>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
              LATEST EVENTS
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Discover our recent initiatives and community outreach programs making a difference in people's lives.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#f15a24] to-orange-400 mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {events.map((event, index) => (
              <Card key={index} className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
                      {event.location}
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
                    
                    <a href={`/event/${event.id}`}>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-[#f15a24] hover:text-orange-600 hover:bg-orange-50 p-2 group-hover:translate-x-1 transition-all duration-300"
                      >
                        Read More
                        <ArrowRight size={16} className="ml-1" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
                
                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#f15a24]/20 rounded-lg transition-all duration-300"></div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-[#f15a24] to-orange-600 hover:from-orange-600 hover:to-[#f15a24] text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              View All Events
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
