import React from 'react';
import TopNav from '../components/TopNav';
import FrontPageLeft from '../components/FrontPageLeft';
import AllMail from '../components/AllMail';
import SendMail from '../components/SendMail';

const Mail = () => {
    return (
        <div className="bg-slate-800 min-h-screen flex flex-col">
            <TopNav />
            <div className="flex flex-1 overflow-hidden">
                {/* Left Navigation */}
                <div className="w-full md:w-1/4 lg:w-1/5 bg-slate-900 p-4 md:p-6 lg:p-8 shadow-lg">
                    <FrontPageLeft />
                </div>
                {/* Main Mail Body */}
                <div className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
                        <div className="flex-1 bg-slate-700 rounded-lg p-4 md:p-6 lg:p-8 shadow-md">
                            <AllMail />
                        </div>
                        <div className="flex-1 bg-slate-700 rounded-lg p-4 md:p-6 lg:p-8 shadow-md">
                            <SendMail />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mail;
