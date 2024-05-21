import React from 'react'
import LeftNav from '../components/LeftNav'
import Messages from '../components/Messages'
import Profile from '../components/Profile'
import '../styles/dashboard.css'
import MessageBody from '../components/MessageBody'
const Dashboard = () => {
    return (
        <div className='dashboard'>
            <div className='left_nav'>
                <LeftNav />
            </div>
            <div className='messages_container'>
                <Messages/>
            </div>
            <div className='message_body'>
               <MessageBody/>
            </div>
            <div className='profile'>
                <Profile/>
            </div>
        </div>
    )
}

export default Dashboard