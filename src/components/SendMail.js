import React from 'react'
import '../styles/mailcomponent.css'
const SendMail = () => {
    return (
        <div className='send_mail'>
            <h3>Compose an email</h3>
            <div className='mail_composer'>
                <form>
                    <input type='email' className='email_compose' placeholder='Email Address'></input>
                    <input type='text' className='subject_text' placeholder='Subject' />
                    <input type='text' className='mail_message_text' placeholder='Message' />
                    <button className='send_mail_btn'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default SendMail