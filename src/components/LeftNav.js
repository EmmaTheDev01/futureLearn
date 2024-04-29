import React from 'react'
import './nav.css';
import { FaGear, FaHouse, FaPaperPlane, FaUser, FaUserGroup } from "react-icons/fa6";
import { BsThreeDots } from 'react-icons/bs'
const LeftNav = () => {
  return (
    <div className='nav'>
      <div className='top'>
        <li className='user'><FaUser /></li>
        <li><FaHouse /></li>
        <li><FaPaperPlane /></li>
        <li><FaUserGroup /></li>
        <li><BsThreeDots /></li>
        <li className='settings'><FaGear /></li>
      </div>
    </div>
  )
}

export default LeftNav