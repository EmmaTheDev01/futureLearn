import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllStudentsTable = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve the token from localStorage
        const response = await axios.get('http://localhost:4000/api/v1/user/all-students', {
          headers: {
            Authorization: `Bearer ${token}`, // Set the Authorization header
          },
        });
        setStudents(response.data.data); // Access data field in the response
      } catch (error) {
        setError('Failed to fetch students'); // Handle error
        console.error('Error fetching students:', error);
      } finally {
        setLoading(false); // Set loading to false after data fetching
      }
    };

    fetchStudents();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-full bg-gray-900 text-gray-200">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-full bg-gray-900 text-gray-200">Error: {error}</div>;

  return (
    <div className="flex flex-col h-full p-6 bg-gray-900 text-gray-200">
      <h2 className="text-2xl font-semibold mb-4">All Students</h2>
      <div className="flex-1 overflow-x-auto">
        <table className="min-w-full bg-gray-800 border border-gray-700 rounded-md">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium">ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Enrollment Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            {students.map(student => (
              <tr key={student._id} className="hover:bg-gray-700">
                <td className="px-6 py-4 text-sm">{student._id}</td>
                <td className="px-6 py-4 text-sm">{student.firstname} {student.lastname}</td>
                <td className="px-6 py-4 text-sm">{student.email}</td>
                <td className="px-6 py-4 text-sm">{new Date(student.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllStudentsTable;
