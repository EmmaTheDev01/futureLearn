import React, { useContext, useEffect } from "react";
import TopNav from "../components/TopNav";
import FrontPageLeft from "../components/FrontPageLeft";
import FrontPageContent from "../components/FrontPageContent";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ChatBot from "../components/ChatBot";

const FrontPage = () => {
  const { isLoggedIn, loading } = useContext(AuthContext); // Fix here
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
    <div className="bg-slate-700 min-h-screen flex flex-col">
      <TopNav className="top-nav" />
      <div className="flex flex-1">
        <div className="bg-slate-900 p-4 w-32 md:w-36 lg:w-40 xl:w-48">
          <FrontPageLeft />
        </div>
        <div className="flex-1 p-4 overflow-auto">
          <FrontPageContent />
        </div>
        <div className="">
          <ChatBot/>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
