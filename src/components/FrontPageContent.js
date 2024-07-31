import React, { useEffect, useState } from "react";
import axios from "axios";

// Example SVG icons with backgrounds (replace with your own or import from separate files)
const HeartIcon = () => (
  <div className="bg-red-600 p-2 rounded-full shadow-lg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6s2-3.5 5-3.5 5 3.5 5 3.5-2 5.5-5 8.5-5-3.5-5-8.5z"
      />
    </svg>
  </div>
);

const TeamIcon = () => (
  <div className="bg-green-600 p-2 rounded-full shadow-lg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a3 3 0 016 0v6a3 3 0 01-3 3H3a3 3 0 01-3-3V5zm13 0a3 3 0 100 6v6a3 3 0 003 3h6a3 3 0 003-3V11a3 3 0 00-3-3h-6z"
      />
    </svg>
  </div>
);

const ProfileIcon = () => (
  <div className="bg-indigo-600 p-2 rounded-full shadow-lg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 14l9-5-9-5-9 5 9 5z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 14l9-5-9-5-9 5 9 5z"
      />
    </svg>
  </div>
);

const BellIcon = () => (
  <div className="bg-yellow-600 p-2 rounded-full shadow-lg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 17h5l-1.405-1.405C18.382 14.815 18 13.551 18 12.3V10c0-3.193-2.268-5.908-5.378-6.32A2 2 0 0010 6v.3c0 1.25-.382 2.515-1.117 3.294L7.5 17h5z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.73 21a2 2 0 01-3.46 0"
      />
    </svg>
  </div>
);

const ClockIcon = () => (
  <div className="bg-purple-600 p-2 rounded-full shadow-lg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3M4 4l16 16"
      />
    </svg>
  </div>
);

const FrontPageContent = () => {
  const [profileData, setProfileData] = useState(null);
  const [myGroups, setMyGroups] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/auth/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setProfileData(response.data.data);
      } catch (error) {
        console.log("Unable to get profile data", error);
      }
    };

    getProfile();
  }, []);

  useEffect(() => {
    const fetchMyGroups = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/group/my-group", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setMyGroups(response.data || []); // Ensure response.data.data is an array
      } catch (error) {
        console.log("Failed to fetch group data", error);
      }
    };

    fetchMyGroups();
  }, []);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/announcement", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setAnnouncements(response.data || []); // Ensure response.data is an array
      } catch (error) {
        console.log("Failed to fetch announcements", error);
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <div className="bg-slate-700 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {/* My Group Div */}
          <div className="bg-slate-300 rounded-lg p-6 shadow-lg">
            <h3 className="flex items-center mb-4 text-xl font-semibold text-teal-700 border-b-2 border-teal-500 pb-2">
              <TeamIcon />
              <span className="ml-2">My Group</span>
            </h3>
            <div className="overflow-y-auto max-h-60 scrollbar-hidden">
              <ul className="divide-y divide-gray-200">
                {myGroups.length > 0 ? (
                  myGroups.map((group) => (
                    <li key={group._id} className="py-2">
                      <span className="text-lg text-green-500 font-bold">{group.name}</span>
                      <ol className="pl-4">
                        {group.members.map((member) => (
                          <li key={member._id} className="text-gray-600 py-1">
                            {member.firstname + " " + member.lastname}
                          </li>
                        ))}
                      </ol>
                      <span className="text-gray-500 text-sm font-bold">
                        {group.members.length} Members
                      </span>
                    </li>
                  ))
                ) : (
                  <li className="py-2 text-gray-500">No groups found</li>
                )}
              </ul>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              {myGroups.length} Groups
            </p>
          </div>

          {/* Announcements Div */}
          <div className="bg-slate-300 rounded-lg p-6 shadow-lg">
            <h3 className="flex items-center mb-4 text-xl font-semibold text-yellow-600 border-b-2 border-yellow-400 pb-2">
              <BellIcon />
              <span className="ml-2">Announcements</span>
            </h3>
            <div className="overflow-y-auto max-h-60">
              {announcements.length > 0 ? (
                <ul className="divide-y divide-gray-200">
                  {announcements.map((announcement) => (
                    <li key={announcement._id} className="py-4">
                      <h4 className="text-lg font-semibold text-gray-800">{announcement.title}</h4>
                      <p className="text-gray-600 mt-2">{announcement.desc}</p>
                      <p className="text-gray-400 text-sm mt-2">Posted on {new Date(announcement.updatedAt).toLocaleDateString()}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No announcements</p>
              )}
            </div>
          </div>

          {/* Posts Div */}
          <div className="bg-slate-300 rounded-lg p-6 shadow-lg">
            <h3 className="flex items-center mb-4 text-xl font-semibold text-red-600 border-b-2 border-red-400 pb-2">
              <HeartIcon />
              <span className="ml-2">Posts</span>
            </h3>
            {/* Add your posts content here */}
            <p>No posts</p>
          </div>

          {/* My Profile Div */}
          <div className="bg-slate-300 rounded-lg p-6 shadow-lg">
            <h3 className="flex items-center mb-4 text-xl font-semibold text-indigo-600 border-b-2 border-indigo-400 pb-2">
              <ProfileIcon />
              <span className="ml-2">My Profile</span>
            </h3>
            <div className="text-center">
              {profileData ? (
                <>
                  <p className="font-bold text-gray-800">{profileData.username}</p>
                  <p className="text-gray-600">{profileData.email}</p>
                  {/* Add more profile details as needed */}
                </>
              ) : (
                <p className="text-gray-600">Loading profile...</p>
              )}
            </div>
          </div>

          {/* Timeline Div */}
          <div className="bg-slate-300 rounded-lg p-6 shadow-lg">
            <h3 className="flex items-center mb-4 text-xl font-semibold text-purple-600 border-b-2 border-purple-400 pb-2">
              <ClockIcon />
              <span className="ml-2">Timeline</span>
            </h3>
            {/* Add your timeline content here */}
            <p>No timeline events</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPageContent;
