import React from "react";
import { Link } from "react-router-dom";
import maildata from "../data/maildata";
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
    <div className="bg-slate-700 p-2 md:p-2 lg:p-2 h-full overflow-auto scrollbar-hidden">
      <h3 className="text-2xl font-bold text-gray-200 mb-4 text-start">Inbox ({maildata.length})</h3>
      {/* Box containing mail message */}
      <div className="space-y-4 w-full">
        {mailboxdata}
      </div>
    </div>
  );
};

export default AllMail;
