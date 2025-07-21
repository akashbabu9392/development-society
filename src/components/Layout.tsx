
import Header from './Header';
import Footer from './Footer';
import { Toaster } from '@/components/ui/toaster';

interface LayoutProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

const Layout = ({ 
  children, 
  fullWidth = false,
  className = ''
}: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        {fullWidth ? (
          <div className={className}>
            {children}
          </div>
        ) : (
          <div className={`py-8 sm:py-12`}>
            <div className={`container px-4 sm:px-6 lg:px-8 mx-auto ${className}`}>
              {children}
            </div>
          </div>
        )}
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
