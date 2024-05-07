import React from 'react'
import { FaStar } from 'react-icons/fa6'
const MailBox = (props) => {
    return (

        <div className="mail_box">
            <div className="sender_avatar"></div>
            <div className="sender_message">
                <li className="subject">{props.subject}</li>
                <li className="mail_msg">
                    {props.message}
                </li>
            </div>
            <div className="star">
                <span className="star_msg">
                    <FaStar />
                </span>
            </div>
        </div>
    )
}

export default MailBox