import React from 'react';
import TopNav from '../../components/TopNav';
import FrontPageLeft from '../../components/FrontPageLeft';
import AllStudentsTable from '../../components/lecturer/AllStudentsTable';

const AllStudentsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <TopNav />
      <div className="flex flex-1">
        <FrontPageLeft className="w-1/4" />
        <div className="w-3/4 flex flex-col">
          <AllStudentsTable className="flex-1" />
        </div>
      </div>
    </div>
  );
};

export default AllStudentsPage;
