export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  marketPrice: number;
  size: number;
  rooms: string;
  location: string;
  type: string;
  image: string;
  source: string;
  url: string;
  daysAgo: number;
  isFavorite?: boolean;
}