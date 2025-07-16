
import { useState } from 'react';
import Layout from '@/components/Layout';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('women');

  const galleryImages = {
    women: [
      {
        src: "/lovable-uploads/6c8a0771-1000-49c8-8970-24dbb4bd7a5c.png",
        alt: "Women Development Program"
      }
    ],
    health: [
      {
        src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
        alt: "Health Project"
      }
    ]
  };

  return (
    <Layout>
      {/* Header Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl md:text-4xl font-bold">Gallery</h1>
            <nav className="text-sm">
              <span className="text-gray-300">Home</span>
              <span className="mx-2">›</span>
              <span>Gallery</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Tab Navigation */}
          <div className="flex flex-col md:flex-row justify-center mb-12 space-y-4 md:space-y-0 md:space-x-8">
            <button
              onClick={() => setActiveTab('women')}
              className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'women'
                  ? 'border-[#f15a24] text-[#f15a24]'
                  : 'border-transparent text-gray-600 hover:text-[#f15a24]'
              }`}
            >
              Women Development and Elderly Care Projects
            </button>
            <button
              onClick={() => setActiveTab('health')}
              className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'health'
                  ? 'border-[#f15a24] text-[#f15a24]'
                  : 'border-transparent text-gray-600 hover:text-[#f15a24]'
              }`}
            >
              Health and Projects for the differently Abled
            </button>
          </div>

          {/* Gallery Content */}
          <div className="max-w-6xl mx-auto">
            {activeTab === 'women' && (
              <div>
                <h3 className="text-2xl font-bold text-center mb-8">Women Development</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galleryImages.women.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'health' && (
              <div>
                <h3 className="text-2xl font-bold text-center mb-8">Health Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galleryImages.health.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
