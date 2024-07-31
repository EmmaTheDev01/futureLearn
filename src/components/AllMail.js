import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MailBox from "./MailBox";

const AllMail = () => {
  const [maildata, setMaildata] = useState([]); // Ensure initial state is an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const userEmail = localStorage.getItem("userEmail");
        const token = localStorage.getItem("token");

        if (!userEmail || !token) {
          throw new Error("User email or token not found");
        }

        const response = await axios.get(`http://localhost:4000/api/v1/email/my-emails/${userEmail}`, {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        // Check if response.data is an array
        if (Array.isArray(response.data.emails)) {
          setMaildata(response.data.emails);
        } else {
          throw new Error("Invalid data format");
        }

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchEmails();
  }, []);  // Empty dependency array means this effect runs once on component mount

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const mailboxdata = Array.isArray(maildata) ? maildata.map((item) => (
    <MailBox key={item._id} item={item} />
  )) : null;

  return (
    <div className="bg-slate-700 p-2 md:p-2 lg:p-2 h-full overflow-auto scrollbar-hidden">
      <h3 className="text-2xl font-bold text-gray-200 mb-4 text-start">
        Inbox ({maildata.length})
      </h3>
      {/* Box containing mail messages */}
      <div className="space-y-4 w-full">{mailboxdata}</div>
    </div>
  );
};

export default AllMail;
