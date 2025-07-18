import Layout from '@/components/Layout';
import { FileText, Download } from 'lucide-react';

const AnnualReports = () => {
  const reports = [
    {
      year: 2023,
      title: 'Annual Report 2022-2023',
      description: 'A comprehensive overview of our activities, financials, and impact from April 2022 to March 2023.',
      fileSize: '2.4 MB',
      fileType: 'PDF',
      downloadLink: '/reports/annual-report-2023.pdf',
      bgColor: 'bg-[#4e73df]',
      textColor: 'text-white',
      icon: <FileText className="w-6 h-6" />
    },
    {
      year: 2022,
      title: 'Annual Report 2021-2022',
      description: 'Highlights of our achievements, financial statements, and future goals for the fiscal year 2021-2022.',
      fileSize: '2.1 MB',
      fileType: 'PDF',
      downloadLink: '/reports/annual-report-2022.pdf',
      bgColor: 'bg-[#1cc88a]',
      textColor: 'text-white',
      icon: <FileText className="w-6 h-6" />
    },
    {
      year: 2021,
      title: 'Annual Report 2020-2021',
      description: 'Documenting our journey, challenges, and successes during the unprecedented times of the pandemic.',
      fileSize: '1.9 MB',
      fileType: 'PDF',
      downloadLink: '/reports/annual-report-2021.pdf',
      bgColor: 'bg-[#f6c23e]',
      textColor: 'text-white',
      icon: <FileText className="w-6 h-6" />
    },
    {
      year: 2020,
      title: 'Annual Report 2019-2020',
      description: 'A year of growth and expansion in our efforts to serve the underprivileged communities.',
      fileSize: '1.8 MB',
      fileType: 'PDF',
      downloadLink: '/reports/annual-report-2020.pdf',
      bgColor: 'bg-[#e74a3b]',
      textColor: 'text-white',
      icon: <FileText className="w-6 h-6" />
    },
    {
      year: 2019,
      title: 'Annual Report 2018-2019',
      description: 'Celebrating five years of service with our annual report showcasing impact and financials.',
      fileSize: '1.7 MB',
      fileType: 'PDF',
      downloadLink: '/reports/annual-report-2019.pdf',
      bgColor: 'bg-[#36b9cc]',
      textColor: 'text-white',
      icon: <FileText className="w-6 h-6" />
    },
    {
      year: 2018,
      title: 'Annual Report 2017-2018',
      description: 'Our journey through the year with detailed program outcomes and financial transparency.',
      fileSize: '1.6 MB',
      fileType: 'PDF',
      downloadLink: '/reports/annual-report-2018.pdf',
      bgColor: 'bg-[#5a5c69]',
      textColor: 'text-white',
      icon: <FileText className="w-6 h-6" />
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Annual Reports</h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#4e73df] to-[#1cc88a] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our annual reports to learn about our achievements, financial transparency, and the impact of your support.
              <br className="hidden sm:block" />
              Download the reports to read our detailed financial statements and program outcomes.
            </p>
          </div>

          {/* Reports Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((report, index) => (
              <div 
                key={index}
                className={`${report.bgColor} ${report.textColor} rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      {report.icon}
                    </div>
                    <span className="px-3 py-1 text-sm font-medium bg-white/20 rounded-full">
                      {report.year}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{report.title}</h3>
                  <p className="opacity-90 mb-6 flex-grow">{report.description}</p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/20">
                    <span className="text-sm opacity-80">
                      {report.fileType} • {report.fileSize}
                    </span>
                    <a 
                      href={report.downloadLink}
                      className="inline-flex items-center px-4 py-2 bg-white text-gray-800 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors"
                      download
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-16 bg-gradient-to-r from-[#4e73df] to-[#1cc88a] rounded-xl shadow-lg p-8 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Financial Transparency</h2>
              <div className="w-16 h-1 bg-white/50 rounded-full mx-auto mb-6"></div>
              <p className="text-lg mb-6 max-w-3xl mx-auto">
                We believe in complete transparency in our financial operations. Our annual reports are independently audited to ensure accuracy and accountability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/about/transparency"
                  className="px-6 py-3 bg-white text-[#4e73df] font-medium rounded-md hover:bg-gray-100 transition-colors text-center text-sm sm:text-base shadow-md hover:shadow-lg"
                >
                  Learn About Our Financials
                </a>
                <a
                  href="/contact"
                  className="px-6 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors text-center text-sm sm:text-base"
                >
                  Request More Information
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AnnualReports;
