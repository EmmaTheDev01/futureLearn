import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Profile = () => {
  return (
    <div className="bg-slate-700 text-gray-100 rounded-lg shadow-lg max-w-md mx-auto p-6 space-y-6">
      {/* Avatar and About User */}
      <div className="flex flex-col items-center space-y-4">
        <div className="flex-shrink-0">
          <img
            className="w-24 h-24 rounded-full border-4 border-gray-600"
            alt="user Profile"
            src="https://media.licdn.com/dms/image/D4E03AQHr2n5ivKrvaw/profile-displayphoto-shrink_200_200/0/1690097978013?e=2147483647&v=beta&t=N5mqcDi5fGLt90Lanor0LeU8-SxK0ri4MchYZAP2aJE"
          />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-1 text-green-500">Habumugisha</h1>
          <p className="text-sm text-gray-400 mb-3">Musanze, Ruhengeri</p>
          <p className="text-gray-300 mb-4 text-sm">
            A student in Network engineering with comprehensive skills in Network configuration, Web development and security
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://www.instagram.com" className="text-gray-400 hover:text-pink-500">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="https://www.facebook.com" className="text-gray-400 hover:text-blue-600">
              <FaFacebook className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div>
        <h2 className="text-l font-semibold mb-4 text-start">Personal Information</h2>
        <ul className="space-y-2">
          <li className="flex justify-between items-center text-gray-300 text-sm">
            <span className="font-semibold text-gray-200">Phone:</span> +25079009999
          </li>
          <li className="flex justify-between items-center text-gray-300 text-sm">
            <span className="font-semibold text-gray-200">Email:</span> ug2022384903@ines.ac.rw
          </li>
          <li className="flex justify-between items-center text-gray-300 text-sm">
            <span className="font-semibold text-gray-200">Reg Number:</span> 2022/384903
          </li>
        </ul>
      </div>

      {/* Media Section */}
      <div>
        <h2 className="text-l font-semibold mb-4 text-start">Media (12)</h2>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-gray-800 p-1 rounded-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_eWQh4QfnMM3usamQzsk2EQ8-oNzn9NEi1uaYrmUWRNbDLZIBKgwi3KMnD1OIjxeDwgE&usqp=CAU"
              alt="image1"
              className="w-full h-16 object-cover rounded-md"
            />
          </div>
          <div className="bg-gray-800 p-1 rounded-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_QLRCKqCtIT0sYzHTQuQ7-pY2v6eePFBNwII2FjmAt0yyn4SpusuVvGtFA&s"
              alt="image2"
              className="w-full h-16 object-cover rounded-md"
            />
          </div>
          <div className="bg-gray-800 p-1 rounded-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmw1MqXfJ8YQeRNqQqgxCOUgIb9cJMdWOANg&usqp=CAU"
              alt="image3"
              className="w-full h-16 object-cover rounded-md"
            />
          </div>
          <div className="bg-gray-800 p-1 rounded-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSetc8S9uGh0RUuPLjSxj8PUSGcIB4rD_b-rg&usqp=CAU"
              alt="image4"
              className="w-full h-16 object-cover rounded-md"
            />
          </div>
          {/* Add more media items as needed */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
