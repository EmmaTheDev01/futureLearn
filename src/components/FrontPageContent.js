import React from 'react'
import './content.css'
import { FaBell, FaBookBookmark, FaUserGroup } from 'react-icons/fa6'
import { FaUserAlt } from 'react-icons/fa'
const FrontPageContent = () => {
    return (
        <div className='boxes'>
            <div className='group_box'>
                <h3><span> <FaUserGroup /> </span>My Group</h3>
            </div>
            <div className='annoucement_box'>

                <h3><span> <FaBell /> </span>Announcements</h3>
            </div>
            <div className='post_box'>
                <h3><span><FaBookBookmark /> </span>Posts</h3>
            </div>
            <div className='profile_box'>

                <h3><sapn><FaUserAlt /> </sapn>My Profile</h3>
            </div>
            <div className='timeline'>
                <h3>Timeline</h3>
            </div>
        </div>
    )
}

export default FrontPageContent