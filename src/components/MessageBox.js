import React from 'react'

const MessageBox = (props) => {
    return (
        <div className='notification_box'>
            <div className='message_avatar'>
                <div className='avtr_container'>
                    <img className='message_user_avatar' alt='avatar image1' src={props.img}></img>
                </div>
            </div>
            <div className='message_header'>
                <li className='message_sender'>{props.name}</li>
                <li className='sample_text'>{props.message}</li>
            </div>
            <div className='time_and_counter'>
                <li className='time'>{props.time}<span className='zone'>{props.zone}</span></li>
                <li className='count'>{props.count}</li>
            </div>
        </div>
    )
}

export default MessageBox