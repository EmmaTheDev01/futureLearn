import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns'; // For date formatting
import { BsPerson } from 'react-icons/bs'; // Example icon from React Icons
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles
import { FaTrash } from 'react-icons/fa';

const AllUsersTable = () => {
  const [users, setUsers] = useState([]);
  const [roleOptions] = useState(['admin', 'lecturer', 'student']); // Default roles

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/user', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          }
        });

        if (Array.isArray(response.data.data)) {
          setUsers(response.data.data);
        } else {
          console.error('Expected an array but got:', response.data);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleRoleChange = async (userId, newRole) => {
    try {
      await axios.put(`http://localhost:4000/api/v1/user/${userId}`, { role: newRole }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      });
      // Update the local state to reflect the change
      setUsers(users.map(user =>
        user._id === userId ? { ...user, role: newRole } : user
      ));
      toast.success('User role updated successfully!');
    } catch (error) {
      console.error('Error updating role:', error);
      toast.error('Failed to update user role.');
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      });
      // Remove the deleted user from the local state
      setUsers(users.filter(user => user._id !== userId));
      toast.success('User deleted successfully!');
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('Failed to delete user.');
    }
  };

  return (
    <div className="overflow-x-auto bg-gray-900 p-6 rounded-lg shadow-lg">
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Registration No</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Phone</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Department</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Joined At</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Role</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-gray-800 divide-y divide-gray-700">
          {Array.isArray(users) && users.map((user) => (
            <tr key={user._id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200 flex items-center">
                <BsPerson className="h-6 w-6 mr-2" />
                {user.firstname} {user.lastname}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{user.regNo}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{user.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{user.department}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{format(new Date(user.createdAt), 'MMM dd, yyyy')}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                <select
                  value={user.role}
                  onChange={(e) => handleRoleChange(user._id, e.target.value)}
                  className="bg-gray-700 text-gray-400 border border-gray-600 rounded-md py-1 px-2"
                >
                  {roleOptions.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-400">
                <button
                  onClick={() => handleDelete(user._id)}
                  className="text-red-600 hover:text-red-400"
                >
                  <FaTrash/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default AllUsersTable;
