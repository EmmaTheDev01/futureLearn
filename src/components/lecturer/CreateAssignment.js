import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateAssignment = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    department: '',
    lecturerId: '', // This will be set to the logged-in user's ID
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const departments = [
    'Computer Science',
    'Surveying',
    'Civil Engineering',
    'Architecture',
    'Business',
    'Law',
    'All',
  ];

  useEffect(() => {
    // Retrieve the logged-in user's ID from localStorage
    const loggedInUserId = localStorage.getItem('loggedInUserId');
    if (loggedInUserId) {
      setFormData((prevState) => ({
        ...prevState,
        lecturerId: loggedInUserId,
      }));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    // Retrieve the token from localStorage
    const token = localStorage.getItem('token');

    try {
      const response = await axios.post(
        'http://localhost:4000/api/v1/assignment/create',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add the token to the headers
          },
        }
      );
      setSuccessMessage('Assignment created successfully!');
      console.log('Assignment created:', response.data);
      // Optionally reset form fields after successful submission
      setFormData({
        title: '',
        description: '',
        department: '',
        lecturerId: localStorage.getItem('loggedInUserId') || '',
      });
    } catch (error) {
      setError('Failed to create assignment. Please check your inputs and try again.');
      console.error('Error creating assignment:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-gray-800 shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-100">Create Assignment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-300">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-gray-200 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-300">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-gray-200 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="department" className="block text-sm font-medium text-gray-300">
            Department
          </label>
          <select
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-gray-200 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          >
            <option value="" disabled>Select a department</option>
            {departments.map((dept, index) => (
              <option key={index} value={dept.toLowerCase()}>
                {dept}
              </option>
            ))}
          </select>
        </div>
        {/* Removed lecturerId input field as it is auto-filled */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {successMessage && <p className="text-green-500 text-sm mb-4">{successMessage}</p>}
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Create Assignment
        </button>
      </form>
      <div className="mt-4 text-sm text-gray-400">
        <p>Fill out the form below to create a new assignment.</p>
        <p>Make sure to provide accurate details.</p>
      </div>
    </div>
  );
};

export default CreateAssignment;
