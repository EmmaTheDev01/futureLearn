import React from 'react'
import '../styles/messagebody.css'
import { MdAttachFile } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { FaVideo, FaPhoneAlt } from "react-icons/fa";
import EmojiPickerToggle from './EmjiPickerToggle';
import AudioRecorderComponent from './AudorecorderComponent';
const MessageBody = () => {

    return (
        <div className='conersation_body'>
            <div className='body_navigation'>
                <div className='recipient_avatar'>
                    <img src='https://media.licdn.com/dms/image/D4E03AQHr2n5ivKrvaw/profile-displayphoto-shrink_200_200/0/1690097978013?e=2147483647&v=beta&t=N5mqcDi5fGLt90Lanor0LeU8-SxK0ri4MchYZAP2aJE' className='recipient' alt='avatar' />
                </div>
                <div className='recipient_title'>
                    <li className='recipient_names'>Habumugisha</li>
                    <li className='recipient_status'>Offline, last seen 1 hour ago</li>
                </div>
                <div className='actions'>
                    <span className='icon'> <FaPhoneAlt /> </span>
                    <span className='icon'><FaVideo /></span>
                    <span className='icon'><BsThreeDots /></span>
                </div>
            </div>
            <div className='conversations'>
                <div className='recipients_msg'>
                    <li className='msg'>Hello, How did it go with my paper?</li>
                    <li className='msg_status'>Sent 3 days ago</li>
                </div>
                <div className='my_msg'>
                    <li className='my_msg_text'>I'll look into it</li>
                    <li className='msg_status'>Sent 3 days ago</li>
                </div>
                <div className='recipients_msg'>
                    <li className='msg'>Thank you, I would like to get the exam results please</li>
                    <li className='msg_status'>Sent 1 day ago</li>
                </div>
                <div className='my_msg'>
                    <li className='my_msg_text'>I haven't heard anybody taling about it, maybe they are not printed out yet.</li>
                    <li className='msg_status'>Sent 1 day ago</li>
                </div>
                <div className='recipients_msg'>
                    <li className='msg'>Thanks for an update, you're the best</li>
                    <li className='msg_status'>Sent 1 day ago</li>
                </div>
                <div className='my_msg'>
                    <li className='my_msg_text'>my pleasure</li>
                    <li className='msg_status'>Sent 1 days ago</li>
                </div>
                <div className='recipients_msg'>
                    <li className='msg'>I just saw my exam results. They are finally published.</li>
                    <li className='msg_status'>2 min</li>
                </div>
                <div className='my_msg'>
                    <li className='my_msg_text'>Can you send me the PDF file please! 😍</li>
                    <li className='msg_status'>now</li>
                </div>
            </div>
            <div className='inputs'>
                <form>
                    <div className='text_field'>
                        <div className='file_upload'>
                            <input type="file" id="myFile" name="filename" hidden />
                            <label className='myfile' for="myFile"><MdAttachFile /></label>
                        </div>
                        <input type='text' className='message_field' name='msg' placeholder='Enter your message' />
                        <EmojiPickerToggle />
                        <AudioRecorderComponent />


                        <div className='send_btn'>
                            <button><RiSendPlaneFill /></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MessageBody