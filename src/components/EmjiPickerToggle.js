import React, { useState } from 'react';
import { BsEmojiSmile } from 'react-icons/bs';
import EmojiPicker from 'emoji-picker-react';

const EmojiPickerToggle = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const toggleEmojiPicker = () => {
    setShowEmojiPicker((prevState) => !prevState);
  };

  return (
    <div className="relative">
      {/* Emoji Picker Button */}
      <button
        onClick={toggleEmojiPicker}
        className="text-gray-500 hover:text-gray-300 p-2 rounded-full transition-colors duration-200 ease-in-out focus:outline-none"
        aria-label="Open Emoji Picker"
      >
        <BsEmojiSmile className="text-xl sm:text-2xl" />
      </button>

      {/* Emoji Picker */}
      {showEmojiPicker && (
        <div className="absolute bottom-12 right-0 z-50">
          <div className="bg-gray-800 p-2 rounded-lg shadow-lg border border-gray-700">
            <EmojiPicker />
          </div>
        </div>
      )}
    </div>
  );
};

export default EmojiPickerToggle;
