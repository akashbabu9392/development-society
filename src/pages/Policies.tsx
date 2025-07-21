import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import { Shield, HeartHandshake, Gavel, Scale, RefreshCw, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Policies = () => {
  const policies = [
    {
      title: 'Privacy Policy',
      content: 'At Development Society for Poor, we are committed to protecting your privacy. We collect only the information necessary to process your donations and keep you updated about our work. We never sell or share your personal information with third parties without your consent.',
      icon: <Shield className="w-10 h-10 text-white mb-3" />,
      bgColor: 'bg-[#4e73df]',
      textColor: 'text-white'
    },
    {
      title: 'Donation Policy',
      content: 'All donations made to Development Society for Poor are used to support our various programs and initiatives. We maintain complete transparency in our financial transactions and provide regular updates on how donations are being utilized. Tax exemption certificates are provided for all eligible donations.',
      icon: <HeartHandshake className="w-10 h-10 text-white mb-3" />,
      bgColor: 'bg-[#1cc88a]',
      textColor: 'text-white'
    },
    {
      title: 'Child Protection Policy',
      content: 'We have a zero-tolerance policy for any form of child abuse or exploitation. All staff and volunteers undergo thorough background checks and training to ensure the safety and well-being of the children we serve. We are committed to creating a safe environment for all beneficiaries.',
      icon: <Users className="w-10 h-10 text-white mb-3" />,
      bgColor: 'bg-[#f6c23e]',
      textColor: 'text-white'
    },
    {
      title: 'Transparency & Accountability',
      content: 'We maintain the highest standards of financial accountability and transparency. Our financial statements are audited annually by independent auditors, and we publish annual reports detailing our activities, financials, and impact. We welcome questions about our work and financials.',
      icon: <Scale className="w-10 h-10 text-white mb-3" />,
      bgColor: 'bg-[#e74a3b]',
      textColor: 'text-white'
    },
    {
      title: 'Refund & Cancellation Policy',
      content: 'Donations made to Development Society for Poor are non-refundable. In case of any technical issues or errors in processing your donation, please contact us immediately. We will make every effort to resolve the issue promptly and to your satisfaction.',
      icon: <RefreshCw className="w-10 h-10 text-white mb-3" />,
      bgColor: 'bg-[#36b9cc]',
      textColor: 'text-white'
    },
    {
      title: 'Volunteer Policy',
      content: 'We welcome volunteers who share our vision and values. All volunteers are required to complete an application process, which may include background checks and interviews. We provide orientation and training to ensure volunteers are well-prepared for their roles.',
      icon: <Gavel className="w-10 h-10 text-white mb-3" />,
      bgColor: 'bg-[#5a5c69]',
      textColor: 'text-white'
    }
  ];

  return (
    <Layout>
      <Breadcrumb title="Our Policies" />
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Policies</h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#4e73df] to-[#1cc88a] rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Development Society for Poor, we are committed to maintaining the highest standards of <span className="font-semibold text-[#4e73df]">transparency</span>, <span className="font-semibold text-[#1cc88a]">accountability</span>, and <span className="font-semibold text-[#f6c23e]">ethical practices</span> in all our operations.
            </p>
          </div>
          
          {/* Policies Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {policies.map((policy, index) => (
              <div 
                key={index}
                className={`${policy.bgColor} ${policy.textColor} rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="p-6 h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    {policy.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{policy.title}</h3>
                  <p className="leading-relaxed opacity-90">{policy.content}</p>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>
    </Layout>
  );
};

export default Policies;
