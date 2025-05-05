import React from 'react';

const HeroImage: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary-800 to-transparent z-10 rounded-lg"></div>
      <div className="rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
        <img 
          src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Real estate property opportunity" 
          className="w-full h-auto"
        />
        <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm p-4 rounded-lg shadow-lg z-20">
          <div className="flex items-start">
            <div className="bg-green-500 text-white px-3 py-1 text-sm font-bold rounded-md mr-3 flex-shrink-0">
              -15%
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Prague Apartment</h3>
              <p className="text-sm text-gray-600">3+kk, 78m² • Vinohrady</p>
              <div className="mt-1 flex items-center">
                <span className="line-through text-gray-500 text-sm mr-2">7,900,000 Kč</span>
                <span className="font-bold text-green-600">6,715,000 Kč</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;