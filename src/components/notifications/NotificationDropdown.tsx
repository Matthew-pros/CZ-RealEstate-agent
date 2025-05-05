import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNotifications } from '../../hooks/useNotifications';
import { BellOff, MapPin, ExternalLink } from 'lucide-react';

interface NotificationDropdownProps {
  onClose: () => void;
  mobile?: boolean;
}

const NotificationDropdown: React.FC<NotificationDropdownProps> = ({ onClose, mobile = false }) => {
  const { notifications, markAsRead, markAllAsRead } = useNotifications();
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);
  
  return (
    <div 
      ref={dropdownRef}
      className={`bg-white rounded-lg shadow-lg overflow-hidden z-20 ${
        mobile 
          ? 'fixed inset-x-0 top-16 mx-4' 
          : 'absolute right-0 top-full mt-2 w-80'
      }`}
    >
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-900">Notifications</h3>
          <button 
            onClick={markAllAsRead}
            className="text-sm text-primary-600 hover:text-primary-700"
          >
            Mark all as read
          </button>
        </div>
      </div>
      
      <div className="max-h-96 overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="py-8 px-4 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100">
              <BellOff className="h-6 w-6 text-gray-400" />
            </div>
            <p className="mt-4 text-sm text-gray-500">
              No notifications yet
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {notifications.map((notification) => (
              <div 
                key={notification.id}
                className={`p-4 hover:bg-gray-50 transition-colors ${!notification.read ? 'bg-primary-50' : ''}`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <img 
                      src={notification.image} 
                      alt="" 
                      className="h-10 w-10 rounded object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 mb-0.5">
                      {notification.title}
                    </p>
                    <div className="flex items-center text-xs text-gray-500 mb-1">
                      <MapPin size={12} className="mr-1" />
                      <span>{notification.location}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">
                      {notification.message}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        {notification.time}
                      </span>
                      <Link
                        to={notification.link}
                        className="flex items-center text-xs text-primary-600 hover:text-primary-700"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View <ExternalLink size={12} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                  {!notification.read && (
                    <div className="ml-2 flex-shrink-0">
                      <span className="inline-block h-2 w-2 rounded-full bg-primary-500"></span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="border-t border-gray-200 p-3 text-center">
        <Link
          to="/notifications"
          className="text-sm text-primary-600 hover:text-primary-700 font-medium"
          onClick={onClose}
        >
          View all notifications
        </Link>
      </div>
    </div>
  );
};

export default NotificationDropdown;