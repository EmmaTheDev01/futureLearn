import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns'; // You can use date-fns for date formatting
import { ChevronRightIcon } from '@heroicons/react/solid'; // Example icon from Heroicons

const AssignmentsTable = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await axios.get('/api/assignments'); // Replace with your API endpoint
        setAssignments(response.data);
      } catch (error) {
        console.error('Error fetching assignments:', error);
      }
    };

    fetchAssignments();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lecturer</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {assignments.map((assignment) => (
            <tr key={assignment._id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{assignment.title}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{assignment.description}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{assignment.department}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{assignment.lecturer.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{format(new Date(assignment.createdAt), 'MMM dd, yyyy')}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href={`/assignments/${assignment._id}`} className="text-blue-600 hover:text-blue-900">
                  <ChevronRightIcon className="h-5 w-5 inline-block" aria-hidden="true" />
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignmentsTable;
