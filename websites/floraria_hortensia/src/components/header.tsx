import {useEffect, useState} from 'react';

import {Heart, MapPin, Phone} from 'lucide-react';
import {motion} from 'motion/react';

import {ImageWithFallback} from './figma/ImageWithFallback';

const carouselImages = [
  'https://images.unsplash.com/photo-1680563094046-5d846e2c59d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBwaW5rJTIwcm9zZXMlMjBib3VxdWV0fGVufDF8fHx8MTc1ODExODQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1660615061888-6ded552163cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2hpdGUlMjBmbG93ZXJzJTIwYXJyYW5nZW1lbnR8ZW58MXx8fHwxNzU4MTE4NDUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1745570647377-e6317fba9438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjBmbG93ZXIlMjBhcnJhbmdlbWVudHxlbnwxfHx8fDE3NTgxMTg0NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
];

export function Header() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <header className="relative h-screen overflow-hidden">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 bg-white/80 backdrop-blur-sm border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              className="flex items-center space-x-2"
              initial={{opacity: 0, x: -20}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.5}}
            >
              <Heart className="h-8 w-8 text-pink-400" />
              <h1 className="text-2xl font-medium text-gray-800">Florăria Hortensia</h1>
            </motion.div>

            <motion.div
              className="hidden md:flex space-x-8"
              initial={{opacity: 0, y: -20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: 0.2}}
            >
              <button
                onClick={() => scrollToSection('despre')}
                className="text-gray-700 hover:text-pink-500 transition-colors duration-200"
              >
                Despre
              </button>
              <button
                onClick={() => scrollToSection('buchete')}
                className="text-gray-700 hover:text-pink-500 transition-colors duration-200"
              >
                Buchete
              </button>
              <button
                onClick={() => scrollToSection('aranjamente')}
                className="text-gray-700 hover:text-pink-500 transition-colors duration-200"
              >
                Aranjamente
              </button>
              <button
                onClick={() => scrollToSection('mireasa')}
                className="text-gray-700 hover:text-pink-500 transition-colors duration-200"
              >
                Mireasă
              </button>
              <button
                onClick={() => scrollToSection('evenimente')}
                className="text-gray-700 hover:text-pink-500 transition-colors duration-200"
              >
                Evenimente
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-pink-500 transition-colors duration-200"
              >
                Contact
              </button>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4"
              initial={{opacity: 0, x: 20}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.5, delay: 0.4}}
            >
              <a
                href="tel:+40123456789"
                className="flex items-center text-gray-700 hover:text-pink-500 transition-colors duration-200"
              >
                <Phone className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">+40 123 456 789</span>
              </a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Carousel */}
      <div className="relative h-full">
        {carouselImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{opacity: 0}}
            animate={{opacity: currentImage === index ? 1 : 0}}
            transition={{duration: 1}}
          >
            <ImageWithFallback src={image} alt={`Flori frumoase ${index + 1}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        ))}

        {/* Hero Content */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-50 to-purple-50 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="grid lg:grid-cols-[1.618fr_1fr] gap-16 items-center h-full min-h-[80vh] py-8">
              {/* Left content column */}
              <motion.div
                className="space-y-8 lg:pr-8"
                initial={{opacity: 0, x: -50}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.8, delay: 0.2}}
              >
                <div className="space-y-6">
                  <motion.div
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.4}}
                  >
                    <h1 className="text-5xl md:text-7xl text-gray-800 leading-tight">Florăria</h1>
                    <h1 className="text-5xl md:text-7xl text-pink-500 leading-tight">Hortensia</h1>
                  </motion.div>

                  <motion.p
                    className="text-xl text-gray-600 leading-relaxed max-w-lg"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.6}}
                  >
                    Credem în puterea florilor de a transmite emoție, frumusețe și autenticitate. Fiecare aranjament
                    spune o poveste unică.
                  </motion.p>
                </div>

                <motion.div
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.8, delay: 0.8}}
                >
                  <motion.button
                    className="bg-pink-500 hover:bg-pink-600 text-white px-10 py-4 rounded-full transition-all duration-300 shadow-lg"
                    whileHover={{scale: 1.05, boxShadow: '0 20px 25px -5px rgba(236, 72, 153, 0.3)'}}
                    whileTap={{scale: 0.95}}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                  >
                    Contactează-ne
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Right image carousel column */}
              <motion.div
                className="relative"
                initial={{opacity: 0, x: 50}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.8, delay: 0.4}}
              >
                <div className="relative">
                  {/* Image carousel container */}
                  <motion.div
                    className="relative overflow-hidden rounded-3xl shadow-2xl"
                    whileHover={{scale: 1.02}}
                    transition={{duration: 0.3}}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 to-purple-400/10 rounded-3xl"></div>

                    {/* Carousel images */}
                    <motion.div
                      key={currentImage}
                      initial={{opacity: 0, scale: 1.1}}
                      animate={{opacity: 1, scale: 1}}
                      exit={{opacity: 0, scale: 0.9}}
                      transition={{duration: 0.6}}
                      className="relative z-10"
                    >
                      <ImageWithFallback
                        src={carouselImages[currentImage]}
                        alt={`Aranjamente florale elegante - ${currentImage + 1}`}
                        className="w-full h-[28rem] md:h-[32rem] object-cover"
                      />
                    </motion.div>

                    {/* Gradient overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                  </motion.div>

                  {/* Carousel navigation dots */}
                  <div className="flex justify-center space-x-3 mt-6">
                    {carouselImages.map((_, index) => (
                      <motion.button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentImage ? 'bg-pink-500 scale-110' : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        onClick={() => setCurrentImage(index)}
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.9}}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating decorative elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-20 h-20 bg-pink-300/20 rounded-full backdrop-blur-sm"
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
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-400/20 rounded-full backdrop-blur-sm"
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
              </motion.div>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
      </div>
    </header>
  );
}
