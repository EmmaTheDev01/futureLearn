import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation
import { FaHome, FaUsers, FaCalendarAlt, FaBook, FaUsersCog } from 'react-icons/fa'; // For sidebar icons
import { HiOutlineLogout, HiChevronDown } from 'react-icons/hi'; // Logout and Dropdown icons

const LecturerHomePage = () => {
    const [assignmentsDropdownOpen, setAssignmentsDropdownOpen] = useState(false);
    const [groupsDropdownOpen, setGroupsDropdownOpen] = useState(false);

    const toggleAssignmentsDropdown = () => {
        setAssignmentsDropdownOpen(!assignmentsDropdownOpen);
    };

    const toggleGroupsDropdown = () => {
        setGroupsDropdownOpen(!groupsDropdownOpen);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 text-gray-200">
                <div className="flex items-center justify-center py-6 bg-gray-900">
                    <h1 className="text-2xl font-semibold">Lecturer Dashboard</h1>
                </div>
                <nav className="mt-6">
                    <ul>
                        <li>
                            <Link to="/home" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700">
                                <FaHome className="mr-4" />
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/students" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700">
                                <FaUsers className="mr-4" />
                                Students
                            </Link>
                        </li>
                        <li className={`relative ${assignmentsDropdownOpen ? 'mb-16' : ''}`}>
                            <button
                                onClick={toggleAssignmentsDropdown}
                                className="flex items-center px-6 py-3 w-full text-gray-300 hover:bg-gray-700 focus:outline-none"
                            >
                                <FaCalendarAlt className="mr-4" />
                                Assignments
                                <HiChevronDown className="ml-auto" />
                            </button>
                            {assignmentsDropdownOpen && (
                                <div className="w-full bg-gray-800 text-gray-200 mt-2 rounded-md shadow-lg">
                                    <Link
                                        to="/all-assignments"
                                        className="block px-6 py-3 hover:bg-gray-700"
                                    >
                                        All Assignments
                                    </Link>
                                    <Link
                                        to="/new-assignment"
                                        className="block px-6 py-3 hover:bg-gray-700"
                                    >
                                        Create Assignment
                                    </Link>
                                </div>
                            )}
                        </li>
                        <li className={`relative ${groupsDropdownOpen ? 'mb-16' : ''}`}>
                            <button
                                onClick={toggleGroupsDropdown}
                                className="flex items-center px-6 py-3 w-full text-gray-300 hover:bg-gray-700 focus:outline-none"
                            >
                                <FaUsersCog className="mr-4" />
                                Groups
                                <HiChevronDown className="ml-auto" />
                            </button>
                            {groupsDropdownOpen && (
                                <div className="w-full bg-gray-800 text-gray-200 mt-2 rounded-md shadow-lg">
                                    <Link
                                        to="/all-groups"
                                        className="block px-6 py-3 hover:bg-gray-700"
                                    >
                                        All Groups
                                    </Link>
                                    <Link
                                        to="/create-group"
                                        className="block px-6 py-3 hover:bg-gray-700"
                                    >
                                        Create Group
                                    </Link>
                                </div>
                            )}
                        </li>
                        <li>
                            <Link to="/announcements" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700">
                                <FaBook className="mr-4" />
                                Announcements
                            </Link>
                        </li>
                    </ul>
                    <div className="absolute bottom-0 w-full px-6 py-3 bg-gray-900 text-gray-300">
                        <Link to="/logout" className="flex items-center">
                            <HiOutlineLogout className="mr-4" />
                            Logout
                        </Link>
                    </div>
                </nav>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1">
                <header className="bg-gray-900 text-gray-200 p-4 flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Dashboard</h2>
                    <div>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="px-4 py-2 rounded bg-gray-700 text-gray-200 focus:outline-none"
                        />
                    </div>
                </header>

                <main className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">Upcoming Classes</h3>
                            <p className="text-gray-600">No upcoming classes.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">Recent Assignments</h3>
                            <p className="text-gray-600">No recent assignments.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">Notifications</h3>
                            <p className="text-gray-600">No new notifications.</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default LecturerHomePage;
