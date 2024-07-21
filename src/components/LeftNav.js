// src/components/LeftNav.jsx

import React from 'react';
import { MdGroup, MdPerson, MdCalendarToday, MdHome, MdMail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const LeftNav = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center h-full bg-gray-800 text-white space-y-4">
      <Link to='/home'>
        <button className="p-2 hover:bg-gray-700 rounded-full">
          <MdHome className="text-2xl" />
        </button>
      </Link>
      <Link to='/mail'>
        <button className="p-2 hover:bg-gray-700 rounded-full">
          <MdMail className="text-2xl" />
        </button>
      </Link>
      <Link to='/my-group'>
        <button className="p-2 hover:bg-gray-700 rounded-full">
          <MdGroup className="text-2xl" />
        </button>
      </Link>
      <button className="p-2 hover:bg-gray-700 rounded-full">
        <MdPerson className="text-2xl" />
      </button>
      <button className="p-2 hover:bg-gray-700 rounded-full">
        <MdCalendarToday className="text-2xl" />
      </button>
    </div>
  );
};

export default LeftNav;
