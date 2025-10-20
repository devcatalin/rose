import {Clock, Facebook, MapPin, Phone} from 'lucide-react';

interface FooterProps {
  schedule?: string;
  phoneNumber?: string;
}

export function Footer({schedule, phoneNumber}: FooterProps) {
  // Parse schedule if it's provided, otherwise use default
  const scheduleLines = schedule?.split('\n') || ['Luni - Vineri 12:00 - 22:00', 'Sambata - Duminica 13:00 - 23:00'];

  const phone = phoneNumber || '0765 381 298';
  return (
    <footer id="contact" className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-amber-900 font-bold text-lg">PG</span>
              </div>
              <h3 className="text-2xl font-bold">Pizza Gioco</h3>
            </div>
            <p className="text-amber-200 leading-relaxed">
              Pizza autentică italiană preparată cu pasiune și ingrediente proaspete, de peste 16 ani în inima orașului.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://www.facebook.com/giocopizza"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="w-5 h-5 text-amber-300 mt-0.5" />
                <div>
                  <p className="text-amber-200">Str. Caraiman nr.13, Chisoda</p>
                  <p className="text-amber-200">langa Timisoara</p>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="w-5 h-5 text-amber-300" />
                <a
                  href={`tel:+4${phone.replace(/\s/g, '')}`}
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  {phone}
                </a>
              </div>
            </div>
          </div>

          {/* Program */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Program</h4>
            <div className="space-y-2">
              {scheduleLines
                .filter(l => l.trim() !== '')
                .map((line, index) => (
                  <div key={index} className="flex items-center gap-2 justify-center md:justify-start">
                    <Clock className="w-4 h-4 text-amber-300" />
                    <span className="text-amber-200 text-sm">{line}</span>
                  </div>
                ))}
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Link-uri Utile</h4>
            <div className="space-y-2">
              <a href="#menu" className="block text-amber-200 hover:text-white transition-colors">
                Meniu
              </a>
              <a href="#about" className="block text-amber-200 hover:text-white transition-colors">
                Despre Noi
              </a>
              <a href="#booking" className="block text-amber-200 hover:text-white transition-colors">
                Rezervări Evenimente
              </a>
              <a
                href={`tel:+4${phone.replace(/\s/g, '')}`}
                className="block text-amber-200 hover:text-white transition-colors"
              >
                Comenzi Telefon
              </a>
            </div>

            <div className="pt-4 md:pb-0 border-t border-amber-800">
              <p className="text-amber-300 text-sm">Rezervări Evenimente:</p>
              <a
                href={`tel:+4${phone.replace(/\s/g, '')}`}
                className="text-amber-200 hover:text-white transition-colors text-sm mt-2 md:mt-0"
              >
                {phone}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-amber-800 text-center">
          <p className="text-amber-300 text-sm md:text-base">© 2025 Pizza Gioco. Toate drepturile rezervate.</p>
          <p className="text-amber-200 text-xs md:text-sm mt-2">Designed by Stoica Serena</p>
        </div>
      </div>
    </footer>
  );
}
