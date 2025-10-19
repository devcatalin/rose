import type {HortensiaDetails} from '@/data/directus';
import type {ContentSection} from '@/data/static/types';
import {Heart, MapPin, Phone} from 'lucide-react';
import {motion} from 'motion/react';

interface FooterProps {
  sections: ContentSection[];
  siteDetails: HortensiaDetails;
}

export function Footer({sections, siteDetails}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Heart className="h-8 w-8 text-pink-400" />
              <h3 className="text-3xl font-medium">Florăria Hortensia</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4 font-light">{siteDetails.short_about}</p>
            <p className="text-sm text-gray-400 font-light whitespace-pre-line">{siteDetails.schedule}</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.2}}
            viewport={{once: true}}
          >
            <h3 className="text-2xl font-medium mb-4">Serviciile Noastre</h3>
            <ul className="space-y-2 text-gray-300">
              {sections.map(section => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="hover:text-pink-400 transition-colors duration-200">
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.4}}
            viewport={{once: true}}
          >
            <h3 className="text-2xl font-medium mb-4">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="h-5 w-5 text-pink-400" />
                <a
                  href={`tel:+${siteDetails.primary_phone_number.replace(/\s/g, '')}`}
                  className="hover:text-pink-400 transition-colors duration-200"
                >
                  {siteDetails.primary_phone_number}
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="h-5 w-5 text-pink-400" />
                <a
                  href={`tel:+${siteDetails.secondary_phone_number.replace(/\s/g, '')}`}
                  className="hover:text-pink-400 transition-colors duration-200"
                >
                  {siteDetails.secondary_phone_number}
                </a>
              </div>
              <div className="flex items-start justify-center md:justify-start space-x-3">
                <MapPin className="h-5 w-5 text-pink-400 mt-0.5" />
                <div>
                  <p className="font-light">Strada Bujorilor Nr. 3</p>
                  <p className="font-light">Timișoara, Romania</p>
                  <p className="font-light text-sm text-gray-400 mt-1">Livrăm în toată Timișoara</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="flex justify-center md:justify-start">
              <motion.a
                href={`https://wa.me/${siteDetails.primary_phone_number.replace(/\s/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-pink-700 hover:bg-pink-800 px-6 py-3 rounded-full transition-all duration-200 text-white mt-4"
                whileHover={{y: -2}}
                whileTap={{scale: 0.95}}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.690" />
                </svg>
                <span className="text-center md:text-left">WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400"
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6, delay: 0.6}}
          viewport={{once: true}}
        >
          <p className="font-light">&copy; {currentYear} Florăria Hortensia. Toate drepturile rezervate.</p>
          <p className="text-sm mt-1 font-light">
            Făcut cu <Heart className="inline h-4 w-4 text-pink-400 mx-1" /> pentru iubitorii de flori
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
