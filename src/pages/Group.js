import React from "react";
import TopNav from "../components/TopNav";
import FrontpageLeft from "../components/FrontPageLeft";
import "./group.css";
const Group = () => {
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
                <li>
                  Mutesi Annet <span className="group_admin">Admin</span>
                </li>
                <li>Kwizera</li>
                <li>Emille</li>
                <li>Habumugisha</li>
                <li>Rukundo</li>
                <li>Patrick</li>
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
              <div className="member_answer">
                <div className="member_name">
                  <h4>Mutesi Annet</h4>
                </div>
                <p>
                  Networking is the identification, controlling, management of
                  the interconnected devices that are communicating with each
                  other and working together to achieve the same goal of
                  delivering a message where it is supposed to be delivered.
                  Components of networking includes: Cloud, Firewall, modem.
                  server, protocol, accesspoint, router, computer, user.
                </p>
                <div className="discussion_actions">
                  <li>Reply</li>
                  <li>grade</li>
                </div>
              </div>
              {/* Group Member anser */}
              <div className="member_answer">
                <div className="member_name">
                  <h4>Emille</h4>
                </div>
                <p>
                  Networking is the organisation, controlling, management of the
                  interconnected devices that are communicating with each other
                  and working together to achieve the same goal of delivering a
                  message where it is supposed to be delivered. Components of
                  networking includes: Cloud, Firewall, modem. server, protocol,
                  accesspoint, router, computer, user.
                  <br></br>
                  <br></br>A data packet : A basic unit of information that
                  travels from one device to another within a network. The data
                  packet contains, packet header, packet body and packet footer
                </p>
                <div className="discussion_actions">
                  <li>Reply</li>
                  <li>grade</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;
