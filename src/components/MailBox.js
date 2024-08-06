import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MailBox = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/my-mail/${props.item._id}`);
  };

  // Function to safely render text without HTML elements
  const getPlainText = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center h-[80px] overflow-hidden cursor-pointer p-4 bg-slate-800 rounded-lg shadow-sm hover:bg-slate-700 transition duration-200 ease-in-out w-full"
    >
      <div className="flex-shrink-0 w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mr-4">
        <span className="text-xl text-gray-300">{props.item.sender}</span>
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-semibold text-gray-100 mb-1 text-start w-full">{props.item.subject}</h4>
        <p className="text-gray-400 h-[20px] overflow-hidden text-start">{getPlainText(props.item.text)}</p>
      </div>
      <div className="ml-4 text-gray-400">
        <FaStar className="text-xl" />
        <p className="text-sm">{new Date(props.item.createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default MailBox;
