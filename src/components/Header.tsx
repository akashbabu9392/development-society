
import { useState } from 'react';
import { Phone, Mail, Facebook, Youtube, Search, Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#f15a24] text-white py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+91 99855 12014 | +91 863 - 2265652</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>dsociety2005@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Facebook size={16} />
              <Youtube size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/images/poorlogo.png" 
                alt="Development Society For Poor Logo" 
                className="h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 font-medium">
              <Link to="/" className="text-gray-800 hover:text-[#f15a24] transition-colors duration-200 font-medium">
                HOME
              </Link>
              
              <div className="relative group">
                <button className="flex items-center text-gray-800 hover:text-[#f15a24] transition-colors duration-200 font-medium">
                  ABOUT US <ChevronDown size={16} className="ml-1" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                  <Link to="/about" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-150">About the Organization</Link>
                  <Link to="/about/vision-mission" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-150">Vision & Mission</Link>
                  <Link to="/executive-body" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-150">Executive Body</Link>
                  <Link to="/president-message" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-150">President's Message</Link>
                  <Link to="/policies" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-150">Our Policies</Link>
                  <Link to="/annual-reports" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-150">Annual Reports</Link>
                  <Link to="/audit-reports" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-150">Audit Reports</Link>
                </div>
              </div>

              <Link to="/services" className="text-[#f15a24] hover:text-[#d14619] transition-colors duration-200 font-medium">
                OUR SERVICES
              </Link>

              <div className="relative group">
                <button className="flex items-center text-gray-800 hover:text-[#f15a24] transition-colors duration-200 font-medium">
                  PROGRAMMES <ChevronDown size={16} className="ml-1" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                  <Link to="/current-projects" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-150">Current Projects</Link>
                  <Link to="/upcoming-projects" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-150">Upcoming Projects</Link>
                  <Link to="/completed-projects" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-150">Completed Projects</Link>
                </div>
              </div>

              <Link to="/gallery" className="text-gray-800 hover:text-[#f15a24] transition-colors duration-200 font-medium">
                GALLERY
              </Link>
              
              <Link to="/contact" className="text-gray-800 hover:text-[#f15a24] transition-colors duration-200 font-medium">
                CONTACT
              </Link>
              
              <Button asChild className="bg-[#f15a24] hover:bg-[#d14619] text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium ml-2">
                <Link to="/donate">DONATE NOW</Link>
              </Button>
              
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-[#f15a24] transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
            <div className="py-4 space-y-1">
              <Link 
                to="/" 
                className="block px-6 py-3 text-gray-800 hover:bg-gray-50 font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HOME
              </Link>
              
              <div className="border-t border-gray-100">
                <button
                  onClick={() => toggleDropdown('about')}
                  className="flex items-center justify-between w-full px-6 py-3 text-gray-800 hover:bg-gray-50 font-medium transition-colors duration-200 text-left"
                >
                  ABOUT US <ChevronDown size={16} className={`transition-transform duration-200 ${openDropdown === 'about' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openDropdown === 'about' ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="pl-8 space-y-1 bg-gray-50">
                    <Link to="/about" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-150" onClick={() => setIsMobileMenuOpen(false)}>About the Organization</Link>
                    <Link to="/about/vision-mission" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-150" onClick={() => setIsMobileMenuOpen(false)}>Vision & Mission</Link>
                    <Link to="/executive-body" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-150" onClick={() => setIsMobileMenuOpen(false)}>Executive Body</Link>
                    <Link to="/president-message" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-150" onClick={() => setIsMobileMenuOpen(false)}>President's Message</Link>
                    <Link to="/policies" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-150" onClick={() => setIsMobileMenuOpen(false)}>Our Policies</Link>
                    <Link to="/annual-reports" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-150" onClick={() => setIsMobileMenuOpen(false)}>Annual Reports</Link>
                    <Link to="/audit-reports" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-150" onClick={() => setIsMobileMenuOpen(false)}>Audit Reports</Link>
                  </div>
                </div>
              </div>

              <Link 
                to="/services" 
                className="block px-6 py-3 text-[#f15a24] hover:bg-gray-50 font-medium transition-colors duration-200 border-t border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                OUR SERVICES
              </Link>
              
              <div className="border-t border-gray-100">
                <button
                  onClick={() => toggleDropdown('programmes')}
                  className="flex items-center justify-between w-full px-6 py-3 text-gray-800 hover:bg-gray-50 font-medium transition-colors duration-200 text-left"
                >
                  PROGRAMMES <ChevronDown size={16} className={`transition-transform duration-200 ${openDropdown === 'programmes' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openDropdown === 'programmes' ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="pl-8 space-y-1 bg-gray-50">
                    <Link to="/current-projects" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-150" onClick={() => setIsMobileMenuOpen(false)}>Current Projects</Link>
                    <Link to="/upcoming-projects" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-150" onClick={() => setIsMobileMenuOpen(false)}>Upcoming Projects</Link>
                    <Link to="/completed-projects" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-150" onClick={() => setIsMobileMenuOpen(false)}>Completed Projects</Link>
                  </div>
                </div>
              </div>

              <Link 
                to="/gallery" 
                className="block px-6 py-3 text-gray-800 hover:bg-gray-50 font-medium transition-colors duration-200 border-t border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                GALLERY
              </Link>
              
              <Link 
                to="/contact" 
                className="block px-6 py-3 text-gray-800 hover:bg-gray-50 font-medium transition-colors duration-200 border-t border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
              
              <div className="px-6 py-4 border-t border-gray-100">
                <Button 
                  asChild 
                  className="w-full bg-[#f15a24] hover:bg-[#d14619] text-white font-medium py-3 text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link to="/donate">DONATE NOW</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
