import React, { useContext, useEffect, useState } from "react";
import TopNav from "../components/TopNav";
import FrontpageLeft from "../components/FrontPageLeft";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Group = () => {
  const { isLoggedIn, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const [groupData, setGroupData] = useState(null);
  const [error, setError] = useState(null);

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
        setGroupData(response.data[0]); // Assuming response data is an array and we want the first item
      } catch (error) {
        setError("Failed to fetch group data");
        console.error("Failed to fetch group data", error);
      }
    };

    fetchGroupData();
  }, []);

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

  const { name, chief, members } = groupData;
  const chiefName = members.find(member => member._id === chief);

  const memberList = members.map(member => (
    <li key={member._id} className="flex items-center space-x-2 py-2">

      <span className="text-gray-300">{`${member.firstname} ${member.lastname}`}</span>
      <span className="w-4 h-4">
        {chief === member._id && <span className="w-2 h-2 bg-green-500 rounded-full text-sm text-white px-2 ">Admin</span>}
      </span>
    </li>
  ));

  const discussionPosts = groupData.discussions && groupData.discussions.map(item => (
    <div key={item._id} className="bg-gray-800 p-4 rounded-lg mb-4 shadow-md">
      <div className="mb-2">
        <h4 className="text-lg font-semibold text-gray-100">{item.member}</h4>
      </div>
      <p className="text-gray-300 mb-2">{item.post}</p>
      <div className="flex space-x-4 text-blue-400">
        <button className="hover:text-blue-500">Reply</button>
        <button className="hover:text-blue-500">Grade</button>
      </div>
    </div>
  ));

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
              <div className="bg-slate-700 p-4 rounded-lg text-gray-300">
                <p>
                  What is Networking? What is the data packet? With discussion
                  explain the components of Networking, and data packet in
                  networks.
                </p>
              </div>
            </div>
            <div className="mb-6">
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1 bg-slate-700 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-100 mb-4">Group Members</h3>
                <h2 className="text-xl font-bold text-blue-500">{groupData.name}</h2>
                <ol className="list-disc pl-5 space-y-2">
                  {memberList.length > 0 ? memberList : <p className="text-gray-300">No members found.</p>}
                </ol>
              </div>
              <div className="flex-1 bg-slate-700 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-100 mb-4">Assignment Discussion Form</h3>
                <p className="text-gray-300 mb-4">
                  Below is the textfield where you have to input the answer to the
                  question and share your thoughts on the above assignment with
                  the group. Remember, if you don't submit your assignment answer,
                  the group work will not be submitted for grading.
                </p>
                <form>
                  <textarea
                    className="w-full h-40 p-3 bg-slate-800 border border-gray-600 rounded-md text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Give your answer"
                  ></textarea>
                  <button
                    type="submit"
                    className="mt-4 w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200 ease-in-out"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="mt-8 bg-slate-700 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Discussions Forum</h3>
              {discussionPosts && discussionPosts.length > 0 ? discussionPosts : <p className="text-gray-300">No discussions yet.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;
