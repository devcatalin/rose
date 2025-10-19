import type {HortensiaDetails} from '@/data/directus';
import {Clock, MapPin, Phone} from 'lucide-react';
import {motion} from 'motion/react';

interface ContactSectionProps {
  siteDetails: HortensiaDetails;
}

export function ContactSection({siteDetails}: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-pink-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center lg:text-left"
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          viewport={{once: true}}
        >
          <h2 className="title-font text-5xl mb-6 text-gray-800">Contact</h2>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed mx-auto lg:mx-0">
            Suntem aici pentru tine! Contactează-ne pentru orice întrebare sau pentru a comanda aranjamentele tale
            florale.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{opacity: 0, x: -50}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.8}}
            viewport={{once: true}}
            className="space-y-8 text-center lg:text-left"
          >
            <div>
              <div className="space-y-6">
                <motion.div
                  className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  whileHover={{scale: 1.02}}
                >
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-gray-800">Telefon</h4>
                    <a
                      href={`tel:+${siteDetails.primary_phone_number.replace(/\s/g, '')}`}
                      className="text-pink-600 hover:text-pink-700 transition-colors block"
                    >
                      {siteDetails.primary_phone_number}
                    </a>
                    <a
                      href={`tel:+${siteDetails.secondary_phone_number.replace(/\s/g, '')}`}
                      className="text-pink-600 hover:text-pink-700 transition-colors block"
                    >
                      {siteDetails.secondary_phone_number}
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Apeluri și WhatsApp</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  whileHover={{scale: 1.02}}
                >
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-gray-800">Adresă</h4>
                    <p className="text-gray-700">Strada Bujorilor Nr. 3</p>
                    <p className="text-gray-700">Timișoara, Romania</p>
                    <p className="text-sm text-gray-600 mt-1">Livrăm în toată Timișoara</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  whileHover={{scale: 1.02}}
                >
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-gray-800">Program</h4>
                    <p className="text-gray-700 whitespace-pre-line">{siteDetails.schedule}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* WhatsApp CTA & Plant Care Tips */}
          <motion.div
            initial={{opacity: 0, x: 50}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.8, delay: 0.2}}
            viewport={{once: true}}
            className="space-y-8"
          >
            {/* WhatsApp CTA */}
            <div className="bg-white py-8 px-18 rounded-2xl shadow-lg h-full flex flex-col justify-center">
              <div className="text-center mb-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.690" />
                  </svg>
                </div>
                <h3 className="text-2xl mb-3 text-gray-800">Comandă pe WhatsApp</h3>
                <p className="text-gray-600 mb-6">Cea mai rapidă modalitate de a comanda florile tale preferate</p>
              </div>

              <motion.a
                href={`https://wa.me/${siteDetails.primary_phone_number.replace(/\s/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center bg-pink-700 hover:bg-pink-800 px-6 py-3 rounded-full transition-all duration-200 text-white text-center md:text-left"
                whileHover={{y: -2}}
                whileTap={{scale: 0.95}}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.690" />
                </svg>
                <span className="text-center md:text-left">Scrie-ne pe WhatsApp</span>
              </motion.a>
            </div>

            {/* Plant Care Tips */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
