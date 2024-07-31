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
import CreateGroupPage from './pages/lecturer/CreateGroupPage';
import CreateAssignmentPage from "./pages/lecturer/CreateAssignmentPage";
import LecturerHomePage from "./pages/lecturer/LecturerHomePage";
import AllGroupsPage from "./pages/lecturer/AllGroupsPage";
import ALlAssignmentPage from "./pages/lecturer/AllAssignmentPage";
import AllStudentsPage from "./pages/lecturer/AllStudentsPage";
import CreateAnnouncementPage from "./pages/lecturer/CreateAnnouncementPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AllUsersPage from "./pages/admin/AllUsersPage";
const App = () => {
  const { isLoggedIn, isAdmin, isLecturer } = useContext(AuthContext);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Home />} />
          <Route path="/home" element={isLoggedIn ? <FrontPage /> : <Navigate to="/login" />} />
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
            path="/my-mail/:emailId"
            element={isLoggedIn ? <MailBodyPage /> : <Navigate to="/login" />}
          />

          <Route
            path="/lecturer-dashboard"
            element={isLoggedIn ? <LecturerHomePage /> : <Navigate to="/login" />}
          />
          <Route path="/create-group" element={isLecturer ? <CreateGroupPage /> : <Navigate to="/login" />} />
          <Route path="/new-assignment" element={isLecturer ? <CreateAssignmentPage /> : <Navigate to="/login" />} />
          <Route path="/all-groups" element={isLecturer ? <AllGroupsPage /> : <Navigate to="/login" />} />
          <Route path="/all-assignments" element={isLecturer ? <ALlAssignmentPage /> : <Navigate to="/login" />} />
          <Route path="/students" element={isLecturer ? <AllStudentsPage /> : <Navigate to="/login" />} />
          <Route path="/create-announcement" element={<CreateAnnouncementPage />} />
          <Route path="/admin-dashboard" element={isAdmin ? <AdminDashboard /> : <Navigate to="/login" />} />
          <Route path="/all-users" element={<AllUsersPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
