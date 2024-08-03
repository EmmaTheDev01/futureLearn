import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns'; // You can use date-fns for date formatting
import { FaUsers } from 'react-icons/fa'; // Example icon from React Icons

const AllGroupsTable = () => {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await axios.get('/api/groups'); // Replace with your API endpoint
        setGroups(response.data);
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    };

    fetchGroups();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chief</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Members</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignments</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {groups.map((group) => (
            <tr key={group._id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center">
                <FaUsers className="h-6 w-6 mr-2" />
                {group.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{group.chief ? group.chief.name : '-'}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{group.members.length}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{group.assignments.length}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{group.message}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{format(new Date(group.createdAt), 'MMM dd, yyyy')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllGroupsTable;
