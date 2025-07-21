import { Project } from '@/types/project';
import { upcomingProjects, currentProjects, completedProjects } from '@/data/projects';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ProjectCard from '../ProjectCard';

interface ProjectsSectionProps {
  title: string;
  projects: Project[];
  viewAllLink: string;
  className?: string;
}

const ProjectsSection = ({
  title,
  projects,
  viewAllLink,
  className = ''
}: ProjectsSectionProps) => {
  if (projects.length === 0) {
    return null;
  }

  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <Button 
            asChild 
            variant="ghost" 
            className="mt-4 md:mt-0 text-orange-600 hover:bg-orange-50"
          >
            <a href={viewAllLink}>
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
