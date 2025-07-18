import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Target, Heart, Users, Lightbulb, Shield, HandHeart } from 'lucide-react';

const VisionMission = () => {
  const visionMissionData = {
    vision: {
      title: "Our Vision",
      description: "To create a just, equitable, and sustainable society where every individual, especially the underprivileged, can live with dignity, access quality education, healthcare, and opportunities for holistic development.",
      icon: <Lightbulb className="w-12 h-12 text-white mb-4" />,
      bgColor: "bg-[#4e73df]"
    },
    mission: {
      title: "Our Mission",
      description: "To empower marginalized communities through education, healthcare, skill development, and sustainable livelihood programs, fostering self-reliance and social transformation.",
      icon: <Target className="w-12 h-12 text-white mb-4" />,
      bgColor: "bg-[#1cc88a]"
    },
    values: [
      {
        title: "Compassion",
        description: "We serve with empathy, understanding, and respect for all individuals.",
        icon: <Heart className="w-10 h-10 text-white mb-3" />,
        bgColor: "bg-[#36b9cc]"
      },
      {
        title: "Integrity",
        description: "We maintain the highest standards of honesty and ethical conduct in all our actions.",
        icon: <Shield className="w-10 h-10 text-white mb-3" />,
        bgColor: "bg-[#f6c23e]"
      },
      {
        title: "Inclusivity",
        description: "We believe in equal opportunities for all, regardless of caste, creed, gender, or economic status.",
        icon: <Users className="w-10 h-10 text-white mb-3" />,
        bgColor: "bg-[#e74a3b]"
      },
      {
        title: "Service",
        description: "We are committed to selfless service for the betterment of society.",
        icon: <HandHeart className="w-10 h-10 text-white mb-3" />,
        bgColor: "bg-[#5a5c69]"
      }
    ]
  };

  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-white py-6 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageHeader 
            title="Vision & Mission"
            description="Our guiding principles and commitment to social transformation"
            backLink="/about"
            backText="Back to About Us"
          />
        </div>
      </div>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Vision Card */}
            <div className={`${visionMissionData.vision.bgColor} p-8 rounded-lg shadow-md text-white transform transition-all duration-300 hover:shadow-lg`}>
              <div className="flex flex-col items-center text-center h-full">
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-6">
                  {visionMissionData.vision.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{visionMissionData.vision.title}</h3>
                <p className="leading-relaxed opacity-90">{visionMissionData.vision.description}</p>
              </div>
            </div>

            {/* Mission Card */}
            <div className={`${visionMissionData.mission.bgColor} p-8 rounded-lg shadow-md text-white transform transition-all duration-300 hover:shadow-lg`}>
              <div className="flex flex-col items-center text-center h-full">
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-6">
                  {visionMissionData.mission.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{visionMissionData.mission.title}</h3>
                <p className="leading-relaxed opacity-90">{visionMissionData.mission.description}</p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <div className="w-24 h-1.5 bg-[#4e73df] rounded-full mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
              These values guide our actions and decisions as we work towards our vision and mission.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {visionMissionData.values.map((value, index) => (
                <div className={`${value.bgColor} p-6 rounded-lg shadow-md text-white h-full transform transition-all duration-300 hover:shadow-lg`}>
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 text-white">
                      {value.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                    <p className="opacity-90">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Approach */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Lives Impacted */}
              <div className="bg-gradient-to-br from-[#4e73df] to-[#224abe] p-6 rounded-lg shadow-md text-white text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="text-4xl font-bold mb-2">5000+</div>
                <p className="text-white/90">Lives Impacted</p>
                <div className="w-16 h-1 bg-white/30 mx-auto mt-4 rounded-full"></div>
              </div>
              
              {/* Years of Service */}
              <div className="bg-gradient-to-br from-[#1cc88a] to-[#13855c] p-6 rounded-lg shadow-md text-white text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="text-4xl font-bold mb-2">15+</div>
                <p className="text-white/90">Years of Service</p>
                <div className="w-16 h-1 bg-white/30 mx-auto mt-4 rounded-full"></div>
              </div>
              
              {/* Communities Served */}
              <div className="bg-gradient-to-br from-[#36b9cc] to-[#258391] p-6 rounded-lg shadow-md text-white text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="text-4xl font-bold mb-2">50+</div>
                <p className="text-white/90">Communities Served</p>
                <div className="w-16 h-1 bg-white/30 mx-auto mt-4 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VisionMission;
