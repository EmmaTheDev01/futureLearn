import React from 'react';

const SendMail = () => {
  return (
    <div className="bg-slate-900 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto mt-3">
      <h3 className="text-2xl font-bold text-gray-100 mb-4">Compose an Email</h3>
      <div>
        <form className="space-y-4">
          <input
            type="email"
            className="w-full p-3 border border-gray-600 rounded-md bg-slate-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email Address"
          />
          <input
            type="text"
            className="w-full p-3 border border-gray-600 rounded-md bg-slate-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Subject"
          />
          <textarea
            className="w-full p-3 border border-gray-600 rounded-md bg-slate-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Message"
            rows="6"
          />
          <button
            type="submit"
            className="w-full py-3 bg-green-800 text-white font-semibold rounded-md hover:bg-green-700 transition duration-200 ease-in-out"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendMail;
