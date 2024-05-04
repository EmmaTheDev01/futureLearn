import React from 'react'
import TopNav from '../components/TopNav';
import './frontpage.css'
import FrontPageLeft from '../components/FrontPageLeft';
import FrontPageContent from '../components/FrontPageContent';
const FrontPage = () => {
  return (
    <div className="homepage">
      <div className="topnav">
        <TopNav />
      </div>
      <div className="content">
        <div className='Home_left_nav'>
          <FrontPageLeft />
        </div>
        <div className='all_content'>
          <FrontPageContent />
        </div>

      </div>
      <div className='footer'>
        <span>Copyright © 2024 Futurelearn</span>
      </div>
    </div>
  )
}

export default FrontPage