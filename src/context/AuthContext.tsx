import React, { createContext, useContext, useState, ReactNode } from 'react';
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
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, password: string): boolean => {
    // Find user in predefined json
    const foundUser = usersData.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      // Exclude password from the stored user object
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword as User);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

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
