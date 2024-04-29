import React from 'react'
import './nav.css';

const LeftNav = () => {
  return (
    <div className='nav'>
      <div className='top'>
        <li className='user'>User</li>
        <li>Home</li>
        <li>Messages</li>
        <li>My Group</li>
        <li>3 dots</li>
        <li className='settings'>Settings</li>
      </div>
    </div>
  )
}

export default LeftNav