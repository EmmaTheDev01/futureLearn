import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import { Link } from 'react-router-dom'; // Use Link for navigation
import { FaHome, FaUsers, FaCalendarAlt, FaBook, FaUsersCog, FaBell } from 'react-icons/fa'; // For sidebar icons
import { HiOutlineLogout } from 'react-icons/hi'; // Logout icon

const AdminDashboard = () => {
    const [assignmentCount, setAssignmentCount] = useState(0); // State to store assignment count
    const [announcementCount, setAnnouncementCount] = useState(0); // State to store announcement count
    const [allUsers, setAllUsers] = useState([]); // State to store all users
    const [allAssignments, setAllAssignments] = useState([]); // State to store all assignments
    const [searchQuery, setSearchQuery] = useState(''); // State for search query
    const [filteredResults, setFilteredResults] = useState({ users: [], assignments: [] }); // State to store filtered results

    useEffect(() => {
        const token = localStorage.getItem('token');

        const fetchData = async () => {
            try {
                // Fetch assignments
                const assignmentsResponse = await axios.get('http://localhost:4000/api/v1/assignment', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                // Ensure the response is an array
                if (Array.isArray(assignmentsResponse.data)) {
                    setAssignmentCount(assignmentsResponse.data.length);
                    setAllAssignments(assignmentsResponse.data);
                } else {
                    console.error('Assignments response is not an array:', assignmentsResponse.data);
                }

                // Fetch announcements
                const announcementsResponse = await axios.get('http://localhost:4000/api/v1/announcement', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setAnnouncementCount(announcementsResponse.data.length);

                // Fetch users
                const usersResponse = await axios.get('http://localhost:4000/api/v1/user', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                // Ensure the response is an array
                if (Array.isArray(usersResponse.data.data)) {
                    setAllUsers(usersResponse.data.data);
                } else {
                    console.error('Users response is not an array:', usersResponse.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (!searchQuery.trim()) {
            setFilteredResults({ users: [], assignments: [] });
            return;
        }

        const queryLower = searchQuery.toLowerCase();
        const filteredUsers = allUsers.filter(user =>
            user.firstname.toLowerCase().includes(queryLower) ||
            user.lastname.toLowerCase().includes(queryLower) ||
            user.username.toLowerCase().includes(queryLower)
        );

        const filteredAssignments = allAssignments.filter(assignment =>
            assignment.title.toLowerCase().includes(queryLower)
        );

        setFilteredResults({
            users: filteredUsers,
            assignments: filteredAssignments
        });
    }, [searchQuery, allUsers, allAssignments]);

    return (
        <div className="flex h-screen overflow-hidden bg-gray-900 text-gray-200">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 overflow-auto">
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
                            <Link to="/all-lecturers" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-600">
                                <FaUsers className="mr-4" />
                                Lecturers
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
                            <Link to="/all-announcements" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-600">
                                <FaBell className="mr-4" />
                                All Announcements
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
            <div className="flex-1 overflow-y-auto">
                <header className="bg-gray-800 text-gray-200 p-4 flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Dashboard</h2>
                    <div>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
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

                    {/* Search Results */}
                    <section className="mt-6">
                        <h3 className="text-xl font-semibold mb-4">Search Results</h3>
                        <div>
                            {searchQuery && (
                                <>
                                    <div>
                                        <h4 className="text-lg font-semibold">Users</h4>
                                        {filteredResults.users && filteredResults.users.length > 0 ? (
                                            <ul>
                                                {filteredResults.users.map((user, index) => (
                                                    <li key={index} className="bg-gray-800 p-4 rounded-lg mb-4 text-left">
                                                        <p className="text-gray-200"><strong>First Name:</strong> {user.firstname}</p>
                                                        <p className="text-gray-200"><strong>Last Name:</strong> {user.lastname}</p>
                                                        <p className="text-gray-200"><strong>Email:</strong> {user.email}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-gray-400">No users found.</p>
                                        )}
                                    </div>
                                    <div className="mt-6 mb-10">
                                        <h4 className="text-lg font-semibold">Assignments</h4>
                                        {filteredResults.assignments && filteredResults.assignments.length > 0 ? (
                                            <ul>
                                                {filteredResults.assignments.map((assignment, index) => (
                                                    <li key={index} className="bg-gray-800 p-4 rounded-lg mb-4 text-left">
                                                        <p className="text-gray-200"><strong>Title:</strong> {assignment.title}</p>
                                                        <p className="text-gray-200"><strong>Description:</strong> {assignment.description}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-gray-400">No assignments found.</p>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;
