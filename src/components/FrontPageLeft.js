import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaEnvelope, FaUsers, FaComments, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';

const FrontPageLeft = () => {
  return (
    <div className="text-white h-screen flex flex-col p-4 space-y-4">
      <Link to="/home" className="nav-link flex items-center space-x-2 hover:bg-slate-600 rounded-lg p-2">
        <FaHome className="text-lg" />
        <span>Home</span>
      </Link>
      <Link to="/mail" className="nav-link flex items-center space-x-2 hover:bg-slate-600 rounded-lg p-2">
        <FaEnvelope className="text-lg" />
        <span>Mail</span>
      </Link>
      <Link to="/my-group" className="nav-link flex items-center space-x-2 hover:bg-slate-600 rounded-lg p-2">
        <FaUsers className="text-lg" />
        <span>My Group</span>
      </Link>
      <Link to="/dashboard" className="nav-link flex items-center space-x-2 hover:bg-slate-600 rounded-lg p-2">
        <FaComments className="text-lg" />
        <span>Chat</span>
      </Link>
      <Link to="/help" className="nav-link flex items-center space-x-2 hover:bg-slate-600 rounded-lg p-2">
        <FaQuestionCircle className="text-lg" />
        <span>Help</span>
      </Link>
      <button className="nav-link flex items-center space-x-2 hover:bg-slate-600 rounded-lg p-2" onClick={() => console.log('Logout')}>
        <FaSignOutAlt className="text-lg" />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default FrontPageLeft;
