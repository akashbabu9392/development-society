import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, Calendar, Clock } from 'lucide-react';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import ProjectCard from '@/components/ProjectCard';

const UpcomingProjects = () => {
  const projects = [
    {
      id: '1',
      title: "Digital Literacy Program",
      description: "Empowering rural youth with essential digital skills and computer literacy to enhance their employability.",
      location: "Guntur District, Andhra Pradesh",
      startDate: "2023-09-15",
      beneficiaries: "300+ youth",
      status: "upcoming",
      image: "/images/upcoming-digital.jpg"
    },
    {
      id: '2',
      title: "Clean Water Initiative",
      description: "Installing water purification systems in remote villages to provide access to clean drinking water.",
      location: "Krishna District, Andhra Pradesh",
      startDate: "2023-11-01",
      beneficiaries: "1000+ villagers",
      status: "upcoming",
      image: "/images/upcoming-water.jpg"
    },
    {
      id: '3',
      title: "Elderly Care Center",
      description: "Establishing a dedicated care center for the elderly with medical facilities and recreational activities.",
      location: "Guntur, Andhra Pradesh",
      startDate: "2024-01-15",
      beneficiaries: "50+ elderly",
      status: "upcoming",
      image: "/images/upcoming-elderly.jpg"
    },
    {
      id: '4',
      title: "Vocational Training Center",
      description: "Setting up a center to provide vocational training in various trades for underprivileged youth.",
      location: "Prakasam District, Andhra Pradesh",
      startDate: "2024-03-01",
      beneficiaries: "200+ youth annually",
      status: "upcoming",
      image: "/images/upcoming-vocational.jpg"
    },
    {
      id: '5',
      title: "Community Health Camp",
      description: "Organizing free health check-up camps in remote villages with specialist doctors and free medicines.",
      location: "Nellore District, Andhra Pradesh",
      startDate: "2023-10-10",
      beneficiaries: "500+ villagers",
      status: "upcoming",
      image: "/images/upcoming-healthcamp.jpg"
    },
    {
      id: '6',
      title: "Solar Power for Schools",
      description: "Providing solar power solutions to rural schools to ensure uninterrupted electricity for education.",
      location: "Chittoor District, Andhra Pradesh",
      startDate: "2024-02-01",
      beneficiaries: "10+ schools, 2000+ students",
      status: "upcoming",
      image: "/images/upcoming-solar.jpg"
    }
  ];

  return (
    <Layout>
      <Breadcrumb title="Upcoming Projects" />
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h1 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Upcoming Projects
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Discover the exciting initiatives we're planning to launch soon to create positive change in our communities.
            </motion.p>
          </div>
          
          {/* Search and Filter */}
          <motion.div 
            className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full md:max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#f15a24] focus:border-[#f15a24] sm:text-sm"
                placeholder="Search upcoming projects..."
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
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  location={project.location}
                  beneficiaries={project.beneficiaries}
                  startDate={project.startDate}
                  status="upcoming"
                  image={project.image}
                />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Call to Action */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Support Our Upcoming Projects</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Help us turn these plans into reality. Your support can make a significant difference in the lives of those in need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-[#f15a24] hover:bg-[#d14619] text-white">
                <Link to="/donate">Donate Now</Link>
              </Button>
              <Button asChild variant="outline" className="border-[#f15a24] text-[#f15a24] hover:bg-[#fff8f6]">
                <Link to="/contact">Become a Partner</Link>
              </Button>
            </div>
          </motion.div>
          
          {/* Project Timeline Info */}
          <motion.div 
            className="mt-16 bg-white rounded-xl p-6 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Timeline</h3>
            <p className="text-gray-600 mb-6">
              Our projects go through several phases from planning to completion. Here's a general timeline of how we bring our initiatives to life:
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#f15a24] flex items-center justify-center text-white">
                  1
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Needs Assessment</h4>
                  <p className="text-gray-600 mt-1">Identifying community needs and potential impact.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#f15a24] flex items-center justify-center text-white">
                  2
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Planning & Design</h4>
                  <p className="text-gray-600 mt-1">Creating detailed project plans and securing necessary approvals.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#f15a24] flex items-center justify-center text-white">
                  3
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Fundraising</h4>
                  <p className="text-gray-600 mt-1">Securing the necessary resources to implement the project.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#f15a24] flex items-center justify-center text-white">
                  4
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Implementation</h4>
                  <p className="text-gray-600 mt-1">Executing the project according to the established plan.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#f15a24] flex items-center justify-center text-white">
                  5
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Monitoring & Evaluation</h4>
                  <p className="text-gray-600 mt-1">Assessing impact and making necessary adjustments.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default UpcomingProjects;
