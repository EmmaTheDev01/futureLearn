// src/components/LeftNav.jsx

import React from 'react';
import { MdChat, MdNotifications, MdGroup, MdPerson, MdCalendarToday } from 'react-icons/md';

const LeftNav = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-800 text-white space-y-4">
      <button className="p-2 hover:bg-gray-700 rounded-full">
        <MdChat className="text-2xl" />
      </button>
      <button className="p-2 hover:bg-gray-700 rounded-full">
        <MdNotifications className="text-2xl" />
      </button>
      <button className="p-2 hover:bg-gray-700 rounded-full">
        <MdGroup className="text-2xl" />
      </button>
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
