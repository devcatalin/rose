import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';

interface PizzaCardProps {
  name: string;
  ingredients: string[];
  price: number | string;
  image: string;
  category?: 'pizza' | 'pasta' | 'special' | 'dessert' | 'pomeni' | 'extra';
  isPromotion?: boolean;
  originalPrice?: number;
  smallPrice?: number;
  portion?: string;
  isSignature?: boolean;
}

export function PizzaCard({ 
  name, 
  ingredients, 
  price, 
  image, 
  category = 'pizza',
  isPromotion = false,
  originalPrice,
  smallPrice,
  portion,
  isSignature = false
}: PizzaCardProps) {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'pizza': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'pasta': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'dessert': return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'special': return 'bg-green-100 text-green-800 border-green-200';
      case 'pomeni': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'extra': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-amber-100 flex flex-col h-full">
      <div className="relative">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-40 object-cover"
        />
        {isPromotion && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full">
            <span className="text-sm font-semibold">PROMOȚIE</span>
          </div>
        )}
        {isSignature && (
          <div className="absolute top-3 right-3 bg-amber-600 text-white px-2 py-1 rounded-full">
            <span className="text-sm font-semibold">SPECIALITATE</span>
          </div>
        )}
        <Badge 
          className={`absolute top-3 left-3 ${getCategoryColor(category)} border`}
          variant="outline"
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Badge>
      </div>
      
      <div className="px-4 py-2 flex flex-col flex-grow">
        {/* Title - Golden ratio height */}
        <div className="h-12 flex items-start mb-1">
          <h3 className="font-semibold text-amber-900 line-clamp-2 leading-tight text-[24px] text-left">{name}</h3>
        </div>
        
        {/* Ingredients - Golden ratio height */}
        <div className="h-14 mb-2">
          <p className={`text-gray-600 leading-snug ${category === 'pomeni' ? 'line-clamp-2 mt-4 md:mt-2' : category === 'pizza' ? 'line-clamp-3 -mt-1 md:mt-0' : 'line-clamp-3 mt-2 md:mt-0'} text-[17px] md:text-[15px]`}>
            {ingredients.join(', ')}
          </p>
        </div>
        
        {/* Portion info - Compressed spacing for non-pasta and non-extra items */}
        <div className="h-4 mb-2">
          {portion && category !== 'pasta' && category !== 'extra' && (
            <p className="text-xs text-amber-700 font-medium">
              Porție: {portion}
            </p>
          )}
        </div>
        
        {/* Price and button - Pushed to bottom with golden ratio spacing */}
        <div className="mt-auto relative">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-0.5">
              {/* Pizza sizes */}
              {smallPrice && category === 'pizza' && (
                <div className="flex items-center justify-start">
                  <span className="text-sm text-gray-600 text-[16px] md:text-[16px]">Mare: <span className="font-bold text-amber-800">{price} lei</span></span>
                  <span className="absolute bottom-0 right-0 text-sm text-gray-600 text-[16px] md:text-[16px] text-right">Mică: <span className="font-bold text-amber-800">{smallPrice} lei</span></span>
                </div>
              )}
              
              {/* Regular price for non-pizza items */}
              {(!smallPrice || category !== 'pizza') && (
                <div className="flex items-center gap-1.5">
                  {isPromotion && originalPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      {originalPrice} lei
                    </span>
                  )}
                  {typeof price === 'string' ? (
                    <span className="text-sm text-[rgba(123,51,6,1)] font-medium">
                      {price}
                    </span>
                  ) : (
                    <span className={`font-bold text-base md:text-lg ${isPromotion ? 'text-red-600' : 'text-amber-800'}`}>
                      {price} lei
                    </span>
                  )}
                </div>
              )}
            </div>
            
            {/* Portion info positioned in bottom right corner for pasta items */}
            {portion && category === 'pasta' && (
              <span className="absolute bottom-0 right-0 text-xs text-amber-700 font-medium">
                Porție: {portion}
              </span>
            )}
            
            {/* Portion info positioned in bottom right corner for extra items */}
            {portion && category === 'extra' && (
              <span className="absolute bottom-0 right-0 text-xs text-amber-700 font-medium">
                Porție: {portion}
              </span>
            )}
            

          </div>
        </div>
      </div>
    </div>
  );
}