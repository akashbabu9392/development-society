
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Users, ArrowLeft, Clock, Target, Heart } from 'lucide-react';

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const events = {
    '1': {
      title: "Annual Health Camp 2024",
      date: "March 15, 2024",
      location: "Santacrujvula Village",
      description: "Free medical checkup and medicines distribution for elderly and children. Over 200 beneficiaries received quality healthcare services from qualified doctors.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=600&fit=crop",
      category: "Health",
      participants: "200+ beneficiaries",
      fullDescription: "Our Annual Health Camp 2024 was a tremendous success, bringing essential healthcare services directly to the doorsteps of those who need it most. The camp was organized in collaboration with qualified medical professionals and local healthcare workers. We provided comprehensive health screenings, distributed free medicines, and offered health education sessions. The camp particularly focused on preventive care for children and elderly residents, addressing common health issues prevalent in rural areas. Medical specialists conducted eye check-ups, blood pressure monitoring, diabetes screening, and general health consultations. We also organized awareness sessions on hygiene, nutrition, and disease prevention.",
      impact: [
        "200+ individuals received free health checkups",
        "150+ medicine packages distributed",
        "50+ children vaccinated",
        "25+ elderly patients referred for specialized care",
        "Health awareness sessions conducted for 300+ community members"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop"
      ]
    },
    '2': {
      title: "Women Empowerment Workshop",
      date: "February 28, 2024",
      location: "Community Center",
      description: "Skills training workshop for women in tailoring, handicrafts, and small business management. Certificates awarded to 45 participants.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=600&fit=crop",
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
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1594736797933-d0f06ba56245?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop"
      ]
    },
    '3': {
      title: "Educational Scholarship Distribution",
      date: "January 20, 2024",
      location: "DSP Main Office",
      description: "Annual scholarship ceremony for meritorious students from underprivileged families. Supporting education dreams of 30 bright students.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop",
      category: "Education",
      participants: "30 students",
      fullDescription: "The Educational Scholarship Distribution ceremony was a milestone event celebrating academic excellence and supporting the educational aspirations of deserving students from economically disadvantaged families. The scholarship program covers tuition fees, books, uniforms, and other educational expenses. Our selection process is based on academic merit, financial need, and the student's commitment to their studies. The ceremony included motivational speeches, cultural performances by the students, and interaction sessions with successful alumni who were previous scholarship recipients. We believe that education is the most powerful tool for breaking the cycle of poverty.",
      impact: [
        "30 deserving students received annual scholarships",
        "₹5,00,000 total scholarship amount distributed",
        "100% of previous scholarship students showed improved academic performance",
        "15+ students from last year's batch secured admissions in prestigious colleges",
        "Mentorship program launched for scholarship recipients"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
      ]
    }
  };

  const event = events[id as keyof typeof events];

  if (!event) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Event Not Found</h1>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${event.image})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-[#f15a24] rounded-full text-sm font-medium mb-4">
              {event.category}
            </div>
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
              <div className="flex items-center">
                <Users className="mr-2" size={20} />
                {event.participants}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-8 text-[#f15a24] hover:bg-orange-50"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">About This Event</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {event.fullDescription}
                  </p>

                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Target className="mr-2 text-[#f15a24]" size={24} />
                    Impact & Achievements
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {event.impact.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Heart className="mr-3 mt-1 text-[#f15a24] flex-shrink-0" size={16} />
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
            <div className="space-y-6">
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
                        <p className="text-sm text-gray-500">Beneficiaries</p>
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
        </div>
      </section>
    </Layout>
  );
};

export default EventDetail;
