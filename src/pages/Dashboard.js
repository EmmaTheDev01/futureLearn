import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Chat from '../components/Chat';

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
     <Chat/>
    </div>
  );
};

export default Dashboard;
