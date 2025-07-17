import { Link } from 'react-router-dom';
import { ChevronLeft, Home } from 'lucide-react';

type PageHeaderProps = {
  title: string;
  description?: string;
  backLink?: string;
  backText?: string;
};

const PageHeader = ({
  title,
  description,
  backLink = '/',
  backText = 'Back to Home',
}: PageHeaderProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center">
        <Link 
          to={backLink}
          className="inline-flex items-center text-gray-600 hover:text-[#f15a24] transition-colors duration-200 group"
        >
          <ChevronLeft size={20} className="mr-1 group-hover:-translate-x-0.5 transition-transform" />
          {backText}
        </Link>
        <Link 
          to="/" 
          className="ml-4 p-2 text-gray-500 hover:text-[#f15a24] rounded-full hover:bg-orange-50 transition-colors duration-200"
          aria-label="Go to Home"
        >
          <Home size={18} />
        </Link>
      </div>
      
      <div className="mt-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{title}</h1>
        {description && (
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
