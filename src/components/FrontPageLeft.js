import React from 'react';
import { Link } from 'react-router-dom';

const FrontPageLeft = () => {
  return (
    <div className='bg-gray-900 text-white h-screen flex flex-col'>
      {/* Navigation Links */}
      <div className='flex-1 flex flex-col items-center justify-start pt-4'>
        <Link to='/home' className='nav-link'>Home</Link>
        <Link to='/mail' className='nav-link'>Mail</Link>
        <Link to='/my-group' className='nav-link'>My Group</Link>
        <Link to='/dashboard' className='nav-link'>Chat</Link>
        <span className='nav-link'>Help</span>
        <span className='nav-link'>Logout</span>
      </div>

      {/* Footer */}
      <div className='h-16 bg-gray-800 flex items-center justify-center'>
        <span className='text-sm'>Footer</span>
      </div>
    </div>
  );
};

export default FrontPageLeft;
