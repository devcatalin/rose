import {useEffect, useState} from 'react';

import {ChevronLeft, ChevronRight, X} from 'lucide-react';
import {AnimatePresence, motion} from 'motion/react';

import {ImageWithFallback} from './figma/ImageWithFallback';

interface SlideImage {
  src: string;
  description: string;
}

interface SlideshowModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: SlideImage[];
  sectionTitle: string;
}

export function SlideshowModal({isOpen, onClose, images, sectionTitle}: SlideshowModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Reset to first slide when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentSlide(0);
    }
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, currentSlide]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (!isOpen || images.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black backdrop-blur-sm"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.3}}
        onClick={onClose}
      >
        {/* Close Button */}
        <motion.button
          className="absolute top-6 left-[calc(100%-4rem)] md:top-6 md:right-6 z-60 bg-white/10 hover:bg-white/20 backdrop-blur-md p-2 md:p-3 rounded-full border border-white/20 transition-all duration-200"
          onClick={onClose}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
          initial={{opacity: 0, scale: 0.8}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.3, delay: 0.1}}
        >
          <X className="h-4 w-4 md:h-6 md:w-6 text-white" />
        </motion.button>

        {/* Section Title */}
        <motion.div
          className="absolute top-4 left-4 md:top-6 md:left-6 z-60 max-w-[calc(100%-5rem)] md:max-w-none"
          initial={{opacity: 0, x: -20}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.3, delay: 0.1}}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl px-3 py-2 md:px-6 md:py-3 border border-white/20">
            <h2 className="text-lg md:text-2xl text-white truncate">{sectionTitle}</h2>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="h-full flex relative" onClick={e => e.stopPropagation()}>
          {/* Full Height Image Area */}
          <div className="flex-1 relative">
            {/* Images */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="absolute inset-0"
                initial={{opacity: 0, scale: 0.95}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 1.05}}
                transition={{duration: 0.4, ease: 'easeInOut'}}
              >
                <ImageWithFallback
                  src={images[currentSlide].src}
                  alt={images[currentSlide].description}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <>
              <motion.button
                className={`absolute left-4 md:left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md p-2 md:p-3 rounded-full border border-white/20 transition-all duration-200 z-50 ${
                  images.length === 1 && sectionTitle !== 'Aranjamente Funerare' ? 'hidden md:block' : 'block'
                }`}
                onClick={prevSlide}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                initial={{opacity: 0, x: -20}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.3, delay: 0.2}}
              >
                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6 text-white" />
              </motion.button>

              <motion.button
                className={`absolute right-4 md:right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md p-2 md:p-3 rounded-full border border-white/20 transition-all duration-200 z-50 ${
                  images.length === 1 && sectionTitle !== 'Aranjamente Funerare' ? 'hidden md:block' : 'block'
                }`}
                onClick={nextSlide}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                initial={{opacity: 0, x: 20}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.3, delay: 0.2}}
              >
                <ChevronRight className="h-4 w-4 md:h-6 md:w-6 text-white" />
              </motion.button>
            </>

            {/* Bottom Overlay Card */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 z-50"
              initial={{opacity: 0, y: 50}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.4, delay: 0.3}}
            >
              <div className="p-4 md:p-6">
                <motion.div
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20"
                  key={currentSlide}
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.3}}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4">
                    <div className="flex-1">
                      <p className="text-white leading-relaxed">{images[currentSlide].description}</p>
                    </div>

                    {/* Slide Indicators */}
                    {images.length > 1 && (
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-300 mr-4">
                          {currentSlide + 1} / {images.length}
                        </span>
                        <div className="flex space-x-2">
                          {images.map((_, index) => (
                            <button
                              key={index}
                              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                index === currentSlide ? 'bg-white scale-110' : 'bg-white/40 hover:bg-white/60'
                              }`}
                              onClick={() => goToSlide(index)}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
