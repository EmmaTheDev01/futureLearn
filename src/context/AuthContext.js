import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie'; // Import js-cookie for cookie management

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true); // Initially set loading to true
  const [isAdmin, setIsAdmin] = useState(false); // State to track admin status
  
  // Function to check initial authentication status
  const checkAuthStatus = () => {
    const token = Cookies.get('token') || localStorage.getItem('token'); // Check if token exists in cookies or localStorage
    const role = localStorage.getItem('role'); // Get role from localStorage

    if (token) {
      setIsLoggedIn(true);
      setIsAdmin(role === 'admin'); // Check if user is admin
    } else {
      setIsLoggedIn(false);
      setIsAdmin(false);
    }
    setLoading(false); // Once checked, set loading to false
  };

  // Function to log in the user
  const login = (token, role) => {
    setIsLoggedIn(true);
    localStorage.setItem('token', token); // Set token in localStorage
    localStorage.setItem('role', role); // Set role in localStorage
    Cookies.set('token', token, { expires: 7, secure: true, sameSite: 'Strict' }); // Set token in cookies

    setIsAdmin(role === 'admin'); // Set isAdmin state
  };

  // Function to log out the user
  const logout = () => {
    Cookies.remove('token'); 
    localStorage.removeItem('token'); 
    localStorage.removeItem('role'); 
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  // Call checkAuthStatus on component mount to initialize authentication check
  useEffect(() => {
    checkAuthStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, loading, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
