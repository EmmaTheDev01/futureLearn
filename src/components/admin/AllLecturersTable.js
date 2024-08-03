import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns'; // For date formatting
import { BsPerson } from 'react-icons/bs'; // Example icon from React Icons

const AllLecturersTable = () => {
  const [lecturers, setLecturers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/user', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          }
        });

        // Debug: Check the structure of the response
        console.log('API Response:', response.data);

        if (Array.isArray(response.data.data)) {
          // Filter users to get only those with role 'lecturer'
          const filteredLecturers = response.data.data.filter(user => user.role === 'lecturer');
          console.log('Filtered Lecturers:', filteredLecturers); // Debug: Check filtered results
          setLecturers(filteredLecturers);
        } else {
          console.error('Expected an array but got:', response.data);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="overflow-x-auto bg-gray-900 p-6 rounded-lg shadow-lg">
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Phone</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Department</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Joined At</th>
          </tr>
        </thead>
        <tbody className="bg-gray-800 divide-y divide-gray-700">
          {Array.isArray(lecturers) && lecturers.length > 0 ? (
            lecturers.map((lecturer) => (
              <tr key={lecturer._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200 flex items-center">
                  <BsPerson className="h-6 w-6 mr-2" />
                  {lecturer.firstname} {lecturer.lastname}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{lecturer.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{lecturer.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{lecturer.department}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{format(new Date(lecturer.createdAt), 'MMM dd, yyyy')}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="px-6 py-4 text-sm text-gray-400 text-center">No lecturers found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllLecturersTable;
