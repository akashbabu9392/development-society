
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';

const Services = () => {
  return (
    <Layout>
      <Breadcrumb title="Our Services" />
      
      {/* Services Content */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Our Services</h1>
            <p className="text-lg text-gray-600">
              To be more relevant in our approach we divided our projects into 5 sectors according to their 
              characteristic nature of addressing the concerns of the poor.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* Educational and Vocational Skill Training Projects */}
            <a href="/service/education" className="block group">
              <div className="flex flex-col lg:flex-row items-start gap-8 p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="lg:w-2/3">
                  <h3 className="text-2xl font-bold text-[#f15a24] mb-4 group-hover:underline">Educational and Vocational Skill Training Projects</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The projects under this category support the formal and non-formal education of orphan, semi-orphan, 
                    and poor children to access quality education, Construction of Schools, and supports Livelihood skills 
                    Education for the youth for employability.
                  </p>
                  <button className="mt-4 text-[#f15a24] font-medium hover:underline flex items-center">
                    Learn more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <div className="lg:w-1/3">
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src="/images/educational.jpg"
                      alt="Educational Projects"
                      className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </a>

            {/* Health and Projects for the differently Abled */}
            <a href="/service/health" className="block group">
              <div className="flex flex-col lg:flex-row-reverse items-start gap-8 p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="lg:w-2/3">
                  <h3 className="text-2xl font-bold text-[#f15a24] mb-4 group-hover:underline">Health and Projects for the differently Abled</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The projects under this category supports the people for a healthy and happy living. Construction of 
                    Health centres and Income Generation activities for the disabled for self support.
                  </p>
                  <button className="mt-4 text-[#f15a24] font-medium hover:underline flex items-center">
                    Learn more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <div className="lg:w-1/3">
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src="/images/health.jpg"
                      alt="Health Projects"
                      className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </a>

            {/* Women Development and Elderly Care Projects */}
            <a href="/service/women-development" className="block group">
              <div className="flex flex-col lg:flex-row items-start gap-8 p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="lg:w-2/3">
                  <h3 className="text-2xl font-bold text-[#f15a24] mb-4 group-hover:underline">Women Development and Elderly Care Projects</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The projects under this category supports the formation of Self Help Groups, Savings, Income Generation 
                    Programmes, Widows and supports the poor elderly through sponsorship, starting of Aged Homes and 
                    related activities.
                  </p>
                  <button className="mt-4 text-[#f15a24] font-medium hover:underline flex items-center">
                    Learn more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <div className="lg:w-1/3">
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src="/images/women-development.jpg"
                      alt="Women Development Projects"
                      className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </a>

            {/* Projects for the Victim's */}
            <a href="/service/victims" className="block group">
              <div className="flex flex-col lg:flex-row items-start gap-8 p-6 rounded-lg hover:bg-gray-50 transition-colors">
                {/* Image on the left */}
                <div className="w-full lg:w-1/3">
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src="/images/projects.jpg"
                      alt="Projects for Victims"
                      className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
                
                {/* Content on the right */}
                <div className="w-full lg:w-2/3">
                  <h3 className="text-2xl font-bold text-[#f15a24] mb-4 group-hover:underline">Projects for the Victim's</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Supporting vulnerable groups including orphans, widows, challenged individuals, elderly, and disease patients through 
                    comprehensive care, education, and rehabilitation programs.
                  </p>
                  <div className="mt-4 text-[#f15a24] font-medium hover:underline flex items-center">
                    Learn more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>

            {/* Emergency Relief Projects */}
            <a href="/service/emergency" className="block group">
              <div className="p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex flex-col lg:flex-row-reverse items-start gap-8">
                  {/* Image on the right */}
                  <div className="w-full lg:w-1/3">
                    <div className="overflow-hidden rounded-lg">
                      <img 
                        src="/images/emergency.jpeg"
                        alt="Emergency Relief Projects"
                        className="w-full h-auto object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  
                  {/* Content on the left */}
                  <div className="w-full lg:w-2/3">
                    <h3 className="text-2xl font-bold text-[#f15a24] mb-4 group-hover:underline">Emergency Relief Projects</h3>
                    <p className="text-gray-700 leading-relaxed">
                      The projects under this category supports the emergency assistance in the face of Natural/manmade 
                      disasters victims.
                    </p>
                    
                    <div className="mt-4 text-[#f15a24] font-medium hover:underline flex items-center">
                      Learn more
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
