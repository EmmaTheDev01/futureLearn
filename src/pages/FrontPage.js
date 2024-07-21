import React from "react";
import TopNav from "../components/TopNav";
import FrontPageLeft from "../components/FrontPageLeft";
import FrontPageContent from "../components/FrontPageContent";

const FrontPage = () => {
  return (
    <div className=" bg-slate-700 min-h-screen flex flex-col">
      <TopNav className="top-nav" />
      <div className=" flex flex-1 flex-col md:flex-row">
        <div className="Home_left_nav bg-slate-800 p-4 md:w-32">
          <FrontPageLeft />
        </div>
        <div className="flex-1 p-4">
          <FrontPageContent />
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
