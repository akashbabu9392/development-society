import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import { FileText, ShieldCheck, Users, HeartHandshake, Scale } from 'lucide-react';

const policyCategories = [
  {
    title: "Child Protection Policy",
    description: "Our commitment to safeguarding children and ensuring their well-being in all our programs.",
    icon: <ShieldCheck className="w-8 h-8 text-[#f15a24]" />
  },
  {
    title: "Gender Equality Policy",
    description: "Ensuring equal opportunities and rights for all genders in our organization and programs.",
    icon: <Users className="w-8 h-8 text-[#f15a24]" />
  },
  {
    title: "Financial Accountability",
    description: "Our commitment to transparency and proper management of donor funds and resources.",
    icon: <FileText className="w-8 h-8 text-[#f15a24]" />
  },
  {
    title: "Code of Conduct",
    description: "Ethical guidelines and professional standards for all staff, volunteers, and partners.",
    icon: <Scale className="w-8 h-8 text-[#f15a24]" />
  },
  {
    title: "Partnership Policy",
    description: "Guidelines for establishing and maintaining ethical and effective partnerships.",
    icon: <HeartHandshake className="w-8 h-8 text-[#f15a24]" />
  }
];

const OurPolicies = () => {
  return (
    <Layout>
      <Breadcrumb title="Our Policies" />
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Policies</h1>
            <p className="text-lg text-gray-600">
              We are committed to maintaining the highest standards of integrity, accountability, and transparency in all our operations.
              Our policies guide our actions and ensure we remain true to our mission and values.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {policyCategories.map((policy, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300 h-full">
                <div className="w-12 h-12 bg-[#f15a24]/10 rounded-full flex items-center justify-center mb-4">
                  {policy.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{policy.title}</h3>
                <p className="text-gray-600">{policy.description}</p>
                <button className="mt-4 text-[#f15a24] font-medium hover:underline inline-flex items-center">
                  View Policy
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gray-50 rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Policy Implementation</h2>
            <p className="text-gray-700 mb-6">
              At Development Society for Poor, we ensure that all our policies are not just documents but living guidelines that inform our daily operations.
              Our team receives regular training on policy implementation, and we conduct periodic reviews to ensure compliance and effectiveness.
            </p>
            <p className="text-gray-700">
              For more information about any of our policies or to request a copy, please contact our office at{' '}
              <a href="mailto:dsociety2005@gmail.com" className="text-[#f15a24] hover:underline">dsociety2005@gmail.com</a>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OurPolicies;
