import React, { useState } from 'react';
import PropertyCard from '../components/properties/PropertyCard';
import FilterSidebar from '../components/properties/FilterSidebar';
import PropertyListHeader from '../components/properties/PropertyListHeader';
import { useListings } from '../hooks/useListings';
import { Filter, SlidersHorizontal, X } from 'lucide-react';

const Listings: React.FC = () => {
  const { listings, isLoading, error } = useListings();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<string>('discount');
  const [activeFilters, setActiveFilters] = useState<{[key: string]: any}>({
    minPrice: null,
    maxPrice: null,
    minSize: null,
    maxSize: null,
    location: [],
    propertyType: []
  });

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleFilterChange = (filters: {[key: string]: any}) => {
    setActiveFilters(filters);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
  };

  // Filter and sort listings
  const filteredListings = listings.filter(listing => {
    let passes = true;
    
    if (activeFilters.minPrice && listing.price < activeFilters.minPrice) passes = false;
    if (activeFilters.maxPrice && listing.price > activeFilters.maxPrice) passes = false;
    if (activeFilters.minSize && listing.size < activeFilters.minSize) passes = false;
    if (activeFilters.maxSize && listing.size > activeFilters.maxSize) passes = false;
    
    if (activeFilters.location.length > 0 && !activeFilters.location.includes(listing.location)) {
      passes = false;
    }
    
    if (activeFilters.propertyType.length > 0 && !activeFilters.propertyType.includes(listing.type)) {
      passes = false;
    }
    
    return passes;
  });

  const sortedListings = [...filteredListings].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'size-asc':
        return a.size - b.size;
      case 'size-desc':
        return b.size - a.size;
      case 'discount':
        return (b.marketPrice - b.price) - (a.marketPrice - a.price);
      case 'percent-discount':
        return ((b.marketPrice - b.price) / b.marketPrice) - ((a.marketPrice - a.price) / a.marketPrice);
      default:
        return 0;
    }
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[500px]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-red-600 mb-2">Error</h2>
        <p className="text-gray-700">Failed to load listings. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Property Listings</h1>
          <p className="text-gray-600 mt-2">
            Discover underpriced properties across the Czech Republic
          </p>
        </div>

        <div className="md:hidden mb-4">
          <button
            onClick={toggleFilters}
            className="w-full flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            {showFilters ? <X className="mr-2" size={18} /> : <Filter className="mr-2" size={18} />}
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters sidebar - mobile */}
          {showFilters && (
            <div className="md:hidden bg-white p-4 rounded-lg shadow-md mb-4">
              <FilterSidebar onFilterChange={handleFilterChange} activeFilters={activeFilters} />
            </div>
          )}

          {/* Filters sidebar - desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white p-4 rounded-lg shadow-md sticky top-20">
              <div className="flex items-center mb-4">
                <SlidersHorizontal size={20} className="text-primary-600 mr-2" />
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
              </div>
              <FilterSidebar onFilterChange={handleFilterChange} activeFilters={activeFilters} />
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">
            <PropertyListHeader 
              count={sortedListings.length} 
              onSortChange={handleSortChange} 
              sortBy={sortBy}
            />

            {sortedListings.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <p className="text-gray-600 text-lg">No properties match your current filters.</p>
                <button 
                  className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                  onClick={() => setActiveFilters({
                    minPrice: null,
                    maxPrice: null,
                    minSize: null,
                    maxSize: null,
                    location: [],
                    propertyType: []
                  })}
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedListings.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;