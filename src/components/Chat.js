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
  const [message, setMessage] = useState('');
  const [conversationId, setConversationId] = useState(null);

  const loggedInUserId = localStorage.getItem("loggedInUserId");

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:4000/api/v1/chat/my-conversations", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (Array.isArray(response.data)) {
          if (response.data.length === 0) {
            const usersResponse = await axios.get("http://localhost:4000/api/v1/user", {
              headers: { Authorization: `Bearer ${token}` },
            });
            setUsers(usersResponse.data.data || []);
          } else {
            setConversations(response.data || []);
          }
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchConversations();
  }, []);

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const handleConversationClick = async (conversationId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token is missing from local storage.");

      const response = await axios.get(`http://localhost:4000/api/v1/chat/conversation/${conversationId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const conversationData = response.data;

      if (conversationData) {
        setSelectedConversation(conversationData);
        setConversationId(conversationId);

        if (Array.isArray(conversationData.participants) && conversationData.participants.length > 1) {
          const participantId = conversationData.participants.find(participant => participant._id !== loggedInUserId)._id;
          const userResponse = await axios.get(`http://localhost:4000/api/v1/user/${participantId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });

          setUserDetails(userResponse.data.data);
        }
      } else {
        throw new Error('Conversation data is undefined or null.');
      }
    } catch (err) {
      console.error('Error fetching conversation or user details:', err.message);
      setError(err.message);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim() || !conversationId) return;

    try {
      const token = localStorage.getItem("token");

      if (!loggedInUserId) {
        throw new Error("User ID is missing from local storage.");
      }

      const response = await axios.post(
        `http://localhost:4000/api/v1/chat/message/${conversationId}`,
        { senderId: loggedInUserId, content: message },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const updatedConversation = response.data;
      setSelectedConversation(updatedConversation);
      setMessage('');
    } catch (err) {
      console.error('Error sending message:', err.message);
      setError(err.message);
    }
  };

  const handleStartConversation = async (userId) => {
    try {
      const token = localStorage.getItem("token");
      const loggedInUserId = localStorage.getItem("loggedInUserId");

      if (!loggedInUserId || !userId) {
        throw new Error("User ID is missing.");
      }

      const response = await axios.post(
        "http://localhost:4000/api/v1/chat/start",
        { participants: [loggedInUserId, userId] },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const newConversation = response.data;

      setConversations(prevConversations => [newConversation, ...prevConversations]);
      setSelectedConversation(newConversation);
      setConversationId(newConversation._id);

      setUsers([]);
    } catch (err) {
      console.error('Error starting conversation:', err.message);
      setError(err.message);
    }
  };

  const handleUserClick = async (userId) => {
    const existingConversation = conversations.find(convo =>
      convo.participants.some(participant => participant._id === userId)
    );

    if (existingConversation) {
      setSelectedConversation(existingConversation);
      setConversationId(existingConversation._id);
    } else {
      await handleStartConversation(userId);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='flex h-screen w-full bg-slate-700'>
      <div className='w-1/16 border-r border-gray-700 shadow-sm overflow-auto scrollbar-hidden'>
        <LeftNav />
      </div>

      <div className='flex-grow flex'>
        <div className='hidden md:block md:w-1/4 border-r border-gray-700 shadow-sm overflow-auto scrollbar-hidden'>
          <div className="flex-1 p-4">
            {(Array.isArray(conversations) && conversations.length > 0 ? conversations : users).map((item) => (
              <MessageBox
                key={item._id}
                name={item.participants ? item.participants.find(participant => participant._id !== loggedInUserId)?.username : item.username}
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLIbLTGKz4waJGU2vkbhQkRavjf2OdeY7Eo4l8yFnggdF3fX1bUF4FEUP13o34ioSCm-M&usqp=CAU"
                time={item.messages && item.messages.length > 0 ? formatTime(item.messages[item.messages.length - 1]?.timestamp) : ""}
                zone=""
                count={item.messages ? item.messages.length : 0}
                message={item.messages && item.messages.length > 0 ? item.messages[item.messages.length - 1]?.content : "Start messaging"}
                onClick={() => {
                  if (conversations.length > 0) {
                    handleConversationClick(item._id);
                  } else {
                    handleStartConversation(item._id);
                  }
                }}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col h-full w-2/4 bg-gray-900 text-gray-100">
          <div className="flex items-center p-4 bg-gray-800 border-b border-gray-700">
            <div className="flex-shrink-0 mr-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLIbLTGKz4waJGU2vkbhQkRavjf2OdeY7Eo4l8yFnggdF3fX1bUF4FEUP13o34ioSCm-M&usqp=CAU"
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

          <div className="flex-1 p-4 overflow-y-auto scrollbar-hidden">
            <div className="space-y-4">
              {selectedConversation && Array.isArray(selectedConversation.messages) && selectedConversation.messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender._id === loggedInUserId ? 'justify-end' : 'justify-start'} mb-2`}>
                  <div className={`p-2 rounded ${msg.sender._id === loggedInUserId ? 'bg-green-700 text-white' : 'bg-gray-600 text-gray-100'}`}>
                    {msg.content}
                  </div>
                  <span className="text-xs text-gray-400 block mt-1">{formatTime(msg.timestamp)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-gray-800 border-t border-gray-700">
            <form className="flex items-center space-x-2" onSubmit={handleSendMessage}>
              <label className="flex-shrink-0 cursor-pointer text-gray-400 hover:text-green-400">
                <MdAttachFile className="text-xl" />
                <input type="file" id="myFile" name="filename" className="hidden" />
              </label>
              <input
                type='text'
                className='flex-1 p-2 bg-gray-700 border border-gray-600 rounded-full placeholder-gray-400 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                name='msg'
                placeholder='Enter your message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <EmojiPickerToggle />
              <AudioRecorderComponent />
              <button className="text-gray-400 hover:text-green-400" type="submit">
                <RiSendPlaneFill className="text-xl" />
              </button>
            </form>
          </div>
        </div>

        <div className="bg-slate-700 w-1/4 z-0 h-[100vh] overflow-hidden text-gray-100 rounded-lg shadow-lg max-w-md mx-auto p-6 space-y-6">
          {userDetails ? (
            <>
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
