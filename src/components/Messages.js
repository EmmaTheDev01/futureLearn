import React from 'react'
import './messages.css'
const Messages = () => {
    return (
        <div className='all_messages'>
            <div className='search_container'>
                <input type='text' className='search' name='search' placeholder='Search conversation' />
            </div>
            <div className='notification_box'>
                <div className='message_avatar'>
                    <div className='avtr_container'>
                        <img className='message_user_avatar' alt='avatar image1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSUVGkHICq3bwbD4j36gzGi1mLQsyKGW_E3UJAm5neg&s'></img>
                    </div>
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
            <div className='notification_box active'>
                <div className='message_avatar'>
                    <div className='avtr_container'>
                        <img className='message_user_avatar' alt='avatar image2' src='https://media.licdn.com/dms/image/D4E03AQHr2n5ivKrvaw/profile-displayphoto-shrink_200_200/0/1690097978013?e=2147483647&v=beta&t=N5mqcDi5fGLt90Lanor0LeU8-SxK0ri4MchYZAP2aJE'></img>
                    </div>
                </div>
                <div className='message_header'>
                    <li className='message_sender'>Habumugisha</li>
                    <li className='sample_text'>Can you send me the PDF file please! 😍</li>
                </div>
                <div className='time_and_counter'>
                    <li className='time'>11:30 <span className='zone'>PM</span></li>
                    {/* <li className='count'>4</li> */}
                </div>
            </div>
            <div className='notification_box'>
                <div className='message_avatar'>
                    <div className='avtr_container'>
                        <img className='message_user_avatar' alt='avatar image2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSUVGkHICq3bwbD4j36gzGi1mLQsyKGW_E3UJAm5neg&s'></img>
                    </div>
                </div>
                <div className='message_header'>
                    <li className='message_sender'>Kwizera</li>
                    <li className='sample_text'>Have you done my book review?</li>
                </div>
                <div className='time_and_counter'>
                    <li className='time'>11:30 <span className='zone'>PM</span></li>
                    <li className='count'>2</li>
                </div>
            </div>
            <div className='notification_box'>
                <div className='message_avatar'>
                    <div className='avtr_container'>
                        <img className='message_user_avatar' alt='avatar image4' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSUVGkHICq3bwbD4j36gzGi1mLQsyKGW_E3UJAm5neg&s'></img>
                    </div>
                </div>
                <div className='message_header'>
                    <li className='message_sender'>Emma H</li>
                    <li className='sample_text'>Yeah sure</li>
                </div>
                <div className='time_and_counter'>
                    <li className='time'>11:30 <span className='zone'>PM</span></li>
                    <li className='count'>11</li>
                </div>
            </div>
            <div className='notification_box'>
                <div className='message_avatar'>
                    <div className='avtr_container'>
                        <img className='message_user_avatar' alt='avatar image5' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSUVGkHICq3bwbD4j36gzGi1mLQsyKGW_E3UJAm5neg&s'></img>
                    </div>
                </div>
                <div className='message_header'>
                    <li className='message_sender'>Mutesi Annet</li>
                    <li className='sample_text'>Is 6 O'clock good for you?</li>
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