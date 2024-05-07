import React from 'react'
import { Link } from 'react-router-dom';
import './nav.css';
import { FaGear, FaHouse, FaPaperPlane, FaUser, FaUserGroup } from "react-icons/fa6";
import { BsThreeDots } from 'react-icons/bs'
const LeftNav = () => {
  return (
    <div className='nav'>
      <div className='top'>
        <li className='user'><FaUser /></li>
        <Link to='/home'><li><FaHouse /></li></Link>
        <li><FaPaperPlane /></li>
        <Link to='/my-group'><li><FaUserGroup /></li></Link>
        <li><BsThreeDots /></li>
        <li className='settings'><FaGear /></li>
      </div>
    </div>
  )
}

export default LeftNav