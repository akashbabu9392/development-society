
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  icon: LucideIcon;
  gradientFrom: string;
  gradientTo: string;
  backgroundImage: string;
}

const ServiceCard = ({ title, icon: Icon, gradientFrom, gradientTo, backgroundImage }: ServiceCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
      {/* Image */}
      <img 
        src={backgroundImage} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
        onError={(e) => {
          const img = e.target as HTMLImageElement;
          img.src = '/images/poorlogo.png';
          console.error(`Image failed to load: ${backgroundImage}`);
        }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} group-hover:brightness-110 transition-all duration-300`}
      />
      
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10 p-6 md:p-8 h-full flex flex-col items-center justify-center text-center text-white min-h-[200px] md:min-h-[250px]">
        <div className="mb-4 transform group-hover:scale-110 group-hover:animate-pulse transition-all duration-300">
          <Icon size={48} className="md:w-12 md:h-12 lg:w-16 lg:h-16" />
        </div>
        <h3 className="font-bold text-sm md:text-base lg:text-lg leading-tight max-w-full">
          {title}
        </h3>
      </div>
      
      {/* Bottom Highlight */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default ServiceCard;
