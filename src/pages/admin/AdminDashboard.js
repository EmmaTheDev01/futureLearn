import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import { Link } from 'react-router-dom'; // Use Link for navigation
import { FaHome, FaUsers, FaCalendarAlt, FaBook, FaUsersCog } from 'react-icons/fa'; // For sidebar icons
import { HiOutlineLogout } from 'react-icons/hi'; // Logout icon

const AdminDashboard = () => {
    const [assignmentCount, setAssignmentCount] = useState(0); // State to store assignment count
    const [announcementCount, setAnnouncementCount] = useState(0); // State to store announcement count

    useEffect(() => {
        // Get the token from localStorage
        const token = localStorage.getItem('token');

        // Fetch assignments from the API
        const fetchAssignments = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/v1/assignment', {
                    headers: {
                        Authorization: `Bearer ${token}` // Add the token to headers
                    }
                });
                setAssignmentCount(response.data.length); // Assuming the response is an array
            } catch (error) {
                console.error('Error fetching assignments:', error);
            }
        };

        // Fetch announcements from the API
        const fetchAnnouncements = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/v1/announcement', {
                    headers: {
                        Authorization: `Bearer ${token}` // Add the token to headers
                    }
                });
                setAnnouncementCount(response.data.length); // Assuming the response is an array
            } catch (error) {
                console.error('Error fetching announcements:', error);
            }
        };

        fetchAssignments();
        fetchAnnouncements();
    }, []); // Empty dependency array ensures this runs once when the component mounts

    return (
        <div className="flex h-screen bg-gray-900 text-gray-200">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800">
                <div className="flex items-center justify-center py-6 bg-gray-700">
                    <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
                </div>
                <nav className="mt-6">
                    <ul>
                        <li>
                            <Link to="/home" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-600">
                                <FaHome className="mr-4" />
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/all-users" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-600">
                                <FaUsers className="mr-4" />
                                Users
                            </Link>
                        </li>
                        <li>
                            <Link to="/all-assignments" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-600">
                                <FaCalendarAlt className="mr-4" />
                                All Assignments
                            </Link>
                        </li>
                        
                        <li>
                            <Link to="/all-groups" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-600">
                                <FaUsersCog className="mr-4" />
                                All Groups
                            </Link>
                        </li>
                        
                        <li>
                            <Link to="/create-announcement" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-600">
                                <FaBook className="mr-4" />
                                Announcements
                            </Link>
                        </li>
                    </ul>
                    <div className="absolute bottom-0 w-full px-6 py-3 bg-gray-700 text-gray-300">
                        <Link to="/logout" className="flex items-center">
                            <HiOutlineLogout className="mr-4" />
                            Logout
                        </Link>
                    </div>
                </nav>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1">
                <header className="bg-gray-800 text-gray-200 p-4 flex items-center justify-between">
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
                        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">Upcoming Classes</h3>
                            <p className="text-gray-400">No upcoming classes.</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">Recent Assignments</h3>
                            <p className="text-gray-400">You have {assignmentCount} assignments.</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">Notifications</h3>
                            <p className="text-gray-400">You have {announcementCount} notifications.</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;
