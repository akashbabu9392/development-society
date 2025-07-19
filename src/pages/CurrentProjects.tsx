import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import ProjectCard from '@/components/ProjectCard';

const CurrentProjects = () => {
  const projects = [
    {
      id: '1',
      title: "Rural Education Initiative",
      description: "Providing quality education to underprivileged children in rural areas through our network of community learning centers.",
      location: "Multiple Villages, Andhra Pradesh",
      startDate: "2023-01-01",
      beneficiaries: "500+ children",
      image: "/images/project-education.jpg"
    },
    {
      id: '2',
      title: "Healthcare Access Program",
      description: "Mobile medical units providing free healthcare services and medicines to remote communities.",
      location: "Guntur District, Andhra Pradesh",
      startDate: "2023-03-15",
      beneficiaries: "2000+ individuals",
      image: "/images/project-healthcare.jpg"
    },
    {
      id: '3',
      title: "Women's Empowerment Initiative",
      description: "Skill development and entrepreneurship training for women to achieve financial independence.",
      location: "Guntur, Andhra Pradesh",
      startDate: "2023-06-01",
      beneficiaries: "150+ women",
      image: "/images/project-women.jpg"
    },
    {
      id: '4',
      title: "Sustainable Agriculture Project",
      description: "Training farmers in sustainable agricultural practices and providing access to better farming technologies.",
      location: "Krishna District, Andhra Pradesh",
      startDate: "2023-02-10",
      beneficiaries: "300+ farmers",
      image: "/images/project-agriculture.jpg"
    },
    {
      id: '5',
      title: "Clean Water Initiative",
      description: "Installing water purification systems in rural schools and communities to provide access to clean drinking water.",
      location: "Prakasam District, Andhra Pradesh",
      startDate: "2023-04-01",
      beneficiaries: "1000+ individuals",
      image: "/images/project-water.jpg"
    },
    {
      id: '6',
      title: "Digital Literacy Program",
      description: "Equipping youth and adults with essential digital skills for better employment opportunities.",
      location: "Nellore, Andhra Pradesh",
      startDate: "2023-05-15",
      beneficiaries: "250+ individuals",
      image: "/images/project-digital.jpg"
    }
  ];

  return (
    <Layout>
      <Breadcrumb title="Current Projects" />
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h1 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Current Projects
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Discover the impactful initiatives we're currently running to uplift communities and create lasting change.
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
                placeholder="Search projects..."
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <span className="text-sm text-gray-600">Filter by:</span>
              <select className="block w-full md:w-40 pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#f15a24] focus:border-[#f15a24] sm:text-sm rounded-md">
                <option>All Locations</option>
                <option>Guntur District</option>
                <option>Krishna District</option>
                <option>Prakasam District</option>
                <option>Nellore</option>
                <option>Multiple Locations</option>
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
                  status="active"
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Become a Project Partner</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Interested in supporting our projects or starting a new initiative? Get in touch with us to explore partnership opportunities.
            </p>
            <Button asChild className="bg-[#f15a24] hover:bg-[#d14619] text-white">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CurrentProjects;
