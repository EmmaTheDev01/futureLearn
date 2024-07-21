import React from 'react';
import { MdAttachFile } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { FaVideo, FaPhoneAlt } from "react-icons/fa";
import EmojiPickerToggle from './EmjiPickerToggle';
import AudioRecorderComponent from './AudorecorderComponent';

const MessageBody = () => {
  return (
    <div className="flex flex-col h-full bg-gray-100">
      {/* Navigation */}
      <div className="flex items-center p-4 bg-white border-b border-gray-300">
        <div className="flex-shrink-0 mr-4">
          <img
            src='https://media.licdn.com/dms/image/D4E03AQHr2n5ivKrvaw/profile-displayphoto-shrink_200_200/0/1690097978013?e=2147483647&v=beta&t=N5mqcDi5fGLt90Lanor0LeU8-SxK0ri4MchYZAP2aJE'
            className='w-12 h-12 rounded-full'
            alt='avatar'
          />
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-800">Habumugisha</h2>
          <p className="text-sm text-gray-500">Offline, last seen 1 hour ago</p>
        </div>
        <div className="flex space-x-4">
          <button className="text-gray-600 hover:text-green-500">
            <FaPhoneAlt className="text-xl" />
          </button>
          <button className="text-gray-600 hover:text-green-500">
            <FaVideo className="text-xl" />
          </button>
          <button className="text-gray-600 hover:text-green-500">
            <BsThreeDots className="text-xl" />
          </button>
        </div>
      </div>
      
      {/* Conversations */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {/* Recipient's Messages */}
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <img
                src='https://media.licdn.com/dms/image/D4E03AQHr2n5ivKrvaw/profile-displayphoto-shrink_200_200/0/1690097978013?e=2147483647&v=beta&t=N5mqcDi5fGLt90Lanor0LeU8-SxK0ri4MchYZAP2aJE'
                className='w-10 h-10 rounded-full'
                alt='avatar'
              />
            </div>
            <div className="flex-1">
              <div className="bg-gray-200 p-3 rounded-lg">
                <p className="text-gray-800">Hello, How did it go with my paper?</p>
              </div>
              <p className="text-xs text-gray-500">Sent 3 days ago</p>
            </div>
          </div>
          {/* Your Messages */}
          <div className="flex items-start justify-end space-x-3">
            <div className="flex-1">
              <div className="bg-green-500 text-white p-3 rounded-lg">
                <p>I'll look into it</p>
              </div>
              <p className="text-xs text-gray-500 text-right">Sent 3 days ago</p>
            </div>
          </div>
          {/* Repeat messages as needed */}
        </div>
      </div>
      
      {/* Input Field */}
      <div className="p-4 bg-white border-t border-gray-300">
        <form className="flex items-center space-x-2">
          <label className="flex-shrink-0 cursor-pointer text-gray-600 hover:text-green-500">
            <MdAttachFile className="text-xl" />
            <input type="file" id="myFile" name="filename" className="hidden" />
          </label>
          <input
            type='text'
            className='flex-1 p-2 border border-gray-300 rounded-lg'
            name='msg'
            placeholder='Enter your message'
          />
          <EmojiPickerToggle />
          <AudioRecorderComponent />
          <button className="text-gray-600 hover:text-green-500">
            <RiSendPlaneFill className="text-xl" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessageBody;
