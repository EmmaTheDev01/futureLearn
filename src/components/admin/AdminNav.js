import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HiOutlineUserCircle } from 'react-icons/hi'; // Example icon from React Icons
import { Link } from 'react-router-dom'; // Assuming you use React Router for navigation

const AdminNav = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/auth/profile');
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Left side of Navbar - Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-white text-lg font-semibold">
              Admin Panel
            </Link>
          </div>

          {/* Right side of Navbar - User Avatar and Dropdown */}
          <div className="flex items-center">
            {/* Dropdown */}
            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">User menu</span>
                  {profile ? (
                    <img
                      className="h-8 w-8 rounded-full object-cover"
                      src={profile.avatarUrl} // Replace with actual avatar URL field from your API response
                      alt="User Avatar"
                    />
                  ) : (
                    <HiOutlineUserCircle className="h-8 w-8 text-white" />
                  )}
                </button>
              </div>
              {/* Dropdown menu */}
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                <div className="py-1" role="none">
                  {/* Example dropdown items */}
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Profile</Link>
                  <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</Link>
                  <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Logout</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNav;
