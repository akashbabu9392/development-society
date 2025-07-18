import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Users, ArrowLeft, Clock, Target, Heart, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: string;
  participants: string;
  overview: string;
  keyHighlights: string[];
  impact: string[];
  gallery: string[];
}

type EventTemplateProps = {
  event: Event;
};

export const EventTemplate = ({ event }: EventTemplateProps) => {
  const navigate = useNavigate();

  // Related events have been removed as per request

  return (
    <Layout>
      <div className="relative">
        {/* Page Header with Navigation */}
        <div className="bg-white py-6 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PageHeader 
              title={event.title}
              backLink="/events"
              backText="Back to Events"
            />
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="relative w-full">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-lg">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover object-top"
                style={{ objectPosition: 'center 30%' }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = '/images/placeholder.jpg';
                }}
              />

            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-3 sm:px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Main Content */}
            <div className="w-full lg:w-2/3">
              <button 
                onClick={() => navigate(-1)}
                className="flex items-center text-sm text-[#f15a24] hover:text-orange-700 mb-4 transition-colors"
              >
                <ArrowLeft size={16} className="mr-1" />
                Back to Events
              </button>
              
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{event.title}</h1>
              
              <div className="prose prose-sm sm:prose-base max-w-none text-gray-600 mb-6">
                <p>{event.overview}</p>
              </div>
              
              {/* Event Highlights */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Target className="text-[#f15a24] mr-2" size={20} />
                  Event Highlights
                </h2>
                <div className="space-y-3">
                  {event.keyHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-start">
                      <ChevronRight className="text-[#f15a24] mt-1 mr-2 flex-shrink-0" size={16} />
                      <p className="text-sm sm:text-base text-gray-700">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Event Impact */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Heart className="text-[#f15a24] mr-2" size={20} />
                  Event Impact
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {event.impact.map((item, index) => (
                    <div key={index} className="bg-orange-50 p-3 rounded-lg text-sm">
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
            
            {/* Sidebar */}
            <div className="w-full lg:w-1/3 space-y-4">
              <Card className="border border-gray-200 shadow-sm">
                <CardContent className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Event Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Calendar className="text-[#f15a24] mt-0.5 mr-2 flex-shrink-0" size={16} />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-500">Date</p>
                        <p className="text-sm sm:text-base text-gray-900">{event.date}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="text-[#f15a24] mt-0.5 mr-2 flex-shrink-0" size={16} />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-500">Time</p>
                        <p className="text-sm sm:text-base text-gray-900">{event.time || 'All day'}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="text-[#f15a24] mt-0.5 mr-2 flex-shrink-0" size={16} />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-500">Location</p>
                        <p className="text-sm sm:text-base text-gray-900">{event.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="text-[#f15a24] mt-0.5 mr-2 flex-shrink-0" size={16} />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-500">Participants</p>
                        <p className="text-sm sm:text-base text-gray-900">{event.participants}</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4 text-sm sm:text-base py-2 bg-[#f15a24] hover:bg-orange-700">
                    Join Next Event
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200 shadow-sm">
                <CardContent className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Support Our Work</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3">Your support helps us organize more events and serve our community better.</p>
                  <Button variant="outline" className="w-full text-xs sm:text-sm py-2 border-[#f15a24] text-[#f15a24] hover:bg-[#f15a24] hover:text-white">
                    Donate Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventTemplate;
