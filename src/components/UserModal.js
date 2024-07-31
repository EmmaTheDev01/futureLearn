import React from 'react';

const UserModal = ({ users, onClose, onSelect }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-lg font-semibold text-white mb-4">Select a User</h2>
        <ul className="space-y-2">
          {users.map(user => (
            <li key={user._id} className="border-b border-gray-600 py-2">
              <button
                className="w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => onSelect(user._id)}
              >
                {user.username}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UserModal;
