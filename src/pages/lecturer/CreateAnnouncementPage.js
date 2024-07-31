import React from 'react';
import TopNav from '../../components/TopNav';
import FrontPageLeft from '../../components/FrontPageLeft';
import CreateAnnouncement from '../../components/lecturer/CreateAnnouncement';

const CreateAnnouncementPage = () => {
    return (
        <div className="flex flex-col h-screen bg-gray-900">
            <TopNav />
            <div className="flex flex-1">
                <FrontPageLeft className="w-1/4 bg-gray-800" />
                <div className="w-3/4 flex items-center justify-center p-6">
                    <CreateAnnouncement className="w-full max-w-4xl bg-gray-800 p-6 rounded-md shadow-md" />
                </div>
            </div>
        </div>
    );
};

export default CreateAnnouncementPage;
