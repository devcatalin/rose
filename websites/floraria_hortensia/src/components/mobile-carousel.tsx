import {useEffect, useState} from 'react';

import {ChevronLeft, ChevronRight} from 'lucide-react';

import type {HortensiaDetails} from '@/data/directus';
import {motion} from 'motion/react';

import {ImageWithFallback} from './figma/ImageWithFallback';
import {slideShowImages} from './hero-section';

interface MobileCarouselProps {
  siteDetails: HortensiaDetails;
}

export function MobileCarousel({siteDetails}: MobileCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Get slideshow images from Directus or fall back to static images
  const directusUrl = import.meta.env.VITE_DIRECTUS_URL || 'https://cms.devcatalin.com';
  const slideshowImages =
    siteDetails.slideshow && siteDetails.slideshow.length > 0
      ? siteDetails.slideshow.map(item => {
          const gallery = typeof item.hortensia_gallery_id === 'object' ? item.hortensia_gallery_id : null;
          if (gallery && gallery.image) {
            const imageId = typeof gallery.image === 'string' ? gallery.image : gallery.image.id;
            return `${directusUrl}/assets/${imageId}`;
          }
          return '';
        })
      : slideShowImages;

  // Filter out any empty strings
  const validSlideshowImages = slideshowImages.filter(img => img !== '');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % validSlideshowImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [validSlideshowImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + validSlideshowImages.length) % validSlideshowImages.length);
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % validSlideshowImages.length);
  };

  // Touch handlers for mobile swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div
      className="lg:hidden w-full h-80 relative overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slideshow Images */}
      {validSlideshowImages.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{opacity: 0, scale: 1.1}}
          animate={{
            opacity: currentSlide === index ? 1 : 0,
            scale: currentSlide === index ? 1 : 1.1,
          }}
          transition={{duration: 1.2, ease: 'easeInOut'}}
        >
          <ImageWithFallback
            src={image}
            alt={`Aranjamente florale elegante ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 w-full lg:h-full h-[120%] bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </motion.div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {validSlideshowImages.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-110 shadow-lg' : 'bg-white/50 hover:bg-white/70'
              }`}
              onClick={() => goToSlide(index)}
              whileHover={{scale: 1.2}}
              whileTap={{scale: 0.9}}
            />
          ))}
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 z-20">
        <div className="bg-black/20 backdrop-blur-sm text-white px-3 py-2 rounded-full">
          <span className="text-sm">
            {String(currentSlide + 1).padStart(2, '0')} / {String(slideShowImages.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/10 z-20">
        <motion.div
          className="h-full bg-pink-400"
          initial={{width: '0%'}}
          animate={{width: `${((currentSlide + 1) / slideShowImages.length) * 100}%`}}
          transition={{duration: 0.3, ease: 'easeInOut'}}
        />
      </div>
    </div>
  );
}
