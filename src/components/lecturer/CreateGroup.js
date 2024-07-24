import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateGroup = () => {
  const [formData, setFormData] = useState({
    name: '',
    chiefId: '', // Assuming chiefId is selected separately
    memberIds: [], // Array to store selected member IDs
    message: '',
  });

  const [students, setStudents] = useState([]);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/users/students');
        const fetchedStudents = response.data; // Assuming response.data is an array of student objects
        
        // Assuming chiefId is already set in formData.chiefId
        const chief = fetchedStudents.find(student => student._id === formData.chiefId);
        
        // Move chief to the front of the students list
        if (chief) {
          const chiefIndex = fetchedStudents.indexOf(chief);
          fetchedStudents.splice(chiefIndex, 1); // Remove chief from current position
          fetchedStudents.unshift(chief); // Add chief at the beginning of the array
        }

        setStudents(fetchedStudents);
      } catch (error) {
        console.error('Error fetching students:', error);
        setError('Failed to fetch students');
      }
    };

    fetchStudents();
  }, [formData.chiefId]); // Trigger fetchStudents whenever chiefId changes

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMemberSelect = (e) => {
    const memberId = e.target.value;
    if (!formData.memberIds.includes(memberId)) {
      setFormData({ ...formData, memberIds: [...formData.memberIds, memberId] });
    } else {
      setFormData({
        ...formData,
        memberIds: formData.memberIds.filter((id) => id !== memberId),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    try {
      const response = await axios.post('http://localhost:4000/api/v1/groups', formData);
      setSuccessMessage('Group created successfully!');
      console.log('Group created:', response.data);
      // Optionally reset form fields after successful submission
      setFormData({
        name: '',
        chiefId: '',
        memberIds: [],
        message: '',
      });
    } catch (error) {
      setError('Failed to create group. Please check your inputs and try again.');
      console.error('Error creating group:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Create Group</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Group Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="chiefId" className="block text-sm font-medium text-gray-700">
            Chief ID
          </label>
          <input
            type="text"
            id="chiefId"
            name="chiefId"
            value={formData.chiefId}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="memberIds" className="block text-sm font-medium text-gray-700">
            Select Members (Select 7 members)
          </label>
          <select
            id="memberIds"
            name="memberIds"
            multiple
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={handleMemberSelect}
            value={formData.memberIds}
            required
          >
            {students.map((student) => (
              <option key={student._id} value={student._id}>
                {student.firstname} {student.lastname}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Group Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {successMessage && <p className="text-green-500 text-sm mb-4">{successMessage}</p>}
        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Create Group
        </button>
      </form>
      <div className="mt-4 text-sm text-gray-600">
        <p>Select 7 members from the list to create a new group.</p>
        <p>Make sure to provide accurate details including the chief's ID and a group message.</p>
      </div>
    </div>
  );
};

export default CreateGroup;
