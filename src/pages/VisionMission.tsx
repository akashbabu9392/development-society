import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Target, Heart, Users, Lightbulb, Shield, HandHeart } from 'lucide-react';

const VisionMission = () => {
  const visionMissionData = {
    vision: {
      title: "Our Vision",
      description: "To create a just, equitable, and sustainable society where every individual, especially the underprivileged, can live with dignity, access quality education, healthcare, and opportunities for holistic development.",
      icon: <Lightbulb className="w-12 h-12 text-[#f15a24] mb-4" />
    },
    mission: {
      title: "Our Mission",
      description: "To empower marginalized communities through education, healthcare, skill development, and sustainable livelihood programs, fostering self-reliance and social transformation.",
      icon: <Target className="w-12 h-12 text-[#f15a24] mb-4" />
    },
    values: [
      {
        title: "Compassion",
        description: "We serve with empathy, understanding, and respect for all individuals.",
        icon: <Heart className="w-8 h-8 text-[#f15a24] mb-2" />
      },
      {
        title: "Integrity",
        description: "We maintain the highest standards of honesty and ethical conduct in all our actions.",
        icon: <Shield className="w-8 h-8 text-[#f15a24] mb-2" />
      },
      {
        title: "Inclusivity",
        description: "We believe in equal opportunities for all, regardless of caste, creed, gender, or economic status.",
        icon: <Users className="w-8 h-8 text-[#f15a24] mb-2" />
      },
      {
        title: "Service",
        description: "We are committed to selfless service for the betterment of society.",
        icon: <HandHeart className="w-8 h-8 text-[#f15a24] mb-2" />
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Vision Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                {visionMissionData.vision.icon}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{visionMissionData.vision.title}</h3>
                <p className="text-gray-600 leading-relaxed">{visionMissionData.vision.description}</p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                {visionMissionData.mission.icon}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{visionMissionData.mission.title}</h3>
                <p className="text-gray-600 leading-relaxed">{visionMissionData.mission.description}</p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-[#f15a24] mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12">
              These values guide our actions and decisions as we work towards our vision and mission.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {visionMissionData.values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col items-center text-center">
                    {value.icon}
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Approach */}
          <div className="bg-gradient-to-r from-[#f15a24] to-orange-500 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Approach</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">5000+</div>
                <p className="text-orange-100">Lives Impacted</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15+</div>
                <p className="text-orange-100">Years of Service</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <p className="text-orange-100">Communities Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VisionMission;
