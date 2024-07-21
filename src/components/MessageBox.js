import React from "react";

const MessageBox = (props) => {
  return (
    <div className="flex w-full items-center p-4 shadow-md hover:bg-green-700 hover:rounded-md cursor-pointer">
      <div className="flex-shrink-0 mr-4">
        <img
          className="w-12 h-12 rounded-full object-cover"
          alt="avatar"
          src={
            props.item.img
              ? props.item.img
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLIbLTGKz4waJGU2vkbhQkRavjf2OdeY7Eo4l8yFnggdF3fX1bUF4FEUP13o34ioSCm-M&usqp=CAU"
          }
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <span className="font-semibold text-gray-100 w-full text-start">{props.item.name}</span>
          <div className="flex items-center">
            <span className="text-sm text-gray-400 mr-2">{props.item.time} <span className="text-gray-500">{props.item.zone}</span></span>
            <span className="inline-flex items-center justify-center w-8 h-6 text-sm font-medium text-white bg-green-800 rounded-full">
              {props.item.count < 10 ? props.item.count : "9+"}
            </span>
          </div>
        </div>
        <p className="text-gray-300 mb-2 text-start">{props.item.message}</p>
      </div>
    </div>
  );
};

export default MessageBox;
