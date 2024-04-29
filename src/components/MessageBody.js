import React from 'react'
import './messagebody.css'
import { useEffect } from 'react';
import EmojiPicker from 'emoji-picker-react';
import { MdAttachFile } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { AudioRecorder } from 'react-audio-voice-recorder';
import { useAudioRecorder } from 'react-audio-voice-recorder';
import { FaVideo, FaPhoneAlt } from "react-icons/fa";
import EmojiPickerToggle from './EmjiPickerToggle';
import AudioRecorderComponent from './AudorecorderComponent';
const MessageBody = () => {
    const addAudioElement = (blob) => {
        const url = URL.createObjectURL(blob);
        const audio = document.createElement("audio");
        audio.src = url;
        audio.controls = true;
        document.body.appendChild(audio);
    };
    const {

        recordingBlob,

    } = useAudioRecorder();

    useEffect(() => {
        if (!recordingBlob) return;

        // recordingBlob will be present at this point after 'stopRecording' has been called
    }, [recordingBlob])

    return (
        <div className='conersation_body'>
            <div className='body_navigation'>
                <div className='opponent_avatar'>
                    <img src='' className='opponent' alt='avatar' />
                </div>
                <div className='opponent_title'>
                    <li className='opponent_names'>Habumugisha</li>
                    <li className='opponent_status'>Offline, last seen 1 hour ago</li>
                </div>
                <div className='actions'>
                    <span className='icon'> <FaPhoneAlt /> </span>
                    <span className='icon'><FaVideo /></span>
                    <span className='icon'><BsThreeDots /></span>
                </div>
            </div>
            <div className='conversations'>
                <div className='opponents_msg'>
                    <li className='msg'>Hello, How did it go with my paper?</li>
                    <li className='msg_status'>Sent 3 days ago</li>
                </div>
                <div className='my_msg'>
                    <li className='my_msg_text'>I'll look into it</li>
                    <li className='msg_status'>Sent 3 days ago</li>
                </div>
                <div className='opponents_msg'>
                    <li className='msg'>Thank you, I would like to get the exam results please</li>
                    <li className='msg_status'>Sent 1 day ago</li>
                </div>
                <div className='my_msg'>
                    <li className='my_msg_text'>I haven't heard anybody taling about it, maybe they are not printed out yet.</li>
                    <li className='msg_status'>Sent 1 day ago</li>
                </div>
                <div className='opponents_msg'>
                    <li className='msg'>Thanks for an update, you're the best</li>
                    <li className='msg_status'>Sent 1 day ago</li>
                </div>
                <div className='my_msg'>
                    <li className='my_msg_text'>my pleasure</li>
                    <li className='msg_status'>Sent 1 days ago</li>
                </div>
                <div className='opponents_msg'>
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