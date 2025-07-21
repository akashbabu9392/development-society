import { Link } from 'react-router-dom';
import { ArrowRight, Users, MapPin, Calendar, Clock } from 'lucide-react';

type ProjectStatus = 'active' | 'upcoming' | 'completed';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  location: string;
  beneficiaries: string;
  startDate: string;
  endDate?: string;
  status: ProjectStatus;
  image: string;
}

const statusColors = {
  active: 'bg-green-100 text-green-800',
  upcoming: 'bg-blue-100 text-blue-800',
  completed: 'bg-gray-100 text-gray-800'
};

const ProjectCard = ({
  id,
  title,
  description,
  location,
  beneficiaries,
  startDate,
  endDate,
  status,
  image
}: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = '/images/project-placeholder.jpg';
          }}
        />
        <div className="absolute top-4 right-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{title}</h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
          {description}
        </p>
        
        <div className="space-y-3 text-sm text-gray-600 mb-6">
          <div className="flex items-start">
            <MapPin className="w-4 h-4 mt-0.5 mr-2 text-[#f15a24] flex-shrink-0" />
            <span>{location}</span>
          </div>
          <div className="flex items-start">
            <Users className="w-4 h-4 mt-0.5 mr-2 text-[#f15a24] flex-shrink-0" />
            <span>Beneficiaries: {beneficiaries}</span>
          </div>
          <div className="flex items-start">
            <Calendar className="w-4 h-4 mt-0.5 mr-2 text-[#f15a24] flex-shrink-0" />
            <span>
              {new Date(startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
              {endDate && (
                <>
                  {' - '}
                  {new Date(endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                </>
              )}
            </span>
          </div>
        </div>
        
        <div className="mt-auto">
          <Link
            to={`/project/${id}`}
            className="inline-flex items-center text-sm font-medium text-[#f15a24] hover:text-orange-600 transition-colors group"
          >
            View Project Details
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
