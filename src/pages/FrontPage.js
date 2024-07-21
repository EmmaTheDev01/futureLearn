import React from "react";
import TopNav from "../components/TopNav";
import FrontPageLeft from "../components/FrontPageLeft";
import FrontPageContent from "../components/FrontPageContent";

const FrontPage = () => {
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
      </div>
    </div>
  );
};

export default FrontPage;
