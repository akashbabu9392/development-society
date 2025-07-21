import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import ServiceCard from '@/components/ServiceCard';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Add type definitions for styled-jsx
declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}
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

// Define hero slides at the top level
const heroSlides = [
  {
    title: "EDUCATION OF THE CHILDREN",
    image: "/images/bg1.jpg"
  },
  {
    title: "MEDICAL TREATMENT OF THE CHILDREN",
    image: "/images/bg2.jpg"
  }
];

// Section component for consistent section styling
const Section = ({ 
  children, 
  className = '', 
  fullWidth = false,
  ...props 
}: { 
  children: React.ReactNode;
  fullWidth?: boolean;
} & React.HTMLAttributes<HTMLElement>) => (
  <section 
    className={`${fullWidth ? 'w-full' : 'container px-4 sm:px-6 lg:px-8 mx-auto'} ${className}`} 
    {...props}
  >
    <div className={`${!fullWidth ? 'max-w-7xl mx-auto' : 'w-full'}`}>
      {children}
    </div>
  </section>
);

// Container component for consistent content width
const ContentContainer = ({ 
  children, 
  className = '', 
  narrow = false,
  ...props 
}: { 
  children: React.ReactNode;
  narrow?: boolean;
} & React.HTMLAttributes<HTMLDivElement>) => (
  <div 
    className={`${narrow ? 'max-w-4xl' : 'max-w-6xl'} mx-auto w-full px-4 sm:px-6 lg:px-8 ${className}`} 
    {...props}
  >
    {children}
  </div>
);

// Hero Section Component with navigation arrows and orange text
const HeroSection = ({ slides }: { slides: typeof heroSlides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Simple White Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/90 hover:text-white transition-colors duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft size={36} strokeWidth={1.5} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/90 hover:text-white transition-colors duration-200"
        aria-label="Next slide"
      >
        <ChevronRight size={36} strokeWidth={1.5} />
      </button>
      
      {/* Content */}
      <div className="relative h-full flex items-center">
        <ContentContainer className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#f15a24] drop-shadow-lg">
            {slides[currentSlide].title}
          </h1>
        </ContentContainer>
      </div>
      

    </section>
  );
};

