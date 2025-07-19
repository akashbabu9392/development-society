import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Users, MapPin, CheckCircle, Clock, DollarSign, TrendingUp } from 'lucide-react';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, this would be fetched from an API based on the ID
  const project = {
    id: id,
    title: "Rural Education Enhancement Program",
    description: "This initiative was launched to address the educational needs of children in remote villages of Guntur district, where access to quality education was severely limited. The program established learning centers equipped with modern teaching aids and trained educators.",
    fullDescription: [
      "The Rural Education Enhancement Program was a comprehensive initiative aimed at transforming the educational landscape in underserved rural communities. Over the course of 12 months, we established 5 fully equipped learning centers across remote villages in Guntur district.",
      "Each center was staffed with qualified teachers and equipped with modern educational materials, including digital learning tools, books, and science kits. The curriculum was designed to be interactive and engaging, focusing on foundational skills in literacy, numeracy, and critical thinking.",
      "We also implemented a community engagement program that involved parents and local leaders in the educational process, creating a supportive ecosystem for learning. Regular assessments showed significant improvements in student performance, with an average increase of 35% in test scores across all subjects.",
      "The program also included teacher training workshops to enhance teaching methodologies and ensure sustainable impact. By the end of the project, we had successfully enrolled over 500 children who previously had limited or no access to formal education."
    ],
    location: "Guntur District, Andhra Pradesh",
    startDate: "2022-01-10",
    endDate: "2022-12-20",
    beneficiaries: "500+ children",
    impact: [
      "Improved literacy rates by 35% in target areas",
      "Established 5 fully equipped learning centers",
      "Trained 25 local educators in modern teaching methodologies",
      "Achieved 92% average attendance rate across all centers",
      "Distributed 1,500+ educational kits to students"
    ],
    budget: "₹2,500,000",
    status: "completed",
    image: "/images/project-education.jpg",
    gallery: [
      "/images/project-education-1.jpg",
      "/images/project-education-2.jpg",
      "/images/project-education-3.jpg",
      "/images/project-education-4.jpg"
    ],
    partners: [
      { name: "State Education Department", logo: "/logos/education-dept.png" },
      { name: "Tech for Good Foundation", logo: "/logos/tech-for-good.png" },
      { name: "Global Giving Circle", logo: "/logos/global-giving.png" }
    ]
  };

  return (
    <Layout>
      <Breadcrumb 
        title={project.title} 
        backLink="/projects/current" 
        backText="Back to Projects"
      />
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
              <p className="text-lg text-gray-600">{project.description}</p>
            </motion.div>
            
            <motion.div 
              className="mb-12 rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
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
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <motion.div 
                  className="prose max-w-none"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
                  
                  {project.fullDescription.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
                  ))}
                  
                  <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">Project Impact</h3>
                  <ul className="space-y-3 mb-8">
                    {project.impact.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-12">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Project Gallery</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {project.gallery.map((image, index) => (
                        <div key={index} className="aspect-square overflow-hidden rounded-lg">
                          <img 
                            src={image} 
                            alt={`${project.title} - ${index + 1}`} 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.onerror = null;
                              target.src = '/images/project-placeholder.jpg';
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div>
                <motion.div 
                  className="bg-gray-50 rounded-xl p-6 sticky top-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Project Details</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-50 p-2 rounded-lg mr-4">
                        <MapPin className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Location</h4>
                        <p className="text-gray-900">{project.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-purple-50 p-2 rounded-lg mr-4">
                        <Calendar className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Duration</h4>
                        <p className="text-gray-900">
                          {new Date(project.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                          {' - '}
                          {new Date(project.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-green-50 p-2 rounded-lg mr-4">
                        <Users className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Beneficiaries</h4>
                        <p className="text-gray-900">{project.beneficiaries}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-yellow-50 p-2 rounded-lg mr-4">
                        <DollarSign className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Total Budget</h4>
                        <p className="text-gray-900">{project.budget}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-red-50 p-2 rounded-lg mr-4">
                        <TrendingUp className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Status</h4>
                        <div className="flex items-center">
                          <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                          <span className="text-gray-900 capitalize">{project.status}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="text-sm font-medium text-gray-500 mb-3">Project Partners</h4>
                    <div className="flex flex-wrap gap-4">
                      {project.partners.map((partner, index) => (
                        <div key={index} className="h-12 flex items-center">
                          <img 
                            src={partner.logo} 
                            alt={partner.name} 
                            className="h-8 object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const fallback = document.createElement('div');
                              fallback.className = 'text-sm font-medium text-gray-700';
                              fallback.textContent = partner.name;
                              target.parentNode?.insertBefore(fallback, target);
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-8 space-y-3">
                    <Button asChild className="w-full bg-[#f15a24] hover:bg-[#d14619] text-white">
                      <Link to="/donate">Support Similar Projects</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full border-[#f15a24] text-[#f15a24] hover:bg-[#fff8f6]">
                      <Link to="/contact">Contact Our Team</Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <motion.div 
              className="mt-16 pt-8 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 md:mb-0">Explore Other Projects</h3>
                <div className="flex space-x-3">
                  <Button asChild variant="outline">
                    <Link to="/projects/current" className="flex items-center">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Previous Project
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="flex items-center">
                    <Link to="/projects/current">
                      Next Project
                      <svg className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetails;
