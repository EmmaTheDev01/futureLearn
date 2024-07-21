import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaPaperPlane } from "react-icons/fa";

const MailMessage = () => {
  // State to manage the visibility of the reply drawer
  const [isReplyOpen, setIsReplyOpen] = useState(false);

  // Function to toggle the reply drawer visibility
  const toggleReplyDrawer = () => {
    setIsReplyOpen(!isReplyOpen);
  };

  return (
    <div className="bg-gray-800 p-4 sm:p-6 md:p-8 rounded-lg shadow-md text-gray-200">
      {/* Back Arrow Link */}
      <Link
        to="/mail"
        className="flex items-center text-gray-400 hover:text-gray-300 mb-4 sm:mb-6"
      >
        <FaArrowLeft className="mr-2 text-lg sm:text-xl" />
        <span className="text-sm sm:text-base">Back to Mail</span>
      </Link>

      {/* Mail Header */}
      <div className="mb-4 sm:mb-6 border-b border-gray-700 pb-2 sm:pb-4">
        <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
          Subject: Correction of Exam Results
        </h3>
        <h5 className="text-xs sm:text-sm text-gray-400 mb-1">
          ug10230090@ines.ac.rw
        </h5>
        <span className="text-xs sm:text-sm text-gray-500">To me</span>
      </div>

      {/* Mail Body */}
      <div className="space-y-2 sm:space-y-4 mb-4">
        <p>Dear Sir,</p>
        <p>
          I hope this email finds you in good health. I have noticed some changes
          in the posted results of our exams. I would like to ask for a follow-up
          and for more details regarding our results.
        </p>
        <p>
          I have a concern that there must be some mistakes that you can help me
          to present to the lecturer because, I did my best and all the answers
          provided to my paper are as accurate as from the notes, and yet I don't
          see any reason why I would be marked with a third grade.
        </p>
        <p>
          I am sorry for this unexpected email, but I would like to be aware of the
          inconveniences, and as a matter of fact help our group to know where we might have made a mistake.
        </p>
        <p>Yours sincerely,</p>
        <p>Habumugisha</p>
      </div>

      {/* Reply Button */}
      <button
        onClick={toggleReplyDrawer}
        className="flex items-center text-green-500 hover:text-green-700 text-sm sm:text-base font-semibold"
      >
        <FaPaperPlane className="mr-2 text-lg sm:text-xl" />
        <span>Reply</span>
      </button>

      {/* Reply Drawer */}
      {isReplyOpen && (
        <div className="mt-6 border-t border-gray-700 pt-4">
          <h3 className="text-lg sm:text-xl font-bold text-gray-100 mb-2">Reply</h3>
          <form className="space-y-4">
            <textarea
              className="w-full h-24 bg-gray-700 text-gray-200 p-2 rounded-md border border-gray-600 focus:border-green-500 focus:outline-none"
              placeholder="Type your reply here..."
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-700 transition duration-200 ease-in-out"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MailMessage;
