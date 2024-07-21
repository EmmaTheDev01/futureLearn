import React from 'react';
import LeftNav from '../components/LeftNav';
import Messages from '../components/Messages';
import Profile from '../components/Profile';
import MessageBody from '../components/MessageBody';


const Dashboard = () => {
  return (
    <div className='flex h-screen bg-slate-700'>
      <div className='w-16 md:w-24 lg:w-28'>
        <LeftNav />
      </div>
      <div className='flex-grow flex'>
        <div className='w-1/4 border-r border-gray-700 shadow-sm overflow-auto scrollbar-hidden'>
          <Messages />
        </div>
        <div className='flex-1 border-r border-gray-700 shadow-sm overflow-auto scrollbar-hidden'>
          <MessageBody />
        </div>
        <div className='w-1/4 overflow-auto scrollbar-hidden'>
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
