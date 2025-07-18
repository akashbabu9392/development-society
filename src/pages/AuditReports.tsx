import Layout from '@/components/Layout';
import { FileText, Download, Search, Filter } from 'lucide-react';

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
      'description': 'Tax audit report under Section 44AB of the Income Tax Act, 1961 for the assessment year 2022-23.',
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
      fileSize: '2.1 MB',
      fileType: 'PDF',
      downloadLink: '/reports/audit/fcra-audit-2022.pdf',
      bgColor: 'bg-[#e74a3b]',
      textColor: 'text-white',
      icon: <FileText className="w-6 h-6" />
    },
    {
      id: 5,
      title: 'Internal Audit Report Q3 2021-22',
      description: 'Quarterly internal audit report for the period October to December 2021, highlighting key findings and recommendations.',
      year: 2022,
      type: 'Internal',
      fileSize: '980 KB',
      fileType: 'PDF',
      downloadLink: '/reports/audit/internal-audit-q3-2022.pdf',
      bgColor: 'bg-[#36b9cc]',
      textColor: 'text-white',
      icon: <FileText className="w-6 h-6" />
    },
    {
      id: 6,
      title: 'Statutory Audit Report 2020-21',
      description: 'Annual statutory audit report for the financial year 2020-21, including financial statements and auditor\'s opinion.',
      year: 2021,
      type: 'Statutory',
      fileSize: '1.7 MB',
      fileType: 'PDF',
      downloadLink: '/reports/audit/statutory-audit-2021.pdf',
      bgColor: 'bg-[#5a5c69]',
      textColor: 'text-white',
      icon: <FileText className="w-6 h-6" />
    }
  ];

  // Get unique years and types for filters
  const years = [...new Set(auditReports.map(report => report.year))].sort((a, b) => b - a);
  const types = [...new Set(auditReports.map(report => report.type))];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Audit Reports</h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#4e73df] to-[#1cc88a] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access our comprehensive audit reports demonstrating our commitment to financial transparency and accountability.
              <br className="hidden sm:block" />
              All reports are available for download in PDF format.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-8 bg-white p-6 rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4e73df] focus:border-[#4e73df] sm:text-sm"
                  placeholder="Search audit reports..."
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Filter className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    className="block w-full pl-10 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4e73df] focus:border-[#4e73df] sm:text-sm rounded-md"
                    defaultValue=""
                  >
                    <option value="">All Years</option>
                    {years.map((year) => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Filter className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    className="block w-full pl-10 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4e73df] focus:border-[#4e73df] sm:text-sm rounded-md"
                    defaultValue=""
                  >
                    <option value="">All Types</option>
                    {types.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Reports Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditReports.map((report) => (
              <div 
                key={report.id}
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
                  
                  <span className="text-sm font-medium opacity-80 mb-1">{report.type} Report</span>
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
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Commitment to Transparency</h2>
              <div className="w-16 h-1 bg-white/50 rounded-full mx-auto mb-6"></div>
              <p className="text-lg mb-6 max-w-3xl mx-auto">
                We are committed to maintaining the highest standards of financial integrity and accountability. 
                Our audit reports are conducted by independent, qualified professionals to ensure accuracy and compliance with all regulatory requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/about/transparency"
                  className="px-6 py-3 bg-white text-[#4e73df] font-medium rounded-md hover:bg-gray-100 transition-colors text-center text-sm sm:text-base shadow-md hover:shadow-lg"
                >
                  View Our Financials
                </a>
                <a
                  href="/contact"
                  className="px-6 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors text-center text-sm sm:text-base"
                >
                  Contact Our Finance Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AuditReports;
