import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaHome, FaUsers, FaCalendarAlt, FaBook, FaUsersCog } from 'react-icons/fa';
import { HiOutlineLogout, HiChevronDown } from 'react-icons/hi';

const LecturerHomePage = () => {
    const [assignmentsDropdownOpen, setAssignmentsDropdownOpen] = useState(false);
    const [groupsDropdownOpen, setGroupsDropdownOpen] = useState(false);
    const [assignmentCount, setAssignmentCount] = useState(0);
    const [announcementCount, setAnnouncementCount] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [allUsers, setAllUsers] = useState([]);
    const [allAssignments, setAllAssignments] = useState([]);
    const [allAnnouncements, setAllAnnouncements] = useState([]);
    const [filteredResults, setFilteredResults] = useState({
        users: [],
        assignments: [],
        announcements: []
    });

    const toggleAssignmentsDropdown = () => {
        setAssignmentsDropdownOpen(!assignmentsDropdownOpen);
    };

    const toggleGroupsDropdown = () => {
        setGroupsDropdownOpen(!groupsDropdownOpen);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');

        const fetchData = async () => {
            try {
                // Fetch assignments
                const assignmentsResponse = await axios.get('http://localhost:4000/api/v1/assignment', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setAssignmentCount(assignmentsResponse.data.length);
                setAllAssignments(assignmentsResponse.data);

                // Fetch announcements
                const announcementsResponse = await axios.get('http://localhost:4000/api/v1/announcement', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setAnnouncementCount(announcementsResponse.data.length);
                setAllAnnouncements(announcementsResponse.data);

                // Fetch users
                const usersResponse = await axios.get('http://localhost:4000/api/v1/user', {
                    headers: { Authorization: `Bearer ${token}` }
                });

                // Adjust this based on the actual API response structure
                if (Array.isArray(usersResponse.data.data)) {
                    setAllUsers(usersResponse.data.data);
                } else if (Array.isArray(usersResponse.data)) {
                    setAllUsers(usersResponse.data);
                } else {
                    console.error('Unexpected data format for users:', usersResponse.data);
                    setAllUsers([]);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Error fetching data');
            }
        };

        fetchData();
    }, []);

    const handleSearchQueryChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (!query.trim()) {
            setFilteredResults({
                users: [],
                assignments: [],
                announcements: []
            });
            return;
        }

        setLoading(true);
        try {
            // Ensure all data arrays are valid
            if (!Array.isArray(allUsers) || !Array.isArray(allAssignments) || !Array.isArray(allAnnouncements)) {
                throw new Error('Data arrays are not valid');
            }

            // Filter users locally based on the search query
            const filteredUsers = allUsers.filter(user =>
                (user.firstname?.toLowerCase() || '').includes(query.toLowerCase()) ||
                (user.lastname?.toLowerCase() || '').includes(query.toLowerCase()) ||
                (user.username?.toLowerCase() || '').includes(query.toLowerCase()) ||
                (user.regNo?.toLowerCase() || '').includes(query.toLowerCase())
            );

            // Filter assignments locally based on the search query
            const filteredAssignments = allAssignments.filter(assignment =>
                (assignment.title?.toLowerCase() || '').includes(query.toLowerCase())
            );

            // Filter announcements locally based on the search query
            const filteredAnnouncements = allAnnouncements.filter(announcement =>
                (announcement.title?.toLowerCase() || '').includes(query.toLowerCase()) ||
                (announcement.description?.toLowerCase() || '').includes(query.toLowerCase())
            );

            setFilteredResults({
                users: filteredUsers,
                assignments: filteredAssignments,
                announcements: filteredAnnouncements
            });
            setError(null);
        } catch (error) {
            setError('Error processing search');
            console.error('Error searching data:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex h-screen bg-gray-900 text-gray-200 overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 overflow-auto">
                <div className="flex items-center justify-center py-6 bg-gray-700">
                    <h1 className="text-2xl font-semibold">Lecturer Dashboard</h1>
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
                            <Link to="/students" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-600">
                                <FaUsers className="mr-4" />
                                Students
                            </Link>
                        </li>
                        <li className={`relative ${assignmentsDropdownOpen ? 'mb-16' : ''}`}>
                            <button
                                onClick={toggleAssignmentsDropdown}
                                className="flex items-center px-6 py-3 w-full text-gray-300 hover:bg-gray-600 focus:outline-none"
                            >
                                <FaCalendarAlt className="mr-4" />
                                Assignments
                                <HiChevronDown className="ml-auto" />
                            </button>
                            {assignmentsDropdownOpen && (
                                <div className="w-full bg-gray-700 mt-2 rounded-md shadow-lg">
                                    <Link
                                        to="/all-assignments"
                                        className="block px-6 py-3 hover:bg-gray-600"
                                    >
                                        All Assignments
                                    </Link>
                                    <Link
                                        to="/new-assignment"
                                        className="block px-6 py-3 hover:bg-gray-600"
                                    >
                                        Create Assignment
                                    </Link>
                                </div>
                            )}
                        </li>
                        <li className={`relative ${groupsDropdownOpen ? 'mb-16' : ''}`}>
                            <button
                                onClick={toggleGroupsDropdown}
                                className="flex items-center px-6 py-3 w-full text-gray-300 hover:bg-gray-600 focus:outline-none"
                            >
                                <FaUsersCog className="mr-4" />
                                Groups
                                <HiChevronDown className="ml-auto" />
                            </button>
                            {groupsDropdownOpen && (
                                <div className="w-full bg-gray-700 mt-2 rounded-md shadow-lg">
                                    <Link
                                        to="/all-groups"
                                        className="block px-6 py-3 hover:bg-gray-600"
                                    >
                                        All Groups
                                    </Link>
                                    <Link
                                        to="/create-group"
                                        className="block px-6 py-3 hover:bg-gray-600"
                                    >
                                        Create Group
                                    </Link>
                                </div>
                            )}
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
            <div className="flex-1 overflow-auto hide-scrollbar">
                <header className="bg-gray-800 text-gray-200 p-4 flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Dashboard</h2>
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearchQueryChange}
                            className="px-4 py-2 rounded bg-gray-700 text-gray-200 focus:outline-none"
                        />
                        <button
                            type="button"
                            className="ml-2 px-4 py-2 bg-gray-600 text-gray-200 rounded hover:bg-gray-500 focus:outline-none"
                        >
                            Search
                        </button>
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
                    <section className="mt-6 mb-20">
                        <h3 className="text-xl font-semibold mb-4">Search Results</h3>
                        {loading && <p>Loading...</p>}
                        {error && <p className="text-red-500">{error}</p>}
                        {searchQuery.trim() && (
                            <>
                                {/* Users */}
                                {filteredResults.users.length > 0 && (
                                    <div className="mb-6">
                                        <h4 className="text-lg font-semibold mb-2">Users</h4>
                                        <ul>
                                            {filteredResults.users.map((user, index) => (
                                                <li key={index} className="bg-gray-800 p-4 rounded-lg mb-4 text-left">
                                                    <p className="text-gray-200"><strong>First Name:</strong> {user.firstname}</p>
                                                    <p className="text-gray-200"><strong>Last Name:</strong> {user.lastname}</p>
                                                    <p className="text-gray-200"><strong>Email:</strong> {user.email}</p>
                                                    <p className="text-gray-200"><strong>Phone:</strong> {user.phone}</p>
                                                    <p className="text-gray-200"><strong>Reg No:</strong> {user.regNo}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Assignments */}
                                {filteredResults.assignments.length > 0 && (
                                    <div className="mb-6">
                                        <h4 className="text-lg font-semibold mb-2">Assignments</h4>
                                        <ul>
                                            {filteredResults.assignments.map((assignment, index) => (
                                                <li key={index} className="bg-gray-800 p-4 rounded-lg mb-4 text-left">
                                                    <p className="text-gray-200"><strong>Title:</strong> {assignment.title}</p>
                                                    <p className="text-gray-200"><strong>Description:</strong> {assignment.description}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Announcements */}
                                {filteredResults.announcements.length > 0 && (
                                    <div className="mb-6">
                                        <h4 className="text-lg font-semibold mb-2">Announcements</h4>
                                        <ul>
                                            {filteredResults.announcements.map((announcement, index) => (
                                                <li key={index} className="bg-gray-800 p-4 rounded-lg mb-4 text-left">
                                                    <p className="text-gray-200"><strong>Title:</strong> {announcement.title}</p>
                                                    <p className="text-gray-200"><strong>Description:</strong> {announcement.desc}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* No Results */}
                                {filteredResults.users.length === 0 && filteredResults.assignments.length === 0 && filteredResults.announcements.length === 0 && (
                                    <p className="text-gray-400">No results found.</p>
                                )}
                            </>
                        )}
                    </section>
                </main>
            </div>
        </div>
    );
};

export default LecturerHomePage;
