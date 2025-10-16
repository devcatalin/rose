import {motion} from 'motion/react';

import {ImageWithFallback} from './figma/ImageWithFallback';

interface BulletPoint {
  text: string;
}

interface Note {
  text: string;
  isStrong?: boolean;
}

interface ContentSectionProps {
  id?: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  note?: Note;
  bulletPoints: BulletPoint[];
  buttonText: string;
  buttonHref?: string;
  onClick?: () => void;
  imagePosition?: 'left' | 'right';
  backgroundGradient?: string;
  buttonSpacing?: 'normal' | 'extra';
}

export function ContentSection({
  id = '',
  title,
  description,
  image,
  note,
  bulletPoints,
  buttonText,
  buttonHref,
  onClick,
  imagePosition = 'left',
  backgroundGradient = 'bg-gradient-to-br from-gray-50 to-white',
  buttonSpacing = 'normal',
}: ContentSectionProps) {
  const isImageLeft = imagePosition === 'left';
  const gridCols = isImageLeft ? 'lg:grid-cols-[1fr_1.618fr]' : 'lg:grid-cols-[1.618fr_1fr]';

  const ImageComponent = (
    <motion.div
      initial={{opacity: 0, x: isImageLeft ? -50 : 50}}
      whileInView={{opacity: 1, x: 0}}
      transition={{duration: 0.8}}
      viewport={{once: true}}
    >
      <div className="relative">
        <ImageWithFallback
          src={image.src}
          alt={image.alt}
          className="rounded-2xl shadow-2xl w-full h-[26rem] object-cover"
        />
      </div>
    </motion.div>
  );

  const ContentComponent = (
    <motion.div
      initial={{opacity: 0, x: isImageLeft ? 50 : -50}}
      whileInView={{opacity: 1, x: 0}}
      transition={{duration: 0.8, delay: 0.2}}
      viewport={{once: true}}
      className="space-y-6 text-center lg:text-left"
    >
      <div>
        <h2 className="title-font text-5xl mb-4 text-gray-800">{title}</h2>
        <p className="text-xl text-gray-600 leading-relaxed mb-4">{description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {bulletPoints.map((point, index) => (
          <div key={index} className="flex items-center justify-center lg:justify-start space-x-3">
            <div className="w-2 h-2 bg-[rgba(246,51,154,1)] rounded-full"></div>
            <span className="text-gray-700">{point.text}</span>
          </div>
        ))}
      </div>

      {note && (
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm text-gray-700">
            <span className="font-black text-black">Notă:</span> {note.text}
          </p>
        </div>
      )}

      <motion.div className={`${buttonSpacing === 'extra' ? 'pt-4' : ''} flex justify-center lg:justify-start`}>
        <motion.button
          className="inline-flex items-center bg-pink-700 hover:bg-pink-800 px-6 py-3 rounded-full transition-all duration-200 text-white"
          whileHover={{y: -2}}
          whileTap={{scale: 0.95}}
          onClick={onClick}
          {...(buttonHref && {
            as: 'a',
            href: buttonHref,
            target: buttonHref.startsWith('http') ? '_blank' : undefined,
            rel: buttonHref.startsWith('http') ? 'noopener noreferrer' : undefined,
          })}
        >
          <span>{buttonText}</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );

  return (
    <section
      id={id}
      className={`py-20 ${backgroundGradient} ${['funerare', 'mireasa', 'buchete'].includes(id) ? 'relative overflow-hidden' : ''}`}
    >
      {/* Floating decorative elements - only for specific sections */}
      {['funerare', 'mireasa', 'buchete'].includes(id ?? '') && (
        <>
          <motion.div
            className="absolute top-16 left-12 w-16 h-16 bg-pink-200/30 rounded-full backdrop-blur-sm"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-16 right-12 w-14 h-14 bg-green-300/25 rounded-full backdrop-blur-sm"
            animate={{
              y: [0, 18, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
          />
        </>
      )}

      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${['funerare', 'mireasa', 'buchete'].includes(id ?? '') ? 'relative z-10' : ''}`}
      >
        <div className={`grid ${gridCols} gap-16 items-center`}>
          {isImageLeft ? (
            <>
              {ImageComponent}
              {ContentComponent}
            </>
          ) : (
            <>
              {ContentComponent}
              {ImageComponent}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
