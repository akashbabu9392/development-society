
import Layout from '@/components/Layout';

const About = () => {
  const timelineEvents = [
    {
      year: "2005",
      description: "Development Society for Poor (DSP) was started by Rev. Fr. K. Rayapu Reddy & Mr. A. Prabhudasu with Registration Number: 876/2005 dated 29th December 2005"
    },
    {
      year: "2014",
      description: "On March 14, 2014 DSP started \"Archangel's Home for the Aged\" at Rentachintala with Mr. Satish Kumar Reddy in a rented building to cater the needs of the destitute elderly."
    },
    {
      year: "2016",
      description: "New Home for the Aged was constructed and dedicated on March 14, 2106 with the help Of Mr. K. Marreddy as the builder."
    },
    {
      year: "2017",
      description: "Mrs. Thomasamma is elevated as President and DSP got 12 A, Tax Exemption Status"
    },
    {
      year: "2018",
      description: "January 2, 2018 DSP got FCRA - Mrs. Mary Ruby started working as the Project Manager. Different Staff was recruited as different project coordinators – Mrs. Anitha Kumari, Mrs. Yeruva Maria Rani, Mrs. Allam Mary, and Mrs. Boyapati Mahitha. Started different Projects namely:"
    },
    {
      year: "2018",
      description: "Educating the Children – Specially Girl Children, Young Girls, Orphans, Semi-Orphans and most Needy were supported"
    },
    {
      year: "2018",
      description: "Helping the Victims: Widows, Challenged people"
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl md:text-4xl font-bold">About the Organisation</h1>
            <nav className="text-sm">
              <span className="text-gray-300">Home</span>
              <span className="mx-2">›</span>
              <span>About the Organisation</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#f15a24]">
            A short History of Development Society for Poor (DSP)
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex mb-8">
                <div className="flex flex-col items-center mr-8">
                  <div className="w-16 h-16 bg-[#f15a24] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {event.year}
                  </div>
                  {index < timelineEvents.length - 1 && (
                    <div className="w-1 h-20 bg-gray-300 mt-4"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <p className="text-gray-700 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Organization Description */}
          <div className="mt-16 max-w-6xl mx-auto">
            <p className="text-gray-700 leading-relaxed text-justify">
              Development Society for Poor (DSP) is a social service organization working for the socio-economic development of the poor 
              specially for the Scheduled Tribe (ST) and Backward communities, irrespective of their caste, creed and 
              religion. It is committed for the development of the socially marginalized communities and Backward Class communities. It focuses 
              on the rural and urban poor, agricultural labourers, marginal farmers, women and children, particularly the girl children. The 
              Development Society for Poor is committed to people's participatory development processes. People concerned and affected are 
              involved in the entire process of project identification, development, execution, monitoring and evaluation. Projects adopt a bottom 
              up approach and are evolved at the community level.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
