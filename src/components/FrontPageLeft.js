import React from 'react'
import './FrontpageLeft.css';
import { Link } from 'react-router-dom';
const FrontPageLeft = () => {
  return (
    <div className='home_left_nav'>
      <Link to='/home'><li>Home</li></Link>
      <Link to='/mail'> <li>Mail</li></Link>
      <Link to='/my-group'><li>My Group</li></Link>
      <Link to='/dashboard'><li>Chat</li></Link>
      <li>Help</li>
      <li>Logout</li>
    </div>
  )
}

export default FrontPageLeft