import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLecturer, setIsLecturer] = useState(false); // New state for lecturer role

  const checkAuthStatus = () => {
    const token = Cookies.get('token') || localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (token) {
      setIsLoggedIn(true);
      setIsAdmin(role === 'admin');
      setIsLecturer(role === 'lecturer'); // Check if role is lecturer
    } else {
      setIsLoggedIn(false);
      setIsAdmin(false);
      setIsLecturer(false); // Reset isLecturer if not logged in
    }
    setLoading(false); // Ensure loading is set to false after checking auth status
  };

  const login = (token, role) => {
    setIsLoggedIn(true);
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    Cookies.set('token', token, { expires: 7, secure: true, sameSite: 'Strict' });
    setIsAdmin(role === 'admin');
    setIsLecturer(role === 'lecturer'); // Set isLecturer based on role
  };

  const logout = () => {
    Cookies.remove('token');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setIsLoggedIn(false);
    setIsAdmin(false);
    setIsLecturer(false); // Reset isLecturer on logout
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, loading, isAdmin, isLecturer }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
