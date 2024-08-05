import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext"; // Import AuthContext

// Import pages
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Register from "./pages/Register";
import FrontPage from "./pages/FrontPage";
import Mail from "./pages/Mail";
import Group from "./pages/Group";
import MailBodyPage from "./pages/MailBodyPage";
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
import Help from "./pages/Help";
import AllLecturersPage from "./pages/admin/AllLecturersPage";
import AllAnnouncemntPage from "./pages/admin/AllAnnouncementPage";

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

          {/* Lecturer Routes */}
          <Route
            path="/lecturer-dashboard"
            element={isLoggedIn && (isLecturer || isAdmin) ? <LecturerHomePage /> : <Navigate to="/login" />}
          />
          <Route
            path="/create-group"
            element={isLecturer || isAdmin ? <CreateGroupPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/new-assignment"
            element={isLecturer || isAdmin ? <CreateAssignmentPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/all-groups"
            element={isLecturer || isAdmin ? <AllGroupsPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/all-assignments"
            element={isLecturer || isAdmin ? <ALlAssignmentPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/students"
            element={isLecturer || isAdmin ? <AllStudentsPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/create-announcement"
            element={isLecturer || isAdmin ? <CreateAnnouncementPage /> : <Navigate to="/login" />}
          />

          {/* Admin Routes */}
          <Route
            path="/admin-dashboard"
            element={isAdmin ? <AdminDashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/all-users"
            element={isAdmin ? <AllUsersPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/all-lecturers"
            element={isAdmin ? <AllLecturersPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/all-announcements"
            element={isAdmin ? <AllAnnouncemntPage /> : <Navigate to="/login" />}
          />

          {/* Help Page (accessible by everyone) */}
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
