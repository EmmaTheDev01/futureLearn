import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [regNo, setRegNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [department, setDepartment] = useState("not assigned");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/auth/register",
        {
          firstname,
          lastname,
          username,
          phone,
          regNo,
          email,
          password,
          department
        }
      );

      // Handle successful registration (e.g., redirect)
      console.log("Registration successful:", response.data);

      navigate("/login");
    } catch (error) {
      // Handle error (e.g., display error message)
      console.error("Registration error:", error.response.data.error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="max-w-md w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-100">Sign Up</h1>
        </div>
        <form id="register" onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              className="p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-md focus:border-green-500 focus:outline-none"
              name="firstname"
              placeholder="Enter your Firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
            <input
              className="p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-md focus:border-green-500 focus:outline-none"
              name="lastname"
              placeholder="Enter your Lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>
          <input
            className="w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-md focus:border-green-500 focus:outline-none"
            name="username"
            placeholder="Enter your Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className="w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-md focus:border-green-500 focus:outline-none"
            name="phone"
            placeholder="Enter your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            className="w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-md focus:border-green-500 focus:outline-none"
            name="reg_no"
            placeholder="Enter your Reg Number"
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
            required
          />
          <input
            className="w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-md focus:border-green-500 focus:outline-none"
            name="email"
            type="email"
            placeholder="Enter your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-md focus:border-green-500 focus:outline-none"
            name="password"
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          <div className="w-full">
            <label htmlFor="department" className="block text-gray-300 mb-1">
              Select Department
            </label>
            <select
              id="department"
              name="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-md focus:border-green-500 focus:outline-none"
            >
              <option value="computer science">Computer Science</option>
              <option value="Surveying">Surveying</option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Architecture">Architecture</option>
              <option value="Business">Business</option>
              <option value="law">Law</option>
              <option value="not assigned">Not Assigned</option>
            </select>
          </div>

          <button
            className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200 ease-in-out"
            type="submit"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center text-gray-300">
          <span>Already have an account? </span>
          <Link className="text-green-400 hover:text-green-300 font-semibold" to="/login">
            Login
          </Link>
          <span> here</span>
        </div>
      </div>
    </div>
  );
};

export default Register;
