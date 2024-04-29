import React from 'react'
import './messages.css'
const Messages = () => {
    return (
        <div>
            <div className='seatch'>
                <input type='text' className='search' name='search' placeholder='Search conversation' />
            </div>
            <div className='notification_box'>
                <div className='message_avatar'>
                    <img className='avatar_img' alt='avatar image1' src='#'></img>
                </div>
                <div className='message_header'>
                    <li className='message_sender'>Emille</li>
                    <li className='sample_text'>Hello, How are you?</li>
                </div>
                <div className='time_and_counter'>
                    <li className='time'>11:30 <span className='zone'>PM</span></li>
                    <li className='count'>1</li>
                </div>
            </div>
            <div className='notification_box'>
                <div className='message_avatar'>
                    <img className='avatar_img' alt='avatar image2' src='#'></img>
                </div>
                <div className='message_header'>
                    <li className='message_sender'>Habumugisha</li>
                    <li className='sample_text'>Hello, How are you?</li>
                </div>
                <div className='time_and_counter'>
                    <li className='time'>11:30 <span className='zone'>PM</span></li>
                    <li className='count'>4</li>
                </div>
            </div>
            <div className='notification_box'>
                <div className='message_avatar'>
                    <img className='avatar_img' alt='avatar image3' src='#'></img>
                </div>
                <div className='message_header'>
                    <li className='message_sender'>Kwizera</li>
                    <li className='sample_text'>Hello, How are you?</li>
                </div>
                <div className='time_and_counter'>
                    <li className='time'>11:30 <span className='zone'>PM</span></li>
                    <li className='count'>2</li>
                </div>
            </div>
            <div className='notification_box'>
                <div className='message_avatar'>
                    <img className='avatar_img' alt='avatar image4' src='#'></img>
                </div>
                <div className='message_header'>
                    <li className='message_sender'>Emma H</li>
                    <li className='sample_text'>Hello, How are you?</li>
                </div>
                <div className='time_and_counter'>
                    <li className='time'>11:30 <span className='zone'>PM</span></li>
                    <li className='count'>11</li>
                </div>
            </div>
            <div className='notification_box'>
                <div className='message_avatar'>
                    <img className='avatar_img' alt='avatar image5' src='#'></img>
                </div>
                <div className='message_header'>
                    <li className='message_sender'>Mutesi Annet</li>
                    <li className='sample_text'>Hello, How are you?</li>
                </div>
                <div className='time_and_counter'>
                    <li className='time'>11:30 <span className='zone'>PM</span></li>
                    <li className='count'>3</li>
                </div>
            </div>
        </div>
    )
}

export default Messages