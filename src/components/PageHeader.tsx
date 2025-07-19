import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

type PageHeaderProps = {
  title: React.ReactNode;
  description?: React.ReactNode;
  breadcrumbItems?: Array<{ name: string; path: string }>;
  backLink?: string;
  backText?: string;
};

const PageHeader = ({ 
  title, 
  description, 
  breadcrumbItems, 
  backLink, 
  backText = 'Back' 
}: PageHeaderProps) => {
  const location = useLocation();
  
  // Generate breadcrumb items if not provided
  const breadcrumbs = breadcrumbItems || [
    { name: 'Home', path: '/' },
    { name: title, path: location.pathname }
  ];

  return (
    <div className="bg-[#071829] text-white py-8 md:py-10 font-['Poppins']">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Left Side - Title */}
          <div className="mb-2 md:mb-0">
            <h1 className="text-2xl md:text-3xl font-bold leading-tight font-['Poppins']">{title}</h1>
            {description && (
              <p className="text-gray-300 text-sm md:text-base mt-1 font-['Poppins']">{description}</p>
            )}
          </div>
          
          {/* Right Side - Breadcrumb */}
          <nav className="flex items-center text-xs text-gray-400 font-['Poppins']">
            {backLink ? (
              <Link 
                to={backLink} 
                className="flex items-center text-gray-400 hover:text-gray-200 transition-colors duration-200 font-normal text-xs"
              >
                <ChevronRight size={12} className="rotate-180 mr-1 text-gray-400" />
                {backText}
              </Link>
            ) : (
              <div className="flex items-center">
                {breadcrumbs.map((item, index) => (
                  <div key={item.path} className="flex items-center">
                    {index > 0 && (
                      <ChevronRight 
                        size={12} 
                        className="mx-1.5 text-gray-500" 
                        aria-hidden="true"
                      />
                    )}
                    {index === breadcrumbs.length - 1 ? (
                      <span className="text-gray-300 font-medium text-xs">
                        {item.name}
                      </span>
                    ) : (
                      <Link 
                        to={item.path} 
                        className="text-gray-400 hover:text-gray-200 transition-colors duration-200 font-normal text-xs"
                        aria-current={index === breadcrumbs.length - 1 ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
