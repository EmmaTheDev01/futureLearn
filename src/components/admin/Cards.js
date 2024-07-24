import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BsPeopleFill } from 'react-icons/bs'; // Example icon from React Icons
import { FaUserGraduate, FaChalkboardTeacher, FaClipboardList, FaRegNewspaper } from 'react-icons/fa'; // Different icons from React Icons
import './Cards.css'; // Assuming you have a CSS file for styling

const Cards = () => {
  const [studentCount, setStudentCount] = useState(0);
  const [lecturerCount, setLecturerCount] = useState(0);
  const [assignmentCount, setAssignmentCount] = useState(0);
  const [postCount, setPostCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentsResponse = await axios.get('/api/students/count');
        const lecturersResponse = await axios.get('/api/lecturers/count');
        const assignmentsResponse = await axios.get('/api/assignments/count');
        const postsResponse = await axios.get('/api/posts/count');

        setStudentCount(studentsResponse.data.count);
        setLecturerCount(lecturersResponse.data.count);
        setAssignmentCount(assignmentsResponse.data.count);
        setPostCount(postsResponse.data.count);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <div className="card bg-white shadow-lg rounded-lg p-6 flex items-center">
        <FaUserGraduate className="card-icon text-4xl text-blue-500 mr-4" />
        <div className="card-content">
          <h3 className="text-lg font-semibold">Students</h3>
          <p className="text-3xl font-bold">{studentCount}</p>
        </div>
      </div>
      <div className="card bg-white shadow-lg rounded-lg p-6 flex items-center">
        <FaChalkboardTeacher className="card-icon text-4xl text-blue-500 mr-4" />
        <div className="card-content">
          <h3 className="text-lg font-semibold">Lecturers</h3>
          <p className="text-3xl font-bold">{lecturerCount}</p>
        </div>
      </div>
      <div className="card bg-white shadow-lg rounded-lg p-6 flex items-center">
        <FaClipboardList className="card-icon text-4xl text-blue-500 mr-4" />
        <div className="card-content">
          <h3 className="text-lg font-semibold">Assignments</h3>
          <p className="text-3xl font-bold">{assignmentCount}</p>
        </div>
      </div>
      <div className="card bg-white shadow-lg rounded-lg p-6 flex items-center">
        <FaRegNewspaper className="card-icon text-4xl text-blue-500 mr-4" />
        <div className="card-content">
          <h3 className="text-lg font-semibold">Posts</h3>
          <p className="text-3xl font-bold">{postCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
