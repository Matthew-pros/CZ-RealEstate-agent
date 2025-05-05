import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bell, User, Home, Search, PieChart, Package } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useNotifications } from '../../hooks/useNotifications';
import NotificationDropdown from '../notifications/NotificationDropdown';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const { notifications } = useNotifications();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleNotifications = () => setShowNotifications(!showNotifications);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    { name: 'Listings', path: '/listings', icon: <Search size={20} /> },
    { name: 'Dashboard', path: '/dashboard', icon: <PieChart size={20} /> },
    { name: 'Subscription', path: '/subscription', icon: <Package size={20} /> },
  ];

  const hasUnreadNotifications = notifications.some(n => !n.read);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl text-primary-600">PropArb</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                <span className="mr-1.5">{link.icon}</span>
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            {isAuthenticated ? (
              <>
                <button
                  onClick={toggleNotifications}
                  className="relative p-2 text-gray-600 hover:text-primary-600 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <Bell size={20} />
                  {hasUnreadNotifications && (
                    <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                  )}
                </button>
                <div className="relative">
                  <button className="flex items-center space-x-2 text-gray-700 hover:text-primary-600">
                    <User size={20} />
                    <span>{user?.name || 'User'}</span>
                  </button>
                  {showNotifications && <NotificationDropdown onClose={() => setShowNotifications(false)} />}
                </div>
                <button 
                  onClick={logout}
                  className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login"
                  className="px-4 py-2 rounded-md text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                >
                  Login
                </Link>
                <Link 
                  to="/register"
                  className="px-4 py-2 rounded-md text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            {isAuthenticated && (
              <button
                onClick={toggleNotifications}
                className="relative p-2 mr-2 text-gray-600 hover:text-primary-600 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Bell size={20} />
                {hasUnreadNotifications && (
                  <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                )}
              </button>
            )}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="pt-2 pb-4 space-y-1 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center px-3 py-3 text-base font-medium rounded-md transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mr-3">{link.icon}</span>
                {link.name}
              </Link>
            ))}
            {isAuthenticated ? (
              <button 
                onClick={() => {
                  logout();
                  setIsMenuOpen(false);
                }}
                className="flex w-full items-center px-3 py-3 text-base font-medium rounded-md text-red-600 hover:text-red-700 hover:bg-red-50 transition-colors"
              >
                Logout
              </button>
            ) : (
              <div className="flex flex-col space-y-2 pt-2">
                <Link 
                  to="/login"
                  className="px-3 py-3 text-center rounded-md text-base font-medium text-primary-600 hover:text-primary-700 hover:bg-primary-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/register"
                  className="px-3 py-3 text-center rounded-md text-base font-medium text-white bg-primary-600 hover:bg-primary-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Notification dropdown (mobile) */}
      {showNotifications && isAuthenticated && <NotificationDropdown mobile onClose={() => setShowNotifications(false)} />}
    </nav>
  );
};

export default Navbar;