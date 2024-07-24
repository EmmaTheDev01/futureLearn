import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns'; // You can use date-fns for date formatting
import { HiOutlineSpeakerphone } from 'react-icons/hi'; // Example icon from React Icons

const AllAnnouncementTable = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get('/api/announcements'); // Replace with your API endpoint
        setAnnouncements(response.data);
      } catch (error) {
        console.error('Error fetching announcements:', error);
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Redirect</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Approved</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {announcements.map((announcement) => (
            <tr key={announcement._id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{announcement.title}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{announcement.desc}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{announcement.redirect}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{announcement.approved ? 'Yes' : 'No'}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{format(new Date(announcement.createdAt), 'MMM dd, yyyy')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllAnnouncementTable;
