import React, { useContext } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import FrontPage from "./pages/FrontPage";
import Mail from "./pages/Mail";
import Group from "./pages/Group";
import MailBodyPage from "./pages/MailBodyPage";
import { AuthContext } from "./context/AuthContext"; // Import AuthContext
import LandingPage from "./pages/LandingPage";

const App = () => {
  const { isLoggedIn, isAdmin } = useContext(AuthContext);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Home />} />
          <Route path="/home" element={<FrontPage />} />
          <Route path="/new-account" element={<Register />} />
          
          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/mail"
            element={isLoggedIn ? <Mail /> : <Navigate to="/login" />}
          />
          <Route
            path="/my-group"
            element={isLoggedIn ? <Group /> : <Navigate to="/login" />}
          />
          <Route
            path="/mymail"
            element={isLoggedIn ? <MailBodyPage /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
