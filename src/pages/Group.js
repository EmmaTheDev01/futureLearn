import React, { useContext, useEffect, useState } from "react";
import TopNav from "../components/TopNav";
import FrontpageLeft from "../components/FrontPageLeft";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'; // Import the Quill CSS
import './quill-dark.css'; // Import your custom dark mode CSS for Quill

const Group = () => {
  const { isLoggedIn, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const [groupData, setGroupData] = useState(null);
  const [assignments, setAssignments] = useState([]);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [discussion, setDiscussion] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, loading, navigate]);

  useEffect(() => {
    const fetchGroupData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/group/my-group", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (Array.isArray(response.data) && response.data.length > 0) {
          setGroupData(response.data[0]); // Use the first item if it’s an array
        } else {
          setError("Invalid group data format");
        }
        console.log("Fetched group data:", response.data); // Debug log
      } catch (error) {
        setError("Failed to fetch group data");
        console.error("Failed to fetch group data", error);
      }
    };

    fetchGroupData();
  }, []);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/assignment", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setAssignments(response.data);
      } catch (error) {
        setError("Failed to fetch assignments");
        console.error("Failed to fetch assignments", error);
      }
    };

    fetchAssignments();
  }, []);

  const handleAssignmentSelect = (assignment) => {
    setSelectedAssignment(assignment);
  };

  const handleDiscussionChange = (value) => {
    setDiscussion(value);
  };

  const handleSubmitDiscussion = async (event) => {
    event.preventDefault();
    if (!selectedAssignment || !groupData || !groupData._id) {
      setError("No assignment or group data available");
      console.log("Selected assignment or group data is missing", { selectedAssignment, groupData }); // Debug log
      return;
    }

    try {
      const answerData = {
        assignmentId: selectedAssignment._id,
        answers: discussion,
      };

      await axios.put(`http://localhost:4000/api/v1/group/${groupData._id}/submit-answers`, answerData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setDiscussion("");
      setSelectedAssignment(null);
      setSuccess("Assignment answers submitted successfully!");
    } catch (error) {
      setError("Failed to submit assignment answers");
      console.error("Failed to submit assignment answers", error.response?.data?.error || error);
    }
  };

  const handleAddGroupToAssignment = async () => {
    if (!selectedAssignment || !groupData?._id) {
      setError("No assignment or group data available");
      console.log("Selected assignment or group data is missing", { selectedAssignment, groupData }); // Debug log
      return;
    }

    try {
      await axios.post(`http://localhost:4000/api/v1/assignment/${selectedAssignment._id}/add-group`, {
        groupId: groupData._id
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      setSuccess("Group added to assignment successfully!");
      setSelectedAssignment(null);
    } catch (error) {
      setError("Failed to add group to assignment");
      console.error("Failed to add group to assignment", error.response?.data?.error || error);
    }
  };

  if (loading || !groupData) {
    return (
      <div className="flex h-screen bg-slate-700 items-center justify-center">
        <p className="text-gray-300">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen bg-slate-700 items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (success) {
    return (
      <div className="flex h-screen bg-slate-700 items-center justify-center">
        <p className="text-green-500">{success}</p>
      </div>
    );
  }

  const { name, chief, members = [], answers = [] } = groupData;
  const chiefName = members.find(member => member._id === chief);

  const memberList = members.map(member => (
    <li key={member._id} className="flex items-center space-x-2 py-2">
      <span className="text-gray-300">{`${member.firstname} ${member.lastname}`}</span>
      <span className="w-4 h-4">
        {chief === member._id && <span className="w-2 h-2 bg-green-500 rounded-full text-sm text-white px-2">Admin</span>}
      </span>
    </li>
  ));

  const discussionPosts = answers.map(item => {
    const member = members.find(member => member._id === item.user); // Ensure 'user' field is available in 'answers'
    const memberName = member ? `${member.firstname} ${member.lastname}` : 'Unknown User';

    return (
      <div key={item._id} className="bg-gray-800 p-4 rounded-lg mb-4 shadow-md">
        <div className="mb-2">
          <h4 className="text-lg text-start font-semibold text-gray-100">{memberName}</h4>
        </div>
        <p className="text-gray-300 mb-2 text-start" dangerouslySetInnerHTML={{ __html: item.answer }}></p>
        <div className="flex space-x-4 text-blue-400">
          <button className="hover:text-blue-500">Reply</button>
          <button className="hover:text-blue-500">Grade</button>
        </div>
      </div>
    );
  });

  return (
    <div className="bg-slate-900 min-h-screen">
      <TopNav />
      <div className="container mx-auto px-4 py-8 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 bg-slate-800 p-4 rounded-lg shadow-md">
            <FrontpageLeft />
          </div>
          <div className="lg:col-span-2 bg-slate-800 p-6 rounded-lg shadow-md">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-100 mb-4">Group Assignment</h3>
              {selectedAssignment && (
                <div className="bg-slate-700 p-4 rounded-lg text-gray-300">
                  <h4 className="text-xl font-semibold">{selectedAssignment.title}</h4>
                  <p>{selectedAssignment.description}</p>
                  <p className="text-green-400">Department: {selectedAssignment.department}</p>
                  <button
                    onClick={handleAddGroupToAssignment}
                    className="mt-4 py-2 px-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-200 ease-in-out"
                  >
                    Add Group to Assignment
                  </button>
                </div>
              )}
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-100 mb-4">Assignments</h3>
              <div className="bg-slate-700 p-4 rounded-lg text-gray-300">
                {assignments.length > 0 ? (
                  assignments.map((assignment) => (
                    <div
                      key={assignment._id}
                      className={`mb-4 p-4 bg-gray-800 rounded-lg shadow-md cursor-pointer ${selectedAssignment?._id === assignment._id ? "border-2 border-blue-500" : ""}`}
                      onClick={() => handleAssignmentSelect(assignment)}
                    >
                      <h4 className="text-xl font-semibold text-gray-100">{assignment.title}</h4>
                      <p className="text-gray-300 mb-2">{assignment.description}</p>
                      <p className="text-green-400">Department: {assignment.department}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-300">No assignments found.</p>
                )}
              </div>
            </div>
            {selectedAssignment && (
              <div className="bg-slate-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-100 mb-4">Assignment Discussion Form</h3>
                <p className="text-gray-300 mb-4">
                  Below is the textfield where you have to input the answer to the
                  selected assignment. Once you’re done, click the submit button.
                </p>
                <form onSubmit={handleSubmitDiscussion} className="mb-6">
                  <ReactQuill
                    value={discussion}
                    onChange={handleDiscussionChange}
                    className="bg-slate-800 text-white"
                  />
                  <button
                    type="submit"
                    className="mt-4 py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200 ease-in-out"
                  >
                    Submit
                  </button>
                </form>
                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-4">Discussions</h3>
                  {discussionPosts.length > 0 ? (
                    <div>
                      {discussionPosts}
                    </div>
                  ) : (
                    <p className="text-gray-300">No discussions available.</p>
                  )}
                </div>
              </div>
            )}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-100 mb-4">Group Members</h3>
              <ul className="list-disc list-inside">
                {memberList}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;
