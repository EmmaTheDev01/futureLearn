import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllUserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve the token from localStorage
        const response = await axios.get('http://localhost:4000/api/v1/user', {
          headers: {
            Authorization: `Bearer ${token}`, // Set the Authorization header
          },
        });
        setUsers(response.data); // Set the users data
      } catch (error) {
        setError('Failed to fetch users'); // Handle error
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false); // Set loading to false after data fetching
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div className="p-6 bg-gray-900 text-gray-200 min-h-screen">Loading...</div>;
  if (error) return <div className="p-6 bg-gray-900 text-gray-200 min-h-screen">Error: {error}</div>;

  return (
    <div className="p-6 bg-gray-900 text-gray-200 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">All Users</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 border border-gray-700 rounded-md">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-200">ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-200">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-200">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-200">Role</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            {users.map(user => (
              <tr key={user.id} className="hover:bg-gray-700">
                <td className="px-6 py-4 text-sm font-medium">{user.id}</td>
                <td className="px-6 py-4 text-sm font-medium">{user.name}</td>
                <td className="px-6 py-4 text-sm">{user.email}</td>
                <td className="px-6 py-4 text-sm">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUserTable;
