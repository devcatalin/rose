import {useCallback, useRef, useState} from 'react';

import {useDirectusAbout} from '@/hooks/useDirectusAbout';
import {ChevronLeft, ChevronRight} from 'lucide-react';
import {motion} from 'motion/react';

// Static data kept for reference in src/data/aboutData.ts
// Website now uses data from Directus CMS with Material Design icons

export function AboutSection() {
  const {data: aboutCards, loading, error} = useDirectusAbout();

  // All hooks must be called before any conditional returns
  const cardWidth = 320; // 80 * 4 = 320px
  const gap = 32; // 8 * 4 = 32px (gap-8)
  const leftPadding = 10; // pl-2.5 = 10px
  const rightPadding = 10; // 10px from right edge

  const [dragOffset, setDragOffset] = useState(-leftPadding); // Start with proper left padding
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const startPosRef = useRef(0);
  const startOffsetRef = useRef(0);

  const qualityTraits = aboutCards || [];

  // Calculate total content width
  const totalContentWidth = qualityTraits.length * cardWidth + (qualityTraits.length - 1) * gap;

  // Calculate boundaries based on viewport and content
  const maxOffset = -leftPadding; // Allow slight movement left, but stop at 10px padding

  // Calculate how far we can scroll right - ensure last card is fully visible with 10px padding
  // Assuming typical viewport width, we want to show as many complete cards as possible
  const minOffset = -(
    totalContentWidth -
    (typeof window !== 'undefined' ? window.innerWidth - leftPadding - rightPadding : 1200) +
    leftPadding
  );

  // Apply resistance when dragging beyond boundaries
  const applyResistance = useCallback((offset: number, boundary: number, resistance: number = 0.3) => {
    const distance = Math.abs(offset - boundary);
    return boundary + Math.sign(offset - boundary) * distance * resistance;
  }, []);

  // Calculate bounded offset with resistance
  const getBoundedOffset = useCallback(
    (offset: number) => {
      if (offset > maxOffset) {
        return applyResistance(offset, maxOffset);
      }
      if (offset < minOffset) {
        return applyResistance(offset, minOffset);
      }
      return offset;
    },
    [minOffset, maxOffset, applyResistance]
  );

  const handleDragStart = useCallback(
    (clientX: number) => {
      setIsDragging(true);
      startPosRef.current = clientX;
      startOffsetRef.current = dragOffset;
    },
    [dragOffset]
  );

  const handleDragMove = useCallback(
    (clientX: number) => {
      if (!isDragging) return;
      const deltaX = clientX - startPosRef.current;
      const newOffset = startOffsetRef.current + deltaX;
      const boundedOffset = getBoundedOffset(newOffset);
      setDragOffset(boundedOffset);
    },
    [isDragging, getBoundedOffset]
  );

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    // Bounce back if beyond boundaries
    if (dragOffset > maxOffset) {
      setDragOffset(maxOffset);
    } else if (dragOffset < minOffset) {
      setDragOffset(minOffset);
    }
  }, [dragOffset, minOffset, maxOffset]);

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    handleDragMove(e.touches[0].clientX);
  };

  // Navigation buttons
  const nextSlide = () => {
    const newOffset = Math.max(minOffset, dragOffset - (cardWidth + gap));
    setDragOffset(newOffset);
  };

  const prevSlide = () => {
    const newOffset = Math.min(maxOffset, dragOffset + (cardWidth + gap));
    setDragOffset(newOffset);
  };

  // Show loading state
  if (loading) {
    return (
      <section id="despre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-pink-600"></div>
          </div>
        </div>
      </section>
    );
  }

  // Show error or no data
  if (error || !aboutCards || aboutCards.length === 0) {
    return null; // Silently hide the section if no data
  }

  return (
    <section id="despre" className="py-20 bg-white relative overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-16 right-12 w-20 h-20 bg-pink-200/30 rounded-full backdrop-blur-sm"
        animate={{
          y: [0, -25, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/3 left-8 w-14 h-14 bg-green-300/25 rounded-full backdrop-blur-sm"
        animate={{
          y: [0, 20, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
      />
      <motion.div
        className="absolute bottom-32 right-1/4 w-16 h-16 bg-purple-300/20 rounded-full backdrop-blur-sm"
        animate={{
          y: [0, -15, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-pink-300/25 rounded-full backdrop-blur-sm"
        animate={{
          y: [0, 18, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
      <motion.div
        className="absolute bottom-16 right-12 w-18 h-18 bg-green-200/30 rounded-full backdrop-blur-sm"
        animate={{
          y: [0, -22, 0],
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2.5,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Left-aligned Title and Description */}
        <motion.div
          className="mb-16 text-center lg:text-left"
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          viewport={{once: true}}
        >
          <h2 className="title-font text-gray-800 text-[48px] mb-4">Despre noi</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Din februarie 2024, Florăria Hortensia aduce bucurie și culoare în viețile oamenilor prin aranjamente
            florale unice. Credem în puterea florilor de a transmite emoție și frumusețe în fiecare moment special.
          </p>
        </motion.div>
      </div>

      {/* Full Width Cards Slider */}
      <div
        className="relative w-full overflow-hidden mb-8 py-2.5 cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={isDragging ? handleMouseMove : undefined}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
      >
        <motion.div
          ref={sliderRef}
          className="flex gap-8 pl-2.5"
          animate={{x: dragOffset}}
          transition={{
            duration: isDragging ? 0 : 0.6,
            ease: 'easeOut',
            type: 'spring',
            stiffness: 260,
            damping: 26,
            bounce: 0.4,
          }}
        >
          {qualityTraits.map((trait, index) => {
            return (
              <motion.div
                key={trait.id}
                className="group flex-shrink-0 w-80"
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: index * 0.1}}
                viewport={{once: true}}
                whileHover={!isDragging ? {y: -3} : {}}
              >
                <div className="bg-white border border-pink-100 rounded-3xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-pink-200 h-full">
                  {/* Icon - Material Design Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl flex items-center justify-center group-hover:from-pink-100 group-hover:to-pink-200 transition-all duration-300 mx-auto">
                      <span className="material-symbols-outlined text-pink-600 text-[32px]">{trait.icon}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-gray-900 mb-3 group-hover:text-pink-800 transition-colors duration-300">
                    {trait.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">{trait.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Navigation Buttons - Centered */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 justify-center">
          <motion.button
            onClick={prevSlide}
            disabled={dragOffset >= maxOffset}
            className="w-12 h-12 bg-white border border-pink-100 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:border-pink-200"
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
          >
            <ChevronLeft className="h-5 w-5 text-pink-600" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            disabled={dragOffset <= minOffset}
            className="w-12 h-12 bg-white border border-pink-100 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:border-pink-200"
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
          >
            <ChevronRight className="h-5 w-5 text-pink-600" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
