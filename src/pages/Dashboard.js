import React, { useContext, useEffect } from 'react';
import LeftNav from '../components/LeftNav';
import Messages from '../components/Messages';
import Profile from '../components/Profile';
import MessageBody from '../components/MessageBody';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { isLoggedIn, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, loading, navigate]);

  if (loading) {
    return (
      <div className='flex h-screen bg-slate-700 items-center justify-center'>
        <p className='text-gray-300'>Loading...</p>
      </div>
    );
  }

  return (
    <div className='flex h-screen bg-slate-700'>
      {/* Left Navigation */}
      <div className='hidden md:flex md:w-24 lg:w-28'>
        <LeftNav />
      </div>
      
      {/* Main Content */}
      <div className='flex-grow flex'>
        {/* Messages Section */}
        <div className='hidden md:block md:w-1/4 border-r border-gray-700 shadow-sm overflow-auto scrollbar-hidden'>
          <Messages />
        </div>

        {/* Message Body Section */}
        <div className='flex-1 border-r border-gray-700 shadow-sm overflow-auto scrollbar-hidden'>
          <MessageBody />
        </div>
        
        {/* Profile Section */}
        <div className='hidden lg:block lg:w-1/4 border-l border-gray-700 shadow-sm overflow-auto scrollbar-hidden'>
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
