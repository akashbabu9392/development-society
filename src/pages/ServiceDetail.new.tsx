import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
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
    // ... other service objects
  };

  const service = services[id as keyof typeof services];

  if (!service) {
    return (
      <Layout>
        <PageHeader 
          title="Service Not Found"
          backText="Back to Services"
          backLink="/services"
        />
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
          <p className="text-gray-600 mb-6">The requested service could not be found.</p>
          <Button 
            onClick={() => navigate('/services')} 
            className="bg-[#f15a24] hover:bg-orange-600"
          >
            Back to Services
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-white">
        <PageHeader 
          title={service.title}
          description={service.description}
          backText="Back to Services"
          backLink="/services"
        />
      </div>

      {/* Hero Image */}
      <div className="relative bg-gray-100">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-xl">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = '/images/placeholder.jpg';
              }}
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
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
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Users className="mr-3 text-[#f15a24]" size={28} />
                  Our Programs
                </h2>
                <div className="space-y-6">
                  {service.programs.map((program, index) => (
                    <div key={index} className="border-l-4 border-[#f15a24] pl-4 py-2">
                      <h3 className="text-lg font-semibold text-gray-800">{program.name}</h3>
                      <p className="text-gray-600 mt-1">{program.description}</p>
                      <p className="text-sm text-gray-500 mt-2">
                        <span className="font-medium">Beneficiaries:</span> {program.beneficiaries}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Impact */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Heart className="mr-3 text-[#f15a24]" size={28} />
                  Our Impact
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {service.impact}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="#overview" 
                      className="text-[#f15a24] hover:underline flex items-center"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Overview
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#objectives" 
                      className="text-[#f15a24] hover:underline flex items-center"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Our Objectives
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#programs" 
                      className="text-[#f15a24] hover:underline flex items-center"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Our Programs
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#impact" 
                      className="text-[#f15a24] hover:underline flex items-center"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Our Impact
                    </a>
                  </li>
                </ul>
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
    </Layout>
  );
};

export default ServiceDetail;
