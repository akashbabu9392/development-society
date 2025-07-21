import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Breadcrumb from '@/components/Breadcrumb';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      <Breadcrumb title="Contact Us" />

      {/* Contact Content */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch With Us</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#f15a24] to-orange-400 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">Have questions or want to know more about our initiatives? We'd love to hear from you.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#f15a24] to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">Phone Numbers</h3>
                    <div className="space-y-1">
                      <a href="tel:+919985512014" className="block text-gray-600 hover:text-[#f15a24] transition-colors">+91 99855 12014</a>
                      <a href="tel:+918632265652" className="block text-gray-600 hover:text-[#f15a24] transition-colors">+91 863 - 2265652</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#f15a24] to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">Email Address</h3>
                    <a href="mailto:dsociety2005@gmail.com" className="text-[#f15a24] hover:underline">
                      dsociety2005@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#f15a24] to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">Our Location</h3>
                    <address className="not-italic text-gray-600">
                      Development Society for Poor<br />
                      Rentachintala, Andhra Pradesh<br />
                      India
                    </address>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#f15a24] to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">Working Hours</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Saturday</span>
                        <span>9:00 AM - 2:00 PM</span>
                      </li>
                      <li className="flex justify-between text-red-500">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-sm p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="first-name"
                      placeholder="John"
                      className="focus:ring-2 focus:ring-[#f15a24] focus:border-transparent"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="last-name"
                      placeholder="Doe"
                      className="focus:ring-2 focus:ring-[#f15a24] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="focus:ring-2 focus:ring-[#f15a24] focus:border-transparent"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <Input 
                    id="phone"
                    type="tel" 
                    placeholder="+91 12345 67890" 
                    className="focus:ring-2 focus:ring-[#f15a24] focus:border-transparent"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="How can we help you?" 
                    rows={5}
                    className="min-h-[120px] focus:ring-2 focus:ring-[#f15a24] focus:border-transparent"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[#f15a24] to-orange-500 hover:from-[#e04e1a] hover:to-[#f15a24] text-white py-6 text-base font-medium rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
