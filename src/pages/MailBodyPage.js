import React from 'react'
import TopNav from '../components/TopNav'
import FrontPageLeft from '../components/FrontPageLeft'
import '../styles/mailcontent.css'
import MailMessage from '../components/MailMessage'
const MailBodyPage = () => {
    return (
        <div className='mail_msg_page'>
            <div className='top_nav_mailbody'>
                <TopNav />
            </div>
            <div className='mail_msg_container'>
                <div className='left_side'>
                    <FrontPageLeft/>
                </div>
                <div className='mail_msg_content'>
                    <MailMessage/>
                </div>
            </div>
           
        </div>
    )
}

export default MailBodyPage