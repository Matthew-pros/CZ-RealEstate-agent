import React, { useState } from 'react';
import { Bookmark, ExternalLink, MapPin, Maximize, Heart } from 'lucide-react';
import { Property } from '../../types/property';
import { formatPrice } from '../../utils/formatters';
import { useAuth } from '../../hooks/useAuth';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [isFavorite, setIsFavorite] = useState(property.isFavorite || false);
  const { isAuthenticated } = useAuth();
  
  const discount = property.marketPrice - property.price;
  const discountPercentage = (discount / property.marketPrice) * 100;
  
  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isAuthenticated) {
      setIsFavorite(!isFavorite);
      // In a real app, we would call an API to save this preference
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 left-0 m-2">
          <div className="bg-green-500 text-white px-2 py-1 text-xs font-bold rounded">
            {discountPercentage.toFixed(1)}% Below Market
          </div>
        </div>
        <button 
          onClick={toggleFavorite}
          className={`absolute top-0 right-0 m-2 p-1.5 rounded-full ${
            isFavorite ? 'bg-red-500 text-white' : 'bg-white text-gray-400 hover:text-red-500'
          } transition-colors`}
        >
          <Heart size={18} className={isFavorite ? 'fill-current' : ''} />
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-16"></div>
        <div className="absolute bottom-0 left-0 m-3 flex items-center text-white">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm font-medium">{property.location}</span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-gray-900 text-lg leading-tight">{property.title}</h3>
          <div className="flex items-center">
            <Maximize size={16} className="text-gray-500 mr-1" />
            <span className="text-sm text-gray-600">{property.size} m²</span>
          </div>
        </div>
        
        <div className="mb-3">
          <p className="text-sm text-gray-500">{property.type} • {property.rooms}</p>
        </div>
        
        <div className="flex items-end justify-between">
          <div>
            <div className="flex items-center">
              <span className="line-through text-gray-500 text-sm mr-2">
                {formatPrice(property.marketPrice)} Kč
              </span>
              <span className="font-bold text-green-600 text-lg">
                {formatPrice(property.price)} Kč
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Listed {property.daysAgo} days ago on {property.source}
            </p>
          </div>
          
          <a 
            href={property.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center"
          >
            Details <ExternalLink size={14} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;