const Index = () => {
  const [currentVolunteer, setCurrentVolunteer] = useState(0);

  const volunteers = [
    { 
      name: "Mrs. Pulla Mary Vijaya Laxmi", 
      role: "Rentachintala Volunteer",
      image: "/images/vijayalaxmi.jpg"
    },
    { 
      name: "Mrs. G. Thomasamma", 
      role: "Rentachintala Volunteer",
      image: "/images/thomasamma.jpg"
    },
    { 
      name: "Mrs. S. Thomasamma", 
      role: "Rentachintala Volunteer Group President",
      image: "/images/s-thomasamma.jpg"
    },
    { 
      name: "Mrs. Laxmi", 
      role: "Rentachintala Volunteer and Works at the Home for the Aged",
      image: "/images/laxmi.jpg"
    },
    { 
      name: "Mrs. Ramana", 
      role: "Rentachintala Volunteer who works at Home for the Aged",
      image: "/images/ramana.jpg"
    },
    { 
      name: "Mrs. K. Thomasamma", 
      role: "Guntur President",
      image: "/images/k-thomasamma.jpg"
    }
  ];

  const events = [
    {
      id: '1',
      title: "President Speaks…",
      date: "January 30, 2023",
      location: "Development Society for Poor",
      description: "During the Annual Celebrations at Christmas, the President Mrs. K. Thomasamma gives away her message to the volunteers, Children, Women, and Elderly people.",
      image: "/images/event1.jpg?crop=faces&width=800&height=600",
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
      participants: "200+ beneficiaries",
      showOnHomepage: false
    },
    {
      id: '5',
      title: "Women Empowerment Workshop",
      date: "February 28, 2024",
      location: "Community Center",
      description: "Skills training workshop for women in tailoring, handicrafts, and small business management. Certificates awarded to 45 participants.",
      image: "/images/event5.jpg",
      category: "Women Development",
      participants: "45 women",
      showOnHomepage: false
    },
    {
      id: '6',
      title: "Educational Scholarship Distribution",
      date: "January 20, 2024",
      location: "DSP Main Office",
      description: "Annual scholarship ceremony for meritorious students from underprivileged families. Supporting education dreams of 30 bright students.",
      image: "/images/event6.jpg",
      category: "Education",
      participants: "30 students",
      showOnHomepage: false
    }
  ];

  const nextVolunteer = () => {
    setCurrentVolunteer((prev) => (prev + 1) % volunteers.length);
  };

  const prevVolunteer = () => {
    setCurrentVolunteer((prev) => (prev - 1 + volunteers.length) % volunteers.length);
  };

  return (
    <Layout fullWidth>
      {/* Hero Section */}
      <HeroSection slides={heroSlides} />

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
                backgroundImage="/images/educational.jpg"
              />
            </a>
            <a href="/service/health" className="block">
              <ServiceCard
                title="Health And Projects For The Differently Abled."
                icon={Heart}
                gradientFrom="from-cyan-400"
                gradientTo="to-blue-600"
                backgroundImage="/images/health.jpg"
              />
            </a>
            <a href="/service/women-development" className="block">
              <ServiceCard
                title="Women Development And Elderly Care Projects."
                icon={Users}
                gradientFrom="from-pink-400"
                gradientTo="to-rose-600"
                backgroundImage="/images/women-development.jpg"
              />
            </a>
            <a href="/service/victims" className="block">
              <ServiceCard
                title="Projects For The Victims."
                icon={Shield}
                gradientFrom="from-yellow-400"
                gradientTo="to-orange-600"
                backgroundImage="/images/projects.jpg"
              />
            </a>
            <a href="/service/emergency" className="block">
              <ServiceCard
                title="Emergency Relief Projects."
                icon={Zap}
                gradientFrom="from-sky-400"
                gradientTo="to-blue-700"
                backgroundImage="/images/emergency.jpeg"
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

      {/* Custom Scrollbar Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `
      }} />
      
      {/* Volunteers Section */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="container mx-auto px-3 sm:px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-10 relative inline-block mx-auto">
            OUR VOLUNTEERS
            <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-gradient-to-r from-[#f15a24] to-orange-400"></span>
          </h2>
          
          <div className="relative py-4 sm:py-6">
            <div className="relative w-full overflow-hidden">
              <div className="relative w-full">
                <div 
                  className="flex gap-6 sm:gap-8 py-3 sm:py-4 whitespace-nowrap"
                  style={{
                    display: 'inline-block',
                    whiteSpace: 'nowrap',
                    animation: 'scroll 20s linear infinite',
                    paddingRight: '2rem'
                  }}
                >
                  {[...volunteers, ...volunteers].map((volunteer, index) => (
                    <div 
                      key={index} 
                      className="inline-flex flex-col items-center mx-2 sm:mx-3 w-40 sm:w-48 align-top"
                      style={{
                        display: 'inline-flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '160px',
                        margin: '0 8px',
                        verticalAlign: 'top',
                        whiteSpace: 'normal'
                      }}
                    >
                      <div className="relative w-32 h-32 sm:w-36 sm:h-36 mb-3 sm:mb-4 flex-shrink-0">
                        <div className="w-full h-full rounded-full overflow-hidden border-3 sm:border-4 border-white shadow-md flex items-center justify-center bg-gray-100">
                          <img 
                            src={volunteer.image}
                            alt={volunteer.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(volunteer.name)}&background=f15a24&color=fff&size=256`;
                            }}
                          />
                        </div>
                      </div>
                      
                      <div className="w-full text-center px-1 flex flex-col items-center">
                        <h4 className="font-bold text-[#f15a24] text-base sm:text-lg mb-1 w-full break-words px-2">
                          {volunteer.name}
                        </h4>
                        <p className="text-gray-600 text-xs sm:text-sm font-medium w-full break-words px-2">
                          {volunteer.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx global>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          @media (min-width: 640px) {
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          }
        `}</style>
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
            {events
              .filter((_, index) => index < 3)
              .map((event, index) => (
                <div key={index} className="h-full group">
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
                    
                    {/* Clickable overlay */}
                    <Link to={`/event/${event.id}`} className="absolute inset-0" aria-label={`View ${event.title}`}></Link>
                  </Card>
                </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/events" className="inline-flex items-center">
              <Button 
                className="bg-gradient-to-r from-[#f15a24] to-orange-600 hover:from-orange-600 hover:to-[#f15a24] text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
              View All Events
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
