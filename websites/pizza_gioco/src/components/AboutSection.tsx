import { MapPin, Clock, Users, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutSectionProps {
  restaurantImage?: string;
}

export function AboutSection({ restaurantImage }: AboutSectionProps) {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-4">Despre Pizza Gioco</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Pizza Gioco este o poveste de familie care a început cu pasiunea pentru pizza autentică italiană. 
                De peste 16 ani, ne dedicăm să aducem în fiecare farfurie gustul adevărat al Italiei, 
                folosind doar ingrediente proaspete și rețete tradiționale transmise din generație în generație.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center md:justify-items-stretch">
              <div className="flex flex-col items-center gap-3 md:flex-row md:items-start">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-amber-700" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-semibold text-amber-900">15+ Ani</h3>
                  <p className="text-gray-600 text-sm">De experiență în domeniu</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 md:flex-row md:items-start">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-amber-700" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-semibold text-amber-900">Evenimente</h3>
                  <p className="text-gray-600 text-sm">Petreceri și sărbători</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 md:flex-row md:items-start">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-amber-700" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-semibold text-amber-900">Calitate</h3>
                  <p className="text-gray-600 text-sm">Ingrediente premium</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 md:flex-row md:items-start">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-amber-700" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-semibold text-amber-900">Locația</h3>
                  <p className="text-gray-600 text-sm">Centrul orașului</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h3 className="font-semibold text-amber-900 mb-3">Organizezi un eveniment special?</h3>
              <p className="text-gray-700 mb-4">
                Restaurantul nostru oferă spațiul perfect pentru sărbătorirea zilelor de naștere, 
                aniversărilor, petrecerilor private și altor evenimente speciale. Cu o atmosferă 
                caldă și primitoare, suntem locul ideal pentru momentele tale importante.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Capacitate de până la 80 de persoane</li>
                <li>• Meniu personalizat pentru evenimente</li>
                <li>• Decorațiuni și amenajări tematice</li>
                <li>• Servicii complete de catering</li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src={restaurantImage || "https://images.unsplash.com/photo-1730020596764-2a51086abd49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXN0aWMlMjBwaXp6YSUyMHJlc3RhdXJhbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTgwMTI1NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"}
                alt="Pizza Gioco Restaurant Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-0 md:-left-6 bg-white p-4 md:p-6 rounded-lg shadow-lg border border-amber-200">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-amber-800">
                  <span className="md:hidden">100+</span>
                  <span className="hidden md:inline">1000+</span>
                </p>
                <p className="text-gray-600 text-sm md:text-base">Clienți mulțumiți</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}