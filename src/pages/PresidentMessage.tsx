import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PresidentMessage = () => {
  return (
    <Layout>
      <Breadcrumb title="President's Message" />
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-gray-50 rounded-xl p-8 md:p-12 shadow-sm">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Message from Our President</h1>
              <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                  <div className="w-48 h-48 md:w-56 md:h-56 flex-shrink-0 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src="/images/k-thomasamma.jpg" 
                      alt="Mrs. K. Thomasamma, President"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZWVlZWVlIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1JSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSI+TXJzLiBLLiBUaG9tYXNhbW1hPC90ZXh0Pgo8L3N2Zz4=';
                      }}
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Mrs. K. Thomasamma</h2>
                    <p className="text-orange-500 font-medium">President, Development Society for Poor</p>
                  </div>
                </div>
                
                <div className="prose max-w-none text-gray-700 space-y-6">
                  <p>Dear Friends and Well-wishers,</p>
                  
                  <p>It is with great pleasure and a deep sense of responsibility that I address you as the President of Development Society for Poor (DSP). Since our inception in 2005, we have been committed to transforming lives and empowering communities through sustainable development initiatives.</p>
                  
                  <p>Our journey over the years has been both challenging and rewarding. We have witnessed firsthand the transformative power of education, healthcare, and economic empowerment in uplifting underprivileged communities. The smiles we see on the faces of those we serve are a constant source of inspiration for our team.</p>
                  
                  <p>As we move forward, our focus remains on creating lasting impact through innovative programs that address the root causes of poverty and inequality. We believe in the potential of every individual and community to thrive when given the right opportunities and support.</p>
                  
                  <p>I am deeply grateful to our dedicated team, volunteers, partners, and supporters who have been instrumental in our journey. Together, we are building a future where every individual has the opportunity to lead a life of dignity and purpose.</p>
                  
                  <p>I invite you to join us in this noble mission. Your support, whether through volunteering, partnerships, or donations, can help us reach more lives and create meaningful change.</p>
                  
                  <p>Thank you for your continued trust and support.</p>
                  
                  <p>With warm regards,</p>
                  
                  <div className="mt-8">
                    <p className="font-bold">Mrs. K. Thomasamma</p>
                    <p>President</p>
                    <p>Development Society for Poor</p>
                    <p className="mt-4 text-orange-500">president@dsp.org</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Join Us in Making a Difference</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Your support can help us reach more communities and create lasting change. Consider making a donation or volunteering your time today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-[#f15a24] hover:bg-[#d14619] text-white">
                  <Link to="/donate" className="flex items-center">
                    Donate Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-[#f15a24] text-[#f15a24] hover:bg-[#fff8f6]">
                  <Link to="/volunteer" className="flex items-center">
                    Volunteer <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PresidentMessage;
