import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';
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
    src: "/images/rural-education.jpg",
    alt: "Rural Education Program",
    category: "education"
  },
  {
    id: 2,
    src: "/images/freemedical-camp.jpg",
    alt: "Medical Camp",
    category: "healthcare"
  },
  {
    id: 3,
    src: "/images/womens-selfhelp.jpg",
    alt: "Women's Self-Help Group",
    category: "women"
  },
  {
    id: 4,
    src: "/images/elderly-care.jpg",
    alt: "Elderly Care Center",
    category: "elderly"
  },
  {
    id: 5,
    src: "/images/community-development.jpg",
    alt: "Community Development Program",
    category: "community"
  },
  {
    id: 6,
    src: "/images/women-development.jpg",
    alt: "Women's Development Program",
    category: "women"
  },
  {
    id: 7,
    src: "/images/educational.jpg",
    alt: "Educational Workshop",
    category: "education"
  },
  {
    id: 8,
    src: "/images/health.jpg",
    alt: "Health Awareness Camp",
    category: "healthcare"
  },
  {
    id: 9,
    src: "/images/vocational-training.jpg",
    alt: "Vocational Training Program",
    category: "education"
  },
  {
    id: 10,
    src: "/images/solar-power.jpg",
    alt: "Solar Power Initiative",
    category: "community"
  },
  {
    id: 11,
    src: "/images/event1.jpg",
    alt: "Community Event",
    category: "community"
  },
  {
    id: 12,
    src: "/images/healthcare-acess.jpeg",
    alt: "Healthcare Access Initiative",
    category: "healthcare"
  },
  {
    id: 13,
    src: "/images/women-empowerement.jpg",
    alt: "Women's Empowerment Workshop",
    category: "women"
  },
  {
    id: 14,
    src: "/images/clean-water.jpg",
    alt: "Clean Water Project",
    category: "community"
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
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayTimeout = useRef<NodeJS.Timeout>();
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const filteredImages = activeTab === 'all' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(image => image.category === activeTab);
  
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Auto play functionality - 2 second interval
  useEffect(() => {
    if (!isAutoPlay || !selectedImage) return;
    
    autoPlayTimeout.current = setInterval(() => {
      navigateImage('next');
    }, 2000); // 2 second autoplay
    
    return () => {
      if (autoPlayTimeout.current) {
        clearInterval(autoPlayTimeout.current);
      }
    };
  }, [isAutoPlay, selectedImage, currentIndex]);

  // Handle keyboard and touch events
  useEffect(() => {
    if (!selectedImage) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsAutoPlay(prev => !prev);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaX > 0) {
        navigateImage('next');
      } else if (e.deltaX < 0) {
        navigateImage('prev');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel as EventListener, { passive: false });
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel as EventListener);
    };
  }, [selectedImage, currentIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      navigateImage('next');
    }
    if (touchStart - touchEnd < -50) {
      // Swipe right
      navigateImage('prev');
    }
  };

  const openImage = (image: GalleryImage) => {
    const index = filteredImages.findIndex(img => img.id === image.id);
    setCurrentIndex(index);
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
    
    // Scroll to the selected image in the carousel
    setTimeout(() => {
      if (carouselRef.current) {
        const container = carouselRef.current;
        const imageElement = container.querySelector(`[data-index="${index}"]`);
        if (imageElement) {
          imageElement.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
          });
        }
      }
    }, 50);
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (dir: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    // Reset autoplay timer
    if (autoPlayTimeout.current) {
      clearInterval(autoPlayTimeout.current);
    }
    
    let newIndex;
    if (dir === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
    
    // Scroll to the new image
    if (carouselRef.current) {
      const container = carouselRef.current;
      const imageElement = container.querySelector(`[data-index="${newIndex}"]`) as HTMLElement;
      if (imageElement) {
        imageElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
    
    // Restart autoplay if it was enabled
    if (isAutoPlay) {
      autoPlayTimeout.current = setInterval(() => {
        navigateImage('next');
      }, 5000);
    }
  };

  return (
    <>
      <Layout>
        <Breadcrumb title="Gallery" />
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-3">Our Gallery</h1>
              <div className="w-20 h-1 bg-gradient-to-r from-[#f15a24] to-orange-400 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our journey through these memorable moments captured in our community development initiatives.
              </p>
            </div>
            
            {/* Category Filter */}
            <div className="mb-12 overflow-x-auto pb-2">
              <div className="flex justify-center space-x-2 min-w-max px-4">
                {GALLERY_CATEGORIES.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                      activeTab === category.id
                        ? 'bg-gradient-to-r from-[#f15a24] to-orange-500 text-white shadow-lg shadow-orange-100'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
              {filteredImages.map((image) => (
                <motion.div 
                  key={image.id} 
                  className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openImage(image)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <h3 className="text-white font-medium text-lg mb-1">{image.alt}</h3>
                      <span className="inline-block px-2 py-1 bg-[#f15a24] text-white text-xs rounded-full">
                        {GALLERY_CATEGORIES.find(cat => cat.id === image.category)?.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Layout>

      {/* Image Modal with Carousel */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center p-4"
          onClick={closeModal}
        >
          <button 
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X size={32} />
          </button>

          <div className="relative w-full max-w-6xl" onClick={e => e.stopPropagation()}>
            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-10 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-10 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full max-h-[80vh] object-contain"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              />
            </div>

            {/* Thumbnail Navigation */}
            <div className="mt-4 flex justify-center space-x-2 overflow-x-auto py-2">
              {filteredImages.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                    setSelectedImage(img);
                  }}
                  className={`w-16 h-16 flex-shrink-0 rounded overflow-hidden border-2 transition-all ${
                    currentIndex === idx 
                      ? 'border-[#f15a24] scale-110' 
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={img.src} 
                    alt="" 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Fullscreen Toggle */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFullscreen();
              }}
              className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-10 transition-colors"
              aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            >
              {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
            </button>

            {/* Auto Play Toggle */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsAutoPlay(!isAutoPlay);
              }}
              className="absolute bottom-4 left-4 bg-black/50 hover:bg-black/70 text-white px-4 py-2 rounded-full z-10 transition-colors text-sm flex items-center space-x-2"
            >
              {isAutoPlay ? (
                <>
                  <span>Pause</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </>
              ) : (
                <>
                  <span>Play</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </>
              )}
            </button>

            {/* Image Info */}
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-medium">{selectedImage.alt}</h3>
              <p className="text-gray-300 mt-1">
                {currentIndex + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
