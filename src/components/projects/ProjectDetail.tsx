import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Project } from '@/types/project';
import { getProjectById } from '@/data/projects';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Users, MapPin, CheckCircle, DollarSign, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';


const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const projectData = getProjectById(id);
      if (projectData) {
        setProject(projectData as Project);
      } else {
        // Project not found, handle accordingly
        console.error(`Project with id ${id} not found`);
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
                to="/completed-projects" 
                className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Projects
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // Custom breadcrumb items for project detail page
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Completed Projects', path: '/completed-projects' },
    { name: project.title, path: '' }
  ];

  return (
    <Layout>
      <div className="relative w-full bg-[#0A1A2F] text-white py-4 md:py-6 font-sans">
        <div className="absolute inset-0 bg-[#0A1A2F] w-full h-full -z-10" />
        <div className="relative container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-2 md:mb-0">
              <Link 
                to="/completed-projects" 
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
                Back to Projects
              </Link>
              <h1 className="text-2xl md:text-3xl font-bold font-sans mt-2">
                {project.title}
              </h1>
            </div>
          </div>
        </div>
      </div>
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link 
                to="/completed-projects" 
                className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors mb-6"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Projects
              </Link>
              
              <motion.h1 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {project.title}
              </motion.h1>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2 text-orange-500" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2 text-orange-500" />
                  <span>
                    {new Date(project.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    {project.endDate ? (
                      <span> - {new Date(project.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    ) : ' (Ongoing)'}
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-2 text-orange-500" />
                  <span>{project.beneficiaries}</span>
                </div>
                {project.budget && (
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="w-5 h-5 mr-2 text-orange-500 flex-shrink-0" />
                    <span>Budget: {project.budget}</span>
                  </div>
                )}
              </div>
              
              <motion.div 
                className="relative rounded-xl overflow-hidden mb-8 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-96 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '/images/project-placeholder.jpg';
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-500 text-white">
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                </div>
              </motion.div>
            </div>
            
            <div className="prose max-w-none">
              <motion.div 
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
                {project.fullDescription ? (
                  project.fullDescription.map((paragraph: string, index: number) => (
                    <p key={index} className="text-gray-600 mb-4">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-600">No detailed description available.</p>
                )}
              </motion.div>
              
              {project.impact && project.impact.length > 0 && (
                <motion.div 
                  className="mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Impact</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.impact.map((item: string, index: number) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-600">{item}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
              
              {project.gallery && project.gallery.length > 0 && (
                <motion.div 
                  className="mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.gallery.map((image: string, index: number) => (
                      <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <img 
                          src={image} 
                          alt={`${project.title} - ${index + 1}`} 
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src = '/images/gallery-placeholder.jpg';
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
              
              {project.partners && project.partners.length > 0 && (
                <motion.div 
                  className="mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Partners</h2>
                  <div className="flex flex-wrap items-center gap-8">
                    {project.partners.map((partner, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="bg-white p-4 rounded-lg shadow-md w-32 h-24 flex items-center justify-center">
                          <img 
                            src={partner.logo} 
                            alt={partner.name} 
                            className="max-h-16 max-w-full object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.onerror = null;
                              target.src = '/images/partner-placeholder.png';
                            }}
                          />
                        </div>
                        <p className="mt-2 text-sm text-gray-600 text-center">{partner.name}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
              
              <motion.div 
                className="bg-orange-50 rounded-xl p-6 mt-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Want to Support Our Work?</h3>
                <p className="text-gray-600 mb-6">Your contribution can help us create more impact in communities that need it most.</p>
                <Link 
                  to="/donate" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Donate Now
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
