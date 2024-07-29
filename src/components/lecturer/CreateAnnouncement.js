import React, { useState } from 'react';
import axios from 'axios';

const CreateAnnouncement = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [redirect, setRedirect] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      await axios.post('http://localhost:4000/api/v1/announcement/create', 
        { title, description, imageUrl, redirect },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess('Announcement created successfully!');
      setTitle('');
      setDescription('');
      setImageUrl('');
      setRedirect('');
    } catch (error) {
      setError('Failed to create announcement');
      console.error('Error creating announcement:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-gray-200 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Create Announcement</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-600"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-1">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-600"
            required
          />
        </div>
        <div>
          <label htmlFor="imageUrl" className="block text-sm font-medium mb-1">Image URL</label>
          <input
            id="imageUrl"
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
        </div>
        <div>
          <label htmlFor="redirect" className="block text-sm font-medium mb-1">Redirect URL</label>
          <input
            id="redirect"
            type="text"
            value={redirect}
            onChange={(e) => setRedirect(e.target.value)}
            className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-gray-200 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Create Announcement'}
          </button>
          {success && <p className="text-green-400">{success}</p>}
          {error && <p className="text-red-400">{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default CreateAnnouncement;
