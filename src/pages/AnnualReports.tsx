import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
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
    }
  ];

  return (
    <Layout>
      <Breadcrumb title="Annual Reports" />
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Annual Reports</h1>
            <p className="text-lg text-gray-600">
              Explore our yearly reports to learn about our financials, program impacts, and organizational achievements.
              We believe in complete transparency in all our operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.map((report, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className={`${report.bgColor} ${report.textColor} p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold">{report.year}</div>
                    <div className="p-2 bg-white/20 rounded-lg">
                      {report.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{report.title}</h3>
                  <p className="text-sm opacity-90">{report.description}</p>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>File: {report.fileType}</span>
                    <span>{report.fileSize}</span>
                  </div>
                  <a
                    href={report.downloadLink}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#f15a24] hover:bg-[#d14619] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f15a24]"
                    download
                  >
                    <Download className="w-4 h-4" />
                    Download Report
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-white rounded-xl p-8 md:p-12 max-w-4xl mx-auto shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Financial Transparency</h2>
            <p className="text-gray-700 mb-6">
              At Development Society for Poor, we are committed to maintaining the highest standards of financial transparency and accountability. 
              Our annual reports are independently audited and provide a comprehensive overview of our financial health, program expenditures, 
              and the impact of your generous contributions.
            </p>
            <p className="text-gray-700">
              For any additional information or specific queries about our financials, please contact us at{' '}
              <a href="mailto:accounts@developmentsociety.org" className="text-[#f15a24] hover:underline">
                accounts@developmentsociety.org
              </a>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AnnualReports;
