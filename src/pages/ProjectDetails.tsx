import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  Calendar, 
  Users, 
  MapPin, 
  CheckCircle, 
  DollarSign, 
  Clock, 
  ArrowRight, 
  Info, 
  Heart, 
  Mail, 
  Handshake, 
  Building2 
} from 'lucide-react';
import Layout from '@/components/Layout';

import { getProjectById, upcomingProjects, currentProjects, completedProjects } from '@/data/projects';
import { useEffect, useState } from 'react';
import { Project } from '@/data/projects';
import { cn } from '@/lib/utils';

// Extend the Project interface to include role for partners
interface ProjectPartner {
  name: string;
  logo: string;
  role?: string;
}

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (id) {
      const projectData = getProjectById(id);
      if (projectData) {
        setProject(projectData);
        
        // Find related projects (same status, excluding current project)
        const related = [
          ...(projectData.status === 'upcoming' ? upcomingProjects : []),
          ...(projectData.status === 'active' ? currentProjects : []),
          ...(projectData.status === 'completed' ? completedProjects : [])
        ].filter(p => p.id !== id).slice(0, 3);
        
        setRelatedProjects(related);
      } else {
        // Redirect to 404 if project not found
        navigate('/not-found');
      }
      setLoading(false);
    }
  }, [id, navigate]);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading project details...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-gray-50">
          <div className="max-w-md mx-auto">
            <div className="bg-red-50 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <svg className="h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Project Not Found</h1>
            <p className="text-gray-600 mb-8">The project you're looking for doesn't exist or has been moved.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/current-projects" 
                className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Current Projects
              </Link>
              <Link 
                to="/upcoming-projects" 
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Upcoming Projects
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // Determine the back link based on project status
  const backLink = project.status === 'upcoming' 
    ? '/upcoming-projects' 
    : project.status === 'active' 
      ? '/current-projects' 
      : '/completed-projects';
      
  const backText = `Back to ${project.status === 'upcoming' ? 'Upcoming' : project.status === 'active' ? 'Current' : 'Completed'} Projects`;

  return (
    <Layout fullWidth className="px-0 bg-gray-50">
      <div className="relative w-full bg-[#0A1A2F] text-white py-4 md:py-6 font-sans">
        <div className="absolute inset-0 bg-[#0A1A2F] w-full h-full -z-10" />
        <div className="relative container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-2 md:mb-0">
              <Link 
                to={backLink} 
                className="flex items-center text-gray-300 hover:text-white mr-4 transition-colors duration-200 font-medium"
              >
                <svg 
                  className="w-4 h-4 mr-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 19l-7-7 7-7" 
                  />
                </svg>
                {backText}
              </Link>
              <h1 className="text-2xl md:text-3xl font-bold font-sans mt-2">
                {project.title}
              </h1>
            </div>
          </div>
        </div>
      </div>
      
      <motion.section 
        className="py-12 bg-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <motion.h1 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {project.title}
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {project.description}
              </motion.p>
              
              <motion.div 
                className="mt-6 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center text-gray-700 bg-gray-50 px-3 py-2 rounded-lg">
                  <MapPin className="w-5 h-5 mr-2 text-orange-500 flex-shrink-0" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center text-gray-700 bg-gray-50 px-3 py-2 rounded-lg">
                  <Users className="w-5 h-5 mr-2 text-orange-500 flex-shrink-0" />
                  <span>{project.beneficiaries}</span>
                </div>
                <div className="flex items-center text-gray-700 bg-gray-50 px-3 py-2 rounded-lg">
                  <Calendar className="w-5 h-5 mr-2 text-orange-500 flex-shrink-0" />
                  <span>
                    {new Date(project.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                    {project.endDate && (
                      <>
                        {' - '}
                        {new Date(project.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                      </>
                    )}
                  </span>
                </div>
                {project.budget && (
                  <div className="flex items-center text-gray-700 bg-gray-50 px-3 py-2 rounded-lg">
                    <DollarSign className="w-5 h-5 mr-2 text-orange-500 flex-shrink-0" />
                    <span>{project.budget}</span>
                  </div>
                )}
              </motion.div>
              
              {project.status === 'upcoming' && (
                <motion.div 
                  className="mt-4 flex items-center text-blue-600 bg-blue-50 px-4 py-2 rounded-lg w-fit"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Project Starting Soon</span>
                </motion.div>
              )}
            </div>
            
            <motion.div 
              className="mb-12 rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = '/images/project-placeholder.jpg';
                }}
                loading="lazy"
              />
              {project.status === 'upcoming' && (
                <div className="bg-blue-600 text-white text-center py-2 px-4">
                  <div className="flex items-center justify-center">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>Starting {new Date(project.startDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                  </div>
                </div>
              )}
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div 
                className="lg:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
                  
                  {project.fullDescription.map((paragraph, index) => (
                    <motion.p 
                      key={index} 
                      className="text-gray-700 mb-6 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                  
                  {project.impact && project.impact.length > 0 && (
                    <motion.div 
                      className="bg-orange-50 p-6 rounded-xl mt-8 border-l-4 border-orange-500"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Impact</h3>
                      <ul className="space-y-3">
                        {project.impact.map((item, index) => (
                          <motion.li 
                            key={index} 
                            className="flex items-start"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                          >
                            <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-6"
              >
                <motion.div 
                  className="bg-white p-6 rounded-xl sticky top-6 shadow-lg border border-gray-100"
                  whileHover={{ 
                    y: -4,
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Info className="w-5 h-5 mr-2 text-orange-500" />
                    Project Details
                  </h3>
                  
                  <div className="space-y-5">
                    <motion.div 
                      className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      whileHover={{ x: 2 }}
                    >
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Location</h4>
                      <p className="text-gray-900 flex items-start">
                        <MapPin className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{project.location}</span>
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      whileHover={{ x: 2 }}
                    >
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Duration</h4>
                      <p className="text-gray-900 flex items-start">
                        <Calendar className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>
                          {new Date(project.startDate).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short',
                            day: 'numeric'
                          })}
                          {project.endDate && (
                            <>
                              <br className="md:hidden" />
                              <span className="hidden md:inline"> - </span>
                              {new Date(project.endDate).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'short',
                                day: 'numeric'
                              })}
                            </>
                          )}
                        </span>
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      whileHover={{ x: 2 }}
                    >
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Beneficiaries</h4>
                      <p className="text-gray-900 flex items-start">
                        <Users className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{project.beneficiaries}</span>
                      </p>
                    </motion.div>
                    
                    {project.budget && (
                      <motion.div 
                        className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        whileHover={{ x: 2 }}
                      >
                        <h4 className="text-sm font-medium text-gray-500 mb-1">Budget</h4>
                        <p className="text-gray-900 flex items-start">
                          <DollarSign className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{project.budget}</span>
                        </p>
                      </motion.div>
                    )}
                    
                    <motion.div 
                      className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      whileHover={{ x: 2 }}
                    >
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Status</h4>
                      <p className="text-gray-900 flex items-center">
                        {project.status === 'active' ? (
                          <span className="flex items-center">
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                            <span>In Progress</span>
                          </span>
                        ) : project.status === 'upcoming' ? (
                          <span className="flex items-center">
                            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 mr-2"></span>
                            <span>Upcoming</span>
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <span className="w-2.5 h-2.5 rounded-full bg-gray-500 mr-2"></span>
                            <span>Completed</span>
                          </span>
                        )}
                      </p>
                    </motion.div>
                    
                    <div className="pt-2 space-y-3">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Link 
                          to="/donate" 
                          className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-md hover:shadow-lg text-center font-medium text-sm"
                        >
                          <Heart className="w-4 h-4 mr-2" />
                          Support This Project
                        </Link>
                      </motion.div>
                      
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Link 
                          to="/contact" 
                          className="w-full flex items-center justify-center px-4 py-3 border-2 border-orange-500 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors text-center font-medium text-sm"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Contact Us
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
                

              </motion.div>
            </div>
            
            {relatedProjects.length > 0 && (
              <motion.div 
                className="mt-16 pt-8 border-t border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">Related Projects</h2>
                  <Link 
                    to={project.status === 'upcoming' ? '/upcoming-projects' : '/current-projects'}
                    className="text-orange-600 hover:text-orange-700 font-medium flex items-center group"
                  >
                    View all {project.status === 'upcoming' ? 'Upcoming' : 'Current'} Projects
                    <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedProjects.map((relatedProject, index) => (
                    <motion.div
                      key={relatedProject.id}
                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      whileHover={{ y: -5 }}
                    >
                      <Link to={`/project/${relatedProject.id}`} className="block">
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={relatedProject.image} 
                            alt={relatedProject.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.onerror = null;
                              target.src = '/images/project-placeholder.jpg';
                            }}
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <span className="absolute top-4 right-4 bg-white/90 text-xs font-medium px-2.5 py-1 rounded-full">
                            {relatedProject.status === 'active' ? 'In Progress' : relatedProject.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                          </span>
                        </div>
                        <div className="p-5">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{relatedProject.title}</h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedProject.description}</p>
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <span className="flex items-center">
                              <MapPin className="w-3.5 h-3.5 mr-1.5 text-orange-500" />
                              {relatedProject.location}
                            </span>
                            <span className="flex items-center">
                              <Users className="w-3.5 h-3.5 mr-1.5 text-orange-500" />
                              {relatedProject.beneficiaries}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            
            <motion.div 
              className="mt-16 pt-8 border-t border-gray-200 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Make a Difference?</h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Your support can help us continue our mission to create positive change in communities. 
                Whether through donations, volunteering, or partnerships, there are many ways to get involved.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link 
                    to="/donate" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg font-medium"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Donate Now
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-orange-500 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors font-medium"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default ProjectDetails;
