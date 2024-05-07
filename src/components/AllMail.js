import React from "react";
import { Link } from "react-router-dom";
import "./mailcomponent.css";
import { FaStar } from "react-icons/fa6";
import MailBox from "./MailBox";
const AllMail = () => {
  return (
    <div className="all_mail">
      <h3>Inbox (3)</h3>
      {/* Box containing mail message */}
      <Link className="mail_box_link" to="/mymail">
        <MailBox
          avatar=""
          subject="Correction of exam results"
          message="I hope this email finds you in good health. have noticed some changes in the posted results of our exams. I would like to ask for a follow up and for more details regarding our results. I have a concern that there must be some mistakes that you can help me to present to the lecturer because, I did my best and all the answers provided to my paper are as accurate as from the notes and yet I don't see any reason why I would be marked third grade.I am sorry for this unexpected email, I would like to be aware of the inconveniences, as a matter of fact help our group to know where we might have done a mistake."
        />
      </Link>
      <Link className="mail_box_link" to="/mymail">
        <MailBox
          avatar=""
          subject="Thank You for your submission"
          message="Your assignment has been submitted succesfully. Please go to the discussion to read more posts by peers"
        />
      </Link>
      <Link className="mail_box_link" to="/mymail">
        <MailBox
          avatar=""
          subject="Student Service"
          message="Registration of new courses opening soon, please take action."
        />
      </Link>
    </div>
  );
};

export default AllMail;
