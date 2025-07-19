import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import { Target, Heart, Users, Lightbulb, Shield, HandHeart } from 'lucide-react';

const VisionMission = () => {
  const visionMissionData = {
    vision: {
      title: "Our Vision",
      description: "To create a just, equitable, and sustainable society where every individual, especially the underprivileged, can live with dignity, access quality education, healthcare, and opportunities for holistic development.",
      icon: <Lightbulb className="w-16 h-16 sm:w-14 sm:h-14 text-white mb-4" />,
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-700"
    },
    mission: {
      title: "Our Mission",
      description: "To empower marginalized communities through education, healthcare, skill development, and sustainable livelihood programs, fostering self-reliance and social transformation.",
      icon: <Target className="w-16 h-16 sm:w-14 sm:h-14 text-white mb-4" />,
      bgColor: "bg-gradient-to-br from-green-500 to-green-600"
    },
    values: [
      {
        title: "Compassion",
        description: "We serve with empathy, understanding, and respect for all individuals.",
        icon: <Heart className="w-12 h-12 sm:w-10 sm:h-10 text-white mb-3" />,
        bgColor: "bg-gradient-to-br from-cyan-500 to-cyan-600"
      },
      {
        title: "Integrity",
        description: "We maintain the highest standards of honesty and ethical conduct in all our actions.",
        icon: <Shield className="w-12 h-12 sm:w-10 sm:h-10 text-white mb-3" />,
        bgColor: "bg-gradient-to-br from-yellow-500 to-yellow-600"
      },
      {
        title: "Inclusivity",
        description: "We believe in equal opportunities for all, regardless of caste, creed, gender, or economic status.",
        icon: <Users className="w-12 h-12 sm:w-10 sm:h-10 text-white mb-3" />,
        bgColor: "bg-gradient-to-br from-red-500 to-red-600"
      },
      {
        title: "Service",
        description: "We are committed to selfless service for the betterment of society.",
        icon: <HandHeart className="w-12 h-12 sm:w-10 sm:h-10 text-white mb-3" />,
        bgColor: "bg-gradient-to-br from-gray-600 to-gray-700"
      }
    ]
  };

  return (
    <Layout>
      {/* Breadcrumb with dark background */}
      <Breadcrumb title="Vision and Mission" backLink="/about" backText="Back to About Us" />

      {/* Vision & Mission Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-16">
            {/* Vision Card */}
            <div 
              className={`${visionMissionData.vision.bgColor} p-8 rounded-xl shadow-lg text-white transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 h-full`}
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="w-24 h-24 sm:w-20 sm:h-20 rounded-full bg-white/20 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  {visionMissionData.vision.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{visionMissionData.vision.title}</h3>
                <p className="leading-relaxed opacity-90 text-sm sm:text-base">{visionMissionData.vision.description}</p>
              </div>
            </div>

            {/* Mission Card */}
            <div 
              className={`${visionMissionData.mission.bgColor} p-8 rounded-xl shadow-lg text-white transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 h-full`}
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="w-24 h-24 sm:w-20 sm:h-20 rounded-full bg-white/20 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  {visionMissionData.mission.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{visionMissionData.mission.title}</h3>
                <p className="leading-relaxed opacity-90 text-sm sm:text-base">{visionMissionData.mission.description}</p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-16 px-4 sm:px-0">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-6"></div>
              <p className="text-gray-600 text-base sm:text-lg mb-12">
                These values guide our actions and decisions as we work towards our vision and mission.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {visionMissionData.values.map((value, index) => (
                <div 
                  key={index}
                  className={`${value.bgColor} p-6 rounded-xl shadow-md text-white h-full transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1`}
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={`${index * 100}`}
                >
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-16 h-16 sm:w-14 sm:h-14 rounded-full bg-white/20 flex items-center justify-center mb-4 text-white transition-transform duration-300 group-hover:scale-110">
                      {value.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                    <p className="text-sm opacity-90 leading-relaxed">{value.description}</p>
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
