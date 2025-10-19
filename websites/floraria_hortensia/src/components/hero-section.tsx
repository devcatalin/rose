import {useEffect, useState} from 'react';

import logo from '@/assets/logo.png';
import pinkPeonies from '@/assets/pinkPeonies.png';
import vintageBouquet from '@/assets/vintageBouquet.png';
import whiteOrchidBridalBouquet from '@/assets/whiteOrchidBridalBouquet.png';
import whitePeoniesBridal from '@/assets/whitePeoniesBridal.png';
import whiteRibbonBouquet from '@/assets/whiteRibbonBouquet.png';
import {ImageWithFallback} from '@/components/figma/ImageWithFallback';
import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from '@/components/ui/sheet';
import type {ContentSection} from '@/data/static/types';
import type {HortensiaDetails} from '@/data/directus';
import {ChevronDown, Flower, Menu, MessageCircle, Phone, X} from 'lucide-react';
import {motion} from 'motion/react';

export const slideShowImages = [
  pinkPeonies,
  whiteOrchidBridalBouquet,
  vintageBouquet,
  whiteRibbonBouquet,
  whitePeoniesBridal,
];

interface HeroSectionProps {
  sections: ContentSection[];
  siteDetails: HortensiaDetails;
}

export function HeroSection({sections, siteDetails}: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sheetOpen, setSheetOpen] = useState(false);

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

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-30 bg-white border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="flex justify-between items-center py-4">
            <motion.div
              className="flex items-center"
              initial={{opacity: 0, x: -20}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.5}}
            >
              <img src={logo} alt="Florăria Hortensia Logo" className="h-12 w-auto" />
            </motion.div>

            <motion.div
              className="hidden md:flex items-center space-x-8"
              initial={{opacity: 0, y: -20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: 0.2}}
            >
              <a href="#despre" className="text-gray-700 hover:text-pink-500 transition-colors duration-200">
                Despre
              </a>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-pink-500 transition-colors duration-200">
                    <span>Serviciile noastre</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  sideOffset={8}
                  className="w-64 bg-white/95 backdrop-blur-sm border-pink-100 shadow-xl rounded-xl p-2"
                >
                  {sections.map(section => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="text-gray-700 hover:text-pink-500 focus:text-pink-500 cursor-pointer py-3 px-4 mx-1 my-1 rounded-lg transition-all duration-200 hover:bg-pink-50/50 block"
                    >
                      {section.title}
                    </a>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <a href="#contact" className="text-gray-700 hover:text-pink-500 transition-colors duration-200">
                Contact
              </a>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4"
              initial={{opacity: 0, x: 20}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.5, delay: 0.4}}
            >
              <div className="flex flex-col items-end space-y-1">
                <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                  <SheetTrigger asChild>
                    <button className="lg:hidden flex items-center text-gray-700 hover:text-pink-500 transition-colors duration-200 mr-3">
                      <Menu className="h-6 w-6" />
                    </button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px] bg-white [&>button]:hidden lg:[&>button]:block">
                    <SheetHeader className="mt-6">
                      <div className="flex items-center justify-between lg:justify-start">
                        <SheetTitle className="title-font !text-2xl text-pink-600 text-center lg:text-left">
                          Florăria Hortensia
                        </SheetTitle>
                        <button
                          onClick={() => setSheetOpen(false)}
                          className="lg:hidden flex items-center justify-center p-1 text-gray-500 hover:text-pink-600 transition-colors"
                        >
                          <X className="h-6 w-6" />
                        </button>
                      </div>
                      <SheetDescription className="sr-only">Navigație și contact rapid</SheetDescription>
                    </SheetHeader>
                    <div className="mt-8 space-y-6 text-center lg:text-left">
                      {/* Contact Information */}
                      <div className="space-y-4">
                        <h3 className="font-medium text-gray-800">Contact</h3>
                        <div className="space-y-2">
                          <a
                            href={`tel:+${siteDetails.primary_phone_number.replace(/\s/g, '')}`}
                            onClick={() => window.innerWidth < 1024 && setSheetOpen(false)}
                            className="flex items-center justify-center lg:justify-start text-gray-600 hover:text-pink-500 transition-colors"
                          >
                            <Phone className="h-4 w-4 mr-2" />
                            <span>{siteDetails.primary_phone_number}</span>
                          </a>
                          <a
                            href={`tel:+${siteDetails.secondary_phone_number.replace(/\s/g, '')}`}
                            onClick={() => window.innerWidth < 1024 && setSheetOpen(false)}
                            className="flex items-center justify-center lg:justify-start text-gray-600 hover:text-pink-500 transition-colors"
                          >
                            <Phone className="h-4 w-4 mr-2" />
                            <span>{siteDetails.secondary_phone_number}</span>
                          </a>
                        </div>
                      </div>

                      {/* Navigation Menu */}
                      <div className="space-y-4">
                        <h3 className="hidden lg:block font-medium text-gray-800">Serviciile Noastre</h3>
                        <div className="space-y-3">
                          <a
                            href="#despre"
                            className="block w-full text-center lg:text-left text-gray-600 hover:text-pink-500 transition-colors py-2"
                          >
                            Despre Noi
                          </a>
                          {sections.map(section => (
                            <a
                              key={section.id}
                              href={`#${section.id}`}
                              className="block w-full text-center lg:text-left text-gray-600 hover:text-pink-500 transition-colors py-2"
                            >
                              {section.title}
                            </a>
                          ))}
                          <a
                            href="#contact"
                            className="block w-full text-center lg:text-left text-gray-600 hover:text-pink-500 transition-colors py-2"
                          >
                            Contact
                          </a>
                        </div>
                      </div>

                      {/* WhatsApp Button */}
                      <div className="pt-4 flex justify-center lg:justify-start">
                        <a
                          href={`https://wa.me/${siteDetails.primary_phone_number.replace(/\s/g, '')}`}
                          onClick={() => window.innerWidth < 1024 && setSheetOpen(false)}
                          className="flex items-center justify-center bg-pink-700 hover:bg-pink-800 text-white px-3 py-2 rounded-full transition-colors text-sm"
                        >
                          <MessageCircle className="h-3 w-3 mr-1" />
                          <span>Scrie-ne pe WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>

                {/* Desktop phone number - hidden on mobile */}
                <a
                  href={`tel:+${siteDetails.primary_phone_number.replace(/\s/g, '')}`}
                  className="hidden lg:flex items-center text-gray-700 hover:text-pink-500 transition-colors duration-200"
                >
                  <Phone className="h-4 w-4 mr-1" />
                  <span>{siteDetails.primary_phone_number}</span>
                </a>
                <a
                  href={`tel:+${siteDetails.secondary_phone_number.replace(/\s/g, '')}`}
                  className="flex items-center text-gray-700 hover:text-pink-500 transition-colors duration-200"
                >
                  <Phone className="h-4 w-4 mr-1" />
                  <span>{siteDetails.secondary_phone_number}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Main Hero Content */}
      <div className="grid lg:grid-cols-2 h-full">
        {/* Left Column - Content */}
        <div className="relative bg-gradient-to-br from-white via-pink-50 to-purple-50 flex items-center justify-center z-20">
          <div className="max-w-xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-20">
            <motion.div
              className="space-y-6 text-center lg:text-left"
              initial={{opacity: 0, x: -50}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.8, delay: 0.2}}
            >
              <div className="space-y-4">
                <motion.div
                  initial={{opacity: 0, y: 30}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.8, delay: 0.4}}
                >
                  <h1 className="title-font !text-[96px] text-gray-800 leading-tight">Florăria</h1>
                  <h1 className="title-font !text-[96px] text-[rgba(192,40,120,1)] leading-tight">Hortensia</h1>
                </motion.div>

                <motion.p
                  className="text-xl text-gray-600 leading-relaxed"
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.8, delay: 0.6}}
                >
                  {siteDetails.short_about}
                </motion.p>
              </div>

              {/* Contact Info */}
              <motion.div
                className="space-y-4 pt-4"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8, delay: 0.8}}
              >
                <div className="flex items-start justify-center lg:justify-start space-x-3 text-gray-600">
                  <Phone className="h-5 w-5 text-pink-400 mt-1" />
                  <div className="flex flex-col space-y-1">
                    <span>{siteDetails.primary_phone_number}</span>
                    <span>{siteDetails.secondary_phone_number}</span>
                  </div>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3 text-gray-600">
                  <Flower className="h-5 w-5 text-pink-400" />
                  <span>Buchete personalizate pentru toate ocaziile</span>
                </div>
              </motion.div>

              <motion.div
                className="pt-4 flex justify-center lg:justify-start"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8, delay: 1.0}}
              >
                <motion.a
                  href="#contact"
                  className="relative inline-flex items-center bg-pink-700 hover:bg-pink-800 px-6 py-3 rounded-full transition-all duration-200 text-white z-10"
                  whileHover={{y: -2}}
                  whileTap={{scale: 0.95}}
                >
                  <MessageCircle className="h-5 w-5 mr-2 relative z-20" />
                  <span className="relative z-20">Scrie-ne un mesaj</span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div
              className="absolute top-20 right-8 w-16 h-16 bg-pink-300/20 rounded-full backdrop-blur-sm"
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute bottom-32 left-8 w-12 h-12 bg-purple-400/20 rounded-full backdrop-blur-sm"
              animate={{
                y: [0, 15, 0],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            />
          </div>
        </div>

        {/* Right Column - Full Height Slideshow (Hidden on Mobile) */}
        <div className="hidden lg:block relative h-full overflow-hidden">
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
              <div className="absolute inset-0 w-full h-full bg-gradient-to-l from-transparent via-black/5 to-black/20" />
            </motion.div>
          ))}

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
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
          <div className="absolute top-8 right-8 z-20">
            <div className="bg-black/20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
              <span className="text-sm font-medium">
                {String(currentSlide + 1).padStart(2, '0')} / {String(validSlideshowImages.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 z-20">
            <div className="h-1 bg-white/20">
              <motion.div
                className="h-full bg-pink-500"
                initial={{width: '0%'}}
                animate={{width: '100%'}}
                transition={{
                  duration: 3,
                  ease: 'linear',
                  repeat: Infinity,
                }}
                key={currentSlide}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
