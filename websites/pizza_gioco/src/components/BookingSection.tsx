import {Clock, MapPin, Phone} from 'lucide-react';

import {Card} from './ui/card';

interface BookingSectionProps {
  phoneNumber?: string;
  schedule?: string;
}

export function BookingSection({phoneNumber, schedule}: BookingSectionProps) {
  const phone = phoneNumber || '0765 381 298';
  const scheduleLines = schedule?.split('\n') || ['Luni - Vineri 12:00 - 22:00', 'Sambata - Duminica 13:00 - 23:00'];

  const googleMapsUrl = 'https://maps.app.goo.gl/EMdttYFM2VTz3csaA';

  return (
    <section id="booking" className="py-16" style={{backgroundColor: '#FFFBEB'}}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">Rezervări</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transformă-ți evenimentul special într-o experiență de neuitat la Pizza Gioco.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Location & Schedule Card */}
          <Card className="p-8 bg-white shadow-lg border border-amber-200 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-amber-900 text-center" style={{paddingTop: '20px'}}>
              Locație și Program
            </h3>
            <div className="flex flex-col items-center">
              {/* Parent container for Address & Schedule - centered as a group */}
              <div className="space-y-6 mb-6">
                {/* Schedule */}
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-amber-900 mb-1">Program</h4>
                    <div className="space-y-1">
                      {scheduleLines
                        .filter(l => l.trim() !== '')
                        .map((line, index) => (
                          <p key={index} className="text-gray-600 text-sm">
                            {line}
                          </p>
                        ))}
                    </div>
                  </div>
                </div>
                {/* Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-amber-900 mb-1">Adresă</h4>
                    <p className="text-gray-600 text-sm">Str. Caraiman nr.13, Chișoda</p>
                    <p className="text-gray-600 text-sm">lângă Timișoara</p>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="flex justify-center pt-2" style={{paddingBottom: '20px'}}>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Obține Indicații</span>
                </a>
              </div>
            </div>
          </Card>

          {/* Contact Card */}
          <Card className="p-8 bg-amber-700 text-white shadow-lg flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-center" style={{paddingTop: '20px'}}>
              Contact
            </h3>
            <div className="flex flex-col items-center" style={{paddingBottom: '20px'}}>
              <div className="flex items-center gap-4 mb-6">
                <Phone className="w-8 h-8 flex-shrink-0" />
                <a href={`tel:+4${phone.replace(/\s/g, '')}`} className="hover:underline text-3xl font-bold">
                  {phone}
                </a>
              </div>
              <p className="text-amber-100 text-lg text-center">Sună-ne direct pentru rezervări!</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
