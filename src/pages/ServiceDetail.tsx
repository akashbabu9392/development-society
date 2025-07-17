
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Users, Target, Heart, CheckCircle } from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const services = {
    'education': {
      title: "Educational And Vocational Skill Training Projects",
      description: "Empowering through knowledge and skills development",
      image: "/images/educational.jpg",
      overview: "Our educational initiatives focus on providing quality education and vocational training to underprivileged children and youth. We believe education is the cornerstone of development and the most effective way to break the cycle of poverty.",
      objectives: [
        "Provide formal and non-formal education opportunities",
        "Support orphan and semi-orphan children's education",
        "Develop vocational skills for employability",
        "Construct and maintain educational infrastructure",
        "Promote digital literacy and modern learning methods"
      ],
      programs: [
        {
          name: "School Support Program",
          description: "Financial assistance for tuition, books, uniforms, and transportation for underprivileged children.",
          beneficiaries: "500+ students annually"
        },
        {
          name: "Vocational Training Centers",
          description: "Skills training in computer literacy, tailoring, handicrafts, and technical courses.",
          beneficiaries: "200+ youth trained per year"
        },
        {
          name: "Digital Learning Initiative",
          description: "Computer labs and internet connectivity in rural schools to bridge the digital divide.",
          beneficiaries: "15 schools equipped"
        }
      ],
      impact: "Over 2,000 students have benefited from our educational programs, with 85% showing improved academic performance and 70% of vocational training graduates finding employment or starting their own businesses."
    },
    'health': {
      title: "Health And Projects For The Differently Abled",
      description: "Ensuring healthcare access and dignity for all",
      image: "/images/health.jpg",
      overview: "Our health initiatives aim to provide comprehensive healthcare services to underserved communities, with special focus on differently-abled individuals who often face additional barriers to accessing healthcare.",
      objectives: [
        "Provide accessible healthcare services",
        "Support differently-abled individuals with specialized care",
        "Conduct regular health camps and screening programs",
        "Promote preventive healthcare and health education",
        "Establish sustainable healthcare infrastructure"
      ],
      programs: [
        {
          name: "Mobile Healthcare Units",
          description: "Door-to-door healthcare services reaching remote villages with qualified medical professionals.",
          beneficiaries: "5,000+ patients served annually"
        },
        {
          name: "Disability Support Center",
          description: "Specialized care, rehabilitation services, and assistive devices for differently-abled individuals.",
          beneficiaries: "300+ individuals supported"
        },
        {
          name: "Health Awareness Campaigns",
          description: "Community education programs on hygiene, nutrition, disease prevention, and maternal health.",
          beneficiaries: "10,000+ community members reached"
        }
      ],
      impact: "Our health programs have reached over 15,000 individuals, with significant improvements in maternal health indicators and early detection of chronic diseases in target communities."
    },
    'women': {
      title: "Women Development And Elderly Care Projects",
      description: "Empowering women and caring for our elders",
      image: "/images/women-development.jpg",
      overview: "We focus on women's empowerment through skill development, income generation, and leadership training, while ensuring our elderly community members receive the care and respect they deserve.",
      objectives: [
        "Form and strengthen Self Help Groups (SHGs)",
        "Provide vocational training and income generation opportunities",
        "Support widows and single mothers",
        "Establish elderly care facilities and services",
        "Promote women's participation in decision-making processes"
      ],
      programs: [
        {
          name: "Women's Self Help Groups",
          description: "Formation of SHGs for savings, credit access, and collective entrepreneurship activities.",
          beneficiaries: "150+ SHGs with 2,000+ women members"
        },
        {
          name: "Elderly Care Homes",
          description: "Residential care facilities providing accommodation, healthcare, and emotional support for elderly.",
          beneficiaries: "100+ elderly residents"
        },
        {
          name: "Skill Development Centers",
          description: "Training in tailoring, handicrafts, food processing, and small business management for women.",
          beneficiaries: "800+ women trained"
        }
      ],
      impact: "Over 2,000 women have been empowered through our programs, with 60% starting their own income-generating activities and 100+ elderly individuals receiving comprehensive care."
    },
    'victims': {
      title: "Projects For The Victims",
      description: "Supporting those who need us most",
      image: "/images/projects.jpg",
      overview: "We provide comprehensive support to various categories of victims including orphans, widows, differently-abled individuals, elderly, and those affected by diseases, ensuring they receive the care and support they deserve.",
      objectives: [
        "Support orphan and semi-orphan children",
        "Assist widows in rebuilding their lives",
        "Provide specialized care for differently-abled individuals",
        "Care for neglected elderly persons",
        "Support patients with leprosy and other chronic diseases"
      ],
      programs: [
        {
          name: "Orphan Care Program",
          description: "Comprehensive support including education, healthcare, and rehabilitation for orphaned children.",
          beneficiaries: "200+ children in care"
        },
        {
          name: "Widow Support Initiative",
          description: "Financial assistance, skill training, and emotional support for widows and their families.",
          beneficiaries: "300+ widows supported"
        },
        {
          name: "Specialized Healthcare",
          description: "Medical care and rehabilitation services for leprosy patients and those with chronic illnesses.",
          beneficiaries: "150+ patients under care"
        }
      ],
      impact: "Our victim support programs have transformed the lives of over 1,000 individuals, providing them with dignity, hope, and opportunities for a better future."
    },
    'emergency': {
      title: "Emergency Relief Projects",
      description: "Rapid response when disasters strike",
      image: "/images/emergency.jpeg",
      overview: "Our emergency relief operations provide immediate assistance during natural disasters, floods, cyclones, and other emergency situations, ensuring affected communities receive timely support and resources for recovery.",
      objectives: [
        "Provide immediate relief during natural disasters",
        "Distribute emergency supplies and materials",
        "Assist in rehabilitation and reconstruction efforts",
        "Coordinate with government and other NGOs for effective response",
        "Build community resilience against future disasters"
      ],
      programs: [
        {
          name: "Disaster Response Team",
          description: "Trained volunteers ready to respond within 24 hours of any emergency situation.",
          beneficiaries: "5,000+ people assisted during emergencies"
        },
        {
          name: "Relief Material Distribution",
          description: "Distribution of food, water, clothing, medicines, and temporary shelter materials.",
          beneficiaries: "10,000+ relief packages distributed"
        },
        {
          name: "Rehabilitation Support",
          description: "Long-term support for rebuilding homes, schools, and community infrastructure.",
          beneficiaries: "50+ communities rehabilitated"
        }
      ],
      impact: "Our emergency relief efforts have provided critical support to over 25,000 disaster-affected individuals, helping communities recover and rebuild stronger than before."
    }
  };

  const service = services[id as keyof typeof services];

  if (!service) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <Button onClick={() => navigate('/services')}>Back to Services</Button>
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
          style={{ backgroundImage: `url(${service.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl md:text-2xl text-gray-100 font-medium">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/services')}
            className="mb-8 text-[#f15a24] hover:bg-orange-50"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Services
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Overview</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.overview}
                  </p>
                </CardContent>
              </Card>

              {/* Objectives */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <Target className="mr-3 text-[#f15a24]" size={28} />
                    Our Objectives
                  </h2>
                  <ul className="space-y-3">
                    {service.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-3 mt-1 text-green-500 flex-shrink-0" size={20} />
                        <span className="text-gray-600">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Programs */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Programs</h2>
                  <div className="space-y-6">
                    {service.programs.map((program, index) => (
                      <div key={index} className="border-l-4 border-[#f15a24] pl-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{program.name}</h3>
                        <p className="text-gray-600 mb-2">{program.description}</p>
                        <div className="flex items-center text-sm text-[#f15a24]">
                          <Users className="mr-2" size={16} />
                          {program.beneficiaries}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Impact */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <Heart className="mr-3 text-red-500" size={28} />
                    Our Impact
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {service.impact}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-[#f15a24] to-orange-600 text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold mb-3">Get Involved</h3>
                  <p className="text-sm mb-4 text-orange-100">
                    Join us in making a difference. Your support can change lives.
                  </p>
                  <div className="space-y-3">
                    <Button variant="secondary" className="w-full">
                      Volunteer Now
                    </Button>
                    <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-[#f15a24]">
                      Donate
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Contact Us</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Have questions about this service? We'd love to hear from you.
                  </p>
                  <Button className="w-full bg-[#f15a24] hover:bg-orange-600">
                    Contact Us
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

export default ServiceDetail;
