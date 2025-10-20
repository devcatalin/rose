import {ImageWithFallback} from './figma/ImageWithFallback';

interface BulletPoint {
  text: string;
}

interface ContentSectionProps {
  id?: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  bulletPoints: BulletPoint[];
  imagePosition?: 'left' | 'right';
  backgroundColor?: 'white' | 'gray';
}

export function ContentSection({
  id,
  title,
  description,
  image,
  bulletPoints,
  imagePosition = 'left',
  backgroundColor = 'white',
}: ContentSectionProps) {
  const isImageLeft = imagePosition === 'left';
  const bgClass = backgroundColor === 'white' ? 'bg-white' : 'bg-gray-50';

  const ImageComponent = (
    <div className="relative">
      <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
        <ImageWithFallback src={image.src} alt={image.alt} className="w-full h-full object-cover" />
      </div>
    </div>
  );

  const ContentComponent = (
    <div className="space-y-6 text-center lg:text-left">
      <div>
        <h2 className="text-4xl font-bold text-amber-900 mb-4">{title}</h2>
        <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
      </div>

      {/* Bullet points in 2x2 grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {bulletPoints.map((point, index) => (
          <div key={index} className="flex items-center justify-center lg:justify-start space-x-3">
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
            <span className="text-gray-700">{point.text}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id={id} className={`py-16 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
