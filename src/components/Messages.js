import React from "react";
import MessageBox from "./MessageBox";
import msgdata from "../data/msgdata";

const Messages = () => {
    const messagesArray = msgdata.map((item) => {
        return (
            <MessageBox
                key={item.id}
                item={item}
            />
        );
    });

    return (
        <div className="flex flex-col h-full">
            {/* Search Container */}
            <div className="p-4 border-b border-gray-600">
                <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-600 bg-gray-300 rounded-md shadow-sm focus:outline-none  placeholder-gray-400 text-gray-800"
                    name="search"
                    placeholder="Search conversation"
                />
            </div>
            {/* Messages List */}
            <div className="flex-1 p-4">
                {messagesArray}
            </div>
        </div>
    );
};

export default Messages;
