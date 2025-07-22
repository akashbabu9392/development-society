import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, Award, Users, MapPin, Calendar, CheckCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import { completedProjects } from '@/data/projects';

const CompletedProjects = () => {
  const projects = completedProjects;

  return (
    <Layout>
      <Breadcrumb title="Completed Projects" />
      
      {/* Search and Filter Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative w-full md:max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#f15a24] focus:border-[#f15a24] sm:text-sm"
                placeholder="Search completed projects..."
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <span className="text-sm text-gray-600">Filter by:</span>
              <select className="block w-full md:w-40 pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#f15a24] focus:border-[#f15a24] sm:text-sm rounded-md">
                <option>All Locations</option>
                <option>Guntur District</option>
                <option>Krishna District</option>
                <option>Prakasam District</option>
                <option>Nellore District</option>
                <option>Chittoor District</option>
              </select>
              <select className="block w-full md:w-32 pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#f15a24] focus:border-[#f15a24] sm:text-sm rounded-md">
                <option>All Years</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
              </select>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = '/images/project-placeholder.jpg';
                      }}
                    />
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Completed
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{project.title}</h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                      {project.description}
                    </p>
                    
                    <div className="space-y-3 text-sm text-gray-600 mb-4">
                      <div className="flex items-start">
                        <MapPin className="w-4 h-4 mt-0.5 mr-2 text-[#f15a24] flex-shrink-0" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-start">
                        <Users className="w-4 h-4 mt-0.5 mr-2 text-[#f15a24] flex-shrink-0" />
                        <span>Beneficiaries: {project.beneficiaries}</span>
                      </div>
                      <div className="flex items-start">
                        <Calendar className="w-4 h-4 mt-0.5 mr-2 text-[#f15a24] flex-shrink-0" />
                        <span>
                          {new Date(project.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                          {' - '}
                          {project.endDate 
                            ? new Date(project.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
                            : 'Present'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <Link
                        to={`/project/${project.id}`}
                        className="inline-flex items-center text-sm font-medium text-[#f15a24] hover:text-orange-600 transition-colors group"
                      >
                        View Project Details
                        <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Completed Projects with Stats */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h1 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Completed Projects
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Explore the successful initiatives we've completed, creating lasting impact in communities across the region.
            </motion.p>
          </div>
          
          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">25+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">10,000+</h3>
              <p className="text-gray-600">Lives Impacted</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">15+</h3>
              <p className="text-gray-600">Districts Covered</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">5+</h3>
              <p className="text-gray-600">Years of Service</p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Support Our Future Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Support Our Future Projects</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Your contribution can help us continue our mission and create more success stories like these.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-[#f15a24] hover:bg-[#d14619] text-white">
                <Link to="/donate">Donate Now</Link>
              </Button>
              <Button asChild variant="outline" className="border-[#f15a24] text-[#f15a24] hover:bg-[#fff8f6]">
                <Link to="/contact">Get Involved</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CompletedProjects;
