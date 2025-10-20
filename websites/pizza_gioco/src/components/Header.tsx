import {useState} from 'react';

import {Menu, X} from 'lucide-react';

import {ImageWithFallback} from './figma/ImageWithFallback';

interface Promotion {
  id: string;
  title: string;
  subtitle: string;
  image?: string;
  validUntil?: string;
}

interface HeaderProps {
  promotions?: Promotion[];
}

export function Header({promotions = []}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPromo, setCurrentPromo] = useState(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
    setIsMenuOpen(false);
  };

  const nextPromo = () => {
    setCurrentPromo(prev => (prev + 1) % promotions.length);
  };

  const prevPromo = () => {
    setCurrentPromo(prev => (prev - 1 + promotions.length) % promotions.length);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Promotions Banner */}
      {promotions.length > 0 && (
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white">
          <div
            className="max-w-7xl mx-auto px-2 sm:px-4 md:flex md:items-center md:justify-center"
            style={{paddingBottom: '6px'}}
          >
            <div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-32 md:items-center">
              {promotions.length > 1 && (
                <button
                  onClick={prevPromo}
                  className="text-white hover:text-red-200 transition-colors text-3xl sm:text-4xl flex-shrink-0 md:leading-none md:flex md:items-baseline cursor-pointer"
                >
                  ‹
                </button>
              )}

              <div className="flex-1 text-center min-w-0 md:mt-2">
                <div className="flex items-center justify-center gap-2 sm:gap-4">
                  {promotions[currentPromo].image && (
                    <ImageWithFallback
                      src={promotions[currentPromo].image}
                      alt="Promotion"
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover flex-shrink-0"
                    />
                  )}
                  <div className="min-w-0">
                    <span className="font-semibold text-sm sm:text-base">{promotions[currentPromo].title}</span>
                    <span className="ml-1 sm:ml-2 text-red-200 text-sm sm:text-base">
                      {promotions[currentPromo].subtitle}
                    </span>
                  </div>
                </div>
              </div>

              {promotions.length > 1 && (
                <button
                  onClick={nextPromo}
                  className="text-white hover:text-red-200 transition-colors text-3xl sm:text-4xl flex-shrink-0 md:leading-none md:flex md:items-baseline cursor-pointer"
                >
                  ›
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">PG</span>
            </div>
            <h1 className="text-2xl font-bold text-amber-900">Pizza Gioco</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
            >
              Meniu
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
            >
              Rezervări
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-lg transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-gray-700">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-4 mt-4">
              <button
                onClick={() => scrollToSection('menu')}
                className="text-center md:text-left text-gray-700 hover:text-amber-700 transition-colors font-medium"
              >
                Meniu
              </button>
              <button
                onClick={() => scrollToSection('booking')}
                className="text-center md:text-left text-gray-700 hover:text-amber-700 transition-colors font-medium"
              >
                Rezervări
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-center md:text-left bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-lg transition-colors font-medium w-fit mx-auto md:mx-0"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
