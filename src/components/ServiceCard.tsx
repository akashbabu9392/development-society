
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  icon: LucideIcon;
  bgColor: string;
  textColor?: string;
}

const ServiceCard = ({ title, icon: Icon, bgColor, textColor = "text-white" }: ServiceCardProps) => {
  return (
    <div className={`${bgColor} ${textColor} p-6 rounded-lg text-center hover:scale-105 transition-transform duration-200 cursor-pointer`}>
      <div className="flex justify-center mb-4">
        <Icon size={48} />
      </div>
      <h3 className="font-semibold text-sm leading-tight">{title}</h3>
    </div>
  );
};

export default ServiceCard;
