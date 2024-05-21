import React from "react";

const MessageBox = (props) => {
  return (
    <div className="notification_box">
      <div className="message_avatar">
        <div className="avtr_container">
          <img
            className="message_user_avatar"
            alt="avatar image1"
            src={props.item.img}
          ></img>
        </div>
      </div>
      <div className="message_header">
        <li className="message_sender">{props.item.name}</li>
        <li className="sample_text">{props.item.message}</li>
      </div>
      <div className="time_and_counter">
        <li className="time">
          {props.item.time}
          <span className="zone">{props.item.zone}</span>
        </li>
        <li className="count">
          {props.item.count < 10 ? props.item.count : "9+"}
        </li>
      </div>
    </div>
  );
};

export default MessageBox;
