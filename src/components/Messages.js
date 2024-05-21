import React from "react";
import "../styles/messages.css";
import MessageBox from "./MessageBox";
import msgdata from "../msgdata";
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
        <div className="all_messages">
            <div className="search_container">
                <input
                    type="text"
                    className="search"
                    name="search"
                    placeholder="Search conversation"
                />
            </div>
            {messagesArray}
        </div>
    );
};

export default Messages;
