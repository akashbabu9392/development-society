
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-[#f15a24] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Give A Little to Make A Big Impact</h3>
          <p className="text-white/90 max-w-3xl mx-auto mb-6 leading-relaxed">
            Development Society for Poor is a growing grass-roots organisation working towards Sustainable 
            Livelihood, Quality Education, Health, Climate Change and Disaster Management among Tribal, Dalits, 
            Poor and Coastal fishing communities in [?].
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2">
              Donate Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#f15a24] px-6 py-2">
              Contact Us
            </Button>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80">
            Copyright © 2025 <span className="font-semibold">Development Society for Poor.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
