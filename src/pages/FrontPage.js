import React from "react";
import TopNav from "../components/TopNav";
import "../styles/frontpage.css";
import FrontPageLeft from "../components/FrontPageLeft";
import FrontPageContent from "../components/FrontPageContent";
const FrontPage = () => {
  return (
    <div className="homepage">
      <TopNav />
      <div className="content">
        <div className="Home_left_nav">
          <FrontPageLeft />
        </div>
        <div className="all_content">
          <FrontPageContent />
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
