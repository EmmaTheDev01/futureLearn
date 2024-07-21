import React, { useContext, useEffect } from 'react'
import TopNav from '../components/TopNav'
import FrontPageLeft from '../components/FrontPageLeft'
import MailMessage from '../components/MailMessage'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const MailBodyPage = () => {
    const [isLoggedIn, loading] = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!loading && !isLoggedIn) {
          navigate('/login');
        }
      }, [isLoggedIn, loading, navigate]);
    
      if (loading) {
        return (
          <div className='flex h-screen bg-slate-700 items-center justify-center'>
            <p className='text-gray-300'>Loading...</p>
          </div>
        );
      }
    return (
        <div className="bg-gray-900 min-h-screen flex flex-col">
            {/* Top Navigation Bar */}
            <div className="bg-gray-800 shadow-md">
                <TopNav />
            </div>
            <div className="flex flex-1">
                {/* Left Side Navigation */}
                <div className="w-1/4 bg-gray-900 p-4 shadow-md">
                    <FrontPageLeft />
                </div>
                {/* Main Mail Content */}
                <div className="w-3/4 p-6 bg-gray-900">
                    <MailMessage />
                </div>
            </div>
        </div>
    )
}

export default MailBodyPage
