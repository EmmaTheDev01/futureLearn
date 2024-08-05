import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';

const AllAnnouncementTable = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/announcement'); // Replace with your API endpoint
        setAnnouncements(response.data);
      } catch (error) {
        console.error('Error fetching announcements:', error);
      }
    };

    fetchAnnouncements();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/announcement/${id}`); // Replace with your API endpoint
      setAnnouncements(announcements.filter(announcement => announcement._id !== id));
    } catch (error) {
      console.error('Error deleting announcement:', error);
    }
  };

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full divide-y divide-gray-700 bg-gray-900 text-gray-300">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Redirect</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-gray-800 divide-y divide-gray-700">
          {announcements.map((announcement) => {
          

            return (
              <tr key={announcement._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200">{announcement.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{announcement.desc}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{announcement.redirect}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                  <span
                    onClick={() => handleDelete(announcement._id)}
                    className="font-bold text-lg  text-red-500 rounded cursor-pointer hover:text-red-300"
                  >
                    <FaTrash/>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllAnnouncementTable;
