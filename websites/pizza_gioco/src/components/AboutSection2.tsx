import {ImageWithFallback} from './figma/ImageWithFallback';

export function AboutSection2() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxwYXJ0eSUyMHBpenphJTIwcmVzdGF1cmFudCUyMGV2ZW50fGVufDF8fHx8MTc1ODAxMjU2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Evenimente speciale la Pizza Gioco"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-4">Organizezi un eveniment special?</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Restaurantul nostru oferă spațiul perfect pentru sărbătorirea zilelor de naștere, aniversărilor,
                petrecerilor private și altor evenimente speciale. Cu o atmosferă caldă și primitoare, suntem locul
                ideal pentru momentele tale importante.
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
                <span className="text-gray-700">Capacitate de până la 80 de persoane</span>
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
                <span className="text-gray-700">Meniu personalizat pentru evenimente</span>
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
                <span className="text-gray-700">Decorațiuni și amenajări tematice</span>
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
                <span className="text-gray-700">Servicii complete de catering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
