import { Notification } from '../types/notification';

export const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'New Property Alert',
    message: 'Modern apartment in Prague 2 is 15% below market price!',
    image: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&h=75',
    location: 'Prague',
    time: '2 hours ago',
    read: false,
    link: '/listings'
  },
  {
    id: '2',
    title: 'Price Drop',
    message: 'The price of a house in Brno dropped by 500,000 Kč!',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&h=75',
    location: 'Brno',
    time: '1 day ago',
    read: false,
    link: '/listings'
  },
  {
    id: '3',
    title: 'Subscription Renewal',
    message: 'Your trial period ends in 3 days. Upgrade now!',
    image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&h=75',
    location: '',
    time: '2 days ago',
    read: true,
    link: '/subscription'
  },
  {
    id: '4',
    title: 'New Search Match',
    message: 'Your "Prague 3+kk" search has 2 new matches!',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&h=75',
    location: 'Prague',
    time: '3 days ago',
    read: true,
    link: '/listings'
  },
  {
    id: '5',
    title: 'Market Update',
    message: 'Prague apartment prices decreased by 2.5% this month!',
    image: 'https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&h=75',
    location: 'Prague',
    time: '5 days ago',
    read: true,
    link: '/dashboard'
  }
];