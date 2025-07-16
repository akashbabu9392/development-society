
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
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#f15a24] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">DSP</span>
              </div>
              <div className="hidden md:block">
                <div className="text-[#f15a24] font-bold text-lg">Development</div>
                <div className="text-[#f15a24] text-sm">Society For Poor</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-[#f15a24] font-medium">
                HOME
              </Link>
              
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-[#f15a24] font-medium">
                  ABOUT US <ChevronDown size={16} className="ml-1" />
                </button>
                <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About the Organization</Link>
                  <Link to="/vision-mission" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Vision & Mission</Link>
                  <Link to="/executive-body" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Executive Body Members</Link>
                  <Link to="/president-message" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Message from President</Link>
                  <Link to="/policies" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Policies</Link>
                  <Link to="/annual-reports" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Annual Reports</Link>
                  <Link to="/audit-reports" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Audit Reports</Link>
                </div>
              </div>

              <Link to="/services" className="text-[#f15a24] hover:text-[#d14619] font-medium">
                OUR SERVICES
              </Link>

              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-[#f15a24] font-medium">
                  PROGRAMMES <ChevronDown size={16} className="ml-1" />
                </button>
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link to="/current-projects" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Current Projects</Link>
                  <Link to="/upcoming-projects" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Upcoming Projects</Link>
                  <Link to="/completed-projects" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Completed Projects</Link>
                </div>
              </div>

              <Link to="/gallery" className="text-gray-700 hover:text-[#f15a24] font-medium">
                GALLERY
              </Link>
              
              <Link to="/contact" className="text-gray-700 hover:text-[#f15a24] font-medium">
                CONTACT
              </Link>
              
              <Button className="bg-[#f15a24] hover:bg-[#d14619] text-white px-6 py-2 rounded">
                DONATE NOW
              </Button>
              
              <Search size={20} className="text-gray-600 hover:text-[#f15a24] cursor-pointer" />
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-200">
              <div className="py-4 space-y-2">
                <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">HOME</Link>
                
                <div>
                  <button
                    onClick={() => toggleDropdown('about')}
                    className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    ABOUT US <ChevronDown size={16} />
                  </button>
                  {openDropdown === 'about' && (
                    <div className="pl-8 space-y-1">
                      <Link to="/about" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">About the Organization</Link>
                      <Link to="/vision-mission" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Vision & Mission</Link>
                      <Link to="/executive-body" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Executive Body Members</Link>
                      <Link to="/president-message" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Message from President</Link>
                      <Link to="/policies" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Our Policies</Link>
                      <Link to="/annual-reports" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Annual Reports</Link>
                      <Link to="/audit-reports" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Audit Reports</Link>
                    </div>
                  )}
                </div>

                <Link to="/services" className="block px-4 py-2 text-[#f15a24] hover:bg-gray-100">OUR SERVICES</Link>
                
                <div>
                  <button
                    onClick={() => toggleDropdown('programmes')}
                    className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    PROGRAMMES <ChevronDown size={16} />
                  </button>
                  {openDropdown === 'programmes' && (
                    <div className="pl-8 space-y-1">
                      <Link to="/current-projects" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Current Projects</Link>
                      <Link to="/upcoming-projects" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Upcoming Projects</Link>
                      <Link to="/completed-projects" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Completed Projects</Link>
                    </div>
                  )}
                </div>

                <Link to="/gallery" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">GALLERY</Link>
                <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">CONTACT</Link>
                
                <div className="px-4 py-2">
                  <Button className="w-full bg-[#f15a24] hover:bg-[#d14619] text-white">
                    DONATE NOW
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
