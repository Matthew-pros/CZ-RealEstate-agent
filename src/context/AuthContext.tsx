import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  subscription: string | null;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: async () => {},
  register: async () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  
  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);
  
  const login = async (email: string, password: string): Promise<void> => {
    // This is a mock implementation - in a real app, this would call your API
    if (email && password) {
      // Simulate API call delay
      return new Promise((resolve) => {
        setTimeout(() => {
          const mockUser: User = {
            id: '1',
            name: 'Demo User',
            email: email,
            subscription: null,
          };
          
          setUser(mockUser);
          setIsAuthenticated(true);
          localStorage.setItem('user', JSON.stringify(mockUser));
          resolve();
        }, 800);
      });
    }
    
    throw new Error('Invalid credentials');
  };
  
  const register = async (name: string, email: string, password: string): Promise<void> => {
    // This is a mock implementation - in a real app, this would call your API
    if (name && email && password) {
      // Simulate API call delay
      return new Promise((resolve) => {
        setTimeout(() => {
          const mockUser: User = {
            id: '1',
            name: name,
            email: email,
            subscription: 'trial',
          };
          
          setUser(mockUser);
          setIsAuthenticated(true);
          localStorage.setItem('user', JSON.stringify(mockUser));
          resolve();
        }, 800);
      });
    }
    
    throw new Error('Registration failed');
  };
  
  const logout = (): void => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };
  
  const value = {
    user,
    isAuthenticated,
    login,
    register,
    logout,
  };
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};