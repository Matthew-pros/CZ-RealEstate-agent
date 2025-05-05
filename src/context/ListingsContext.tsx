import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Property } from '../types/property';
import { mockListings } from '../data/mockListings';

interface ListingsContextType {
  listings: Property[];
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
  favoriteProperty: (id: string, favorite: boolean) => void;
}

export const ListingsContext = createContext<ListingsContextType>({
  listings: [],
  isLoading: false,
  error: null,
  refetch: () => {},
  favoriteProperty: () => {},
});

interface ListingsProviderProps {
  children: ReactNode;
}

export const ListingsProvider: React.FC<ListingsProviderProps> = ({ children }) => {
  const [listings, setListings] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const fetchListings = () => {
    setIsLoading(true);
    setError(null);
    
    // Simulate API call with a timeout
    setTimeout(() => {
      try {
        setListings(mockListings);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch listings');
        setIsLoading(false);
      }
    }, 800);
  };
  
  useEffect(() => {
    fetchListings();
  }, []);
  
  const favoriteProperty = (id: string, favorite: boolean) => {
    setListings(prevListings => 
      prevListings.map(listing => 
        listing.id === id ? { ...listing, isFavorite: favorite } : listing
      )
    );
  };
  
  const value = {
    listings,
    isLoading,
    error,
    refetch: fetchListings,
    favoriteProperty,
  };
  
  return <ListingsContext.Provider value={value}>{children}</ListingsContext.Provider>;
};