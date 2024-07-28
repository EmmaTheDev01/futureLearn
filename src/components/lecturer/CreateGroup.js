import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FixedSizeList as List } from 'react-window';

const CreateGroup = () => {
  const [students, setStudents] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [chiefId, setChiefId] = useState(null); // Track chiefId separately
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/user', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          params: {
            role: 'student', // Add query parameter to filter by role
          },
        });
        const fetchedStudents = response.data.data;
        setStudents(fetchedStudents);
      } catch (error) {
        console.error('Error fetching students:', error);
        setError('Failed to fetch students');
      }
    };

    fetchStudents();
  }, []); // Empty dependency array ensures useEffect runs once on component mount

  const handleCheckboxChange = (studentId) => {
    const currentIndex = selectedMembers.indexOf(studentId);
    const newChecked = [...selectedMembers];

    if (currentIndex === -1) {
      newChecked.push(studentId);
      if (chiefId === null) {
        setChiefId(studentId); // Set the first clicked user as chiefId
      }
    } else {
      newChecked.splice(currentIndex, 1);
      if (chiefId === studentId) {
        setChiefId(null); // Unset chiefId if unchecked
      }
    }

    setSelectedMembers(newChecked);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      chiefId: chiefId, // Include chiefId in formData
      memberIds: selectedMembers,
      message: e.target.message.value,
    };

    try {
      const response = await axios.post('http://localhost:4000/api/v1/group/create', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      setSuccessMessage('Group created successfully!');
      console.log('Group created:', response.data.data);

      e.target.reset();
      setSelectedMembers([]);
      setChiefId(null); // Reset chiefId after successful creation
    } catch (error) {
      setError('Failed to create group. Please check your inputs and try again.');
      console.error('Error creating group:', error);
    }
  };

  // Render individual student item
  const renderStudentItem = ({ index, style }) => {
    const student = students[index];
    return (
      <div key={student._id} style={style} className="flex items-center">
        <input
          type="checkbox"
          id={student._id}
          name={student._id}
          value={student._id}
          checked={selectedMembers.includes(student._id)}
          onChange={() => handleCheckboxChange(student._id)}
          className="mr-2"
        />
        <label className="text-gray-200" htmlFor={student._id}>
          {`${student.firstname} ${student.lastname}`}
        </label>
      </div>
    );
  };

  return (
    <div className="max-w-4xl h-[80vh] mx-auto mt-8 p-6 bg-gray-800 shadow-md rounded-md text-white">
      <h2 className="text-2xl font-semibold mb-4">Create Group</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Group Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter group name"
            className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-900 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-2">Select Members</label>
          <div className="h-40 overflow-y-auto">
            <List
              height={400} // Specify height for the list container
              itemCount={students.length}
              itemSize={50} // Set the height of each item
              width="100%"
            >
              {renderStudentItem}
            </List>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">
            Group Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter group message"
            rows={4}
            className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-900 text-white"
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {successMessage && <p className="text-green-500 text-sm mb-4">{successMessage}</p>}
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Create Group
        </button>
      </form>
      <div className="mt-4 text-sm text-gray-300">
        <p>Select members to include in the group.</p>
        <p>Make sure to provide accurate details including a group name and message.</p>
      </div>
    </div>
  );
};

export default CreateGroup;
