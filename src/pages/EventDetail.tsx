import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Users, ArrowLeft, Clock, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  category: string;
  participants: string;
  fullDescription: string;
  impact: string[];
  gallery: string[];
}

const events: Event[] = [
  {
    id: '1',
    title: "President Speaks…",
    date: "January 30, 2023",
    location: "Development Society for Poor",
    description: "During the Annual Celebrations at Christmas, the President Mrs. K. Thomasamma gives away her message to the volunteers, Children, Women, and Elderly people.",
    image: "/images/event1.jpg",
    category: "Events",
    participants: "",
    fullDescription: "During the Annual Celebrations at Christmas, the President Mrs. K. Thomasamma gives away her message to the volunteers, Children, Women, and Elderly people. This event brings together the community to celebrate achievements and share inspiring words for the future.",
    impact: [
      "Community gathering and celebration",
      "Inspiring leadership message",
      "Recognition of community efforts"
    ],
    gallery: [
      "/images/event1.jpg",
      "/images/event1-1.jpg",
      "/images/event1-2.jpg"
    ]
  },
  {
    id: '2',
    title: "Emergency Flood Relief Activity – 2019",
    date: "January 30, 2023",
    location: "Development Society for Poor",
    description: "Emergency Flood Relief Activity – 2019",
    image: "/images/event2.jpg",
    category: "Events",
    participants: "",
    fullDescription: "Our emergency response team provided immediate relief to flood-affected families in the region. We distributed food supplies, clean water, and essential medical aid to those in need.",
    impact: [
      "100+ families received emergency aid",
      "Distribution of essential supplies",
      "Medical assistance provided"
    ],
    gallery: [
      "/images/event2.png",
      "/images/event2-1.png",
      "/images/event2-2.png"
    ]
  },
  {
    id: '3',
    title: "Educational Awareness on COVID 19",
    date: "January 30, 2023",
    location: "Development Society for Poor",
    description: "Educational Awareness on COVID 19",
    image: "/images/event3.jpg",
    category: "Events",
    participants: "",
    fullDescription: "We organized a comprehensive awareness campaign to educate the community about COVID-19 prevention measures and safety protocols.",
    impact: [
      "Community health education",
      "Distribution of safety kits",
      "Awareness program reach"
    ],
    gallery: [
      "/images/event3.jpg",
      "/images/event3-1.jpg",
      "/images/event3-2.jpg"
    ]
  },
  {
    id: '4',
    title: "Annual Health Camp 2024",
    date: "March 15, 2024",
    location: "Development Society for Poor",
    description: "Free medical checkup and medicines distribution for elderly and children. Over 200 beneficiaries received quality healthcare services from qualified doctors.",
    image: "/images/event4.jpg",
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
      "/images/event4.jpg",
      "/images/event4-1.jpg",
      "/images/event4-2.jpg"
    ]
  },
  {
    id: '5',
    title: "Women Empowerment Workshop",
    date: "February 28, 2024",
    location: "Development Society for Poor",
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
  },
  {
    id: '6',
    title: "Educational Scholarship Distribution",
    date: "January 20, 2024",
    location: "Development Society for Poor",
    description: "Annual scholarship ceremony for meritorious students from underprivileged families. Supporting education dreams of 30 bright students.",
    image: "/images/event6.jpg",
    category: "Education",
    participants: "30 students",
    fullDescription: "The Educational Scholarship Distribution ceremony was a milestone event celebrating academic excellence and supporting the educational aspirations of deserving students from economically disadvantaged families. The scholarship program covers tuition fees, books, uniforms, and other educational expenses. Our selection process is based on academic merit, financial need, and the student's commitment to their studies. The ceremony included motivational speeches, cultural performances by the students, and interaction sessions with successful alumni who were previous scholarship recipients. We believe that education is the most powerful tool for breaking the cycle of poverty.",
    impact: [
      "30 deserving students received annual scholarships",
      "100% scholarship renewal rate",
      "Improved academic performance",
      "Mentorship program launched for scholarship recipients"
    ],
    gallery: [
      "/images/event6.jpg",
      "/images/event6-1.jpg",
      "/images/event6-2.jpg"
    ]
  }
];

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = events.find(e => e.id === id);

  if (!event) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Event Not Found</h1>
          <Link to="/events" className="inline-flex items-center text-gray-600 hover:text-gray-800">
            <ArrowLeft className="mr-2" />
            Back to Events
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="relative h-full">
          <Card className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
            {/* Image Container */}
            <div className="relative h-72 p-4">
              <img 
                src={event.image}
                alt={event.title}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-[#f15a24] to-orange-600 text-white text-xs font-semibold rounded-full shadow-lg">
                {event.category}
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Card>
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
                Development Society for Poor
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
          <Link 
            to="/events"
            className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8"
          >
            <ArrowLeft className="mr-2" />
            Back to Events
          </Link>

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
