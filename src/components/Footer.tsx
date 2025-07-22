
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/favicon/icon1.png" 
                alt="Development Society for Poor Logo" 
                className="h-12 w-auto mr-3"
              />
              <h3 className="text-xl font-bold">Development Society for Poor</h3>
            </div>
            <p className="text-white/90 mb-4 leading-relaxed">
              Development Society for Poor is a growing grass-roots organization working towards Sustainable 
              Livelihood, Quality Education, Health, Climate Change and Disaster Management among Tribal, Dalits, 
              Poor and Coastal fishing communities.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-white/80 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white/80 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white/80 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white/80 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline hover:text-white/80">Home</a></li>
              <li><a href="/about" className="hover:underline hover:text-white/80">About Us</a></li>
              <li><a href="/services" className="hover:underline hover:text-white/80">Our Services</a></li>
              <li><a href="/gallery" className="hover:underline hover:text-white/80">Gallery</a></li>
              <li><a href="/contact" className="hover:underline hover:text-white/80">Contact Us</a></li>
              <li><a href="/donate" className="hover:underline hover:text-white/80">Donate</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mt-1 mr-2 flex-shrink-0" />
                <span>123 Charity Street, City, State, PIN - 500001, India</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:info@dsp.org" className="hover:underline">info@dsp.org</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+919876543210" className="hover:underline">+91 98765 43210</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="bg-white/10 rounded-lg p-6 mb-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-2 text-center">Subscribe to Our Newsletter</h3>
            <p className="text-white/90 text-center mb-4">Stay updated with our latest news and events</p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-center md:text-left mb-4 md:mb-0">
              © {currentYear} Development Society for Poor. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy-policy" className="text-white/80 hover:text-white hover:underline">Privacy Policy</a>
              <a href="/terms" className="text-white/80 hover:text-white hover:underline">Terms of Service</a>
              <a href="/sitemap" className="text-white/80 hover:text-white hover:underline">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
