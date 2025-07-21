import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';

const ExecutiveBody = () => {
  const executiveMembers = [
    {
      id: 1,
      name: "Mrs. Thomasamma",
      position: "President",
      image: "/images/ms.thomasamma.jpg",
      bio: "With over 15 years of experience in social work, Mrs. Thomasamma has been instrumental in guiding the organization's vision and mission since 2017.",
      email: "president@dsp.org"
    },
    {
      id: 2,
      name: "Mr. A. Prabhudasu",
      position: "Founder & Vice President",
      image: "/images/a.prabhudasu.jpg",
      bio: "Co-founder of DSP, Mr. Prabhudasu has been a driving force behind the organization's initiatives since its inception in 2005.",
      email: "vp@dsp.org"
    }
  ];

  return (
    <Layout>
      <Breadcrumb title="Executive Body Members" backLink="/about" backText="Back to About Us" />
      
      <div className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Executive Body Members</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Meet the dedicated individuals leading our organization towards positive change and community development.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {executiveMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <div className="p-6 flex-grow">
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-orange-100 mb-6">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 text-center">{member.name}</h3>
                    <p className="text-orange-500 font-medium">{member.position}</p>
                  </div>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <a 
                    href={`mailto:${member.email}`}
                    className="inline-block text-orange-500 hover:underline"
                  >
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ExecutiveBody;
