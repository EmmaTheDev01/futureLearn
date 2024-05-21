import React from "react";
import TopNav from "../components/TopNav";
import FrontpageLeft from "../components/FrontPageLeft";
import "../styles/group.css";
import discussion from "../discussion";
import groupmembers from "../groupmembers";
const Group = () => {
  const members = groupmembers.map(item => {
    return (
      <li>{item.firstname} {item.lastname} {item.role === "admin" ? <span className="group_admin">{item.role}</span> : ""} </li>
    )
  })
  const discussionPost = discussion.map(item => {
    return (
      <div className="member_answer">
        <div className="member_name">
          <h4>{item.member}</h4>
        </div>
        <p>
          {item.post}
        </p>
        <div className="discussion_actions">
          <li>Reply</li>
          <li>grade</li>
        </div>
      </div>
    )
  })
  return (
    <div className="my_group">
      <div className="top-nav">
        <TopNav />
      </div>
      <div className="mygroup_container">
        <div className="left_navigation">
          <FrontpageLeft />
        </div>
        <div className="group_members">
          <div className="Assignments">
            <h3>Group Assignment</h3>
            <div className="assignment_question">
              <span>
                What is Networking? What is the data packet? With discussion
                explain the components of Networking, and data packet in
                networks.{" "}
              </span>
            </div>
          </div>
          <div className="members_and_answer">
            <div className="members">
              <h3>Group 1</h3>
              <ol>
                {members}
              </ol>
            </div>
            <div className="answer_form">
              <h3>Assignment discussion form</h3>
              <p className="question">
                Below is the textfield where you have to input the answer to the
                question and share your thoughts to the above assignment with
                the group. Remember, if you don't submit your assignment answer,
                the group work will not be submitted for grading.
              </p>

              <form>
                <textarea
                  className="assignment_text"
                  placeholder="Give your answer"
                ></textarea>
                <button className="submit_assignment">submit</button>
              </form>
            </div>
            <div className="discussions">
              <h3>Discussions Forum</h3>
              {/* Group Member anser */}
              {discussionPost}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;
