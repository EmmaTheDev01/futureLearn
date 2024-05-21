import React from "react";
import { Link } from "react-router-dom";
import "../styles/mailcomponent.css";
import maildata from "../maildata";
import MailBox from "./MailBox";
const AllMail = () => {
  const mailboxdata = maildata.map((item) => {
    return (
      <MailBox
        key={item.id}
        item={item}
      />
    );
  });
  return (
    <div className="all_mail">
      <h3>Inbox (3)</h3>
      {/* Box containing mail message */}

      <Link className="mail_box_link" to="/mymail">
        {mailboxdata}
      </Link>
    </div>
  );
};

export default AllMail;
