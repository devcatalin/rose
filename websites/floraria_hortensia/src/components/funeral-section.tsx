import {Flower} from 'lucide-react';
import {motion} from 'motion/react';

import {ImageWithFallback} from './figma/ImageWithFallback';

export function FuneralSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.618fr] gap-16 items-center">
          <motion.div
            initial={{opacity: 0, x: -50}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.8}}
            viewport={{once: true}}
          >
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1706282170042-a4229c2f6141?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdW5lcmFsJTIwZmxvd2VycyUyMHdoaXRlJTIwcm9zZXN8ZW58MXx8fHwxNzU4MTE4NDUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Aranjamente funerare respectuoase cu trandafiri albi"
                className="rounded-2xl shadow-2xl w-full h-[26rem] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{opacity: 0, x: 50}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.8, delay: 0.2}}
            viewport={{once: true}}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl mb-4 text-gray-800">Aranjamente Funerare</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-4">
                Oferim aranjamente funerare realizate cu respect și grijă, pentru a omagia memoria celor dragi.
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Notă:</strong> Nu oferim coroane funerare, ci doar aranjamente florale delicate și respectuoase.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[rgba(246,51,154,1)] rounded-full"></div>
                <span className="text-gray-700">Aranjamente în vaze elegante</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[rgba(246,51,154,1)] rounded-full"></div>
                <span className="text-gray-700">Buchete de condoleanțe</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[rgba(246,51,154,1)] rounded-full"></div>
                <span className="text-gray-700">Aranjamente pentru case de marcat</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[rgba(246,51,154,1)] rounded-full"></div>
                <span className="text-gray-700">Livrare discretă și la timp</span>
              </div>
            </div>

            <motion.button
              className="inline-flex items-center bg-pink-50 hover:bg-pink-100 px-6 py-3 rounded-full transition-all duration-300"
              whileHover={{y: -2}}
              whileTap={{scale: 0.95}}
            >
              <span className="text-pink-700">Vezi mai multe poze</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
