
import Layout from '@/components/Layout';

const Services = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl md:text-4xl font-bold">Our Services</h1>
            <nav className="text-sm">
              <span className="text-gray-300">Home</span>
              <span className="mx-2">›</span>
              <span>Our Services</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <p className="text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
              To be more relevant in our approach we divided our projects into 5 sectors according to their characteristic nature of addressing the concerns of the poor. They are categorized as follows:
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* Educational and Vocational Skill Training Projects */}
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="lg:w-2/3">
                <h3 className="text-2xl font-bold text-[#f15a24] mb-4">Educational and Vocational Skill Training Projects</h3>
                <p className="text-gray-700 leading-relaxed">
                  The projects under this category support the formal and non-formal education of orphan, semi-orphan, 
                  and poor children to access quality education, Construction of Schools, and supports Livelihood skills 
                  Education for the youth for employability.
                </p>
              </div>
              <div className="lg:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1544717684-8b6b75e9b59f?w=400&h=300&fit=crop"
                  alt="Educational Projects"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Health and Projects for the differently Abled */}
            <div className="flex flex-col lg:flex-row-reverse items-start gap-8">
              <div className="lg:w-2/3">
                <h3 className="text-2xl font-bold text-[#f15a24] mb-4">Health and Projects for the differently Abled</h3>
                <p className="text-gray-700 leading-relaxed">
                  The projects under this category supports the people for a healthy and happy living. Construction of 
                  Health centres and Income Generation activities for the disabled for self support.
                </p>
              </div>
              <div className="lg:w-1/3">
                <img 
                  src="/lovable-uploads/7597c083-d11a-430d-b6c3-95ae3e10456e.png"
                  alt="Health Projects"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Women Development and Elderly Care Projects */}
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="lg:w-2/3">
                <h3 className="text-2xl font-bold text-[#f15a24] mb-4">Women Development and Elderly Care Projects</h3>
                <p className="text-gray-700 leading-relaxed">
                  The projects under this category supports the formation of Self Help Groups, Savings, Income Generation 
                  Programmes, Widows and supports the poor elderly through sponsorship, starting of Aged Homes and 
                  related activities.
                </p>
              </div>
              <div className="lg:w-1/3">
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Image placeholder</span>
                </div>
              </div>
            </div>

            {/* Projects for the Victim's */}
            <div className="lg:w-full">
              <h3 className="text-2xl font-bold text-[#f15a24] mb-4">Projects for the Victim's</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The projects under this category supports the victims of different types. To work in a very comprehensive 
                way we can put forward the victims into 5 categories.
              </p>
              
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
            <div className="flex flex-col lg:flex-row-reverse items-start gap-8">
              <div className="lg:w-2/3">
                <h3 className="text-2xl font-bold text-red-600 mb-4">Emergency Relief Projects</h3>
                <p className="text-gray-700 leading-relaxed">
                  The projects under this category supports the emergency assistance in the face of Natural/manmade 
                  disasters victims.
                </p>
              </div>
              <div className="lg:w-1/3">
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Image placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
