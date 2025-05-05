import React, { useState, useEffect } from 'react';
import { useListings } from '../../hooks/useListings';

interface FilterSidebarProps {
  onFilterChange: (filters: {[key: string]: any}) => void;
  activeFilters: {[key: string]: any};
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ onFilterChange, activeFilters }) => {
  const { listings } = useListings();
  const [filters, setFilters] = useState(activeFilters);
  
  // Extract unique locations and property types from listings
  const locations = [...new Set(listings.map(listing => listing.location))];
  const propertyTypes = [...new Set(listings.map(listing => listing.type))];
  
  // Find min and max values for ranges
  const minPrice = Math.min(...listings.map(listing => listing.price));
  const maxPrice = Math.max(...listings.map(listing => listing.price));
  const minSize = Math.min(...listings.map(listing => listing.size));
  const maxSize = Math.max(...listings.map(listing => listing.size));
  
  useEffect(() => {
    setFilters(activeFilters);
  }, [activeFilters]);
  
  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value === '' ? null : parseInt(value, 10)
    }));
  };
  
  const handleCheckboxChange = (type: 'location' | 'propertyType', value: string) => {
    setFilters(prev => {
      const current = [...prev[type]];
      if (current.includes(value)) {
        return { ...prev, [type]: current.filter(item => item !== value) };
      } else {
        return { ...prev, [type]: [...current, value] };
      }
    });
  };
  
  const clearFilters = () => {
    setFilters({
      minPrice: null,
      maxPrice: null,
      minSize: null,
      maxSize: null,
      location: [],
      propertyType: []
    });
  };
  
  return (
    <div className="space-y-6">
      {/* Price Range */}
      <div>
        <h3 className="font-medium text-gray-900 mb-2">Price Range (Kč)</h3>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="sr-only">Min Price</label>
            <input
              type="number"
              name="minPrice"
              placeholder="Min"
              value={filters.minPrice || ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </div>
          <div>
            <label className="sr-only">Max Price</label>
            <input
              type="number"
              name="maxPrice"
              placeholder="Max"
              value={filters.maxPrice || ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </div>
        </div>
      </div>
      
      {/* Size Range */}
      <div>
        <h3 className="font-medium text-gray-900 mb-2">Size (m²)</h3>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="sr-only">Min Size</label>
            <input
              type="number"
              name="minSize"
              placeholder="Min"
              value={filters.minSize || ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </div>
          <div>
            <label className="sr-only">Max Size</label>
            <input
              type="number"
              name="maxSize"
              placeholder="Max"
              value={filters.maxSize || ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </div>
        </div>
      </div>
      
      {/* Locations */}
      <div>
        <h3 className="font-medium text-gray-900 mb-2">Location</h3>
        <div className="space-y-1 max-h-40 overflow-y-auto">
          {locations.map(location => (
            <div key={location} className="flex items-center">
              <input
                id={`location-${location}`}
                type="checkbox"
                checked={filters.location.includes(location)}
                onChange={() => handleCheckboxChange('location', location)}
                className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <label htmlFor={`location-${location}`} className="ml-2 text-sm text-gray-700">
                {location}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Property Types */}
      <div>
        <h3 className="font-medium text-gray-900 mb-2">Property Type</h3>
        <div className="space-y-1">
          {propertyTypes.map(type => (
            <div key={type} className="flex items-center">
              <input
                id={`type-${type}`}
                type="checkbox"
                checked={filters.propertyType.includes(type)}
                onChange={() => handleCheckboxChange('propertyType', type)}
                className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <label htmlFor={`type-${type}`} className="ml-2 text-sm text-gray-700">
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Clear Filters */}
      <button
        onClick={clearFilters}
        className="w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md text-sm font-medium"
      >
        Clear All Filters
      </button>
    </div>
  );
};

export default FilterSidebar;