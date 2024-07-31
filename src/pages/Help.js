import React from "react";
import FrontPageLeft from "../components/FrontPageLeft";
import TopNav from "../components/TopNav";

const Help = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <TopNav />
      <div className="flex">
        <FrontPageLeft className="w-1/4" />
        <main className="w-3/4 pl-6 bg-slate-600 p-2 ml-auto mr-auto text-left">
          <header className="mb-6">
            <h1 className="text-3xl font-bold mb-2">
              Welcome to the E-Learning System
            </h1>
            <p className="text-lg">
              Your one-stop solution for all your educational needs. This guide
              will help you navigate through the key features of our system,
              including student mailing, chatting, group discussions, and the AI
              chatbot.
            </p>
          </header>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Student Mailing</h2>
            <p className="mb-2">
              The mailing feature allows you to communicate with your peers and
              instructors directly through the system. To access this feature,
              navigate to the{" "}
              <span className="text-green-500 font-bold">"Mail"</span> section
              from the main menu.
            </p>
            <div className="mb-4">
              <p>
                <span className="text-green-500 font-bold">
                  Compose New Mail:
                </span>{" "}
                Click the{" "}
                <span className="text-green-500 font-bold">"Compose"</span>{" "}
                button to draft a new email. Enter the recipient's email
                address, add a subject, and write your message.
              </p>
              <p>
                <span className="text-green-500 font-bold">Inbox:</span> Your
                received mails will appear in the{" "}
                <span className="text-green-500 font-bold">"Inbox"</span> tab.
                You can read, reply to, or forward these emails as needed.
              </p>
              <p>
                <span className="text-green-500 font-bold">Sent Mails:</span>{" "}
                Check the{" "}
                <span className="text-green-500 font-bold">"Sent"</span> tab to
                review all emails you have sent.
              </p>
              <p>
                <span className="text-green-500 font-bold">Trash:</span> Emails
                that you delete will be moved to the{" "}
                <span className="text-green-500 font-bold">"Trash"</span>{" "}
                folder. You can restore or permanently delete these emails from
                here.
              </p>
            </div>
            <p className="mb-2">
              Make sure to check your inbox regularly to stay updated with
              important announcements and communications from your instructors.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Chatting</h2>
            <p className="mb-2">
              The chatting feature allows real-time communication with your
              classmates and instructors. To start a chat, go to the{" "}
              <span className="text-green-500 font-bold">"Chat"</span> section.
            </p>
            <div className="mb-4">
              <p>
                <span className="text-green-500 font-bold">
                  Start a New Chat:
                </span>{" "}
                Click the{" "}
                <span className="text-green-500 font-bold">"New Chat"</span>{" "}
                button and select a contact from your list. You can start a
                conversation instantly.
              </p>
              <p>
                <span className="text-green-500 font-bold">Active Chats:</span>{" "}
                Your ongoing conversations will be listed in the{" "}
                <span className="text-green-500 font-bold">"Chats"</span> tab.
                Click on a chat to continue the conversation.
              </p>
              <p>
                <span className="text-green-500 font-bold">Notifications:</span>{" "}
                Receive notifications for new messages in real-time. You can
                adjust notification settings in the{" "}
                <span className="text-green-500 font-bold">"Settings"</span>{" "}
                tab.
              </p>
            </div>
            <p className="mb-2">
              Use chatting for quick questions, group collaborations, or casual
              conversations with peers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              3. Group Discussions
            </h2>
            <p className="mb-2">
              Group discussions are essential for collaborative learning and
              sharing ideas. To access group discussions, go to the{" "}
              <span className="text-green-500 font-bold">"Groups"</span>{" "}
              section.
            </p>
            <div className="mb-4">
              <p>
                <span className="text-green-500 font-bold">
                  Create a New Group:
                </span>{" "}
                Click{" "}
                <span className="text-green-500 font-bold">"Create Group"</span>{" "}
                to start a new discussion group. Enter a group name,
                description, and invite members.
              </p>
              <p>
                <span className="text-green-500 font-bold">Join a Group:</span>{" "}
                Browse existing groups and request to join. You can find groups
                by category or through search.
              </p>
              <p>
                <span className="text-green-500 font-bold">
                  Participate in Discussions:
                </span>{" "}
                Once in a group, you can post messages, reply to others, and
                share files. Group members can view and contribute to the
                discussion.
              </p>
              <p>
                <span className="text-green-500 font-bold">Manage Groups:</span>{" "}
                As a group admin, you can manage group settings, add or remove
                members, and moderate discussions.
              </p>
            </div>
            <p className="mb-2">
              Group discussions are a great way to collaborate on projects,
              share insights, and engage in academic conversations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. AI Chatbot</h2>
            <p className="mb-2">
              The AI chatbot is designed to assist you with common queries and
              provide support. To interact with the chatbot, find the chat icon
              located at the bottom right corner of your screen.
            </p>
            <div className="mb-4">
              <p>
                <span className="text-green-500 font-bold">Ask Questions:</span>{" "}
                Type your questions or concerns into the chat window. The AI
                chatbot will provide instant answers or direct you to the
                appropriate resources.
              </p>
              <p>
                <span className="text-green-500 font-bold">
                  Get Assistance:
                </span>{" "}
                Use the chatbot for help with system navigation, finding
                information, or troubleshooting common issues.
              </p>
              <p>
                <span className="text-green-500 font-bold">Feedback:</span>{" "}
                Provide feedback on your experience with the chatbot to help
                improve its performance and accuracy.
              </p>
            </div>
            <p className="mb-2">
              The AI chatbot is available 24/7 to assist you with your needs and
              ensure a smooth user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Additional Tips</h2>
            <div className="mb-4">
              <p>
                <span className="text-green-500 font-bold">Stay Updated:</span>{" "}
                Regularly check for updates and announcements to stay informed
                about new features and changes.
              </p>
              <p>
                <span className="text-green-500 font-bold">
                  Explore Settings:
                </span>{" "}
                Customize your preferences and settings in the{" "}
                <span className="text-green-500 font-bold">"Settings"</span>{" "}
                section to enhance your user experience.
              </p>
              <p>
                <span className="text-green-500 font-bold">
                  Utilize Help Resources:
                </span>{" "}
                Access additional help resources and documentation through the{" "}
                <span className="text-green-500 font-bold">"Help"</span> section
                if you need more detailed information.
              </p>
            </div>
            <p className="mb-2">
              By following this guide, you'll be able to effectively use the
              e-learning system and make the most of its features. If you have
              any questions or encounter issues, don't hesitate to reach out to
              support for assistance.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Help;
