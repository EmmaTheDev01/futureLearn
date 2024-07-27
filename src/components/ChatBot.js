import React, { useState } from 'react';
import axios from 'axios';
import { FaRegCommentDots, FaTimes } from 'react-icons/fa';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, type: 'user' }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post('localhost:4000/api/v1/chatbot', { message: input });
      const botReply = response.data.reply;

      setMessages([...newMessages, { text: botReply, type: 'bot' }]);
    } catch (error) {
      console.error('Error:', error); // Log error for debugging
      setMessages([...newMessages, { text: 'Sorry, something went wrong. Please try again.', type: 'bot' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 p-4 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition duration-300 ${isOpen ? 'hidden' : 'block'}`}
        aria-label="Open ChatBot"
      >
        <FaRegCommentDots className="w-5 h-5" />
      </button>
      {isOpen && (
        <div className="fixed bottom-4 right-4 w-80 md:w-96 bg-gray-900 text-white shadow-lg rounded-lg border border-gray-700 overflow-hidden">
          <div className="p-4 h-80 overflow-y-scroll scrollbar-hidden">
            <div className="flex flex-col gap-2">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-lg ${msg.type === 'user' ? 'bg-green-700 text-white self-end' : 'bg-gray-800 text-gray-300'}`}
                >
                  {msg.text}
                </div>
              ))}
              {loading && <div className="text-gray-400">AI assistant is typing...</div>}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex p-2 border-t border-gray-700">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 border border-gray-600 rounded-l-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Type your message..."
            />
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-r-lg hover:bg-green-700 transition duration-300"
              disabled={loading} // Disable button while loading
            >
              Send
            </button>
          </form>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 p-1 bg-gray-700 text-gray-400 rounded-full hover:bg-gray-600 transition duration-300"
            aria-label="Close ChatBot"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>
      )}
    </>
  );
};

export default ChatBot;
