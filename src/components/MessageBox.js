import React, { useState, useEffect } from "react";
import axios from "axios";

const MessageBox = ({ img, name, time, zone, count, message }) => {
  return (
    <div className="flex w-full items-center p-4 shadow-md hover:bg-green-700 hover:rounded-md cursor-pointer">
      <div className="flex-shrink-0 mr-4">
        <img
          className="w-12 h-12 rounded-full object-cover"
          alt="avatar"
          src={
            img
              ? img
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLIbLTGKz4waJGU2vkbhQkRavjf2OdeY7Eo4l8yFnggdF3fX1bUF4FEUP13o34ioSCm-M&usqp=CAU"
          }
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <span className="font-semibold text-gray-100 w-full text-start">{name}</span>
          <div className="flex items-center">
            <span className="text-sm text-gray-400 mr-2">{time} <span className="text-gray-500">{zone}</span></span>
            <span className="inline-flex items-center justify-center w-8 h-6 text-sm font-medium text-white bg-green-800 rounded-full">
              {count < 10 ? count : "9+"}
            </span>
          </div>
        </div>
        <p className="text-gray-300 mb-2 text-start">{message}</p>
      </div>
    </div>
  );
};

const Messages = () => {
  const [conversations, setConversations] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:4000/api/v1/chat/my-conversations", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (Array.isArray(response.data) && response.data.length === 0) {
          // No conversations, fetch users
          const usersResponse = await axios.get("http://localhost:4000/api/v1/user", {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (Array.isArray(usersResponse.data)) {
            setUsers(usersResponse.data.data);
          } else {
            setUsers([]);
          }
        } else {
          setConversations(response.data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchConversations();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Render conversations if available, otherwise render users
  const displayItems = conversations.length > 0 ? conversations : users;

  return (
    <div>
      {displayItems.map((item) => (
        <MessageBox
          key={item._id}
          name={conversations.length > 0 
            ? item.participants.map(participant => participant.username).join(', ') 
            : item.username}
          img={item.img || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLIbLTGKz4waJGU2vkbhQkRavjf2OdeY7Eo4l8yFnggdF3fX1bUF4FEUP13o34ioSCm-M&usqp=CAU"} // Default avatar
          time={conversations.length > 0 
            ? new Date(item.messages[0]?.timestamp).toLocaleTimeString() 
            : ""}
          zone={conversations.length > 0 
            ? new Date(item.messages[0]?.timestamp).toLocaleDateString() 
            : ""}
          count={conversations.length > 0 ? item.messages.length : 0}
          message={conversations.length > 0 ? item.messages[0]?.content : ""}
        />
      ))}
    </div>
  );
};

export default Messages;
