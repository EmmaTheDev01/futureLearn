import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllGroupsTable = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve the token from localStorage
        const response = await axios.get('http://localhost:4000/api/v1/group', {
          headers: {
            Authorization: `Bearer ${token}`, // Set the Authorization header
          },
        });
        setGroups(response.data); // Set the groups data
      } catch (error) {
        setError('Failed to fetch groups'); // Handle error
        console.error('Error fetching groups:', error);
      } finally {
        setLoading(false); // Set loading to false after data fetching
      }
    };

    fetchGroups();
  }, []);

  const handleDelete = async (groupId) => {
    try {
      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      await axios.delete(`http://localhost:4000/api/v1/group/${groupId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Set the Authorization header
        },
      });
      // Remove the deleted group from the state
      setGroups(groups.filter(group => group._id !== groupId));
    } catch (error) {
      setError('Failed to delete group'); // Handle error
      console.error('Error deleting group:', error);
    }
  };

  if (loading) return <div className="p-6 bg-gray-900 text-gray-200 min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="p-6 bg-gray-900 text-gray-200 min-h-screen flex items-center justify-center">Error: {error}</div>;

  return (
    <div className="p-6 bg-gray-900 text-gray-200 min-h-screen flex flex-col">
      <h2 className="text-2xl font-semibold mb-4">All Groups</h2>
      <div className="flex-1 overflow-x-auto">
        <table className="min-w-full bg-gray-800 border border-gray-700 rounded-md">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-200">ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-200">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-200">Members</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-200">Created Date</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            {groups.map(group => (
              <tr key={group._id} className="hover:bg-gray-700">
                <td className="px-6 text-start py-4 text-sm font-medium">{group._id}</td>
                <td className="px-6 text-start py-4 text-sm font-medium">{group.name}</td>
                <td className="px-6 text-start py-4 text-sm">{group.members.length}</td>
                <td className="px-6 text-start py-4 text-sm">{new Date(group.updatedAt).toLocaleDateString()}</td>
                <td className="px-6 text-start py-4 text-sm">
                  <button
                    onClick={() => handleDelete(group._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllGroupsTable;
