import React from 'react';

interface PropertyListHeaderProps {
  count: number;
  onSortChange: (value: string) => void;
  sortBy: string;
}

const PropertyListHeader: React.FC<PropertyListHeaderProps> = ({ count, onSortChange, sortBy }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
      <div className="mb-3 sm:mb-0">
        <h2 className="text-lg font-semibold text-gray-900">
          {count} {count === 1 ? 'Property' : 'Properties'} Found
        </h2>
        <p className="text-sm text-gray-600">
          Showing underpriced properties in the Czech Republic
        </p>
      </div>
      
      <div className="flex items-center w-full sm:w-auto">
        <label htmlFor="sort" className="mr-2 text-sm text-gray-700">
          Sort by:
        </label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="form-select w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-md text-sm bg-white"
        >
          <option value="discount">Highest Discount (Kč)</option>
          <option value="percent-discount">Highest Discount (%)</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="size-asc">Size: Small to Large</option>
          <option value="size-desc">Size: Large to Small</option>
        </select>
      </div>
    </div>
  );
};

export default PropertyListHeader;