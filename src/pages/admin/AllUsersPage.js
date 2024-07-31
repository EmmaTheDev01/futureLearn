import React from 'react';
import TopNav from '../../components/TopNav';
import FrontPageLeft from '../../components/FrontPageLeft';
import AllUsersTable from '../../components/admin/ALlUsersTable'; // Fixed import path

const AllUsersPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <TopNav />
      <div className="flex flex-1 flex-col lg:flex-row">
        <FrontPageLeft className="w-full lg:w-1/4" />
        <div className="flex-1 flex items-center justify-center p-6">
          <AllUsersTable className="w-full max-w-4xl" />
        </div>
      </div>
    </div>
  );
};

export default AllUsersPage;
