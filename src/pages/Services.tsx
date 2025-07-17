
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

const Services = () => {
  return (
    <Layout>
      {/* Services Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <PageHeader 
            title="Our Services"
            description="To be more relevant in our approach we divided our projects into 5 sectors according to their characteristic nature of addressing the concerns of the poor."
            backText="Back to Home"
            backLink="/"
          />

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
            <div className="group">
              <a href="/service/victims" className="block">
                <div className="p-6 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="lg:w-2/3">
                      <h3 className="text-2xl font-bold text-[#f15a24] mb-4 group-hover:underline">Projects for the Victim's</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        The projects under this category supports the victims of different types. To work in a very comprehensive 
                        way we can put forward the victims into 5 categories.
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
                          src="/images/projects.jpg"
                          alt="Projects for Victims"
                          className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              
              <div className="space-y-4 text-gray-700">
                <div>
                  <strong>1. Orphan and Semi Orphan children:</strong> This programme helps the "High Risk Children" through educating the 
                  orphan, semi-orphan, children of HIV/AIDS patients, children with parents infected with chronic diseases 
                  (TB, Cancer etc.), children from badly neglected families.
                </div>
                
                <div>
                  <strong>2. Widows:</strong> This programme helps the women who have lost their husbands to HIV/AIDS, Cancer, 
                  Tuberculosis and farmers suicides shattering their liver and that of their children. These unfortunate 
                  women are faced with the prospect of raising families all by themselves in the society.
                </div>
                
                <div>
                  <strong>3. Challenged Children/People:</strong> The four categories of challenged are the physically, mentally, visually, deaf 
                  and dumb children/people are in real need of our help to improve their living conditions by economic 
                  growth, sustenance and safe living. The challenged people are being helped through these programmes.
                </div>
                
                <div>
                  <strong>4. Elderly People:</strong> These elderly persons have been badly neglected by their sons and daughters. They lead 
                  miserable lives without anybody to take care of their needs. this programme specifically provides the aged 
                  not only with accommodation but also to take care of their food needs, health care and other basic 
                  necessities.
                </div>
                
                <div>
                  <strong>5. Leprosy and other deadly disease Patients:</strong> Through this programme we intend to eradicate leprosy and 
                  other Deadly disease patients by Prevention, Control and Treatment of leprosy and other deadly diseases. 
                  This programme is mainly to generate awareness among the people on Leprosy and other deadly diseases 
                  through conducting Health camps in the villages, Door-to-door survey, identification of the leprosy affected, 
                  Referral to the Government Hospital for confirmation and treatment and Follow-up of the cases.
                </div>
              </div>
            </div>

            {/* Emergency Relief Projects */}
            <a href="/service/emergency" className="block group">
              <div className="flex flex-col lg:flex-row-reverse items-start gap-8 p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="lg:w-2/3">
                  <h3 className="text-2xl font-bold text-red-600 mb-4 group-hover:underline">Emergency Relief Projects</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The projects under this category supports the emergency assistance in the face of Natural/manmade 
                    disasters victims.
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
                      src="/images/emergency.jpeg"
                      alt="Emergency Relief Projects"
                      className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                    />
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
