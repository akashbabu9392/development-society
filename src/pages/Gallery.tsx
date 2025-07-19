import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: "/images/gallery/education-1.jpg",
    alt: "Rural Education Program",
    category: "education"
  },
  {
    id: 2,
    src: "/images/gallery/healthcare-1.jpg",
    alt: "Medical Camp",
    category: "healthcare"
  },
  {
    id: 3,
    src: "/images/gallery/women-1.jpg",
    alt: "Women's Self-Help Group",
    category: "women"
  },
  {
    id: 4,
    src: "/images/gallery/elderly-1.jpg",
    alt: "Elderly Care Center",
    category: "elderly"
  },
  {
    id: 5,
    src: "/images/gallery/community-1.jpg",
    alt: "Community Development Program",
    category: "community"
  },
  {
    id: 6,
    src: "/images/gallery/education-2.jpg",
    alt: "School Renovation Project",
    category: "education"
  }
];

const GALLERY_CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'education', name: 'Education' },
  { id: 'healthcare', name: 'Healthcare' },
  { id: 'women', name: 'Women' },
  { id: 'elderly', name: 'Elderly' },
  { id: 'community', name: 'Community' }
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  // Filter images based on active tab
  const filteredImages = activeTab === 'all' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(image => image.category === activeTab);

  return (
    <Layout>
      <Breadcrumb title="Gallery" />

      {/* Main Content */}
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Our Gallery</h1>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {GALLERY_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeTab === category.id
                    ? 'bg-[#f15a24] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-medium">{image.alt}</h3>
                  <span className="text-sm text-gray-500">
                    {GALLERY_CATEGORIES.find(cat => cat.id === image.category)?.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No images found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
