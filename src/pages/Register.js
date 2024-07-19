import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/register.css";
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
    <div>
      <div className="register">
        <div className="left"> </div>
        <div className="middle">
          <div className="logo">
            <h1>Sign Up</h1>
          </div>
          <form id="register" onSubmit={handleSubmit}>
            <input
              className="text"
              name="firstname"
              placeholder="Enter your Firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
            <input
              className="text"
              name="lastname"
              placeholder="Enter your lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
            <input
              className="text"
              name="username"
              placeholder="Enter your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              className="text"
              name="phone"
              placeholder="Enter your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              className="text"
              name="reg_no"
              placeholder="Enter your Reg Number"
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
              required
            />
            <input
              className="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="register_btn" type="submit">
              Register
            </button>
          </form>
          <label>
            Already have an account?{" "}
            <Link className="link" to="/">
              {" "}
              Login
            </Link>{" "}
            here
          </label>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Register;
