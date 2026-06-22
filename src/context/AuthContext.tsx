import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import usersData from '../data/users.json';

export interface User {
  id: string;
  username: string;
  role: 'admin' | 'client';
  category?: string;
  businessType?: string;
  template?: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('auth_user');
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        // Check if the session has an expiration and is still valid
        if (parsed.expiresAt && Date.now() < parsed.expiresAt) {
          return parsed.user as User;
        } else {
          // Clear expired or invalid session format
          localStorage.removeItem('auth_user');
          return null;
        }
      } catch (e) {
        return null;
      }
    }
    return null;
  });

  const login = (username: string, password: string): boolean => {
    // Find user in predefined json
    const foundUser = usersData.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      // Exclude password from the stored user object
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword as User);
      
      // Store user data with a 24-hour expiration timestamp
      const authData = {
        user: userWithoutPassword,
        expiresAt: Date.now() + 24 * 60 * 60 * 1000 // 24 hours in milliseconds
      };
      localStorage.setItem('auth_user', JSON.stringify(authData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth_user');
  };

  useEffect(() => {
    const checkSession = () => {
      const savedUser = localStorage.getItem('auth_user');
      if (savedUser) {
        try {
          const parsed = JSON.parse(savedUser);
          if (!parsed.expiresAt || Date.now() >= parsed.expiresAt) {
            setUser(null);
            localStorage.removeItem('auth_user');
          }
        } catch (e) {
          setUser(null);
          localStorage.removeItem('auth_user');
        }
      } else {
        setUser(null);
      }
    };

    // Check expiration every 5 seconds
    const intervalId = setInterval(checkSession, 5000);

    // Sync auth state across multiple browser tabs
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'auth_user') {
        checkSession();
      }
    };
    window.addEventListener('storage', handleStorageChange);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
