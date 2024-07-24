import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation
import { AiOutlineUser, AiOutlineBook, AiOutlineProfile, AiOutlineFolder, AiOutlineNotification } from 'react-icons/ai'; // Example icons from React Icons

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white h-screen w-64 fixed left-0 top-0 overflow-y-auto">
      <div className="p-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
      </div>
      <ul className="mt-6">
        <li className="mb-4">
          <Link to="/students" className="flex items-center p-3 text-gray-300 hover:bg-gray-800 hover:text-white">
            <AiOutlineUser className="mr-3" />
            Students
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/lecturers" className="flex items-center p-3 text-gray-300 hover:bg-gray-800 hover:text-white">
            <AiOutlineProfile className="mr-3" />
            Lecturers
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/assignments" className="flex items-center p-3 text-gray-300 hover:bg-gray-800 hover:text-white">
            <AiOutlineBook className="mr-3" />
            Assignments
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/posts" className="flex items-center p-3 text-gray-300 hover:bg-gray-800 hover:text-white">
            <AiOutlineFolder className="mr-3" />
            Posts
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/groups" className="flex items-center p-3 text-gray-300 hover:bg-gray-800 hover:text-white">
            <AiOutlineBook className="mr-3" />
            Groups
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/announcements" className="flex items-center p-3 text-gray-300 hover:bg-gray-800 hover:text-white">
            <AiOutlineNotification className="mr-3" />
            Announcements
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
