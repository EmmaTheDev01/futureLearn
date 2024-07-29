import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllAssignmentTable = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve the token from localStorage
        const response = await axios.get('http://localhost:4000/api/v1/assignment', {
          headers: {
            Authorization: `Bearer ${token}`, // Set the Authorization header
          },
        });
        setAssignments(response.data); // Set the assignments data
      } catch (error) {
        setError('Failed to fetch assignments'); // Handle error
        console.error('Error fetching assignments:', error);
      } finally {
        setLoading(false); // Set loading to false after data fetching
      }
    };

    fetchAssignments();
  }, []);

  if (loading) return <div className="p-6 bg-gray-900 text-gray-200 min-h-screen">Loading...</div>;
  if (error) return <div className="p-6 bg-gray-900 text-gray-200 min-h-screen">Error: {error}</div>;

  return (
    <div className="p-6 bg-gray-900 text-gray-200 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">All Assignments</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 border border-gray-700 rounded-md">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-200">ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-200">Title</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-200">Description</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-200">Due Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            {assignments.map(assignment => (
              <tr key={assignment.id} className="hover:bg-gray-700">
                <td className="px-6 py-4 text-sm font-medium">{assignment.id}</td>
                <td className="px-6 py-4 text-sm font-medium">{assignment.title}</td>
                <td className="px-6 py-4 text-sm">{assignment.description}</td>
                <td className="px-6 py-4 text-sm">{assignment.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllAssignmentTable;
