import React from 'react'
import './profile.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
const Profile = () => {
  return (
    <div className='recipient_profile'>
      <div className='Profile_avatar_section'>
        <div className='user_avatar_section'>

        </div>
        <div className='about_user'>
        <span className='address'>Musanze, Ruhengeri</span>
          <p>A student in Network engineering with comprehensive skills in Network configuration, Web development and security </p>
          <div className='social_pages'>
            <span className='instagram'><FaInstagram/></span>
            <span className='twitter'><FaTwitter/></span>
            <span className='facebook'><FaFacebook/></span>

          </div>
        </div>
      </div>
      <div className='personal_info'>

      </div>
      <div className="media_section">

      </div>
    </div>
  )
}

export default Profile