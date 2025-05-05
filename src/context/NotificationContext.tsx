import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Notification } from '../types/notification';
import { mockNotifications } from '../data/mockNotifications';

interface NotificationContextType {
  notifications: Notification[];
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
}

export const NotificationContext = createContext<NotificationContextType>({
  notifications: [],
  markAsRead: () => {},
  markAllAsRead: () => {},
});

interface NotificationProviderProps {
  children: ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  
  useEffect(() => {
    // Load mock notifications
    setNotifications(mockNotifications);
  }, []);
  
  const markAsRead = (id: string) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };
  
  const markAllAsRead = () => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification => ({ ...notification, read: true }))
    );
  };
  
  const value = {
    notifications,
    markAsRead,
    markAllAsRead,
  };
  
  return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>;
};