import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Crown, Sparkles } from 'lucide-react';

export function BridalSection() {
  return (
    <section id="mireasa" className="py-[6.854rem] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.618fr] gap-[4.236rem] items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1677768062220-32f1658715c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBib3VxdWV0JTIwd2hpdGUlMjBwaW5rfGVufDF8fHx8MTc1ODExODQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Buchet de mireasă elegant"
                className="rounded-2xl shadow-2xl w-full h-[26rem] object-cover"
              />

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-[2.618rem]"
          >
            <div>
              <h2 className="text-4xl mb-[1.618rem] text-gray-800">Buchete de Mireasă</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-[1.618rem]">
                Creăm buchete de mireasă unice și elegante, perfecte pentru cea mai importantă zi din viața ta.
              </p>
              <p className="text-gray-600 leading-relaxed text-[20px]">
                Fiecare buchet este realizat cu grijă și atenție la detalii, folosind cele mai frumoase și proaspete flori, selectate special pentru a completa perfect rochia și stilul ales.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1.618rem]">
              <div className="flex items-start space-x-[1rem]">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2.5 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl mb-[0.618rem] text-gray-800">Design Personalizat</h3>
                  <p className="text-gray-600">Adaptat stilului și culorilor nunții tale</p>
                </div>
              </div>

              <div className="flex items-start space-x-[1rem]">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2.5 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl mb-[0.618rem] text-gray-800">Calitate Premium</h3>
                  <p className="text-gray-600">Flori selectate și tratate cu grijă maximă</p>
                </div>
              </div>
            </div>

            <motion.a
              href="https://wa.me/40123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-pink-50 hover:bg-pink-100 px-6 py-3 rounded-full transition-all duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 mr-2 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.690"/>
              </svg>
              <span className="text-pink-700">Consultație Buchet Mireasă</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}