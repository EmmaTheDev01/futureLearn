import React from 'react'
import TopNav from '../components/TopNav'
import FrontPageLeft from '../components/FrontPageLeft'
import './mail.css'
const Mail = () => {
    return (
        <div className='mail'>
            <TopNav />
            <div className='mail_container'>
                <div className="home_left_nav">
                <FrontPageLeft />
                </div>
                <div className='mail_body'>
                </div>
            </div>
        </div>
    )
}

export default Mail