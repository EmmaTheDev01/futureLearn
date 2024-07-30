import React from 'react';
import TopNav from '../../components/TopNav';
import FrontPageLeft from '../../components/FrontPageLeft';
import AllAssignmentTable from '../../components/lecturer/AllAssignmentTable';

const AllAssignmentPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <TopNav />
            <div className="flex flex-1 bg-gray-900">
                <FrontPageLeft className="w-1/4" />
                <div className="w-3/4 flex flex-col">
                    <AllAssignmentTable className="flex-1" />
                </div>
            </div>
        </div>
    );
}

export default AllAssignmentPage;
