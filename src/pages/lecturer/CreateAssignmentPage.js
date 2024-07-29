import React from 'react';
import TopNav from '../../components/TopNav';
import FrontPageLeft from '../../components/FrontPageLeft';
import CreateAssignment from '../../components/lecturer/CreateAssignment';

const CreateAssignmentPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopNav />
      <div className="flex flex-1 bg-gray-900">
        <aside className="w-full md:w-1/4 lg:w-1/5 p-4">
          <FrontPageLeft />
        </aside>
        <main className="w-full md:w-3/4 lg:w-4/5 p-4">
          <CreateAssignment />
        </main>
      </div>
    </div>
  );
};

export default CreateAssignmentPage;
