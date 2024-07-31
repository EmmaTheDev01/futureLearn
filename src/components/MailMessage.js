import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";

const MailMessage = () => {
  const { emailId } = useParams();
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const token = localStorage.getItem("token"); // Assuming token is stored in localStorage

        if (!token) {
          throw new Error("Token not found");
        }

        const response = await axios.get(`http://localhost:4000/api/v1/email/conversation/${emailId}`, {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        setEmail(response.data.email); // Adjust based on actual API response structure
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchEmail();
  }, [emailId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!email) {
    return <p>Email not found</p>;
  }

  return (
    <div className="bg-gray-800 p-4 sm:p-6 md:p-8 rounded-lg shadow-md text-gray-200">
      <Link
        to="/mail"
        className="flex items-center text-gray-400 hover:text-gray-300 mb-4 sm:mb-6"
      >
        <FaArrowLeft className="mr-2 text-lg sm:text-xl" />
        <span className="text-sm sm:text-base">Back to Mail</span>
      </Link>

      <div className="mb-4 sm:mb-6 border-b border-gray-700 pb-2 sm:pb-4">
        <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
          Subject: {email.subject}
        </h3>
        <h5 className="text-xs sm:text-sm text-gray-400 mb-1">
          {email.from}
        </h5>
        <span className="text-xs sm:text-sm text-gray-500">To {email.to}</span>
      </div>
      <h3 className="text-lg sm:text-l font-bold mb-1 sm:mb-2 text-start">
        Subject: {email.subject}
      </h3>
      <div className="space-y-2 sm:space-y-4 mb-4 text-start">
        {/* Render the HTML content from the Quill editor */}
        <div
          dangerouslySetInnerHTML={{ __html: email.html }} // Assuming email.html contains the HTML content
        />
      </div>
    </div>
  );
};

export default MailMessage;
