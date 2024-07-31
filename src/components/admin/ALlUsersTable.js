import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns'; // For date formatting
import { BsPerson } from 'react-icons/bs'; // Example icon from React Icons

const AllUsersTable = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/user', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          }
        });

        if (Array.isArray(response.data.data)) {
          setStudents(response.data.data);
        } else {
          console.error('Expected an array but got:', response.data);
        }
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

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
          </tr>
        </thead>
        <tbody className="bg-gray-800 divide-y divide-gray-700">
          {Array.isArray(students) && students.map((student) => (
            <tr key={student._id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200 flex items-center">
                <BsPerson className="h-6 w-6 mr-2" />
                {student.firstname} {student.lastname}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{student.regNo}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{student.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{student.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{student.department}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{format(new Date(student.createdAt), 'MMM dd, yyyy')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsersTable;
