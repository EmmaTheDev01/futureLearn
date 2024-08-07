import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import Quill styles

const SendMail = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const emailData = {
      from: localStorage.getItem("userEmail"),
      to: email,
      subject: subject,
      text: message, // The text content from the editor
      html: message, // The HTML content from the editor
    };

    try {
      const response = await fetch('http://localhost:4000/api/v1/email/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData)
      });

      const result = await response.json();

      if (response.ok) {
        alert('Email sent successfully!');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        console.error('Failed to send email:', result.message);
        alert('Failed to send email: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error.message || error);
      alert('An error occurred while sending the email.');
    }
  };

  return (
    <div className="bg-slate-900 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto mt-3">
      <h3 className="text-2xl font-bold text-gray-100 mb-4">Compose an Email</h3>
      <div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-600 rounded-md bg-slate-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email Address"
          />
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-3 border border-gray-600 rounded-md bg-slate-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Subject"
          />
          <div className="bg-slate-800 border border-gray-600 rounded-md">
            <ReactQuill
              value={message}
              onChange={setMessage}
              className="h-50 z-0"
              theme="snow"
            />
          </div>
          <button
            type="submit"
            className="w-full z-50 py-3 bg-green-800 text-white font-semibold rounded-md hover:bg-green-700 transition duration-200 ease-in-out"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendMail;
