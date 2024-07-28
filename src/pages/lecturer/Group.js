import React from 'react';
import CreateGroup from '../../components/lecturer/CreateGroup';
import TopNav from '../../components/TopNav';
import FrontPageLeft from '../../components/FrontPageLeft';

const Group = () => {
    return (
        <div>
            <TopNav />
            <div className="bg-gray-900 min-h-screen flex">
                <FrontPageLeft className="w-1/4" />
                <CreateGroup className="w-3/4" />
            </div>
        </div>
    );
};

export default Group;
