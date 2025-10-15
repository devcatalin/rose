import {Gift} from 'lucide-react';
import {motion} from 'motion/react';

import {ImageWithFallback} from './figma/ImageWithFallback';

export function BouquetsSection() {
  const bouquets = [
    {
      image:
        'https://images.unsplash.com/photo-1680563094046-5d846e2c59d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBwaW5rJTIwcm9zZXMlMjBib3VxdWV0fGVufDF8fHx8MTc1ODExODQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Buchete Clasice',
      description: 'Trandafiri și flori clasice în nuanțe delicate',
    },
    {
      image:
        'https://images.unsplash.com/photo-1745570647377-e6317fba9438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjBmbG93ZXIlMjBhcnJhbmdlbWVudHxlbnwxfHx8fDE3NTgxMTg0NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Buchete Pastel',
      description: 'Combinații moderne în culori pastel',
    },
    {
      image:
        'https://images.unsplash.com/photo-1660615061888-6ded552163cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2hpdGUlMjBmbG93ZXJzJTIwYXJyYW5nZW1lbnR8ZW58MXx8fHwxNzU4MTE4NDUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Buchete Elegante',
      description: 'Aranjamente sofisticate pentru momente speciale',
    },
  ];

  return (
    <section id="buchete" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          viewport={{once: true}}
        >
          <h2 className="text-4xl mb-6 text-gray-800">Buchete Personalizate</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferim aranjamente florale pentru evenimente, buchete personalizate cu felicitare handmade gratuită,
            aranjamente în cutii sau coșulețe.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {bouquets.map((bouquet, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: index * 0.2}}
              viewport={{once: true}}
              whileHover={{y: -10}}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <ImageWithFallback
                  src={bouquet.image}
                  alt={bouquet.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl mb-2">{bouquet.title}</h3>
                  <p className="text-sm opacity-90">{bouquet.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.4}}
          viewport={{once: true}}
        >
          <div className="inline-flex items-center bg-pink-50 px-6 py-3 rounded-full">
            <Gift className="h-5 w-5 text-pink-500 mr-2" />
            <span className="text-pink-700">Felicitare handmade gratuită la fiecare buchet</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
