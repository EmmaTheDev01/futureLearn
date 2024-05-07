import React from 'react'
import TopNav from '../components/TopNav'
import FrontPageLeft from '../components/FrontPageLeft'
import './mail.css'
import AllMail from '../components/AllMail'
import SendMail from '../components/SendMail'
const Mail = () => {
    return (
        <div className='mail'>
            <TopNav />
            <div className='mail_container'>
                <div className="mail_left_nav">
                <FrontPageLeft />
                </div>
                <div className='mail_body'>
                <div className='mail_component'>
                    <AllMail/>
                    <SendMail/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Mail