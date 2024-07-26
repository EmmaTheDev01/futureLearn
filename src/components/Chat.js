import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MessageBox from './MessageBox';
import { MdAttachFile } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { FaVideo, FaPhoneAlt } from "react-icons/fa";
import EmojiPickerToggle from './EmjiPickerToggle';
import AudioRecorderComponent from './AudorecorderComponent';
import LeftNav from './LeftNav';

const Chat = () => {
  const [conversations, setConversations] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:4000/api/v1/chat/my-conversations", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (Array.isArray(response.data) && response.data.length === 0) {
          // Fetch users if no conversations
          const usersResponse = await axios.get("http://localhost:4000/api/v1/user", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUsers(usersResponse.data || []);
        } else {
          setConversations(response.data || []);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchConversations();
  }, []);

  const handleConversationClick = async (conversationId) => {
    try {
      const token = localStorage.getItem("token");
      
      // Fetch conversation details
      const response = await axios.get(`http://localhost:4000/api/v1/chat/conversation/${conversationId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const conversationData = response.data;
      console.log('Conversation Data:', conversationData);

      // Set the selected conversation
      setSelectedConversation(conversationData);

      // Fetch user details for the second participant if needed
      if (Array.isArray(conversationData.participants) && conversationData.participants.length > 1) {
        const participantId = conversationData.participants[1]._id;
        
        // Fetch user details for participant 2
        const userResponse = await axios.get(`http://localhost:4000/api/v1/user/${participantId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUserDetails(userResponse.data.data);
      }
    } catch (err) {
      console.error('Error fetching conversation or user details:', err.message);
      setError(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='flex h-screen w-full bg-slate-700'>
      {/* Left Navigation */}
      <div className='w-1/16 border-r border-gray-700 shadow-sm overflow-auto scrollbar-hidden'>
        <LeftNav />
      </div>

      {/* Main Content */}
      <div className='flex-grow flex'>
        {/* Messages Section */}
        <div className='hidden md:block md:w-1/4 border-r border-gray-700 shadow-sm overflow-auto scrollbar-hidden'>
          <div className="flex-1 p-4">
            {(conversations.length > 0 ? conversations : users).map((item) => (
              <MessageBox
                key={item._id}
                name={item.participants[1] ? item.participants[1].username : item.username}
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLIbLTGKz4waJGU2vkbhQkRavjf2OdeY7Eo4l8yFnggdF3fX1bUF4FEUP13o34ioSCm-M&usqp=CAU"
                time={item.messages && item.messages.length > 0 ? new Date(item.messages[0]?.timestamp).toLocaleTimeString() : ""}
                zone={item.messages && item.messages.length > 1 ? new Date(item.messages[1]?.timestamp).toLocaleDateString() : ""}
                count={item.messages ? item.messages.length : 0}
                message={item.messages && item.messages.length > 1 ? item.messages[1]?.content : "Start messaging"}
                onClick={() => handleConversationClick(item._id)}
              />
            ))}
          </div>
        </div>

        {/* Message Body Section */}
        <div className="flex flex-col h-full w-2/4 bg-gray-900 text-gray-100">
          {/* Navigation */}
          <div className="flex items-center p-4 bg-gray-800 border-b border-gray-700">
            <div className="flex-shrink-0 mr-4">
              <img
                src={userDetails ? userDetails.img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLIbLTGKz4waJGU2vkbhQkRavjf2OdeY7Eo4l8yFnggdF3fX1bUF4FEUP13o34ioSCm-M&usqp=CAU'}
                className='w-12 h-12 rounded-full'
                alt='avatar'
              />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-100 text-start">
                {userDetails ? `${userDetails.firstname} ${userDetails.lastname}` : "Select a user"}
              </h2>
              <p className="text-sm text-gray-400 text-start">
                {userDetails ? `Online, last seen ${new Date().toLocaleTimeString()}` : "Select a user"}
              </p>
            </div>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-green-400">
                <FaPhoneAlt className="text-xl" />
              </button>
              <button className="text-gray-400 hover:text-green-400">
                <FaVideo className="text-xl" />
              </button>
              <button className="text-gray-400 hover:text-green-400">
                <BsThreeDots className="text-xl" />
              </button>
            </div>
          </div>

          {/* Conversations */}
          <div className="flex-1 p-4 overflow-y-auto scrollbar-hidden">
            <div className="space-y-4">
              {selectedConversation && selectedConversation.messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'} mb-2`}>
                  <div className={`p-2 rounded ${msg.sender === 'me' ? 'bg-blue-500 text-white' : 'bg-gray-600 text-gray-100'}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Input Field */}
          <div className="p-4 bg-gray-800 border-t border-gray-700">
            <form className="flex items-center space-x-2">
              <label className="flex-shrink-0 cursor-pointer text-gray-400 hover:text-green-400">
                <MdAttachFile className="text-xl" />
                <input type="file" id="myFile" name="filename" className="hidden" />
              </label>
              <input
                type='text'
                className='flex-1 p-2 bg-gray-700 border border-gray-600 rounded-full placeholder-gray-400 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                name='msg'
                placeholder='Enter your message'
              />
              <EmojiPickerToggle />
              <AudioRecorderComponent />
              <button className="text-gray-400 hover:text-green-400">
                <RiSendPlaneFill className="text-xl" />
              </button>
            </form>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="bg-slate-700 w-1/4 z-0 h-[100vh] overflow-hidden text-gray-100 rounded-lg shadow-lg max-w-md mx-auto p-6 space-y-6">
          {userDetails ? (
            <>
              {/* Avatar and About User */}
              <div className="flex flex-col items-center">
                <img
                  src={userDetails.img || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLIbLTGKz4waJGU2vkbhQkRavjf2OdeY7Eo4l8yFnggdF3fX1bUF4FEUP13o34ioSCm-M&usqp=CAU"}
                  alt={userDetails.username}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h3 className="text-2xl font-semibold">{userDetails.firstname + " " + userDetails.lastname}</h3>
                <p className="text-gray-400 mt-2">{userDetails.email}</p>
                <p className='text-gray-400 text-sm'>{userDetails.regNo}</p>
                <h6 className='text-gray-400'>{userDetails.phone}</h6>
              </div>
              {/* Add additional user details here */}
            </>
          ) : (
            <p>No user selected</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
