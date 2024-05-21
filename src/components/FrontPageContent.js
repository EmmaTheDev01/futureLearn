import React from "react";
import "../styles/content.css";
import groupmembers from "../groupmembers";
import { FaBell, FaBookBookmark, FaUserGroup } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import announcements from "../announcements";
const FrontPageContent = () => {
    const mygroup = groupmembers.map((item) => {
        return (
            <li className="member_list">
                {item.firstname} {item.lastname}{" "}
                <span className="role">{item.role === "admin" ? item.role : ""} </span>
            </li>
        );
    });

    //map the announcement array and display it.
    const alerts = announcements.map((alert) => {
        return (
            <div className="alerts_content">
                <h4>{alert.title}</h4>
                <h6>{alert.announcer}</h6>
            </div>
        );
    });
    return (
        <div className="boxes">
            <div className="group_box">
                <h3>
                    <span>
                        {" "}
                        <FaUserGroup />{" "}
                    </span>
                    My Group
                </h3>
                <div className="members">
                    <ol> {mygroup}</ol>
                </div>
                <h4>{groupmembers.length} Mebers in this group</h4>
            </div>
            <div className="annoucement_box">
                <h3>
                    <span>
                        {" "}
                        <FaBell />{" "}
                    </span>
                    Announcements ({announcements.length})
                </h3>
                {alerts}
            </div>
            <div className="post_box">
                <h3>
                    <span>
                        <FaBookBookmark />{" "}
                    </span>
                    Posts
                </h3>
            </div>
            <div className="profile_box">
                <h3>
                    <sapn>
                        <FaUserAlt />{" "}
                    </sapn>
                    My Profile
                </h3>
            </div>
            <div className="timeline">
                <h3>Timeline</h3>
            </div>
        </div>
    );
};

export default FrontPageContent;
