import {ImageWithFallback} from './figma/ImageWithFallback';

export function AboutSection1() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-4">Despre Pizza Gioco</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Pizza Gioco este o poveste de familie care a început cu pasiunea pentru pizza autentică italiană. De
                peste 16 ani, ne dedicăm să aducem în fiecare farfurie gustul adevărat al Italiei, folosind doar
                ingrediente proaspete și rețete tradiționale transmise din generație în generație.
              </p>
            </div>

            {/* Bullet points in 2x2 grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#92400e',
                    borderRadius: '50%',
                    display: 'inline-block',
                    flexShrink: 0,
                    marginRight: '12px',
                  }}
                ></span>
                <span className="text-gray-700">15+ ani de experiență în domeniu</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#92400e',
                    borderRadius: '50%',
                    display: 'inline-block',
                    flexShrink: 0,
                    marginRight: '12px',
                  }}
                ></span>
                <span className="text-gray-700">Evenimente, petreceri și sărbători</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#92400e',
                    borderRadius: '50%',
                    display: 'inline-block',
                    flexShrink: 0,
                    marginRight: '12px',
                  }}
                ></span>
                <span className="text-gray-700">Calitate, ingrediente premium</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#92400e',
                    borderRadius: '50%',
                    display: 'inline-block',
                    flexShrink: 0,
                    marginRight: '12px',
                  }}
                ></span>
                <span className="text-gray-700">Locația, aproape de Timișoara</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1730020596764-2a51086abd49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXN0aWMlMjBwaXp6YSUyMHJlc3RhdXJhbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTgwMTI1NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Pizza Gioco Restaurant Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
