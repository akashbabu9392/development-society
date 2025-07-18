import Layout from '@/components/Layout';

const ExecutiveBody = () => {
  const executiveMembers = [
    {
      id: 1,
      name: "Mrs. Thomasamma",
      position: "President",
      image: "/images/team/placeholder.jpg",
      bio: "With over 15 years of experience in social work, Mrs. Thomasamma has been instrumental in guiding the organization's vision and mission since 2017.",
      email: "president@dsp.org"
    },
    {
      id: 2,
      name: "Mr. A. Prabhudasu",
      position: "Founder & Vice President",
      image: "/images/team/placeholder.jpg",
      bio: "Co-founder of DSP, Mr. Prabhudasu has been a driving force behind the organization's initiatives since its inception in 2005.",
      email: "vp@dsp.org"
    }
  ];

  return (
    <Layout>

      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Executive Body Members</h1>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">Meet our dedicated team members</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {executiveMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Member Photo</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-orange-500 font-medium">{member.position}</p>
                  <p className="mt-2 text-gray-600">{member.bio}</p>
                  <a 
                    href={`mailto:${member.email}`}
                    className="mt-4 inline-block text-orange-500 hover:underline"
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
