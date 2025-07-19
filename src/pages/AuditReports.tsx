import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import { FileText, Download, Search } from 'lucide-react';

const AuditReports = () => {
  const auditReports = [
    {
      id: 1,
      title: 'Statutory Audit Report 2022-23',
      description: 'Comprehensive statutory audit conducted by M/s. ABC & Associates, Chartered Accountants for the financial year 2022-23.',
      year: 2023,
      type: 'Statutory',
      fileSize: '1.8 MB',
      fileType: 'PDF',
      downloadLink: '/reports/audit/statutory-audit-2023.pdf',
      bgColor: 'bg-[#4e73df]',
      textColor: 'text-white',
      icon: <FileText className="w-6 h-6" />
    },
    {
      id: 2,
      title: 'Internal Audit Report Q4 2022-23',
      description: 'Quarterly internal audit report for the period January to March 2023, reviewing financial controls and processes.',
      year: 2023,
      type: 'Internal',
      fileSize: '1.2 MB',
      fileType: 'PDF',
      downloadLink: '/reports/audit/internal-audit-q4-2023.pdf',
      bgColor: 'bg-[#1cc88a]',
      textColor: 'text-white',
      icon: <FileText className="w-6 h-6" />
    },
    {
      id: 3,
      title: 'Tax Audit Report 2021-22',
      description: 'Tax audit report under Section 44AB of the Income Tax Act, 1961 for the assessment year 2022-23.',
      year: 2022,
      type: 'Tax',
      fileSize: '1.5 MB',
      fileType: 'PDF',
      downloadLink: '/reports/audit/tax-audit-2022.pdf',
      bgColor: 'bg-[#f6c23e]',
      textColor: 'text-white',
      icon: <FileText className="w-6 h-6" />
    },
    {
      id: 4,
      title: 'FCRA Audit Report 2021-22',
      description: 'Annual audit report for Foreign Contribution (Regulation) Act compliance for the financial year 2021-22.',
      year: 2022,
      type: 'FCRA',
      fileSize: '1.7 MB',
      fileType: 'PDF',
      downloadLink: '/reports/audit/fcra-audit-2022.pdf',
      bgColor: 'bg-[#e74a3b]',
      textColor: 'text-white',
      icon: <FileText className="w-6 h-6" />
    },
    {
      id: 5,
      title: 'Statutory Audit Report 2021-22',
      description: 'Annual statutory audit report for the financial year 2021-22, including financial statements and auditor\'s opinion.',
      year: 2022,
      type: 'Statutory',
      fileSize: '1.6 MB',
      fileType: 'PDF',
      downloadLink: '/reports/audit/statutory-audit-2022.pdf',
      bgColor: 'bg-[#4e73df]',
      textColor: 'text-white',
      icon: <FileText className="w-6 h-6" />
    },
    {
      id: 6,
      title: 'Statutory Audit Report 2020-21',
      description: 'Annual statutory audit report for the financial year 2020-21, including financial statements and auditor\'s opinion.',
      year: 2021,
      type: 'Statutory',
      fileSize: '1.5 MB',
      fileType: 'PDF',
      downloadLink: '/reports/audit/statutory-audit-2021.pdf',
      bgColor: 'bg-[#4e73df]',
      textColor: 'text-white',
      icon: <FileText className="w-6 h-6" />
    }
  ];

  // Get unique years and types for filters
  const years = [...new Set(auditReports.map(report => report.year))].sort((a, b) => b - a);
  const types = [...new Set(auditReports.map(report => report.type))];

  return (
    <Layout>
      <Breadcrumb title="Audit Reports" />
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Audit Reports</h1>
            <p className="text-lg text-gray-600">
              Access our comprehensive audit reports that demonstrate our commitment to financial transparency and accountability.
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#f15a24] focus:border-[#f15a24] sm:text-sm"
                placeholder="Search audit reports..."
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <span className="text-sm text-gray-600">Filter by:</span>
              <select className="block w-full md:w-40 pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#f15a24] focus:border-[#f15a24] sm:text-sm rounded-md">
                <option>All Types</option>
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <select className="block w-full md:w-32 pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#f15a24] focus:border-[#f15a24] sm:text-sm rounded-md">
                <option>All Years</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Reports Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {auditReports.map((report) => (
              <div 
                key={report.id}
                className={`${report.bgColor} ${report.textColor} rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-white/20">
                        {report.type}
                      </span>
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-white/20 ml-2">
                        {report.year}
                      </span>
                    </div>
                    <div className="bg-white/20 p-2 rounded-lg">
                      {report.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mt-4 mb-2">{report.title}</h3>
                  <p className="opacity-90 text-sm">{report.description}</p>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm opacity-80">
                      {report.fileType} • {report.fileSize}
                    </span>
                    <a
                      href={report.downloadLink}
                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md bg-white/20 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50 transition-colors"
                      download
                    >
                      <Download className="h-3.5 w-3.5 mr-1.5" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Information */}
          <div className="mt-16 bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">About Our Audit Reports</h3>
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">
                We believe in complete transparency in all our financial dealings. Our audit reports are prepared by independent 
                chartered accountants and provide a comprehensive overview of our financial health and compliance with 
                regulatory requirements.
              </p>
              <p className="mb-4">
                The reports include detailed financial statements, auditor's opinions, and notes to accounts, giving you 
                complete visibility into how we utilize the funds entrusted to us.
              </p>
              <p>
                For any specific queries regarding our financials or to request additional information, please contact our 
                finance team at <a href="mailto:finance@developmentsociety.org" className="text-[#f15a24] hover:underline">finance@developmentsociety.org</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AuditReports;
