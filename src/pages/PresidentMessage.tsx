import Layout from '@/components/Layout';

const PresidentMessage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Message from President</h1>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              {/* President's Info with Image - Always side by side */}
              <div className="flex flex-row items-center gap-6 mb-6">
                <div className="w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 rounded-full overflow-hidden border-2 border-gray-200">
                  <img 
                    src="/images/k-thomasamma.jpg" 
                    alt="Mrs. Thomasamma, President"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback in case image fails to load
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZWVlZWVlIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1JSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSI+UHJlc2lkZW50J3MgUGhvdG88L3RleHQ+Cjwvc3ZnPg==';
                    }}
                  />
                </div>
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Mrs. Thomasamma</h2>
                  <p className="text-orange-500 font-medium">President, Development Society for Poor</p>
                </div>
              </div>
                
                <div className="prose max-w-none text-gray-700 space-y-4">
                  <p>Dear Friends and Well-wishers,</p>
                  
                  <p>It is with great pleasure and a deep sense of responsibility that I address you as the President of Development Society for Poor (DSP). Since our inception in 2005, we have been committed to transforming lives and empowering communities through sustainable development initiatives.</p>
                  
                  <p>Our journey over the years has been both challenging and rewarding. We have witnessed firsthand the transformative power of education, healthcare, and economic empowerment in uplifting underprivileged communities. The smiles we see on the faces of those we serve are a constant source of inspiration for our team.</p>
                  
                  <p>As we move forward, our focus remains on creating lasting impact through innovative programs that address the root causes of poverty and inequality. We believe in the potential of every individual and community to thrive when given the right opportunities and support.</p>
                  
                  <p>I am deeply grateful to our dedicated team, volunteers, partners, and supporters who have been instrumental in our journey. Together, we are building a future where every individual has the opportunity to lead a life of dignity and purpose.</p>
                  
                  <p>I invite you to join us in this noble mission. Your support, whether through volunteering, partnerships, or donations, can help us reach more lives and create meaningful change.</p>
                  
                  <p>Thank you for your continued trust and support.</p>
                  
                  <p>With warm regards,</p>
                  
                  <div className="mt-8">
                    <p className="font-bold">Mrs. Thomasamma</p>
                    <p>President</p>
                    <p>Development Society for Poor</p>
                    <p className="mt-4 text-orange-500">president@dsp.org</p>
                  </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Join Us in Making a Difference</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Your support can help us reach more communities and create lasting change. Consider making a donation or volunteering your time today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/donate"
                className="px-6 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition-colors"
              >
                Donate Now
              </a>
              <a
                href="/volunteer"
                className="px-6 py-3 border border-orange-500 text-orange-500 font-medium rounded-md hover:bg-orange-50 transition-colors"
              >
                Volunteer
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PresidentMessage;
